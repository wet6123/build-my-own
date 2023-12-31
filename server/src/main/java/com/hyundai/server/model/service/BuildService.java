package com.hyundai.server.model.service;

import com.hyundai.server.model.dto.ModelDto;
import com.hyundai.server.model.dto.OptionDto;
import com.hyundai.server.model.dto.TrimDto;

import java.util.List;

public interface BuildService {
    OptionDto getOptionByOptionId(int optionId);
    Boolean isAvailableColorModel(int modelId, int interiorId, int exteriorId);
    Boolean isAvailableColorCombination(int carNameId, int interiorId, int exteriorId);
    List<OptionDto> getInteriorList(int carNameId, int modelId, int exteriorId);
    List<OptionDto> getExteriorList(int carNameId, int modelId, int interiorId);
    Integer getChangeModelPrice(int currentId, int targetId, List<Integer> selected);
//    List<OptionDto> getChangeModelAddOption();
    List<OptionDto> getChangeModelRemoveOption(int targetId, List<Integer> selected);
    List<Integer> getChangeModelRemainOption(int targetId, List<Integer> selected);
    List<OptionDto> getChangeModelOptionList(int targetId, List<Integer> selected);
    List<Integer> getSelectedOption(Integer modelId, List<Integer> selected, String type, Integer optionId);
    List<OptionDto> getAddOption(List<Integer> beforeSelected, List<Integer> afterSelected);
    List<OptionDto> getRemoveOption(List<Integer> beforeSelected, List<Integer> afterSelected);
    ModelDto getModelInfo(Integer modelId);
    OptionDto getOptionInfo(Integer optionId);
    List<OptionDto> getOptionInfoList(List<Integer> optionId);

    Integer getClosestModelId(Integer interior, Integer modelId);
    TrimDto getTrimByModelId(Integer modelId);
}
