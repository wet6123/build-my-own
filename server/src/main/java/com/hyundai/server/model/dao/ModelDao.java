package com.hyundai.server.model.dao;

import com.hyundai.server.model.dto.PowertrainDto;
import com.hyundai.server.model.dto.TrimDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModelDao {
    List<PowertrainDto> selectPowertrainByCarName(String carName);
    List<TrimDto> selectTrimByModel(String carName, String engine, String transmission, String drivetrain);
}
