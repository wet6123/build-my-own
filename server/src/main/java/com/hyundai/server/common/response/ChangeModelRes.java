package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.OptionDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ChangeModelRes extends BaseResponseBody{
    private List<Integer> selected;
    private List<OptionDto> options;

    public static ChangeModelRes of(Integer statusCode, String message, List<Integer> selected, List<OptionDto> options) {
        ChangeModelRes res = new ChangeModelRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setSelected(selected);
        res.setOptions(options);
        return res;
    }
}
