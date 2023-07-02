package com.hyundai.server.model.dao;

import com.hyundai.server.model.dto.PowertrainDto;
import com.hyundai.server.model.dto.TrimDto;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public interface ModelDao {
    List<String> selectEngine(int carNameId);
    List<String> selectTransmission(int carNameId);
    List<String> selectDrivetrain(int carNameId);
    List<PowertrainDto> selectPowertrain(int carNameId);
    List<TrimDto> selectTrimByModel(HashMap<String, Object> map);
}
