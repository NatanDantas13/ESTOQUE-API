# 📘 Documentação Técnica - Sistema de Gestão de Estoque (NestJS)

---

## 1. 🎯 Objetivo do Sistema

|Objetivo|Descrição|
|---|---|
|Controle de estoque|Cadastro, movimentação, inventário e alerta|
|Gestão de produtos|Com categorias, códigos, unidades e preços|
|Usuários e permissões|Gestão de acessos e perfis|
|Relatórios|Consultas de movimentações, produtos críticos|
|Fornecedores|Cadastro e histórico de fornecimento|

---

## 2. 👥 Público-Alvo

|Perfil|Descrição|
|---|---|
|Administrador|Acesso completo, incluindo relatórios e usuários|
|Funcionário|Cadastro e movimentação, acesso restrito|
|Multicliente|(Opcional) Isolamento por empresa/cliente|

---

## 3. 🧩 Entidades e Atributos

### 🧱 3.1 Produto

|Campo|Tipo|Regras/Descrição|
|---|---|---|
|`id`|UUID|Identificador único|
|`code`|string|Código/SKU único|
|`name`|string|Nome do produto|
|`category`|string|Categoria do produto|
|`unit`|Enum<Unidade>|Unidade de medida|
|`price`|decimal(10,2)|Valor de custo ou venda|
|`minimumStock`|integer|Quantidade mínima para alerta|
|`currentStock`|integer|Atualizado a cada movimentação|
|`supplierId`|UUID (FK)|Referência para fornecedor (opcional)|

---

### 🧱 3.2 Movimentação

|Campo|Tipo|Regras/Descrição|
|---|---|---|
|`id`|UUID|Identificador único|
|`productId`|UUID (FK)|Produto relacionado|
|`userId`|UUID (FK)|Usuário que realizou a ação|
|`quantity`|integer|Quantidade movimentada|
|`type`|Enum<MovType>|Entrada ou saída|
|`date`|datetime|Data da movimentação|
|`observation`|string (opcional)|Justificativa ou observações|

---

### 🧱 3.3 Usuário

| Campo      | Tipo           | Regras/Descrição     |
| ---------- | -------------- | -------------------- |
| `id`       | UUID           | Identificador único  |
| `name`     | string         | Nome completo        |
| `email`    | string         | E-mail único         |
| `password` | string         | Hash com bcrypt      |
| `role`     | Enum<UserRole> | Perfil de acesso     |
| `active`   | boolean        | Controle de ativação |

---

### 🧱 3.4 Fornecedor

|Campo|Tipo|Regras/Descrição|
|---|---|---|
|`id`|UUID|Identificador único|
|`name`|string|Nome fantasia|
|`cnpj`|string|Formato 00.000.000/0000-00|
|`email`|string|Contato|
|`phone`|string|Telefone|
|`address`|string|Endereço completo|

---

### 🧱 3.5 Relacionamentos

|Entidade|Relacionamento|Descrição|
|---|---|---|
|Produto → Fornecedor|ManyToOne|Um fornecedor pode fornecer muitos produtos|
|Movimentação → Produto|ManyToOne|Muitas movimentações para um produto|
|Movimentação → Usuário|ManyToOne|Muitas movimentações feitas por um usuário|

---

## 4. 🎛️ Enums

### 🧾 Unidade (Unidade de Medida)

ts

CopiarEditar

`Unidade = ['UNIDADE', 'LITRO', 'KILOGRAMA', 'CAIXA']`

|Valor|Descrição|
|---|---|
|UNIDADE|Unidade simples|
|LITRO|Volume|
|KILOGRAMA|Peso|
|CAIXA|Agrupamento físico|

---

### 🔁 Tipo de Movimentação (MovType)

ts

CopiarEditar

`MovType = ['ENTRADA', 'SAIDA']`

|Valor|Descrição|
|---|---|
|ENTRADA|Entrada no estoque|
|SAIDA|Saída/baixa do estoque|

---

### 🧑 Perfil de Usuário (UserRole)

ts

CopiarEditar

`UserRole = ['ADMIN', 'OPERADOR']`

|Valor|Descrição|
|---|---|
|ADMIN|Controle total do sistema|
|OPERADOR|Acesso restrito a operações|

---

## 5. 📦 Regras de Negócio

|Regra|Aplicação|
|---|---|
|Estoque não pode ficar negativo|Ao realizar saída, valida saldo|
|Alerta de estoque mínimo|Notificação quando `currentStock` ≤ `minimumStock`|
|SKU único por produto|`code` deve ser único por produto|
|Restrição por perfil|ADMIN pode excluir e ver relatórios, OPERADOR não|
|Registro obrigatório de movimentação|Nenhuma alteração de estoque ocorre sem log|
|A movimentação altera o estoque automaticamente|Atualização de `currentStock` após cada entrada ou saída|

---

## 6. 🔐 Segurança

|Item|Detalhe|
|---|---|
|Autenticação|JWT com validade e refresh|
|Hash de senha|`bcrypt` com salt|
|Autorização|Guards com verificação de `role`|
|Controle de acesso|Decorators personalizados (`@Roles`)|
|Rotas privadas|Protegidas por `AuthGuard`|

---

## 7. 📂 Estrutura de Pastas

|Caminho|Descrição|
|---|---|
|`src/config/`|Configuração de banco, JWT, variáveis|
|`src/shared/`|Interceptadores, guards, decorators|
|`src/modules/products/`|Produto: entity, service, controller|
|`src/modules/inventory/`|Movimentação de estoque|
|`src/modules/users/`|Gestão de usuários|
|`src/modules/auth/`|Login, token, guards|
|`src/modules/suppliers/`|Cadastro de fornecedores|
|`src/modules/reports/`|Geração de relatórios|
|`src/main.ts`|Bootstrap principal da aplicação|

---

## 8. 📊 Relatórios e Dashboards (futuro)

|Tipo de Relatório|Filtros Possíveis|Descrição|
|---|---|---|
|Movimentações|Por data, produto, tipo|Histórico de entradas e saídas|
|Estoque mínimo|Automático|Produtos abaixo do nível mínimo|
|Produtos parados|Sem movimentação recente|Identificação de itens obsoletos|
|Auditoria por usuário|Por período|Log de ações do operador|
