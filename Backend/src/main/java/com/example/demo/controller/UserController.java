package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import java.util.List;


@RestController
@RequestMapping("/api")
public class UserController { 

@GetMapping("/user")
public List<User> getUsers(){
    return userRepository.findAll();
}

    @GetMapping("/test")
    public String test(){
        return "API khdama  👍";
    } 
    @Autowired
private UserRepository userRepository;

    @GetMapping("/save")
public String saveUser() {
    User user = new User();
    user.setName("Ayoub");
    userRepository.save(user);
    return "saved";
}


    
}




