# 🚀 QUICK START - NGBJJ Website

## Primeiro Acesso

### 1. Executar o Projeto
```bash
npm run dev
```

Acesse: **http://localhost:3000**

### 2. O Que Você Verá

✅ **Site Completo e Funcional** com:
- Menu de navegação responsivo
- Seção Hero com imagem de fundo
- Seção Academia com história e galeria
- Programas com hover interativo
- Instrutores com modals de biografia
- Horários filtráveis
- Formulário de contato
- Footer completo

🎨 **Imagens Temporárias**:
- Todas as imagens usam placeholders do Unsplash
- Design premium com estética de luxo
- Grayscale (preto e branco) por padrão

## Próximos Passos Imediatos

### Passo 1: Testar Navegação
1. Clique no menu superior
2. Teste o menu hambúrguer (mobile)
3. Role a página e veja as animações
4. Teste os filtros de horários

### Passo 2: Customizar Conteúdo
Abra os arquivos e edite:

```typescript
// components/AcademiaSection.tsx
// Linhas 29-49: Edite sua história real
```

```typescript
// components/InstrutoresSection.tsx
// Linhas 15-87: Adicione seus instrutores reais
```

```typescript
// components/HorariosSection.tsx
// Linhas 13-42: Configure seus horários reais
```

### Passo 3: Adicionar Suas Imagens

#### Opção A: Substituir URLs do Unsplash
Simplesmente procure por `images.unsplash.com` nos componentes e substitua pelas suas imagens.

#### Opção B: Usar Imagens Locais
1. Adicione suas imagens em `public/images/`
2. Substitua as URLs:

```typescript
// De:
src="https://images.unsplash.com/photo-xxx"

// Para:
src="/images/sua-foto.jpg"
```

### Passo 4: Configurar Informações de Contato

```typescript
// components/ContatoSection.tsx
// Linhas 83-111

// Edite:
- Endereço
- Telefone
- WhatsApp
- Email
- Horários de atendimento
```

## Personalizações Rápidas

### Mudar Cor de Acento (Ouro)
```typescript
// tailwind.config.ts
colors: {
  luxury: {
    gold: "#C9A962", // ← Mude aqui
  }
}
```

### Alterar Slogan
```typescript
// components/HeroSection.tsx
// Linha 40
<p>A Arte da Excelência</p> // ← Mude aqui
```

### Adicionar Redes Sociais
```typescript
// components/Footer.tsx
// Linhas 32-42
// Adicione seus links reais
```

## Problemas Comuns

### Erro: "Cannot find module"
```bash
npm install
```

### Imagens não carregam
- Verifique se está usando Next/Image corretamente
- URLs do Unsplash precisam de configuração em next.config.ts (já configurado)

### Animações não funcionam
- Certifique-se que está usando 'use client' no topo dos componentes

## Build de Produção

Quando estiver pronto para deploy:

```bash
npm run build
npm start
```

## Deploy Rápido

### Vercel (Mais Fácil)
1. Crie conta em vercel.com
2. Conecte seu repositório GitHub
3. Deploy automático!

### Netlify
1. Crie conta em netlify.com
2. Arraste a pasta do projeto
3. Pronto!

## Checklist de Lançamento

- [ ] Testei todas as seções
- [ ] Editei todos os textos
- [ ] Adicionei minhas imagens (ou vou usar placeholders)
- [ ] Configurei informações de contato
- [ ] Testei em mobile
- [ ] Testei formulário de contato
- [ ] Deploy realizado

## Suporte

Consulte os arquivos:
- `README.md` - Documentação completa
- `DEVELOPMENT.md` - Guia de desenvolvimento
- `ASSETS.md` - Instruções sobre imagens
- `PLACEHOLDERS.md` - Como usar placeholders

---

**🥋 Seja bem-vindo à NGBJJ!**
