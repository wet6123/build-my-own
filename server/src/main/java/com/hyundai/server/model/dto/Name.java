package com.hyundai.server.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Name {
    private int id;
    private String carName;
    private String carType;
    private boolean isNew;
    private int startPrice;
    private String carImage;
}
