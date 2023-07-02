package com.hyundai.server.model.service;

import com.hyundai.server.model.dao.ModelDao;
import com.hyundai.server.model.dto.PowertrainDto;
import com.hyundai.server.model.dto.TrimDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

@Service
public class ModelServiceImpl implements ModelService {

    @Autowired
    private ModelDao modelDao;

    @Override
    public List<String> getEngineList(Integer carNameId) {
        return modelDao.selectEngine(carNameId);
    }

    @Override
    public List<String> getTransmissionList(Integer carNameId) {
        return modelDao.selectTransmission(carNameId);
    }

    @Override
    public List<String> getDrivetrainList(Integer carNameId) {
        return modelDao.selectDrivetrain(carNameId);
    }

    @Override
    public PowertrainDto getChangedPowertrian(Integer carNameId, String engine, String transmission, String drivetrain) {
        List<PowertrainDto> powertrainComination = modelDao.selectPowertrain(carNameId);
        PowertrainDto powertrain = null;

        if (engine == null && transmission == null && drivetrain == null) {
            powertrain = powertrainComination.get(0);
        } else if (powertrainComination.contains(new PowertrainDto(engine, transmission, drivetrain))) {
            powertrain = new PowertrainDto(engine, transmission, drivetrain);
        } else {
            List<String> transmissionList = modelDao.selectTransmission(carNameId);
            List<String> drivetrainList = modelDao.selectDrivetrain(carNameId);
            int transmissionCnt = transmissionList.size();
            int drivetrainCnt = drivetrainList.size();

            for (String nowTransmission : transmissionList) {
                if (powertrainComination.contains(new PowertrainDto(engine, nowTransmission, drivetrain))) {
                    powertrain = new PowertrainDto(engine, nowTransmission, drivetrain);
                }
            }
            if (powertrain == null) {
                all:
                for (String nowTransmission : transmissionList) {
                    if (transmission != null && transmission.equals(nowTransmission))
                        continue;
                    for (String nowDrivetrain : drivetrainList) {
                        if (powertrainComination.contains(new PowertrainDto(engine, nowTransmission, nowDrivetrain))) {
                            powertrain = new PowertrainDto(engine, nowTransmission, nowDrivetrain);
                            break all;
                        }
                    }
                }
            }
        }
        return powertrain;
    }

    @Override
    public List<PowertrainDto> getPowertrainCombination(Integer carNameId) {
        return modelDao.selectPowertrain(carNameId);
    }

    @Override
    public List<TrimDto> getTrimList(int carNameId, String engine, String transmission, String drivetrain) {
        HashMap<String, Object> map = new HashMap<>();
        map.put("car_name_id", carNameId);
        map.put("engine", engine);
        map.put("transmission", transmission);
        map.put("drivetrain", drivetrain);
        return modelDao.selectTrimByModel(map);
    }
}
