package com.example.demo.repository;

import com.example.demo.model.Note;
import com.example.demo.model.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
public interface NoteRepository extends JpaRepository<Note, Integer> {
}
