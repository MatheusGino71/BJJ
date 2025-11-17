# 🥋 NGBJJ - Sistema de Gerenciamento para Academia de Jiu-Jitsu

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.19-2D3748?style=for-the-badge&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

Sistema completo de **Website Institucional + CRM** para academias de Jiu-Jitsu, com design premium inspirado em marcas de luxo como Louis Vuitton.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Endpoints](#-api-endpoints)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

**NGBJJ** é uma solução completa para academias de Jiu-Jitsu que combina:

- 🌐 **Website Institucional** - Landing page premium com animações e design sofisticado
- 💼 **Sistema CRM** - Gerenciamento completo de leads, alunos e pagamentos
- 📊 **Dashboard Admin** - Interface intuitiva para visualização de dados e gestão
- 🔒 **API REST** - Backend robusto com Prisma ORM e SQLite/PostgreSQL

O design segue uma paleta de cores luxury (preto, ouro, branco) com tipografia elegante e animações suaves usando Framer Motion.

---

## ✨ Funcionalidades

### 🏠 Website Institucional

- **Hero Section** - Imagem de fundo impactante com gradiente e animações
- **Sobre a Academia** - História e galeria de fotos
- **Programas** - 4 programas principais (Fundamentals, Advanced, Competition, Kids)
- **Instrutores** - Perfis dos professores com modais de biografia
- **Horários** - Grade de horários com filtros por programa
- **Contato** - Formulário integrado com CRM + mapa + informações
- **Navegação Full-Screen** - Menu overlay com efeitos de transição
- **Responsivo** - Design mobile-first totalmente adaptável

### 💼 Sistema CRM

#### Dashboard Administrativo
- **Estatísticas em Tempo Real**
  - Total de alunos e alunos ativos
  - Total de leads e leads novos do mês
  - Receita mensal projetada
  - Pagamentos pendentes
  - Presenças do dia

#### Gestão de Leads
- Visualização completa de todos os leads
- Atualização de status (Novo/Contatado/Convertido/Perdido)
- Exclusão de leads com confirmação
- Visualização de mensagens e histórico

#### Gestão de Alunos
- Cadastro completo de alunos
- Informações: Faixa, Programa, Plano, Mensalidade
- Status (Ativo/Inativo)
- Integração com sistema de pagamentos

#### Controle de Pagamentos
- Histórico de pagamentos
- Status (Pendente/Pago/Atrasado)
- Datas de vencimento e pagamento
- Métodos de pagamento
- Cálculo automático de receita

#### Outras Funcionalidades
- Registro de presenças
- Sistema de notas/comentários
- Gestão de aulas experimentais
- Calendário de eventos

---

## 🛠 Tecnologias

### Frontend
- **[Next.js 16.0](https://nextjs.org/)** - Framework React com App Router e Turbopack
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Framer Motion 12.23](https://www.framer.com/motion/)** - Biblioteca de animações
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para UI

### Backend
- **[Prisma ORM 6.19](https://www.prisma.io/)** - ORM type-safe para Node.js
- **[SQLite](https://www.sqlite.org/)** - Banco de dados (desenvolvimento)
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados (produção - recomendado)
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)** - Hashing de senhas
- **[Next-Auth](https://next-auth.js.org/)** - Autenticação (preparado)

### DevOps
- **[Git](https://git-scm.com/)** - Controle de versão
- **[GitHub](https://github.com/)** - Hospedagem de código
- **[Vercel](https://vercel.com/)** - Deploy recomendado (Next.js)

---

## 📦 Instalação

### Pré-requisitos

- **Node.js** 18.x ou superior
- **npm** ou **yarn**
- **Git**

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/MatheusGino71/BJJ.git
cd BJJ
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o banco de dados**
```bash
# Gerar cliente Prisma
npx prisma generate

# Criar/atualizar banco de dados
npx prisma db push

# Popular com dados iniciais
npm run seed
```

4. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz:
```env
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="sua-chave-secreta-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

6. **Acesse a aplicação**
- Website: http://localhost:3000
- Dashboard Admin: http://localhost:3000/admin

---

## 🚀 Uso

### Credenciais Padrão

Após executar o seed, use estas credenciais para acessar o dashboard:

- **Email:** `admin@ngbjj.com`
- **Senha:** `admin123`

⚠️ **IMPORTANTE:** Altere essas credenciais em produção!

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm start            # Inicia servidor de produção

# Database
npx prisma studio    # Abre interface visual do banco
npx prisma generate  # Gera cliente Prisma
npx prisma db push   # Atualiza banco de dados
npm run seed         # Popula banco com dados iniciais

# Linting
npm run lint         # Executa ESLint
```

---

## 📁 Estrutura do Projeto

```
BJJ/
├── app/                          # App Router do Next.js
│   ├── admin/                    # Dashboard administrativo
│   │   └── page.tsx             # Página principal do CRM
│   ├── api/                      # API Routes
│   │   ├── leads/               # Endpoints de leads
│   │   ├── students/            # Endpoints de alunos
│   │   ├── payments/            # Endpoints de pagamentos
│   │   ├── attendance/          # Endpoints de presença
│   │   └── dashboard/           # Endpoints de estatísticas
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout principal
│   ├── loading.tsx              # Loading screen
│   └── page.tsx                 # Homepage
├── components/                   # Componentes React
│   ├── AcademiaSection.tsx      # Seção sobre a academia
│   ├── ContatoSection.tsx       # Seção de contato
│   ├── Footer.tsx               # Rodapé
│   ├── HeroSection.tsx          # Hero com imagem
│   ├── HorariosSection.tsx      # Grade de horários
│   ├── InstrutoresSection.tsx   # Perfis dos instrutores
│   ├── Navigation.tsx           # Menu de navegação
│   ├── ProgramasSection.tsx     # Programas oferecidos
│   ├── Section.tsx              # Wrapper de seções
│   └── SmoothScroll.tsx         # Scroll suave
├── lib/                         # Bibliotecas e utilidades
│   ├── auth.ts                  # Funções de autenticação
│   └── prisma.ts                # Cliente Prisma singleton
├── prisma/                      # Configuração do Prisma
│   ├── schema.prisma            # Schema do banco de dados
│   ├── seed.ts                  # Script de seed
│   └── dev.db                   # Banco SQLite (dev)
├── public/                      # Arquivos estáticos
│   └── images/                  # Imagens do projeto
├── .env                         # Variáveis de ambiente
├── next.config.ts               # Configuração do Next.js
├── tailwind.config.ts           # Configuração do Tailwind
├── tsconfig.json                # Configuração do TypeScript
├── package.json                 # Dependências do projeto
└── README.md                    # Este arquivo
```

---

## 🔌 API Endpoints

### Leads

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/leads` | Lista todos os leads |
| POST | `/api/leads` | Cria novo lead |
| GET | `/api/leads/[id]` | Busca lead por ID |
| PATCH | `/api/leads/[id]` | Atualiza lead |
| DELETE | `/api/leads/[id]` | Deleta lead |

### Alunos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/students` | Lista todos os alunos |
| POST | `/api/students` | Cria novo aluno |
| GET | `/api/students/[id]` | Busca aluno por ID |
| PATCH | `/api/students/[id]` | Atualiza aluno |
| DELETE | `/api/students/[id]` | Deleta aluno |

### Pagamentos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/payments` | Lista todos os pagamentos |
| POST | `/api/payments` | Registra novo pagamento |

### Presenças

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/attendance` | Lista presenças |
| POST | `/api/attendance` | Registra presença |

### Dashboard

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/dashboard/stats` | Retorna estatísticas gerais |

---

## 🎨 Design System

### Paleta de Cores

```css
--luxury-black: #0A0A0A    /* Fundo principal */
--luxury-white: #FAFAFA    /* Texto claro */
--luxury-gold: #C9A962     /* Destaques dourados */
--luxury-royal: #1A2332    /* Fundo secundário */
```

### Tipografia

- **Headings:** Playfair Display (Serif)
- **Body:** Inter (Sans-serif)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Roadmap

- [ ] Implementar autenticação completa com NextAuth
- [ ] Adicionar gráficos ao dashboard (recharts)
- [ ] Integração com gateway de pagamento
- [ ] Sistema de notificações por email
- [ ] Portal do aluno
- [ ] Aplicativo mobile (React Native)
- [ ] Integração com Google Maps
- [ ] Sistema de agendamento de aulas
- [ ] Chat em tempo real

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Matheus Gino**

- GitHub: [@MatheusGino71](https://github.com/MatheusGino71)

---

## 🙏 Agradecimentos

- Design inspirado em Louis Vuitton e marcas de luxo
- Comunidade Next.js e Prisma
- Todos os contribuidores do projeto

---

<div align="center">

### 🥋 NGBJJ - A Arte da Excelência

**Desenvolvido com 💛 para a comunidade de Jiu-Jitsu**

[⬆ Voltar ao topo](#-ngbjj---sistema-de-gerenciamento-para-academia-de-jiu-jitsu)

</div>
