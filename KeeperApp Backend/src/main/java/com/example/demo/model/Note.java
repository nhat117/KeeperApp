package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@NoArgsConstructor
@Data
@Entity
@Table(name="note")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="note_id")
    private int noteId;

    @Column(name="create_date")
    private LocalDate createDate;


    @Column(name="note_content")
    private String content;

    @Column(name="note_title")
    private String title;

    @ManyToOne
    @JoinColumn(name = "workspace_id", nullable = true)
    @JsonBackReference
    private Workspace workspace;
}
