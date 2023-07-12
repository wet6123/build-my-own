package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.TrimDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ShowTrimRes extends BaseResponseBody {
    private List<TrimDto> trimList;

    public static ShowTrimRes of(Integer statusCode, String message, List<TrimDto> trims) {
        ShowTrimRes res = new ShowTrimRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setTrimList(trims);
        return res;
    }
}
