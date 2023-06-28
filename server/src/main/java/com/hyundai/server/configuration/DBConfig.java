package com.hyundai.server.configuration;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan(basePackages = "com.hyundai.server.model.dao")
public class DBConfig {
}
