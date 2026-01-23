# 🔮 Exemplos de Expansão Futura

Este documento contém exemplos práticos de como expandir o Manual de Campo do Caçador.

---

## 📝 Exemplo 1: Adicionar Nova Criatura

### Passo a Passo: Adicionar "Drowner" (Afogador)

**1. Pesquisa Literária**

Fonte: "O Último Desejo" - Sapkowski descreve afogadores como:
- Humanoides aquáticos
- Pele verde-acinzentada
- Brânquias visíveis
- Garras palmadas
- Vivem em pântanos e rios

**2. Adicionar ao JSON**

```json
{
  "id": "afogador",
  "nome_comum": "Afogador",
  "classificacao": "Necrófago",
  "ilustracao_src": "/images/criaturas/afogador.png",
  "habitat": "Pântanos rasos, margens de rios lentos, lagos estagnados. Preferem águas turvas com vegetação densa. Raramente se afastam mais de 50 metros da água. Ativos durante todo o dia, mas mais agressivos ao entardecer.",
  "comportamento": "Humanoide aquático com pele verde-acinzentada coberta por escamas finas. Brânquias funcionais permitem respiração subaquática indefinida, mas podem sobreviver em terra por até uma hora. Garras palmadas facilitam natação rápida. Caçam em grupos de 3 a 7 indivíduos, usando táticas de emboscada. Arrastam presas para água rasa antes de atacar com garras e dentes. Inteligência rudimentar permite coordenação básica.",
  "nivel_ameaca": "Moderado",
  "observacoes_cacador": "Afogadores são covardes em terra firme, mas letais na água. Enfrentei um grupo nos pântanos - me cercaram, tentaram me arrastar para o rio. Mantive-me em terreno seco, forçando-os a sair da água. Fora de seu elemento, são lentos e desajeitados. Óleo necrófago funciona bem. Dica: nunca entre na água para persegui-los. É exatamente o que querem."
}
```

**3. Resultado**

Nova página gerada automaticamente em: `/criatura/afogador`

---

## 🎨 Exemplo 2: Adicionar Nova Classificação

### Criar Categoria "Espectros"

**1. Adicionar Criaturas da Categoria**

```json
{
  "id": "noonwraith",
  "nome_comum": "Pestana",
  "classificacao": "Espectro",
  "habitat": "Campos de trigo, pradarias abertas...",
  "comportamento": "Espírito de mulher que morreu violentamente...",
  "nivel_ameaca": "Alto",
  "observacoes_cacador": "..."
}
```

**2. Atualizar Cores (opcional)**

Em `app/globals.css`:

```css
:root {
  /* ... cores existentes ... */
  --espectro: #B8B8D0; /* Azul fantasmagórico */
}
```

**3. Atualizar Estilos de Badge**

Em `app/page.module.css`:

```css
.categoria_espectro {
  border-left-color: var(--espectro);
}
```

---

## 🖼️ Exemplo 3: Adicionar Sistema de Ilustrações

### Implementar Galeria de Imagens

**1. Criar Componente de Imagem**

```typescript
// components/CriaturaImagem.tsx
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  className?: string
}

export default function CriaturaImagem({ src, alt, className }: Props) {
  // Verificar se imagem existe, senão mostrar placeholder
  const imagemExiste = src && src !== '/images/criaturas/placeholder.png'
  
  if (!imagemExiste) {
    return (
      <div className={`placeholder ${className}`}>
        <span>{alt.charAt(0)}</span>
      </div>
    )
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={600}
      className={className}
      priority
    />
  )
}
```

**2. Usar no Layout**

```typescript
// app/criatura/[id]/page.tsx
import CriaturaImagem from '@/components/CriaturaImagem'

// No JSX:
<CriaturaImagem
  src={criatura.ilustracao_src}
  alt={criatura.nome_comum}
  className={styles.ilustracao}
/>
```

---

## 🔍 Exemplo 4: Sistema de Busca

### Implementar Busca Simples

**1. Criar Componente de Busca**

```typescript
// components/BarraBusca.tsx
'use client'

import { useState } from 'react'
import styles from './BarraBusca.module.css'

interface Props {
  onBuscar: (termo: string) => void
}

export default function BarraBusca({ onBuscar }: Props) {
  const [termo, setTermo] = useState('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value
    setTermo(valor)
    onBuscar(valor)
  }
  
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Buscar criatura..."
        value={termo}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  )
}
```

**2. Integrar na Página Principal**

```typescript
// app/page.tsx
'use client'

import { useState } from 'react'
import BarraBusca from '@/components/BarraBusca'

export default function Home() {
  const [termoBusca, setTermoBusca] = useState('')
  
  const criaturasFiltradas = bestiarioData.criaturas.filter(c =>
    c.nome_comum.toLowerCase().includes(termoBusca.toLowerCase()) ||
    c.classificacao.toLowerCase().includes(termoBusca.toLowerCase())
  )
  
  return (
    <main>
      <BarraBusca onBuscar={setTermoBusca} />
      {/* Renderizar criaturasFiltradas */}
    </main>
  )
}
```

---

## 📊 Exemplo 5: Adicionar Metadados Extras

### Expandir Interface de Criatura

**1. Atualizar Interface**

```typescript
// types/criatura.ts
export interface Criatura {
  // ... campos existentes ...
  
  // Novos campos opcionais
  tamanho?: string              // "Pequeno", "Médio", "Grande"
  peso_aproximado?: string      // "50-80kg"
  expectativa_vida?: string     // "Desconhecida"
  dieta?: string               // "Carnívoro", "Necrófago"
  reproducao?: string          // "Ovíparo", "Vivíparo"
  vulnerabilidades?: string[]  // ["Prata", "Fogo"]
  resistencias?: string[]      // ["Veneno", "Frio"]
  locais_avistamento?: string[] // ["Velen", "Novigrad"]
}
```

**2. Atualizar JSON**

```json
{
  "id": "estrige",
  "nome_comum": "Estrige",
  // ... campos existentes ...
  "tamanho": "Médio",
  "peso_aproximado": "60-90kg",
  "vulnerabilidades": ["Fogo", "Luz Solar"],
  "resistencias": ["Veneno"],
  "locais_avistamento": ["Vizima", "Velen"]
}
```

**3. Exibir na Página**

```typescript
// app/criatura/[id]/page.tsx
{criatura.vulnerabilidades && (
  <section className={styles.secao}>
    <h2>Vulnerabilidades</h2>
    <ul>
      {criatura.vulnerabilidades.map(v => (
        <li key={v}>{v}</li>
      ))}
    </ul>
  </section>
)}
```

---

## 🗺️ Exemplo 6: Mapa de Distribuição

### Adicionar Mapa Interativo

**1. Instalar Biblioteca**

```bash
npm install leaflet react-leaflet
npm install -D @types/leaflet
```

**2. Criar Componente de Mapa**

```typescript
// components/MapaDistribuicao.tsx
'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface Props {
  locais: Array<{
    nome: string
    lat: number
    lng: number
  }>
}

export default function MapaDistribuicao({ locais }: Props) {
  return (
    <MapContainer
      center={[52.0, 19.0]} // Centro da Polônia (mundo de Witcher)
      zoom={6}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {locais.map((local, i) => (
        <Marker key={i} position={[local.lat, local.lng]}>
          <Popup>{local.nome}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
```

---

## 🎵 Exemplo 7: Sons Ambientes

### Adicionar Áudio Atmosférico

**1. Estrutura de Arquivos**

```
public/
  sounds/
    ambiente/
      floresta.mp3
      pantano.mp3
      caverna.mp3
    criaturas/
      estrige-grito.mp3
      ghoul-rosnado.mp3
```

**2. Criar Hook de Áudio**

```typescript
// hooks/useAmbiente.ts
'use client'

import { useEffect, useRef } from 'react'

export function useAmbiente(audioSrc: string, volume = 0.3) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  useEffect(() => {
    audioRef.current = new Audio(audioSrc)
    audioRef.current.volume = volume
    audioRef.current.loop = true
    audioRef.current.play()
    
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [audioSrc, volume])
}
```

**3. Usar em Páginas**

```typescript
// app/criatura/[id]/page.tsx
import { useAmbiente } from '@/hooks/useAmbiente'

export default function CriaturaPage({ params }: { params: { id: string } }) {
  // Tocar som ambiente baseado no habitat
  useAmbiente('/sounds/ambiente/floresta.mp3', 0.2)
  
  // ... resto do componente
}
```

---

## 📱 Exemplo 8: PWA (Progressive Web App)

### Tornar o Site Instalável

**1. Criar Manifest**

```json
// public/manifest.json
{
  "name": "Manual de Campo do Caçador",
  "short_name": "Manual Caçador",
  "description": "Bestiário de The Witcher",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#D4C4A8",
  "theme_color": "#8B7355",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**2. Atualizar Layout**

```typescript
// app/layout.tsx
export const metadata = {
  manifest: '/manifest.json',
  // ... outros metadados
}
```

---

## 🎯 Prioridades de Expansão Recomendadas

### Curto Prazo (1-2 semanas)
1. ✅ Adicionar ilustrações das 12 criaturas existentes
2. ✅ Implementar sistema de busca
3. ✅ Adicionar 5-10 novas criaturas

### Médio Prazo (1-2 meses)
4. ✅ Criar galeria de ilustrações
5. ✅ Adicionar filtros avançados
6. ✅ Implementar comparação entre criaturas
7. ✅ PWA para uso offline

### Longo Prazo (3+ meses)
8. ✅ Mapa de distribuição interativo
9. ✅ Sons ambientes
10. ✅ Animações avançadas
11. ✅ Sistema de favoritos
12. ✅ Modo de leitura noturna (opcional)

---

**Lembre-se**: Sempre manter a fidelidade literária e a estética de manual de campo!
