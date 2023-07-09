package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.OptionDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ShowInteriorRes extends BaseResponseBody {
    private List<OptionDto> interior;

    public static ShowInteriorRes of(Integer statusCode, String message, List<OptionDto> interior){
        ShowInteriorRes res = new ShowInteriorRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setInterior(interior);
        return res;
    }
}
