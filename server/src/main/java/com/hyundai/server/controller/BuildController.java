package com.hyundai.server.controller;

import com.hyundai.server.common.request.*;
import com.hyundai.server.common.response.*;
import com.hyundai.server.model.dto.ModelDto;
import com.hyundai.server.model.dto.OptionDto;
import com.hyundai.server.model.dto.TrimDto;
import com.hyundai.server.model.service.BuildService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/build")
@CrossOrigin("http://localhost:3000")
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
            String type;

//            모델에서 가능한 색상인지 확인
            boolean modelCheck = buildService.isAvailableColorModel(req.getModelId(), req.getInterior(), req.getExterior());
//            조합으로서 가능한지 확인해야함
            boolean combinationCheck = buildService.isAvailableColorCombination(req.getCarNameId(), req.getInterior(), req.getExterior());

            if (modelCheck && combinationCheck) {
//                가능한 조합, 현재 색상 리턴
                available = true;
                interiorId = req.getInterior();
                exteriorId = req.getExterior();
                type = "ok";
            } else if (!modelCheck) {
//                모델에서 사용 불가능한 색상, 이전 색상 리턴
                interiorId = req.getBeforeIn();
                exteriorId = req.getBeforeEx();
                type = "trim";
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
                    type="interior";
                    OptionDto option = buildService.getOptionByOptionId(req.getInterior());
                    warning = option.getName() + "은 선택하신 외장색과 함께 제공되지 않는 색상입니다.\n" +
                            "외장색상을 변경해주세요.";
                } else {
//                    사용 불가한 익스테리어 선택
                    type="exterior";
                    OptionDto option = buildService.getOptionByOptionId(req.getExterior());
                    warning = option.getName() + "은 선택하신 내장색과 함께 제공되지 않는 색상입니다.\n" +
                            "내장색상을 변경해주세요.";
                }
            }

            return ResponseEntity.ok(CheckColorCombinationRes.of(200, "success", available, warning, interiorId, exteriorId, type));
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

    @GetMapping("/interior/trim")
    @ApiOperation(value = "트림 변경이 필요한 내장 색상 변경", notes = "변경되는 트림 정보, 가장 가까운 모델, 변경 후 내장 색상 출력")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "modelId", value = "모델 id"),
            @ApiImplicitParam(name = "interior", value = "내장 id")
    })
    public ResponseEntity<? extends BaseResponseBody> changeInteriorTrim(ChangeInteriorTrimReq req) {
        try {
//            변경할 가장 가까운 모델 id
            Integer modelId = buildService.getClosestModelId(req.getInterior(), req.getModelId());
//            선택할 내장 색상 id
            Integer interior = req.getInterior();
//            변경전 트림 정보
            TrimDto beforeTrim = buildService.getTrimByModelId(req.getModelId());
//            변경후 트림 정보
            TrimDto afterTrim = buildService.getTrimByModelId(modelId);

            return ResponseEntity.ok(ChangeInteriorTrimRes.of(200, "success", beforeTrim, afterTrim, modelId, interior ));
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
//    @ApiImplicitParams({
//            @ApiImplicitParam(name = "currentId", value = "현재 모델 id"),
//            @ApiImplicitParam(name = "targetId", value = "목표 모델 id"),
//            @ApiImplicitParam(name = "selected", value = "선택된 옵션 id 리스트")
//    })
    public ResponseEntity<? extends BaseResponseBody> changeModelPreview (@RequestBody ChangeModelReq req) {
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

    @PostMapping("/model")
    @ApiOperation(value = "모델 변경", notes = "모델 변경 시 유지되는 옵션, 선택 가능한 옵션 목록")
//    @ApiImplicitParams({
//            @ApiImplicitParam(name = "currentId", value = "현재 모델 id"),
//            @ApiImplicitParam(name = "targetId", value = "목표 모델 id"),
//            @ApiImplicitParam(name = "selected", value = "선택된 옵션 id 리스트")
//    })
    public ResponseEntity<? extends BaseResponseBody> changeModel(@RequestBody ChangeModelReq req) {
        try {
//            모델 변경 후 유지되는 옵션
            List<Integer> selected = buildService.getChangeModelRemainOption(req.getTargetId(), req.getSelected());
//            모델 변경 후 옵션 리스트
            List<OptionDto> options = buildService.getChangeModelOptionList(req.getTargetId(), req.getSelected());

            return ResponseEntity.ok(ChangeModelRes.of(200, "success", selected, options));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }

    @PostMapping("/option")
    @ApiOperation(value = "옵션 목록", notes = "선택된 옵션에 따라서 결과 출력")
//    @ApiImplicitParams({
//            @ApiImplicitParam(name = "modelId", value = "현재 모델 id"),
//            @ApiImplicitParam(name = "selected", value = "선택된 옵션 id 리스트"),
//            @ApiImplicitParam(name = "type", value = "add/remove/get 동작 타입"),
//            @ApiImplicitParam(name = "optionId", value = "옵션 id")
//    })
    public ResponseEntity<? extends BaseResponseBody> showOptionList(@RequestBody ShowOptionListReq req) {
        try {
            if(!(req.getType().equals("add")||req.getType().equals("remove")||req.getType().equals("get")))
                throw new Exception("type이 잘못 입력되었습니다.");

//            선택된 옵션 리스트 (옵션 추가/삭제 후)
            List<Integer> selected = buildService.getSelectedOption(req.getModelId(), req.getSelected(), req.getType(), req.getOptionId());
//            화면에 보여줄 옵션 리스트 선택 가능/불가 표기
            List<OptionDto> options = buildService.getChangeModelOptionList(req.getModelId(), selected);
//            모달 - 선택 시 추가되는 옵션
            List<OptionDto> add = buildService.getAddOption(req.getSelected(), selected);
//            모달 - 선택 시 삭제되는 옵션
            List<OptionDto> remove = buildService.getRemoveOption(req.getSelected(), selected);

            return ResponseEntity.ok(ShowOptionListRes.of(200, "success", selected, options, add, remove));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(400)
                    .body(BaseResponseBody.of(400, e.getMessage()));
        }
    }

    @GetMapping("/model/info")
    @ApiOperation(value = "모델 정보 로드(완성 화면)", notes = "완성 화면에서 사용될 모델 정보(모델 이름, 가격, 배기량, 평균 연비)를 출력합니다.")
    @ApiImplicitParam(name = "modelId", value = "모델 id")
    public ResponseEntity<? extends BaseResponseBody> showModelInfo(@RequestParam("modelId") Integer modelId) {
        try {
            ModelDto model = buildService.getModelInfo(modelId);

            return ResponseEntity.ok(ShowModelInfoRes.of(200, "success", model.getModelName(), model.getModelPrice(), model.getDisplacement(), model.getAverageMileage()));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }

    @PostMapping("/option/info")
    @ApiOperation(value = "옵션 목록 조회 (완성 화면)", notes = "옵션 리스트의 정보를 조회해서 반환합니다.")
    public ResponseEntity<? extends BaseResponseBody> showOptionInfo(@RequestBody List<Integer> optionList) {
        try {
            List<OptionDto> optionInfo = buildService.getOptionInfoList(optionList);

            return ResponseEntity.ok(ShowOptionInfoRes.of(200, "success", optionInfo));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }
}
