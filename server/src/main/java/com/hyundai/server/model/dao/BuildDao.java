package com.hyundai.server.model.dao;

import com.hyundai.server.model.dto.ModelDto;
import com.hyundai.server.model.dto.OptionDto;
import com.hyundai.server.model.dto.TrimDto;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public interface BuildDao {
//    Color
//    차종에서 선택 가능한 모든 색상
    List<OptionDto> selectInteriorByCarNameId(int carNameId);
    List<OptionDto> selectExteriorByCarNameId(int carNameId);
//    모델에서 사용 가능한 색상
    List<OptionDto> selectInteriorByModelId(int modelId);
    List<OptionDto> selectExteriorByModelId(int modelId);
//    해당 차종에서 사용가능한 모든 색상 조합
//    interiorId(exteriorId), carNameId
    List<OptionDto> selectAvailableInterior(HashMap<String, Object> map);
    List<OptionDto> selectAvailableExterior(HashMap<String, Object> map);
//    Model
    ModelDto selectModelByModelId(int modelId);
    List<OptionDto> selectAvailableOptionByModelId(int modelId);
//    Option
    OptionDto selectOptionByOptionId(int optionId);
//    optionId, modelId
    List<OptionDto> selectRequiredOption(HashMap<String, Object> map);
    List<OptionDto> selectExclusiveOption(HashMap<String, Object> map);
    List<OptionDto> selectAvailableOption(HashMap<String, Object> map);
//    가장 가까운 modelId
    Integer selectClosestModelId(HashMap<String, Object> map);
    TrimDto selectTrimByModelId(Integer modelId);
}
