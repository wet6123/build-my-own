package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.PowertrainDto;
import lombok.Getter;
import lombok.Setter;

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
