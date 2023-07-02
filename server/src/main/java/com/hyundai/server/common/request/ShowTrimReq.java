package com.hyundai.server.common.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShowTrimReq {
    private Integer carNameId;
    private String engine;
    private String transmission;
    private String drivetrain;
}
