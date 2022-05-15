package com.allenfc.rest.webservices.restfullwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
    
    inMemoryUserList.add(new JwtUserDetails(2L, "allen",
    		"$2a$10$pSL/HSzyzb7jt.0Ga.13NeioDLweBnkEa7rEHq7AnS4S2vsou08CO", "ROLE_USER_2"));
    
    inMemoryUserList.add(new JwtUserDetails(3L, "admin",
    		"$2a$10$mhKaqWClLKPAIbOiJ7FJleZAvJPlUngovCdUUQWLLS7l0M5MWStSy", "ROLE_USER_2"));
  }
  
  
  //$2a$10$pSL/HSzyzb7jt.0Ga.13NeioDLweBnkEa7rEHq7AnS4S2vsou08CO

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


