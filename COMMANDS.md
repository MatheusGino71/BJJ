# 🛠️ Comandos Úteis - NGBJJ

## Desenvolvimento

### Iniciar Servidor de Desenvolvimento
```bash
npm run dev
```
Acessa: http://localhost:3000 (ou 3001 se 3000 estiver ocupado)

### Parar Servidor
No terminal: `Ctrl + C`

### Reinstalar Dependências (se necessário)
```bash
Remove-Item -Recurse -Force node_modules
npm install
```

---

## Build e Produção

### Build de Produção
```bash
npm run build
```

### Executar Build de Produção
```bash
npm start
```

### Verificar Erros de Build
```bash
npm run lint
```

---

## Git

### Inicializar Repositório
```bash
git init
git add .
git commit -m "Initial commit - NGBJJ website"
```

### Conectar ao GitHub
```bash
git remote add origin https://github.com/SEU_USUARIO/ngbjj.git
git branch -M main
git push -u origin main
```

### Commits Subsequentes
```bash
git add .
git commit -m "Sua mensagem"
git push
```

---

## Limpeza e Manutenção

### Limpar Cache do Next.js
```bash
Remove-Item -Recurse -Force .next
npm run dev
```

### Verificar Versões
```bash
node --version
npm --version
npx next --version
```

### Atualizar Dependências
```bash
npm update
```

---

## Tailwind CSS

### Gerar CSS de Produção (Minificado)
Já acontece automaticamente no `npm run build`

### Verificar Classes Tailwind
```bash
npx tailwindcss -o output.css
```

---

## Otimização de Imagens

### Converter Imagem para WebP (PowerShell)
Requer ImageMagick:
```powershell
magick convert input.jpg -quality 85 output.webp
```

### Redimensionar Imagem
```powershell
magick convert input.jpg -resize 1200x1600 output.jpg
```

---

## Deploy

### Deploy no Vercel (CLI)
```bash
npm i -g vercel
vercel login
vercel
```

### Deploy no Netlify (CLI)
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

---

## Troubleshooting

### Erro: Port já em uso
```bash
# Windows - Matar processo na porta 3000
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess
```

### Erro: Module not found
```bash
npm install
```

### Erro: TypeScript
```bash
npx tsc --noEmit
```

### Limpar Tudo e Recomeçar
```bash
Remove-Item -Recurse -Force node_modules, .next, package-lock.json
npm install
npm run dev
```

---

## Testes

### Testar em Diferentes Dispositivos
```bash
# Encontrar seu IP local
ipconfig

# Acesse de outro dispositivo:
http://SEU_IP:3000
```

### Lighthouse (Performance)
1. Abra DevTools (F12)
2. Aba "Lighthouse"
3. "Generate report"

---

## Customização Rápida

### Mudar Porta de Desenvolvimento
Em `package.json`:
```json
"dev": "next dev -p 3005"
```

### Variáveis de Ambiente
Crie `.env.local`:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua_key
NEXT_PUBLIC_GA_ID=seu_id
```

Acesse no código:
```typescript
process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
```

---

## Atalhos Úteis

| Ação | Comando |
|------|---------|
| Instalar dependência | `npm install PACOTE` |
| Remover dependência | `npm uninstall PACOTE` |
| Atualizar Next.js | `npm install next@latest react@latest react-dom@latest` |
| Ver dependências | `npm list --depth=0` |
| Limpar cache npm | `npm cache clean --force` |

---

## Scripts Personalizados

Adicione em `package.json`:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "clean": "Remove-Item -Recurse -Force .next",
  "fresh": "Remove-Item -Recurse -Force node_modules && npm install"
}
```

---

## Links Úteis

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- TypeScript: https://www.typescriptlang.org/docs
- Vercel Deploy: https://vercel.com/docs
- Unsplash (fotos): https://unsplash.com

---

## Suporte

Para dúvidas, consulte:
1. README.md
2. DEVELOPMENT.md
3. Next.js Documentation
4. Stack Overflow

---

**Boa codificação! 🥋💻**
