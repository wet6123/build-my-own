package com.hyundai.server.controller;

import com.hyundai.server.common.request.ChangePowertrainReq;
import com.hyundai.server.common.request.ShowTrimReq;
import com.hyundai.server.common.response.*;
import com.hyundai.server.model.dto.PowertrainDto;
import com.hyundai.server.model.dto.TrimDto;
import com.hyundai.server.model.service.ModelService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/models")
public class ModelController {

    @Autowired
    private ModelService modelService;

    @GetMapping("/powertrain")
    @ApiOperation(value = "파워트레인 옵션 목록 출력", notes = "파워트레인 옵션 목록을 종류 별로 모아서 출력합니다.")
    @ApiImplicitParam(name = "car_name_id", value = "차종 id")
    public ResponseEntity<? extends BaseResponseBody> showPowertrainOptionList(@RequestParam("car_name_id") Integer carNameId) {
        try {
            List<String> engine = modelService.getEngineList(carNameId);
            List<String> transmission = modelService.getTransmissionList(carNameId);
            List<String> drivetrain = modelService.getDrivetrainList(carNameId);

            return ResponseEntity.ok(PowertrainOptionListRes.of(200, "success", engine, transmission, drivetrain));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }

    @PostMapping("/powertrain")
    @ApiOperation(value = "파워트레인 변경", notes = "파워트레인 옵션을 변경하려할 때 선택 가능한 결과를 찾아서 출력합니다.")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "carNameId", value = "차종 id"),
            @ApiImplicitParam(name = "engine", value = "엔진 이름"),
            @ApiImplicitParam(name = "transmission", value = "변속기 이름"),
            @ApiImplicitParam(name = "drivetrain", value = "구동방식 이름")
    })    public ResponseEntity<? extends BaseResponseBody> changePowertrain(ChangePowertrainReq changePowertrainReq) {
        try {
//            carNameId가 null이면 에러
            if (changePowertrainReq.getCarNameId() == null)
                throw new Exception("car name id가 없습니다.");

//            파워트레인 변경 결과 출력
            PowertrainDto powertrain = modelService.getChangedPowertrian(changePowertrainReq.getCarNameId(), changePowertrainReq.getEngine(), changePowertrainReq.getTransmission(), changePowertrainReq.getDrivetrain());
            if (powertrain == null)
                throw new Exception("주어진 파워트레인 값에 해당하는 결과가 없습니다.");

            return ResponseEntity.ok(ChangePowertrainRes.of(200, "success", powertrain));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(400)
                    .body(BaseResponseBody.of(400, e.getMessage()));
        }
    }

    @GetMapping("/powertrain/list")
    @ApiOperation(value = "파워트레인 옵션 조합 출력", notes = "모델에서 선택 가능한 파워트레인 옵션 리스트들을 모두 출력합니다.")
    @ApiImplicitParam(name = "car_name_id", value = "차종 id")
    public ResponseEntity<? extends BaseResponseBody> showPowertrainCombination(@RequestParam("car_name_id") Integer carNameId) {
        try {
            List<PowertrainDto> powertrainCombination = modelService.getPowertrainCombination(carNameId);

            return ResponseEntity.ok(PowertrainCombinationRes.of(200, "success", powertrainCombination));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }

    @PostMapping("/trim")
    @ApiOperation(value = "선택 가능 트림 출력", notes = "모델에서 선택 가능한 트림을 모두 출력합니다.")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "carNameId", value = "차종 id"),
            @ApiImplicitParam(name = "engine", value = "엔진 이름"),
            @ApiImplicitParam(name = "transmission", value = "변속기 이름"),
            @ApiImplicitParam(name = "drivetrain", value = "구동방식 이름")
    })
    public ResponseEntity<? extends BaseResponseBody> showTrimList(ShowTrimReq showTrimReq) {
        try {
            List<TrimDto> trims = modelService.getTrimList(showTrimReq.getCarNameId(), showTrimReq.getEngine(), showTrimReq.getTransmission(), showTrimReq.getDrivetrain());
            if (trims.isEmpty())
                throw new Exception("주어진 조건에 해당하는 트림이 없습니다.");
            return ResponseEntity.ok(ShowTrimRes.of(200, "success", trims));
        } catch (RuntimeException e) {
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(400)
                    .body(BaseResponseBody.of(400, e.getMessage()));
        }
    }
}
