package com.hyundai.server.controller;

import com.hyundai.server.common.request.ChangePowertrainReq;
import com.hyundai.server.common.response.BaseResponseBody;
import com.hyundai.server.common.response.ChangePowertrainRes;
import com.hyundai.server.common.response.PowertrainCombinationRes;
import com.hyundai.server.common.response.PowertrainOptionListRes;
import com.hyundai.server.model.dto.PowertrainDto;
import com.hyundai.server.model.service.ModelService;
import io.swagger.annotations.ApiImplicitParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/models")
public class ModelController {

    @Autowired
    private ModelService modelService;

    @GetMapping("/powertrain")
    @ApiImplicitParam(name = "car_name_id", value = "차종 id")
    public ResponseEntity<? extends BaseResponseBody> showPowertrainOptionList(@RequestParam("car_name_id") Integer carNameId) {
        try{
            List<String> engine = modelService.getEngineList(carNameId);
            List<String> transmission = modelService.getTransmissionList(carNameId);
            List<String> drivetrain = modelService.getDrivetrainList(carNameId);

            return ResponseEntity.ok(PowertrainOptionListRes.of(200, "success", engine, transmission, drivetrain));
        }catch (RuntimeException e){
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }

    @PostMapping("/powertrain")
//    @ApiImplicitParam(name = "car_name_id", value = "차종 id")
    public ResponseEntity<? extends BaseResponseBody> changePowertrain(ChangePowertrainReq changePowertrainReq) {
        try{
//            carNameId가 null이면 에러
            if(changePowertrainReq.getCarNameId() == null)
                throw new Exception("car name id가 없습니다.");

//            파워트레인 변경 결과 출력
            PowertrainDto powertrain = modelService.getChangedPowertrian(changePowertrainReq.getCarNameId(), changePowertrainReq.getEngine(), changePowertrainReq.getTransmission(), changePowertrainReq.getDrivetrain());
            if(powertrain == null)
                throw new Exception("주어진 파워트레인 값에 해당하는 결과가 없습니다.");

            return ResponseEntity.ok(ChangePowertrainRes.of(200, "success", powertrain));
        } catch (RuntimeException e){
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(400)
                    .body(BaseResponseBody.of(400, e.getMessage()));
        }
    }

    @GetMapping("/powertrain/list")
    @ApiImplicitParam(name = "car_name_id", value = "차종 id")
    public ResponseEntity<? extends BaseResponseBody> showPowertrainCombination(@RequestParam("car_name_id") Integer carNameId) {
        try{
            List<PowertrainDto> powertrainCombination = modelService.getPowertrainCombination(carNameId);

            return ResponseEntity.ok(PowertrainCombinationRes.of(200, "success", powertrainCombination));
        }catch (RuntimeException e){
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }
}
