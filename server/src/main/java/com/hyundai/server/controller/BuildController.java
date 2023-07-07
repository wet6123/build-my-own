package com.hyundai.server.controller;

import com.hyundai.server.common.request.CheckColorCombinationReq;
import com.hyundai.server.common.response.BaseResponseBody;
import com.hyundai.server.common.response.CheckColorCombinationRes;
import com.hyundai.server.model.dto.OptionDto;
import com.hyundai.server.model.service.BuildService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

            if(modelCheck && combinationCheck) {
//                가능한 조합, 현재 색상 리턴
                available = true;
                interiorId = req.getInterior();
                exteriorId = req.getExterior();
            } else if (!modelCheck) {
//                모델에서 사용 불가능한 색상, 이전 색상 리턴
                interiorId = req.getBeforeIn();
                exteriorId = req.getBeforeEx();
                if(req.getInterior() != req.getBeforeIn()) {
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
                if(req.getInterior() != req.getBeforeIn()) {
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

}
