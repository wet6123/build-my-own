package com.hyundai.server.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OptionDto {
    private int optionId;
    private int price;
    private String type;
    private String name;
    private String image;
    private String preview;
    private Boolean available;
}
