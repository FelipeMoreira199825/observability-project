# Projeto
Projeto de Observabilidade com Kubernetes

## Descrição

Este projeto foi desenvolvido com o objetivo de demonstrar uma arquitetura moderna de observabilidade utilizando containers, Kubernetes e distributed tracing.

A aplicação possui:

- Frontend React
- Backend Node.js + Express
- Banco PostgreSQL
- OpenTelemetry
- Jaeger
- Kubernetes

O sistema realiza cadastro e listagem de usuários enquanto monitora automaticamente:

- requisições HTTP
- middlewares
- conexões TCP
- consultas PostgreSQL
- tempos de resposta
- traces distribuídos

---

# Arquitetura do Projeto

```text
Frontend React
        ↓
Backend Node.js / Express
        ↓
PostgreSQL
        ↓
OpenTelemetry Collector
        ↓
Jaeger UI
Tecnologias Utilizadas
Frontend
React.js
JavaScript
Backend
Node.js
Express
PostgreSQL
CORS
Observabilidade
OpenTelemetry
OTEL Collector
Jaeger
Infraestrutura
Docker
Kubernetes
Docker Desktop Kubernetes
Estrutura do Projeto
observability-project/
│
├── backend/
│   ├── server.js
│   ├── tracing.js
│   ├── package.json
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
│
├── k8s/
│   ├── backend/
│   ├── frontend/
│   ├── database/
│   ├── jaeger/
│   └── otel/
│
├── docs/
│
└── README.md
Funcionalidades
Cadastro de usuários
Listagem de usuários
API REST
Persistência em PostgreSQL
Observabilidade ponta a ponta
Distributed tracing
Monitoramento de requisições
Rastreamento de queries SQL
Serviços Kubernetes
Serviço	Porta
frontend-service	80
backend-service	80
database-service	5432
otel-collector	4317 / 4318
jaeger	16686
Pods Kubernetes

O ambiente Kubernetes contém os seguintes pods:

frontend-deployment
backend-deployment
database
jaeger
otel-collector

Todos executando em estado:

Running
Configuração do Backend

O backend foi desenvolvido utilizando Express e PostgreSQL.

Exemplo de configuração:

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5433,
});
OpenTelemetry

O backend foi instrumentado utilizando OpenTelemetry.

Monitoramentos realizados automaticamente:

HTTP Requests
Express Middleware
PostgreSQL Queries
TCP Connections
Tempo de resposta

Serviço registrado no Jaeger:

backend-monitoramento
Jaeger

O Jaeger foi utilizado para visualização de traces distribuídos.

Operações monitoradas:

GET /users
pg.query
pg.connect
middleware
TCP.CONNECT
Como Executar o Projeto
1. Clonar o projeto
git clone https://github.com/seu-repositorio/observability-project.git
2. Frontend

Executar o frontend:

kubectl port-forward svc/frontend-service 9090:80

Acessar:

http://localhost:9090
3. PostgreSQL

Executar port-forward do banco:

kubectl port-forward svc/database-service 5433:5432
4. OpenTelemetry Collector
kubectl port-forward svc/otel-collector 4317:4317
5. Jaeger
kubectl port-forward svc/jaeger 16686:16686

Acessar:

http://localhost:16686
6. Backend

Entrar na pasta backend:

cd backend

Instalar dependências:

npm install

Executar aplicação:

npm start
Endpoints da API
Listar usuários
GET /users
Criar usuário
POST /users

Exemplo:

{
  "name": "Felipe"
}
Frontend

A interface React permite:

cadastrar usuários
visualizar usuários
integração com backend REST
Backend

O backend Express realiza:

comunicação com PostgreSQL
gerenciamento das rotas
integração OpenTelemetry
exportação de traces
Banco de Dados

Banco utilizado:

PostgreSQL

Tabela criada automaticamente:

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
Observabilidade

A observabilidade foi implementada utilizando:

OpenTelemetry SDK
OTLP Exporter
Jaeger
OTEL Collector

Fluxo:

Backend
   ↓
OpenTelemetry SDK
   ↓
OTEL Collector
   ↓
Jaeger
Evidências do Projeto

As evidências do funcionamento encontram-se na pasta:

docs/

Contendo:

Pods Kubernetes
Services Kubernetes
Frontend funcionando
API Backend
Traces Jaeger
Trace detalhado
OpenTelemetry ativo
Resultado Obtido

O projeto demonstrou com sucesso:

Deploy em Kubernetes
Comunicação entre serviços
Persistência em banco
Distributed tracing
Monitoramento completo
Observabilidade ponta a ponta
Autor

Felipe Moreira