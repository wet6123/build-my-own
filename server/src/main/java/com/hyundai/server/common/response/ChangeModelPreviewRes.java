package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.OptionDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ChangeModelPreviewRes extends BaseResponseBody {
    private int price;
    private List<OptionDto> add;
    private List<OptionDto> remove;

    public static ChangeModelPreviewRes of(Integer statusCode, String message, int price, List<OptionDto> add, List<OptionDto> remove) {
        ChangeModelPreviewRes res = new ChangeModelPreviewRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setPrice(price);
        res.setAdd(add);
        res.setRemove(remove);
        return res;
    }
}
