# Placeholders Temporários para Desenvolvimento

Este arquivo contém instruções para criar placeholders SVG simples enquanto você não tem as imagens finais.

## Usando Placeholders Online

### Opção 1: Placeholder.com
Use URLs temporárias direto no código:

```typescript
<Image
  src="https://via.placeholder.com/1200x1600/0A0A0A/C9A962?text=Academia+NGBJJ"
  alt="Academia"
/>
```

### Opção 2: Unsplash Source
Para fotos reais temporárias de Jiu-Jitsu:

```typescript
<Image
  src="https://source.unsplash.com/1200x1600/?jiu-jitsu,martial-arts"
  alt="Academia"
/>
```

### Opção 3: Picsum (Lorem Picsum)
Fotos genéricas em preto e branco:

```typescript
<Image
  src="https://picsum.photos/1200/1600?grayscale"
  alt="Academia"
/>
```

## Criar Placeholders SVG Locais

Crie arquivos SVG simples na pasta `public/images/`:

### hero-poster.jpg (substituir por SVG temporário)
```svg
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1920" height="1080" fill="#0A0A0A"/>
  <text x="50%" y="50%" font-family="Arial" font-size="72" fill="#C9A962" text-anchor="middle" dominant-baseline="middle">
    NGBJJ Hero Video
  </text>
</svg>
```

### academia-hero.jpg
```svg
<svg width="1200" height="1600" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="1600" fill="#1A2332"/>
  <text x="50%" y="50%" font-family="Arial" font-size="48" fill="#C9A962" text-anchor="middle" dominant-baseline="middle">
    Academia NGBJJ
  </text>
</svg>
```

## Script PowerShell para Criar Placeholders

Execute no PowerShell:

```powershell
# Navegar para a pasta de imagens
cd "c:\Users\adm\OneDrive\Área de Trabalho\PROJETOS\BJJ\public\images"

# Criar SVG placeholder
@"
<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="1000" fill="#0A0A0A"/>
  <text x="50%" y="50%" font-family="Arial" font-size="36" fill="#C9A962" text-anchor="middle" dominant-baseline="middle">
    NGBJJ Placeholder
  </text>
</svg>
"@ | Out-File -FilePath "placeholder.svg" -Encoding UTF8
```

## Recomendação para Desenvolvimento

Use **Unsplash** para placeholders temporários de alta qualidade:

### Hero Section
```typescript
src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920&h=1080&fit=crop"
```

### Academia
```typescript
src="https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?w=1200&h=1600&fit=crop"
```

### Galeria
```typescript
src="https://images.unsplash.com/photo-1559664378-f2f9b97e6d80?w=800&h=1000&fit=crop"
src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=1000&fit=crop"
src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=1000&fit=crop"
src="https://images.unsplash.com/photo-1605220908587-271e39d95f30?w=800&h=1000&fit=crop"
```

### Instrutores
```typescript
src="https://images.unsplash.com/photo-1552072805-2a9039d00e57?w=600&h=800&fit=crop"
src="https://images.unsplash.com/photo-1552072805-2a9039d00e58?w=600&h=800&fit=crop"
src="https://images.unsplash.com/photo-1552072805-2a9039d00e59?w=600&h=800&fit=crop"
src="https://images.unsplash.com/photo-1552072805-2a9039d00e60?w=600&h=800&fit=crop"
```

## Nota Importante

⚠️ **Lembre-se**: Unsplash e outros serviços de placeholder são apenas para desenvolvimento. 

Para produção, você **DEVE** usar fotos originais da sua academia para:
- Autenticidade da marca
- Performance (imagens otimizadas)
- SEO (nomes de arquivo descritivos)
- Direitos autorais (sem problemas legais)
