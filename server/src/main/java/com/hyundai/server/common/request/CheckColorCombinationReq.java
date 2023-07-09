package com.hyundai.server.common.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CheckColorCombinationReq {
    private int carNameId;
    private int modelId;
    private int beforeIn;
    private int beforeEx;
    private int interior;
    private int exterior;
}
