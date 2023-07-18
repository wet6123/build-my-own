package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.OptionDto;
import com.hyundai.server.model.dto.TrimDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ChangeInteriorTrimRes extends BaseResponseBody {
    private TrimDto beforeTrim;
    private TrimDto afterTrim;
    private Integer modelId;
    private Integer interior;

    public static ChangeInteriorTrimRes of(Integer statusCode, String message, TrimDto beforeTrim, TrimDto afterTrim, Integer modelId, Integer interior){
        ChangeInteriorTrimRes res = new ChangeInteriorTrimRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setBeforeTrim(beforeTrim);
        res.setAfterTrim(afterTrim);
        res.setModelId(modelId);
        res.setInterior(interior);
        return res;
    }
}
