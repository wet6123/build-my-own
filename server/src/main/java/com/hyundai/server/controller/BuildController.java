package com.hyundai.server.controller;

import com.hyundai.server.common.request.ChangeModelPreviewReq;
import com.hyundai.server.common.request.CheckColorCombinationReq;
import com.hyundai.server.common.request.ShowExteriorReq;
import com.hyundai.server.common.request.ShowInteriorReq;
import com.hyundai.server.common.response.*;
import com.hyundai.server.model.dto.OptionDto;
import com.hyundai.server.model.service.BuildService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/build")
public class BuildController {

    @Autowired
    private BuildService buildService;

    @GetMapping("/available")
    @ApiOperation(value = "외장/내장 조합 확인", notes = "선택된 내/외장 색상이 같이 선택 가능한지 확인합니다.")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "carNameId", value = "차종 id"),
            @ApiImplicitParam(name = "modelId", value = "모델 id"),
            @ApiImplicitParam(name = "beforeIn", value = "이전 interior"),
            @ApiImplicitParam(name = "beforeEx", value = "이전 exterior"),
            @ApiImplicitParam(name = "interior", value = "interior"),
            @ApiImplicitParam(name = "exterior", value = "exterior")
    })
    public ResponseEntity<? extends BaseResponseBody> checkColorCombination(CheckColorCombinationReq req) {
        try {
            boolean available = false;
            String warning = null;
            int interiorId;
            int exteriorId;

//            모델에서 가능한 색상인지 확인
            boolean modelCheck = buildService.isAvailableColorModel(req.getModelId(), req.getInterior(), req.getExterior());
//            조합으로서 가능한지 확인해야함
            boolean combinationCheck = buildService.isAvailableColorCombination(req.getCarNameId(), req.getInterior(), req.getExterior());

            if (modelCheck && combinationCheck) {
//                가능한 조합, 현재 색상 리턴
                available = true;
                interiorId = req.getInterior();
                exteriorId = req.getExterior();
            } else if (!modelCheck) {
//                모델에서 사용 불가능한 색상, 이전 색상 리턴
                interiorId = req.getBeforeIn();
                exteriorId = req.getBeforeEx();
                if (req.getInterior() != req.getBeforeIn()) {
                    OptionDto option = buildService.getOptionByOptionId(req.getInterior());
                    warning = option.getName() + "은  트림 변경 후 선택 가능합니다.";
                } else {
                    OptionDto option = buildService.getOptionByOptionId(req.getExterior());
                    warning = option.getName() + "은  트림 변경 후 선택 가능합니다.";
                }
            } else {
//                불가능한 조합, 이전 색상 리턴
                interiorId = req.getBeforeIn();
                exteriorId = req.getBeforeEx();
                if (req.getInterior() != req.getBeforeIn()) {
//                    사용 불가한 인테리어 선택
                    OptionDto option = buildService.getOptionByOptionId(req.getInterior());
                    warning = option.getName() + "은 선택하신 외장색과 함께 제공되지 않는 색상입니다.\n" +
                            "외장색상을 변경해주세요.";
                } else {
//                    사용 불가한 익스테리어 선택
                    OptionDto option = buildService.getOptionByOptionId(req.getExterior());
                    warning = option.getName() + "은 선택하신 내장색과 함께 제공되지 않는 색상입니다.\n" +
                            "내장색상을 변경해주세요.";
                }
            }

            return ResponseEntity.ok(CheckColorCombinationRes.of(200, "success", available, warning, interiorId, exteriorId));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }

    @GetMapping("/interior")
    @ApiOperation(value = "외장 색상으로 내장 색상 목록 로드", notes = "차종, 외장색상에서 선택 가능한 모든 내장색상(선택 가능 여부), 옵션")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "carNameId", value = "차종 id"),
            @ApiImplicitParam(name = "modelId", value = "모델 id"),
            @ApiImplicitParam(name = "exterior", value = "외장 id")
    })
    public ResponseEntity<? extends BaseResponseBody> showInterior(ShowInteriorReq req) {
        try {
//            모델, 외장에서 선택할 수 있는 내장 옵션
            List<OptionDto> interiorList = buildService.getInteriorList(req.getCarNameId(), req.getModelId(), req.getExterior());

            return ResponseEntity.ok(ShowInteriorRes.of(200, "success", interiorList));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }

    @GetMapping("/exterior")
    @ApiOperation(value = "내장 색상으로 외장 색상 목록 로드", notes = "차종, 내장색상에서 선택 가능한 모든 외장색상(선택 가능 여부), 옵션")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "carNameId", value = "차종 id"),
            @ApiImplicitParam(name = "modelId", value = "모델 id"),
            @ApiImplicitParam(name = "interior", value = "내장 id")
    })
    public ResponseEntity<? extends BaseResponseBody> showExterior(ShowExteriorReq req) {
        try {
//            모델, 내장에서 선택할 수 있는 외장 옵션
            List<OptionDto> exteriorList = buildService.getExteriorList(req.getCarNameId(), req.getModelId(), req.getInterior());

            return ResponseEntity.ok(ShowExteriorRes.of(200, "success", exteriorList));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }

    @PostMapping("/model/preview")
    @ApiOperation(value = "모델 변경 미리보기", notes = "모델 변경 시 미리보기 모달에서 추가, 삭제 되는 옵션 표기")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "currentId", value = "현재 모델 id"),
            @ApiImplicitParam(name = "targetId", value = "목표 모델 id"),
            @ApiImplicitParam(name = "selected", value = "선택된 옵션 id 리스트")
    })
    public ResponseEntity<? extends BaseResponseBody> changeModel(ChangeModelPreviewReq req) {
        try {
//            모델 변경시 변경되는 가격
            int price = buildService.getChangeModelPrice(req.getCurrentId(), req.getTargetId(), req.getSelected());
//            모델 변경 시 추가되는 옵션
//            질문 후에 수정
            List<OptionDto> add = new ArrayList<>();
//            모델 변경 시 삭제되는 옵션
            List<OptionDto> remove = buildService.getChangeModelRemoveOption(req.getTargetId(), req.getSelected());

            return ResponseEntity.ok(ChangeModelPreviewRes.of(200, "success", price, add, remove));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }
}
