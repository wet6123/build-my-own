package com.hyundai.server.common.request;

import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

@ApiModel(value = "트림 리스트 출력 Request")
@Getter
@Setter
public class ShowTrimReq {
    private Integer carNameId;
    private String engine;
    private String transmission;
    private String drivetrain;
}
