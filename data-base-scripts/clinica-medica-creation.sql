-- Introdução ao Armazenamento e Análise de Dados (IAAD) - BSI/UFRPE
-- Script do Banco de Dados clinica medica

begin;
create schema clinica_medica;

use clinica_medica;
-- drop schema clinica_medica;
-- Tabela com informações de clínicas médicas
create table if not exists Clinica(
	CodCli int not null,
    NomeCli varchar(15),
    Endereco varchar(40),
    Telefone char(11),
    Email varchar(40),
    primary key(CodCli)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

-- Tabela com informações de médicos
create table if not exists Medico(
	CodMed int not null,
    NomeMed varchar(15),
	Genero varchar(15),
    Telefone char(11),
    Email varchar(40) unique,
    CodEspec int(3),
    primary key(CodMed)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

-- Tabela com informações de pacientes
create table if not exists Paciente(
	CpfPaciente char(11) not null,
    NomePac varchar(15),
    DataNascimento date,
    Genero varchar(15),
    Telefone char(11),
    Email varchar(40) unique,
    primary key(CpfPaciente)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

-- Tabela que relaciona médicos a clínicas
create table if not exists ClinicaMedico(
	CodCli int not null,
    CodMed int not null,
    DataIngresso date,
    CargaHorariaSemanal float(4, 2) DEFAULT 20,
    primary key(CodCli, CodMed)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

-- tabela com informações da agenda de consultas dos médicos
create table if not exists AgendaConsulta (
	CodCli int not null,
    CodMed int not null,
    CpfPaciente char(11) not null,
    DataHora datetime not null,
    primary key(CodCli, CodMed, CpfPaciente, DataHora)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

-- tabela com informações de especialidades médicas
create table if not exists Especialidade(
	CodEspec int not null,
    NomeEspec varchar(30),
    Descricao varchar(40) not null,
    primary key(CodEspec)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

-- alterando as relações para adicionar as chaves estrangeiras
alter table Medico add foreign key(CodEspec) references Especialidade(CodEspec) on update cascade on delete cascade;
alter table ClinicaMedico add foreign key(CodCli) references Clinica(CodCli);
alter table ClinicaMedico add foreign key(CodMed) references Medico(CodMed) on update cascade on delete cascade;
alter table AgendaConsulta add foreign key(CodCli, CodMed) references ClinicaMedico(CodCli, CodMed) on update cascade  on delete cascade;
alter table AgendaConsulta add foreign key(CpfPaciente) references Paciente(CpfPaciente) on update cascade on delete restrict;
-- adicionando um valor defalt à carga horária semanal
-- alter table ClinicaMedico alter CargaHorariaSemanal on update 20 ; -- my sql não suporta

