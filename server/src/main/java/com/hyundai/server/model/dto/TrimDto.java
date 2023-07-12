package com.hyundai.server.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrimDto {
    private int modelId;
    private String trim;
    private int price;
    private String image;
    private String detail1;
    private String detail2;
    private String detail3;
}
