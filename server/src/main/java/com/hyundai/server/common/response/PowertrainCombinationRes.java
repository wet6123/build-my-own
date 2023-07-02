package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.PowertrainDto;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@ApiModel(value = "가능한 파워트레인 조합 응답")
@Getter
@Setter
public class PowertrainCombinationRes extends BaseResponseBody{
    private List<PowertrainDto> powertrainCombination;

    public static PowertrainCombinationRes of (int statusCode, String message, List<PowertrainDto> powertrainCombination) {
        PowertrainCombinationRes res = new PowertrainCombinationRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setPowertrainCombination(powertrainCombination);
        return res;
    }
}
