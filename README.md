# Clínica Médica

## Estrutura dos diretórios

      .
      ├── rest-service
      │   ├── index.ts
      │   └── ...    
      ├── web-interface             # SPA interface
      │   ├── index.ts
      │   ├── README.MD             # Getting started guide
      │   ├── src             
      │   └── ...                 
      └── ...


### Modelo Entidade Relacionamento Estendido | MySQL
![esquema clínica médica](https://raw.githubusercontent.com/jsvitor/iaad-bsi-ufrpe/main/semana%2005-06/clinica_medica_diagram.png)


## Funcionalidades da aplicação
- [ ] A escolha da linguagem de programação é livre (python, dart, java, php, javascript, entre outras), mas o BD deve ser o MySQL.

- [ ] O sistema deve contemplar as quatro operações básicas de CRUD (Create, Read, Update e Delete).

- [ ] Incluir no sistema pelo menos um trigger e um stored procedure. 

- [ ] Incluir no sistema no mínimo duas consultas, envolvendo junções, funções de agregação e agrupamentos. 

- [ ] O banco de dados deve estar populado.

- [ ] O sistema deve dispor de interface gráfica, seja web, mobile ou desktop.


## Tarefas

### Gravar o vídeo mostrando o funcionamento da aplicação

### Interface
- [ ] Protótipo no Figma

### Web service
- [ ] CRUD de medico
- [ ] CRUD de clinica
- [ ] CRUD de paciente
- [ ] CRUD de agendaConsulta
- [ ] CRUD clinicamedico

- [ ] Configuração do ambiente de desenvolvimento
- [ ] Criar as rotas para médico
- [ ] Fazer a conexão com o banco de dados mysql
- [ ] Documentar


## Medico

### Listar os 10 primeiros registros médicos

````GET```` ``/medico``


### Criar um registro de médico

```POST``` ``/medico``

``BODY``

````json
{
      "name": "Arlindo",
      "gender": "M",
      "phone": "81995374530",
      "email": "arlindo@hr.com",
      "codEspec": 3001
}
````


### Alterar um registro de médico usando o CodMed

```PUT``` ``/medico/:codmed``

#### Body

```json
{
      "name": "José"
}
```


### Deletar um registro de Médico

```DELETE``` ```/medico/:codmed```

## Especialidade

### Listar os 10 primeiros registros  de Especialidade

````GET```` ``/specialty``


### Criar um registro de Especialidade

```POST``` ``/specialty``

``BODY``

````json
{
	"CodEspec":"005410",
	"NomeEspec": "Oftalmologia",
	"Descricao": "Epecialidade que cuida da saude dos olhos."
}
````


### Alterar um registro de médico usando o CodEspec

```PUT``` ``/specialty``

#### Body

```json
{
	"CodEspec":"06791",
	"column": "NomeEspec",
	"value": "Pediatria1"
}
```


### Deletar um registro de Especialidade

```DELETE``` ```/specialty```

#### Body

```json
{
	"CodEspec":"06791"
}
```


### 

## 

