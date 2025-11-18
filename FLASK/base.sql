CREATE DATABASE mosqueteira_db;
USE mosqueteira_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE carta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    elixir INT,
    raridade ENUM('comum', 'rara', 'épica', 'lendária', 'campeão')
);