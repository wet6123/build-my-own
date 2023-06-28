package com.hyundai.server.model.service;

import com.hyundai.server.model.dto.Name;

import java.util.List;

public interface NameService {
    List<Name> showNameByType(String car_type);
}
