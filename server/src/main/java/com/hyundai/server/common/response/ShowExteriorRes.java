package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.OptionDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ShowExteriorRes extends BaseResponseBody {
    private List<OptionDto> exterior;

    public static ShowExteriorRes of(Integer statusCode, String message, List<OptionDto> exterior){
        ShowExteriorRes res = new ShowExteriorRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setExterior(exterior);
        return res;
    }
}
