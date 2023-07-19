package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.OptionDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ShowOptionInfoRes extends BaseResponseBody{
    private List<OptionDto> OptionInfo;

    public static ShowOptionInfoRes of(Integer statusCode, String message, List<OptionDto> OptionInfo) {
        ShowOptionInfoRes res = new ShowOptionInfoRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setOptionInfo(OptionInfo);
        return res;
    }
}
