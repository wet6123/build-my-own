package com.hyundai.server.common.request;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ShowOptionListReq {
    private Integer modelId;
    private List<Integer> selected;
    private String type;
    private Integer optionId;
}
