package com.example.demo.repository;

import com.example.demo.model.Account;
import com.example.demo.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
public interface AccountRepository extends JpaRepository<Account, Integer> {
}
