package com.hyundai.server.common.request;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ShowOptionInfoReq {
    private List<Integer> optionList;
}
