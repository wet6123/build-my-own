package com.hyundai.server.common.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShowExteriorReq {
    private Integer carNameId;
    private Integer modelId;
    private Integer interior;
}
