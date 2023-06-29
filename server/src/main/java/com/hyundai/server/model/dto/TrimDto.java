package com.hyundai.server.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrimDto {
    private int modelTd;
    private String tirm;
    private int price;
    private String image;
    private String detail1;
    private String detail2;
    private String detail3;
}
