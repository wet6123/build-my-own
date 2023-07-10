package com.hyundai.server.controller;

import com.hyundai.server.model.dto.Name;
import com.hyundai.server.model.service.NameService;
import io.swagger.annotations.ApiImplicitParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/names")
public class NameController {

    @Autowired
    private NameService nameService;

    @GetMapping("")
    @ApiImplicitParam(name = "type", value = "차량 타입")
    public ResponseEntity<List<Name>> showCars(@RequestParam("type") String car_type) {
        List<Name> carNames = nameService.showNameByType(car_type);
        return new ResponseEntity<>(carNames, HttpStatus.OK);
    }
}
