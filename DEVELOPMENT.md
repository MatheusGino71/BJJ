# 🚀 Guia de Desenvolvimento NGBJJ

## Início Rápido

### 1. Primeiro Build
```bash
# Instalar dependências (já feito)
npm install

# Executar em desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

## 🎨 Customização do Conteúdo

### Alterar Textos e Conteúdo

#### Hero Section (`components/HeroSection.tsx`)
```typescript
// Linha 38-40: Título e Slogan
<h1>NGBJJ</h1>
<p>A Arte da Excelência</p>
```

#### Academia Section (`components/AcademiaSection.tsx`)
```typescript
// Linha 29-49: História e Filosofia
// Edite os parágrafos conforme sua história real
```

#### Programas Section (`components/ProgramasSection.tsx`)
```typescript
// Linha 12-45: Array de programas
const programs: Program[] = [
  {
    title: 'Fundamentos',
    description: '...',
    details: '...',
    level: 'Iniciante'
  },
  // Adicione ou edite programas
]
```

#### Instrutores Section (`components/InstrutoresSection.tsx`)
```typescript
// Linha 15-87: Array de instrutores
const instructors: Instructor[] = [
  {
    name: 'Mestre Alexandre Silva',
    belt: 'Faixa Coral',
    specialty: 'Jiu-Jitsu Tradicional',
    bio: '...',
    achievements: [...],
    image: '/images/instructor-1.jpg'
  },
  // Edite com dados reais dos seus instrutores
]
```

#### Horários Section (`components/HorariosSection.tsx`)
```typescript
// Linha 13-42: Array de horários
const schedules: Schedule[] = [
  {
    day: 'Segunda',
    time: '06:00 - 07:30',
    program: 'Fundamentos',
    instructor: 'Prof. Rafael',
    level: 'Todos'
  },
  // Edite com seus horários reais
]
```

#### Contato Section (`components/ContatoSection.tsx`)
```typescript
// Linha 83-111: Informações de contato
// Edite endereço, telefone, email e horários
```

### Alterar Cores

Edite `tailwind.config.ts`:

```typescript
colors: {
  luxury: {
    black: "#0A0A0A",     // Background escuro
    white: "#FAFAFA",     // Texto claro
    gold: "#C9A962",      // Acento dourado (PRINCIPAL)
    silver: "#B8B8B8",    // Secundário
    royal: "#1A2332",     // Background alternativo
  },
}
```

**Dica**: Para mudar a cor de acento principal, basta alterar `gold`.

### Alterar Fontes

Edite `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=SUA_FONTE_SERIF&family=SUA_FONTE_SANS&display=swap');
```

E depois em `tailwind.config.ts`:

```typescript
fontFamily: {
  serif: ["SUA_FONTE_SERIF", "serif"],
  sans: ["SUA_FONTE_SANS", "sans-serif"],
}
```

## 🖼️ Trabalhando com Imagens Temporárias

### Opção 1: Placeholders com Unsplash
Use URLs temporárias até ter as fotos finais:

```typescript
// Em qualquer componente com Image
<Image
  src="https://images.unsplash.com/photo-XXXXXXX?w=800&q=80"
  alt="..."
/>
```

### Opção 2: Criar Placeholders Simples
```bash
# No PowerShell
cd public/images
# Baixe imagens temporárias e renomeie
```

## 🎯 Integrações Importantes

### Google Maps (Contato)

1. Obtenha uma API Key: https://console.cloud.google.com/
2. Em `components/ContatoSection.tsx`, substitua:

```typescript
// Linha 129: Adicionar iframe do Google Maps
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!..."
  className="w-full h-full border-0"
  loading="lazy"
/>
```

### Formulário de Contato

#### Opção 1: Formspree (Mais Simples)
```typescript
// Em components/ContatoSection.tsx
<form action="https://formspree.io/f/SEU_ID" method="POST">
```

#### Opção 2: API Route do Next.js
Crie `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Enviar email usando Resend, SendGrid, etc.
  
  return NextResponse.json({ success: true });
}
```

### Analytics

#### Google Analytics
1. Crie uma conta em analytics.google.com
2. Instale: `npm install @next/third-parties`
3. Em `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Crie conta em vercel.com
2. Conecte seu repositório GitHub
3. Deploy automático a cada push

```bash
# Ou via CLI
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload da pasta .next para Netlify
```

## 📱 Teste de Responsividade

### No Navegador
1. Abra DevTools (F12)
2. Clique no ícone de dispositivo móvel
3. Teste em diferentes tamanhos:
   - iPhone SE (375px)
   - iPhone 14 Pro (393px)
   - iPad (768px)
   - Desktop (1920px)

### Teste Real
- Use seu smartphone
- Acesse via IP local: `http://SEU_IP:3000`

## 🎬 Otimização de Vídeo Hero

### Compressão
```bash
# Usando FFmpeg
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow hero-video.mp4
```

### Fallback para Mobile
Crie versão mobile menor:

```bash
ffmpeg -i hero-video.mp4 -vf scale=720:-1 -crf 30 hero-video-mobile.mp4
```

E use:
```typescript
<video>
  <source src="/videos/hero-video-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>
```

## 🔧 Troubleshooting

### Erro: "Module not found"
```bash
npm install
```

### Imagens não carregam
Verifique se estão em `public/images/` com os nomes corretos.

### Vídeo não aparece
1. Verifique o formato (MP4/H.264)
2. Adicione um poster: `poster="/images/hero-poster.jpg"`
3. Teste em navegador diferente

### Tailwind não funciona
```bash
npm run dev
# Reinicie o servidor
```

## 📚 Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Unsplash (fotos)](https://unsplash.com)
- [Pexels Videos](https://www.pexels.com/videos)

## ✅ Checklist de Lançamento

- [ ] Adicionar todas as imagens finais
- [ ] Adicionar vídeo hero
- [ ] Customizar todos os textos
- [ ] Adicionar dados reais dos instrutores
- [ ] Configurar horários reais
- [ ] Integrar Google Maps
- [ ] Configurar formulário de contato
- [ ] Adicionar Google Analytics
- [ ] Testar em todos os dispositivos
- [ ] Otimizar imagens e vídeos
- [ ] SEO: Title, Description, Keywords
- [ ] Configurar domínio personalizado
- [ ] Deploy para produção
- [ ] Configurar SSL/HTTPS

---

**Dúvidas?** Consulte o README.md ou a documentação oficial do Next.js.
