package com.hyundai.server.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonProperty(value="isNew")
    private boolean isNew;
    private int startPrice;
    private String carImage;
}
