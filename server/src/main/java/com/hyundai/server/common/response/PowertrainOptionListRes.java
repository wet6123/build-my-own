package com.hyundai.server.common.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@ApiModel(value = "파워트레인 옵션 목록 조회 응답")
@Getter
@Setter
public class PowertrainOptionListRes extends BaseResponseBody{
    @ApiModelProperty(value = "엔진 옵션 목록", example = "가솔린 1.6")
    private List<String> engine;
    @ApiModelProperty(value = "변속기 옵션 목록", example = "A/T")
    private List<String> transmission;
    @ApiModelProperty(value = "구동방식 옵션 목록", example = "2WD")
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
