package com.hyundai.server.model.service;

import com.hyundai.server.model.dao.ModelDao;
import com.hyundai.server.model.dto.PowertrainDto;
import com.hyundai.server.model.dto.TrimDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class ModelServiceImpl implements ModelService{

    @Autowired
    private ModelDao modelDao;

    @Override
    public List<String> showEngine(Integer carNameId) {
        return modelDao.selectEngine(carNameId);
    }

    @Override
    public List<String> showTransmission(Integer carNameId) {
        return modelDao.selectTransmission(carNameId);
    }

    @Override
    public List<String> showDrivetrain(Integer carNameId) {
        return modelDao.selectDrivetrain(carNameId);
    }

    @Override
    public List<PowertrainDto> showPowertrainCombination(Integer carNameId) {
        return modelDao.selectPowertrain(carNameId);
    }

    @Override
    public List<TrimDto> showTrim(int carNameId, String engine, String transmission, String drivetrain) {
        HashMap<String, Object> map = new HashMap<>();
        map.put("car_name_id", carNameId);
        map.put("engine", engine);
        map.put("transmission", transmission);
        map.put("drivetrain", drivetrain);
        return modelDao.selectTrimByModel(map);
    }
}
