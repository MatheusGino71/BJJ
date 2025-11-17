# 🚀 Início Rápido - CRM NGBJJ

## 1️⃣ Iniciar o Servidor

```bash
npm run dev
```

Aguarde a mensagem: `✓ Ready in XXXms`

## 2️⃣ Acessar o Website

Abra no navegador: **http://localhost:3000**

Você verá:
- Hero com a imagem que você adicionou ✅
- Todas as seções (Academia, Programas, Instrutores, Horários, Contato)
- Design premium preto e dourado ✅

## 3️⃣ Testar o Formulário de Contato

1. Role até a seção **Contato**
2. Preencha os campos:
   - Nome: "Teste Lead"
   - Email: "teste@example.com"
   - Telefone: "(11) 99999-9999"
   - Mensagem: "Quero fazer aula experimental"
3. Clique em **Enviar Mensagem**
4. Veja o alerta de sucesso ✅

## 4️⃣ Acessar o Dashboard Admin

Abra: **http://localhost:3000/admin**

Você verá o dashboard com:
- 📊 Total de Alunos: 2
- 💬 Total de Leads: 3 (incluindo o que você acabou de criar!)
- 💰 Receita Mensal: R$ 650,00
- ⚠️ Pagamentos Pendentes: 2
- ✅ Presenças Hoje: 2

## 5️⃣ Explorar os Dados no Prisma Studio

```bash
npm run db:studio
```

Isso abre uma interface gráfica onde você pode:
- Ver todos os leads
- Ver todos os alunos
- Ver pagamentos e presenças
- Editar dados manualmente

## 6️⃣ Testar as APIs

Use Postman, Insomnia ou Thunder Client (VS Code):

### Listar Leads
```
GET http://localhost:3000/api/leads
```

### Criar Aluno
```
POST http://localhost:3000/api/students
Content-Type: application/json

{
  "name": "Pedro Silva",
  "email": "pedro@example.com",
  "phone": "(11) 98888-7777",
  "program": "fundamentos",
  "planType": "mensal",
  "monthlyFee": 350
}
```

### Ver Estatísticas
```
GET http://localhost:3000/api/dashboard/stats
```

## 7️⃣ Estrutura de Navegação

```
http://localhost:3000        → Website público (Home)
http://localhost:3000/admin  → Dashboard CRM (Admin)
```

## 🗂️ Arquivos Importantes

```
📁 app/
  📁 api/                    ← APIs do CRM
    📁 leads/                ← CRUD de leads
    📁 students/             ← CRUD de alunos
    📁 payments/             ← Pagamentos
    📁 attendance/           ← Presenças
    📁 dashboard/            ← Estatísticas
  📁 admin/                  
    📄 page.tsx              ← Dashboard principal
  
📁 components/               ← Componentes do site
  📄 ContatoSection.tsx      ← Formulário integrado com CRM
  
📁 prisma/
  📄 schema.prisma           ← Estrutura do banco
  📄 seed.ts                 ← Dados iniciais
  
📁 lib/
  📄 prisma.ts               ← Cliente do banco
  📄 auth.ts                 ← Funções de segurança
```

## 📊 Dados Pré-carregados

### Usuário Admin
```
Email: admin@ngbjj.com
Senha: admin123
```

### 2 Leads
- João Silva (new)
- Maria Santos (contacted)

### 2 Alunos
- Carlos Oliveira (Faixa Azul, Avançado)
- Ana Costa (Faixa Branca, Fundamentos)

### Pagamentos
- 2 pendentes (Carlos e Ana)

### Presenças
- 2 registros de hoje

## ⚡ Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build
npm start

# Prisma Studio (visualizar banco)
npm run db:studio

# Popular banco novamente
npm run db:seed

# Gerar Prisma Client
npx prisma generate

# Atualizar estrutura do banco
npx prisma db push

# Ver logs do Prisma
npx prisma studio --port 5555
```

## 🎯 Fluxo Completo de Teste

1. **Inicie o servidor**: `npm run dev`
2. **Abra o site**: http://localhost:3000
3. **Envie o formulário** de contato
4. **Abra o dashboard**: http://localhost:3000/admin
5. **Veja o novo lead** criado (estatística aumentou!)
6. **Abra Prisma Studio**: `npm run db:studio`
7. **Veja o lead** na tabela "Lead"

## 🔥 Pronto para Usar!

Tudo funcionando:
- ✅ Website premium
- ✅ CRM completo
- ✅ Dashboard administrativo
- ✅ APIs funcionais
- ✅ Banco de dados populado
- ✅ Formulário integrado

**Agora é só customizar e colocar em produção!** 🥋

---

**Dúvidas?** Consulte:
- `README.md` - Website
- `CRM-DOCUMENTATION.md` - CRM completo
- `CRM-COMPLETE.md` - Resumo do que foi feito
