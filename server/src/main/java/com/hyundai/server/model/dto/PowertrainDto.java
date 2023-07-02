package com.hyundai.server.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PowertrainDto {
    private String engine;
    private String transmission;
    private String drivetrain;
}
