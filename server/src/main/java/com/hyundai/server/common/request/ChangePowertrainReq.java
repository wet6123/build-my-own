package com.hyundai.server.common.request;

import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

@ApiModel(description = "파워 트레인 변경 Request")
@Getter
@Setter
public class ChangePowertrainReq {
    private Integer carNameId;
    private String engine;
    private String transmission;
    private String drivetrain;
}
