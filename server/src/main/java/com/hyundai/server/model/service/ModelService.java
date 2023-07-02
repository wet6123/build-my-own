package com.hyundai.server.model.service;

import com.hyundai.server.model.dto.PowertrainDto;
import com.hyundai.server.model.dto.TrimDto;

import java.util.List;

public interface ModelService {
    List<String> getEngineList(Integer carNameId);
    List<String> getTransmissionList(Integer carNameId);
    List<String> getDrivetrainList(Integer carNameId);
    PowertrainDto getChangedPowertrian(Integer carNameId, String engine, String transmission, String drivetrain);
    List<PowertrainDto> getPowertrainCombination(Integer carNameId);
    List<TrimDto> getTrimList(int carNameId, String engine, String transmission, String drivetrain);
}
