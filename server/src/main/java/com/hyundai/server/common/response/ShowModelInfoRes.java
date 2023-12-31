package com.hyundai.server.common.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShowModelInfoRes extends BaseResponseBody{
    private String modelName;
    private String trim;
    private Integer price;
    private Integer displacement;
    private float averageMileage;

    public static ShowModelInfoRes of(Integer statusCode, String message, String modelName, String trim, Integer price, Integer displacement, float averageMileage) {
        ShowModelInfoRes res = new ShowModelInfoRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setModelName(modelName);
        res.setTrim(trim);
        res.setPrice(price);
        res.setDisplacement(displacement);
        res.setAverageMileage(averageMileage);
        return res;
    }
}
