package com.hyundai.server.model.service;

import com.hyundai.server.model.dao.BuildDao;
import com.hyundai.server.model.dto.OptionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class BuildServiceImpl implements BuildService {

    @Autowired
    private BuildDao buildDao;

    @Override
    public OptionDto getOptionByOptionId(int optionId) {
        return buildDao.selectOptionByOptionId(optionId);
    }

    @Override
    public Boolean isAvailableColorModel(int modelId, int interiorId, int exteriorId) {
        boolean interiorRes = false;
        boolean exteriorRes = false;
        List<OptionDto> interiorList = buildDao.selectInteriorByModelId(modelId);
        List<OptionDto> exteriorList = buildDao.selectExteriorByModelId(modelId);
        for(OptionDto option : interiorList) {
            if(option.getOptionId() == interiorId){
                interiorRes = true;
                break;
            }
        }
        for(OptionDto option : exteriorList) {
            if(option.getOptionId() == exteriorId){
                exteriorRes = true;
                break;
            }
        }
        return (interiorRes && exteriorRes);
    }

    @Override
    public Boolean isAvailableColorCombination(int carNameId, int interiorId, int exteriorId) {
//        가능한 색상 조합인지 확인
        HashMap<String, Object> map = new HashMap<>();
        map.put("carNameId", carNameId);
        map.put("interiorId", interiorId);
        List<OptionDto> availableExterior = buildDao.selectAvailableExterior(map);
        boolean available = false;
        for (OptionDto option : availableExterior) {
            if (option.getOptionId() == exteriorId) {
                available = true;
                break;
            }
        }
        return available;
    }
}
