package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.PowertrainDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChangePowertrainRes extends BaseResponseBody{
    private String engine;
    private String transmission;
    private String drivetrain;

    public static ChangePowertrainRes of (int statusCode, String message, PowertrainDto powertrain) {
        ChangePowertrainRes res = new ChangePowertrainRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setEngine(powertrain.getEngine());
        res.setTransmission(powertrain.getTransmission());
        res.setDrivetrain(powertrain.getDrivetrain());
        return res;
    }
}
