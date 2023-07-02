package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.PowertrainDto;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

@ApiModel(value = "파워트레인 변경 응답")
@Getter
@Setter
public class ChangePowertrainRes extends BaseResponseBody{
    private PowertrainDto changedPowertrain;

    public static ChangePowertrainRes of (int statusCode, String message, PowertrainDto changedPowertrain) {
        ChangePowertrainRes res = new ChangePowertrainRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setChangedPowertrain(changedPowertrain);
        return res;
    }
}
