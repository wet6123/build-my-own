package com.hyundai.server.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModelDto {
    private int modelId;
    private int carNameId;
    private int powertrainId;
    private int trimId;
    private int modelPrice;
    private String modelImage;
    private String modelName;
    private int displacement;
    private float averageMileage;
    private String trim;
}
