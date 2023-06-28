package com.hyundai.server.model.service;

import com.hyundai.server.model.dao.NameDao;
import com.hyundai.server.model.dto.Name;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NameServiceImpl implements NameService{
    @Autowired
    private NameDao nameDao;

    @Override
    public List<Name> showNameByType(String car_type) {

        return nameDao.selectNameByType(car_type);
    }
}
