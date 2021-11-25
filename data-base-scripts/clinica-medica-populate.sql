/*
 * INSERÇÕES NA BASE DE DADOS
 */
-- inserções na relação Especialidades
insert into Especialidade(CodEspec, NomeEspec, Descricao) values (0001, 'Clínico Geral', 'Consultas, exames, prescricoes.');
insert into Especialidade(CodEspec, NomeEspec, Descricao) values (0002, 'Pediatria', 'Assistência à criança e ao adolescente.');
insert into Especialidade values (0003, 'Odontologista', 'Cuidados bucais');
insert into Especialidade values (0033, 'dermatologista', 'Especializado em pele e cabelos');
insert into Especialidade values (0077, 'Psicologista', 'Terapia comportamental');
insert into Especialidade values (0066, 'Psiquiatria', 'Tratamento de problemas mentais');


-- inserções na relação Clínica
insert into Clinica(CodCli, NomeCli, Endereco, Telefone, Email) 
values (1001, 'Renascer', 'Rua Exp. Guilherme Salvador, 57 - Recife', '81995374533', 'oi@renascer.com');
insert into Clinica values (1002, 'Sim!', 'Av. Vieira Aguiar, 3234 - Olinda', '81995374537', 'contato@sim.com.br');
insert into Clinica values (1003, 'Hapvida', 'Rod BR 101, km 30 - Recife', '81995373544', 'hapvida@sac.com.br');
insert into Clinica values (1004, 'Clean', 'Rod BR 232, km 10 - Gravatá', '81995373545', 'clean@sac.com.br');


-- inserções na relação Paciente date: YYYY:MM:DD
insert into Paciente (CpfPaciente, NomePac, DataNascimento, Genero, Telefone, Email)
values ('12345678912', 'Valéria', '1980-01-22', 'F', '88995374501', 'val@gmail.com');
insert into Paciente values ('12345678913', 'Jonh', '1982-01-23', 'M', '88995374573', 'amplificado@gmail.com');
insert into Paciente values ('12345678914', 'Helena', '1999-01-23', 'F', '88995374574', 'Helleena@gmail.com');
insert into Paciente values ('12345678915', 'Bonifácio', '2018-11-10', 'M', '88995374575', 'jose_bonifacio@ufrpe.br');

-- inserções na associação Medico
insert into Medico (CodMed, NomeMed, Genero, Telefone, Email, CodEspec)
values (2001, 'Arlindo', 'M', '81995078534', 'arlindomorais@gmail.com', 0001);
insert into Medico values (2002, 'Marília', 'F', '81995078534', 'marilia@ooutlook.com', 0002);
insert into Medico values (2003, 'Vitória', 'F', '81995078534', 'vitoria@ooutlook.com', 0003);
insert into Medico values (2033, 'Pedro', 'M', '81999999911', 'pedrobeltrao@hsc.com.br', 0033);
insert into Medico values (2133, 'Telma', 'F', '81999999912', 'telmasilva@hsc.com.br', 0033);
insert into Medico values (2233, 'Francisca', 'F', '81999999913', 'drfran@hsc.com.br', 0033);
insert into Medico values (2012, 'Ana', 'F', '81999999943', 'anaf@hsgr.com.br', 0003);
insert into Medico values (2207, 'Heloise', 'F', '81944448912', 'heloises@shn.io', 0077);

-- describe Medico;

-- inserções na relação ClinicaMedico
insert into ClinicaMedico (CodCli, CodMed, DataIngresso, CargaHorariaSemanal) values (1001, 2001, '2015-11-21', 40);
insert into ClinicaMedico values (1001, 2002, '2021-09-25', 15);
insert into ClinicaMedico values (1001, 2003, '2017-07-22', 30.5);
insert into ClinicaMedico values (1002, 2003, '2017-08-21', 9.1);
insert into ClinicaMedico values (1003, 2003, '2002-02-02', 45);
insert into ClinicaMedico values (1002, 2033, '2008-03-30', 40);
insert into ClinicaMedico values (1002, 2133, '1998-06-15', 10);
insert into ClinicaMedico values (1003, 2233, '2016-12-22', 60);
insert into ClinicaMedico values (1001, 2012, '2000-07-21', 30);
-- delete from Medico where CodMed = 2133;
-- select * from ClinicaMedico;

-- inserções de tuplas na relação AgendaConsulta  DATETIME format: 'YYYY-MM-DD hh:mm:ss'
insert into AgendaConsulta (CodCli, CodMed, CpfPaciente, DataHora) values (1001, 2001, '12345678912', '2021-09-29 14:30:00');
insert into AgendaConsulta values (1001, 2001, '12345678913', '2021-09-29 15:00:00');
insert into AgendaConsulta values (1002, 2003, '12345678913', '2021-09-29 15:50:00');

/*
select * from Especialidade;
select * from Clinica;
select * from ClinicaMedico;
*/
