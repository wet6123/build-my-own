package com.hyundai.server.common.request;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ChangeModelReq {
    private Integer currentId;
    private Integer targetId;
    private List<Integer> selected;
}
