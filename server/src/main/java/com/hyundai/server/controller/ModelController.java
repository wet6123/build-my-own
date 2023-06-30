package com.hyundai.server.controller;

import com.hyundai.server.common.response.BaseResponseBody;
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
            List<String> engine = modelService.showEngine(carNameId);
            List<String> transmission = modelService.showTransmission(carNameId);
            List<String> drivetrain = modelService.showDrivetrain(carNameId);

            return ResponseEntity.ok(PowertrainOptionListRes.of(200, "success", engine, transmission, drivetrain));
        }catch (RuntimeException e){
            return ResponseEntity.status(500)
                    .body(BaseResponseBody.of(500, e.getMessage()));
        }
    }
}
