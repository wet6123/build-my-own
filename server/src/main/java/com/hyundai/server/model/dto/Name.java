package com.hyundai.server.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Name {
    private int id;
    private String car_name;
    private String car_type;
    private boolean is_new;
    private int start_price;
    private String car_image;
}
