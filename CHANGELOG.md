# Changelog - Manual de Campo do Caçador

## [Atualização] - Integração de Ilustrações e Renomeações

### ✅ Alterações Implementadas

#### 1. Imagens Adicionadas
- **12 ilustrações PNG** adicionadas em `/public/images/criaturas/`
- Todas as imagens renomeadas para lowercase para consistência
- Arquivos: bruxa.png, carnichal.png, dragao.png, ekimmu.png, estrige.png, kikimora.png, leshy.png, manticora.png, mula.png, niveleno.png, silvano.png, zeugl.png

#### 2. Renomeações de Criaturas
- **Wyvern → Dragão**
  - ID alterado: `wyvern` → `dragao`
  - Nome comum: "Wyvern" → "Dragão"
  - Caminho da imagem atualizado

#### 3. Reclassificações Taxonômicas
- **Dragão**: "Híbrido" → "Draconídeo"
- **Kikimora**: "Relicto" → "Insectoide"
- **Mantícora**: Permanece "Híbrido"
- **Silvano e Leshy**: Permanecem "Relicto"

#### 4. Integração Visual
- Componente `Image` do Next.js implementado em:
  - Página inicial (`app/page.tsx`)
  - Páginas individuais de criaturas (`app/criatura/[id]/page.tsx`)
- Filtros CSS aplicados para estética de papel envelhecido:
  - `sepia(0.1) contrast(1.05)` nos cards
  - `sepia(0.15) contrast(1.1)` nas páginas individuais

#### 5. Estilização CSS
- **Página Inicial** (`app/page.module.css`):
  - `.imagem`: object-fit contain, filtros sepia
  - `.card_imagem`: padding e bordas ajustadas
  
- **Página Individual** (`app/criatura/[id]/page.module.css`):
  - `.ilustracao_frame`: moldura com sombra interna
  - `.ilustracao`: aspect-ratio 1:1, filtros aplicados
  - Borda decorativa interna com pseudo-elemento `::after`

### 📊 Estrutura de Classificações Atual

```
Amaldiçoados (2)
├── Estrige
└── Niveleno

Vampiros (4)
├── Bruxa
├── Mula
├── Ekimmu
└── (outros)

Necrófagos (2)
├── Carniçal
└── Zeugl

Insectoides (1)
└── Kikimora

Relictos (2)
├── Silvano
└── Leshy

Draconídeos (1)
└── Dragão

Híbridos (1)
└── Mantícora
```

### 🔧 Arquivos Modificados

1. `data/bestiario.json` - Dados atualizados
2. `app/page.tsx` - Import do componente Image
3. `app/page.module.css` - Estilos para imagens nos cards
4. `app/criatura/[id]/page.tsx` - Componente Image na página individual
5. `app/criatura/[id]/page.module.css` - Moldura e filtros para ilustrações

### 🚀 Próximos Passos

1. ✅ Build local concluído
2. ⏳ Deploy na Vercel
3. ⏳ Verificação de todas as páginas em produção
4. ⏳ Teste de responsividade mobile

### 📝 Notas Técnicas

- **Next.js Image**: Otimização automática de imagens
- **Static Export**: Configurado em `next.config.js`
- **Unoptimized Images**: Necessário para export estático
- **Aspect Ratio**: 1:1 para consistência visual
- **Filtros CSS**: Mantém estética de manual antigo
