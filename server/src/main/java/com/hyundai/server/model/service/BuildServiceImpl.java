package com.hyundai.server.model.service;

import com.hyundai.server.model.dao.BuildDao;
import com.hyundai.server.model.dto.ModelDto;
import com.hyundai.server.model.dto.OptionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
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

    @Override
    public List<OptionDto> getInteriorList(int carNameId, int modelId, int exteriorId) {
        List<OptionDto> allInterior = buildDao.selectInteriorByCarNameId(carNameId);
        List<OptionDto> modelInterior = buildDao.selectInteriorByModelId(modelId);
        HashMap<String, Object> map = new HashMap<>();
        map.put("carNameId", carNameId);
        map.put("exteriorId", exteriorId);
        List<OptionDto> exteriorInterior = buildDao.selectAvailableInterior(map);
        for(OptionDto interior : allInterior) {
            interior.setAvailable(modelInterior.contains(interior) && exteriorInterior.contains(interior));
        }
        return allInterior;
    }

    @Override
    public List<OptionDto> getExteriorList(int carNameId, int modelId, int interiorId) {
        List<OptionDto> allExterior = buildDao.selectExteriorByCarNameId(carNameId);
        List<OptionDto> modelExterior = buildDao.selectExteriorByModelId(modelId);
        HashMap<String, Object> map = new HashMap<>();
        map.put("carNameId", carNameId);
        map.put("interiorId", interiorId);
        List<OptionDto> interiorExterior = buildDao.selectAvailableExterior(map);
        for(OptionDto exterior : allExterior) {
            exterior.setAvailable(modelExterior.contains(exterior) && interiorExterior.contains(exterior));
        }
        return allExterior;
    }

    @Override
    public Integer getChangeModelPrice(int currentId, int targetId, List<Integer> selected) {
        int currentModelPrice = buildDao.selectModelByModelId(currentId).getModelPrice();
        int targetModelPrice = buildDao.selectModelByModelId(targetId).getModelPrice();
        int removedOptionPrice = 0;
        List<OptionDto> availableOption = buildDao.selectAvailableOptionByModelId(targetId);
        for(Integer optionId : selected) {
            OptionDto tmp = buildDao.selectOptionByOptionId(optionId);
            if(!availableOption.contains(tmp)) {
                removedOptionPrice += tmp.getPrice();
            }
        }
        return (targetModelPrice - currentModelPrice - removedOptionPrice);
    }

    @Override
    public List<OptionDto> getChangeModelRemoveOption(int targetId, List<Integer> selected) {
        List<OptionDto> removedOption = new ArrayList<>();
        List<OptionDto> availableOption = buildDao.selectAvailableOptionByModelId(targetId);
        for(Integer optionId : selected) {
            OptionDto tmp = buildDao.selectOptionByOptionId(optionId);
            if(!availableOption.contains(tmp)) {
                removedOption.add(tmp);
            }
        }
        return removedOption;
    }

    @Override
    public List<Integer> getChangeModelRemainOption(int targetId, List<Integer> selected) {
        List<Integer> result = new ArrayList<>();
        List<OptionDto> availableOption = buildDao.selectAvailableOptionByModelId(targetId);
        for(Integer optionId : selected) {
            OptionDto tmp = buildDao.selectOptionByOptionId(optionId);
            if(!availableOption.contains(tmp)) {
                result.add(tmp.getOptionId());
            }
        }
        return result;
    }

    @Override
    public List<OptionDto> getChangeModelOptionList(int targetId, List<Integer> selected) {
//        모델에서 사용 가능한 옵션 로드
        List<OptionDto> res = buildDao.selectAvailableOptionByModelId(targetId);
//        선행 조건이 없으면 사용 가능한 것으로 표기
        for(OptionDto option : res) {
            HashMap<String, Object> map = new HashMap<>();
            map.put("optionId", option.getOptionId());
            map.put("modelId", targetId);
            option.setAvailable(buildDao.selectRequiredOption(map).size() == 0);
        }
//        이미 선택된 옵션에 따라서 선택 가능한 옵션 표기
        for(Integer optionId : selected) {
            HashMap<String, Object> map = new HashMap<>();
            map.put("optionId", optionId);
            map.put("modelId", targetId);
            List<OptionDto> avaialbleOptionList = buildDao.selectAvailableOption(map);
            for(OptionDto option : avaialbleOptionList) {
                for(OptionDto resOption : res) {
                    if(option.getOptionId() == resOption.getOptionId())
                        resOption.setAvailable(true);
                }
            }

//        이미 선택한 옵션에 따라서 선택 불가능한 옵션 표기
            List<OptionDto> exclusiveOptionList = buildDao.selectExclusiveOption(map);
            for(OptionDto option : exclusiveOptionList) {
                for(OptionDto resOption : res) {
                    if(option.getOptionId() == resOption.getOptionId())
                        resOption.setAvailable(false);
                }
            }
        }

        return res;
    }

    @Override
    public List<Integer> getSelectedOption(Integer modelId, List<Integer> selected, String type, Integer optionId) {
        List<Integer> res = new ArrayList<>(selected);
        if (type.equals("add")) {
//            추가
            HashMap<String, Object> map = new HashMap<>();
            map.put("optionId", optionId);
            map.put("modelId", modelId);
            List<OptionDto> requiredOptions = buildDao.selectRequiredOption(map);
            List<OptionDto> exclusiveOptions = buildDao.selectExclusiveOption(map);
            for(OptionDto required : requiredOptions) {
                if(!res.contains(required.getOptionId()))
                    res.add(required.getOptionId());
            }
            for(OptionDto exclusive : exclusiveOptions) {
                if(res.contains(exclusive.getOptionId()))
                    res.remove(Integer.valueOf(exclusive.getOptionId()));
            }
            res.add(optionId);
        } else if (type.equals("remove")) {
//            삭제
            HashMap<String, Object> map = new HashMap<>();
            map.put("optionId", optionId);
            map.put("modelId", modelId);
            List<OptionDto> availableOptions = buildDao.selectAvailableOption(map);
            for(OptionDto available : availableOptions) {
                res.remove(Integer.valueOf(available.getOptionId()));
            }
            res.remove(Integer.valueOf(optionId));
        }
//        정렬
        res.sort(Comparator.naturalOrder());
        return res;
    }

    @Override
    public List<OptionDto> getAddOption(List<Integer> beforeSelected, List<Integer> afterSelected) {
        List<OptionDto> res = new ArrayList<>();
        for(Integer after : afterSelected) {
            if(!beforeSelected.contains(after)) {
                res.add(buildDao.selectOptionByOptionId(after));
            }
        }
        return res;
    }

    @Override
    public List<OptionDto> getRemoveOption(List<Integer> beforeSelected, List<Integer> afterSelected) {
        List<OptionDto> res = new ArrayList<>();
        for(Integer before : beforeSelected) {
            if(!afterSelected.contains(before)) {
                res.add(buildDao.selectOptionByOptionId(before));
            }
        }
        return res;
    }

    @Override
    public ModelDto getModelInfo(Integer modelId) {
        return buildDao.selectModelByModelId(modelId);
    }

    @Override
    public OptionDto getOptionInfo(Integer optionId) {
        return buildDao.selectOptionByOptionId(optionId);
    }
}
