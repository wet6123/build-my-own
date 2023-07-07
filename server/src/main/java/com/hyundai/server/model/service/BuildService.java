package com.hyundai.server.model.service;

import com.hyundai.server.model.dto.OptionDto;

public interface BuildService {
    OptionDto getOptionByOptionId(int optionId);
    Boolean isAvailableColorModel(int modelId, int interiorId, int exteriorId);
    Boolean isAvailableColorCombination(int carNameId, int interiorId, int exteriorId);
}
