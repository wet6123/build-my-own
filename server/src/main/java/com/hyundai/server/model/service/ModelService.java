package com.hyundai.server.model.service;

import com.hyundai.server.model.dto.PowertrainDto;
import com.hyundai.server.model.dto.TrimDto;

import java.util.HashMap;
import java.util.List;

public interface ModelService {
    List<String> showEngine(Integer carNameId);
    List<String> showTransmission(Integer carNameId);
    List<String> showDrivetrain(Integer carNameId);
    List<PowertrainDto> showPowertrainCombination(Integer carNameId);
    List<TrimDto> showTrim(int carNameId, String engine, String transmission, String drivetrain);
}
