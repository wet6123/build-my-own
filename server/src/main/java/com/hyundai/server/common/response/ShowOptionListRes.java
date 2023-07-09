package com.hyundai.server.common.response;

import com.hyundai.server.common.request.ShowOptionListReq;
import com.hyundai.server.model.dto.OptionDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ShowOptionListRes extends BaseResponseBody{
    private List<Integer> selected;
    private List<OptionDto> options;
    private List<OptionDto> add;
    private List<OptionDto> remove;

    public static ShowOptionListRes of(Integer statusCode, String message, List<Integer> selected, List<OptionDto> options, List<OptionDto> add, List<OptionDto> remove) {
        ShowOptionListRes res = new ShowOptionListRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setSelected(selected);
        res.setOptions(options);
        res.setAdd(add);
        res.setRemove(remove);
        return res;
    }
}
