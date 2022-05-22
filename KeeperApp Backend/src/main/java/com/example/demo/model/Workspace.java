package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Table(name="workspace")
public class Workspace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="workspace_id")
    private int workspaceId;

    @OneToOne(mappedBy = "workspace")
    private Account account;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "workspace")
    @JsonManagedReference
    List<Note> noteList;
}
