package com.hyundai.server.common.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShowOptionInfoRes extends BaseResponseBody{
    private Integer optionId;
    private Integer price;
    private String type;
    private String name;
    private String image;
    private String preview;
    private Boolean available;

    public static ShowOptionInfoRes of(Integer statusCode, String message, Integer optionId, Integer price, String type, String name, String image, String preview, Boolean available) {
        ShowOptionInfoRes res = new ShowOptionInfoRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setOptionId(optionId);
        res.setPrice(price);
        res.setType(type);
        res.setName(name);
        res.setImage(image);
        res.setPreview(preview);
        res.setAvailable(available);
        return res;
    }
}
