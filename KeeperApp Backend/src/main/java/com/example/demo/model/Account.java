package com.example.demo.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@NoArgsConstructor
@Data
@Table(name = "account")
@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="account_id")
    private int accountId;

    @Column(name ="account_name")
    private String accountName;

    @Column(name="account_email")
    private String accountEmail;

    @Column(name="account_password")
    private String accountPassword;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "workspace_id", referencedColumnName = "workspace_id")
    private Workspace workspace;
}
