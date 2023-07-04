package com.hyundai.server.model.dao;

import com.hyundai.server.model.dto.OptionDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BuildDao {
//    Color
    List<OptionDto> selectInteriorByCarName(int carNameId);
    List<OptionDto> selectExteriorByCarName(int carNameId);
    List<OptionDto> selectInteriorByModelId(int modelId);
    List<OptionDto> selectExteriorByModelId(int modelId);
    List<OptionDto> selectAvailableInterior(int exteriorOptionId);
    List<OptionDto> selectAvailableExterior(int interiorOptionId);
//    Option
    List<OptionDto> selectRequiredOption(int optionId);
    List<OptionDto> selectExclusiveOption(int optionId);
    List<OptionDto> selectAvailableOption(int optionId);
}
