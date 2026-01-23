# 🚀 Guia Rápido - Manual de Campo do Caçador

## Comandos Essenciais

```bash
# Instalar dependências
npm install

# Desenvolvimento (http://localhost:3000)
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Verificar erros de TypeScript
npx tsc --noEmit
```

## 📝 Como Adicionar uma Nova Criatura

### 1. Editar o JSON

Abra `data/bestiario.json` e adicione um novo objeto:

```json
{
  "id": "nome-da-criatura",
  "nome_comum": "Nome da Criatura",
  "classificacao": "Categoria",
  "ilustracao_src": "/images/criaturas/nome-da-criatura.png",
  "habitat": "Descrição objetiva do habitat...",
  "comportamento": "Descrição biológica e comportamental...",
  "nivel_ameaca": "Extremo",
  "observacoes_cacador": "Notas em primeira pessoa..."
}
```

### 2. Adicionar Imagem (Opcional)

Coloque a imagem PNG em: `public/images/criaturas/nome-da-criatura.png`

### 3. Pronto!

O Next.js irá gerar automaticamente a página da criatura em:
`/criatura/nome-da-criatura`

## 🎨 Personalização de Estilos

### Cores Globais

Edite `app/globals.css`:

```css
:root {
  --papel-claro: #E8DCC4;
  --papel-medio: #D4C4A8;
  --papel-escuro: #8B7355;
  --tinta-preta: #1A1A1A;
  --tinta-sepia: #3E2723;
  --carvao: #4A4A4A;
  --sangue: #8B0000;
  --ferrugem: #A0522D;
  --verde-musgo: #556B2F;
}
```

### Estilos de Página

- **Índice**: `app/page.module.css`
- **Criatura Individual**: `app/criatura/[id]/page.module.css`
- **404**: `app/not-found.module.css`

## 📊 Estrutura de Classificações

Classificações disponíveis:
- `Amaldiçoado`
- `Vampiro`
- `Necrófago`
- `Relicto`
- `Híbrido`

Níveis de Ameaça:
- `Extremo` (vermelho escuro)
- `Alto` (laranja ferrugem)
- `Moderado` (cinza)
- `Baixo` (verde musgo)

## 🔍 Debugging

### Ver dados carregados

```typescript
// Em qualquer componente
import bestiarioData from '@/data/bestiario.json'
console.log(bestiarioData.criaturas)
```

### Verificar rotas geradas

```bash
npm run build
# Verifique a pasta .next/server/app/criatura/
```

## 🚀 Deploy no Vercel

### Método 1: Via CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Método 2: Via GitHub

1. Faça push para GitHub
2. Conecte repositório no Vercel
3. Deploy automático!

## 📱 Testar Responsividade

### Chrome DevTools

1. F12 para abrir DevTools
2. Ctrl+Shift+M para modo responsivo
3. Testar breakpoints:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1024px+

## 🎯 Dicas de Desenvolvimento

### Manter Fidelidade Literária

✅ **FAZER:**
- Consultar os livros de Sapkowski
- Pesquisar mitologias originais
- Manter biologia plausível
- Escrever em tom científico

❌ **NÃO FAZER:**
- Copiar descrições dos jogos
- Adicionar elementos "gamificados"
- Exagerar características
- Usar estética moderna

### Escrever Observações do Caçador

**Tom**: Primeira pessoa, experiente, cético mas respeitoso

**Estrutura**:
1. Experiência pessoal
2. Dica prática
3. Reflexão moral (opcional)

**Exemplo**:
```
"Enfrentei três carniçais nos pântanos de Velen. 
Covardes quando sozinhos, letais em grupo. 
Mate o líder primeiro - os outros dispersam. 
E lembre-se: eram humanos uma vez."
```

## 🔧 Solução de Problemas Comuns

### Erro: "Module not found"

```bash
# Limpar cache e reinstalar
rm -rf node_modules .next
npm install
```

### Erro: TypeScript

```bash
# Verificar erros
npx tsc --noEmit

# Ignorar temporariamente (não recomendado)
// @ts-ignore
```

### Imagens não aparecem

- Verificar caminho: `/images/criaturas/nome.png`
- Verificar se está em `public/`
- Reiniciar servidor de desenvolvimento

## 📚 Recursos Úteis

### Fontes Google

Já incluídas no projeto:
- IM Fell English (manuscrito)
- Crimson Text (serif)
- Courier Prime (monospace)

### Referências Literárias

1. **O Último Desejo** - Estrige, Bruxa
2. **A Espada do Destino** - Niveleno
3. **A Estação das Tempestades** - Mantícora
4. Mitologias: Eslava, Persa, Greco-Romana

## 🎨 Paleta de Cores Expandida

```css
/* Papel */
#E8DCC4 - Claro (fundo principal)
#D4C4A8 - Médio (cards)
#8B7355 - Escuro (bordas)

/* Texto */
#1A1A1A - Preto (principal)
#3E2723 - Sépia (títulos)
#4A4A4A - Carvão (secundário)

/* Acentos */
#8B0000 - Sangue (perigo)
#A0522D - Ferrugem (detalhes)
#556B2F - Verde Musgo (natureza)
```

## 📖 Convenções de Código

### Nomenclatura

- **Componentes**: PascalCase (`CriaturaCard.tsx`)
- **Arquivos CSS**: kebab-case (`page.module.css`)
- **IDs de criaturas**: kebab-case (`estrige`, `niveleno`)

### Estrutura de Componentes

```typescript
// 1. Imports
import { ... } from '...'

// 2. Interfaces (se necessário)
interface Props { ... }

// 3. Componente
export default function Component() {
  // 4. Lógica
  
  // 5. Return JSX
  return (...)
}
```

---

**Última Atualização**: 2024
**Versão do Guia**: 1.0.0
