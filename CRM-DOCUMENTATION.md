# 📊 Sistema CRM - NGBJJ

## Visão Geral

Sistema completo de **CRM (Customer Relationship Management)** integrado ao website NGBJJ para gerenciar leads, alunos, pagamentos, presenças e muito mais.

## 🗄️ Estrutura do Banco de Dados

### Modelos Principais

#### 1. **User** (Usuários Admin)
- Gerenciamento de usuários do sistema
- Níveis de acesso: admin, manager, instructor
- Autenticação segura com senhas hash

#### 2. **Lead** (Contatos/Prospects)
- Captura automática de formulários
- Status: new, contacted, converted, lost
- Fonte: website, instagram, facebook, referral
- Notas e histórico de follow-up

#### 3. **Student** (Alunos)
- Dados pessoais completos
- Informações do Jiu-Jitsu (faixa, programa)
- Dados financeiros (plano, mensalidade)
- Contato de emergência
- Status: active, inactive, frozen, cancelled

#### 4. **Payment** (Pagamentos)
- Controle de mensalidades
- Status: pending, paid, late, cancelled
- Métodos de pagamento
- Data de vencimento e pagamento

#### 5. **Attendance** (Presenças)
- Registro diário de presenças
- Por programa e instrutor
- Histórico completo

#### 6. **Note** (Notas/Observações)
- Anotações sobre leads e alunos
- Tipos: general, follow_up, issue, achievement
- Histórico completo de interações

#### 7. **TrialClass** (Aulas Experimentais)
- Agendamento de aulas experimentais
- Gerenciamento de conversão

#### 8. **Event** (Eventos)
- Seminários, competições, promoções
- Avisos e comunicados

## 🚀 API Endpoints

### Leads
```
GET    /api/leads           - Listar todos os leads
POST   /api/leads           - Criar novo lead
GET    /api/leads/[id]      - Buscar lead específico
PATCH  /api/leads/[id]      - Atualizar lead
DELETE /api/leads/[id]      - Deletar lead
```

### Alunos
```
GET    /api/students        - Listar todos os alunos
POST   /api/students        - Criar novo aluno
GET    /api/students/[id]   - Buscar aluno específico
PATCH  /api/students/[id]   - Atualizar aluno
DELETE /api/students/[id]   - Deletar aluno
```

### Pagamentos
```
GET    /api/payments        - Listar pagamentos (filtro opcional por aluno)
POST   /api/payments        - Registrar pagamento
```

### Presenças
```
GET    /api/attendance      - Listar presenças (filtros: aluno, data)
POST   /api/attendance      - Registrar presença
```

### Dashboard
```
GET    /api/dashboard/stats - Estatísticas gerais do CRM
```

## 📱 Páginas do Sistema

### 1. Website Público (`/`)
- Página institucional com todas as seções
- Formulário de contato integrado ao CRM
- Leads criados automaticamente

### 2. Dashboard Admin (`/admin`)
- Visão geral com estatísticas
- Gerenciamento de leads
- Gerenciamento de alunos
- Controle de pagamentos
- Registro de presenças

## 🔧 Configuração Inicial

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Banco de Dados
O arquivo `.env` já está configurado com SQLite.

### 3. Gerar Prisma Client
```bash
npx prisma generate
npx prisma db push
```

### 4. Popular Banco com Dados de Teste
```bash
npx prisma db seed
```

Isso criará:
- 1 usuário admin
- 2 leads de exemplo
- 2 alunos de exemplo
- Pagamentos e presenças

### 5. Credenciais Iniciais
```
Email: admin@ngbjj.com
Senha: admin123
```

⚠️ **IMPORTANTE**: Altere a senha em produção!

## 📊 Funcionalidades do Dashboard

### Visão Geral
- Total de alunos (ativos e inativos)
- Leads (total e novos do mês)
- Receita mensal projetada
- Pagamentos pendentes
- Presenças do dia
- Ações rápidas

### Gerenciamento de Leads
- Visualizar todos os leads
- Filtrar por status
- Adicionar notas
- Converter em aluno
- Marcar como perdido

### Gerenciamento de Alunos
- Visualizar todos os alunos
- Filtrar por status, faixa, programa
- Editar informações
- Ver histórico de pagamentos
- Ver histórico de presenças
- Adicionar notas

### Controle Financeiro
- Lista de pagamentos pendentes
- Registrar pagamento
- Pagamentos em atraso
- Relatório de receita

### Registro de Presenças
- Marcar presença diária
- Ver presenças por data
- Relatório de frequência por aluno

## 🔐 Segurança

### Senhas
- Hash com bcrypt (12 rounds)
- Nunca armazenadas em texto plano

### API
- Validação de dados em todos os endpoints
- Tratamento de erros adequado
- Proteção contra SQL injection (Prisma ORM)

### Produção
- [ ] Implementar autenticação completa (NextAuth.js)
- [ ] Adicionar middleware de proteção de rotas
- [ ] Configurar CORS adequadamente
- [ ] Usar HTTPS
- [ ] Variáveis de ambiente seguras

## 📈 Métricas e KPIs

O sistema calcula automaticamente:

1. **Taxa de Conversão**
   - Leads → Alunos

2. **Receita Mensal**
   - Soma das mensalidades ativas

3. **Taxa de Presença**
   - Frequência média dos alunos

4. **Inadimplência**
   - Pagamentos em atraso

5. **Crescimento**
   - Novos alunos por mês
   - Novos leads por mês

## 🛠️ Desenvolvimento Futuro

### Prioridade Alta
- [ ] Sistema de autenticação completo
- [ ] Tabelas interativas de leads/alunos
- [ ] Sistema de busca e filtros avançados
- [ ] Exportação de dados (PDF, Excel)
- [ ] Notificações por email

### Prioridade Média
- [ ] Gráficos e relatórios visuais
- [ ] Sistema de mensagens/chat
- [ ] Integração com WhatsApp
- [ ] Agendamento de aulas experimentais
- [ ] Portal do aluno

### Prioridade Baixa
- [ ] App mobile (React Native)
- [ ] Integração com gateway de pagamento
- [ ] Sistema de contratos digitais
- [ ] Check-in via QR Code
- [ ] Gamificação (conquistas, rankings)

## 📚 Tecnologias Utilizadas

- **Next.js 14**: Framework React
- **TypeScript**: Tipagem estática
- **Prisma ORM**: Gerenciamento de banco de dados
- **SQLite**: Banco de dados (desenvolvimento)
- **Bcrypt**: Hash de senhas
- **Framer Motion**: Animações
- **Tailwind CSS**: Estilização

## 🔄 Migração para Produção

### Trocar SQLite por PostgreSQL

1. Instalar PostgreSQL
```bash
npm install @prisma/adapter-postgresql pg
```

2. Atualizar `.env`
```env
DATABASE_URL="postgresql://user:password@localhost:5432/ngbjj?schema=public"
```

3. Atualizar `prisma/schema.prisma`
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

4. Executar migrations
```bash
npx prisma migrate dev
npx prisma generate
```

## 📞 Suporte

Para dúvidas sobre o sistema CRM:
1. Consulte esta documentação
2. Veja os exemplos nas API routes
3. Teste os endpoints no Postman/Insomnia

## 🎯 Próximos Passos

1. **Testar o Dashboard**
   ```bash
   npm run dev
   ```
   Acesse: http://localhost:3000/admin

2. **Testar o Formulário**
   - Preencha o formulário de contato no site
   - Verifique se o lead foi criado no dashboard

3. **Explorar as APIs**
   - Use Postman ou similar
   - Teste todos os endpoints
   - Veja os dados sendo criados

4. **Customizar**
   - Adapte os campos conforme sua necessidade
   - Adicione novos status ou categorias
   - Crie relatórios personalizados

---

**Sistema desenvolvido especialmente para NGBJJ** 🥋
