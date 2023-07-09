package com.hyundai.server.common.response;

import com.hyundai.server.model.dto.OptionDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CheckColorCombinationRes extends BaseResponseBody {
    private boolean available;
    private String warning;
    private int interiorId;
    private int exteriorId;

    public static CheckColorCombinationRes of(int statusCode, String message, boolean available, String warning, int interiorId, int exteriorId) {
        CheckColorCombinationRes res = new CheckColorCombinationRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setAvailable(available);
        res.setWarning(warning);
        res.setInteriorId(interiorId);
        res.setExteriorId(exteriorId);
        return res;
    }
}
