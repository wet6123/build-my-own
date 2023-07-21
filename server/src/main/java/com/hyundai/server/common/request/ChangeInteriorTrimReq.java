package com.hyundai.server.common.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChangeInteriorTrimReq {
    private Integer modelId;
    private Integer interior;
}
