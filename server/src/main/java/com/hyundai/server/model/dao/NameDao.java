package com.hyundai.server.model.dao;

import com.hyundai.server.model.dto.Name;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NameDao {
    List<Name> selectNameByType(String car_type);
}
