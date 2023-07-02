package com.hyundai.server.common.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PowertrainOptionListRes extends BaseResponseBody{
    private List<String> engine;
    private List<String> transmission;
    private List<String> drivetrain;
    public static PowertrainOptionListRes of(Integer statusCode, String message, List<String> engine, List<String> tarnsmission, List<String> drivetrain){
        PowertrainOptionListRes res = new PowertrainOptionListRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setEngine(engine);
        res.setTransmission(tarnsmission);
        res.setDrivetrain(drivetrain);
        return res;
    }
}
