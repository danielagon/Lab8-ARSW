/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.auth0.samples.authapi.springbootauthupdated.user;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author 2109734
 */
public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long>{
    ApplicationUser findByUsername(String username);
}
