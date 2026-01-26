# Manual de Campo do Caçador

Bestiário digital imersivo baseado exclusivamente na lore literária dos livros da saga **The Witcher** de Andrzej Sapkowski e nas mitologias reais que o inspiraram (Eslava, Persa, Celta, etc.).

## 🎯 Conceito

Este projeto é um manual de campo científico/naturalista que documenta criaturas sobrenaturais com:

- ✅ Descrições fiéis aos livros de Sapkowski
- ✅ Mitologias originais (quando o livro não detalha)
- ✅ Biologia realista e plausível
- ✅ Estética de manual de campo envelhecido

### ⚠️ REGRA DE OURO

**IGNORAR COMPLETAMENTE A ESTÉTICA DOS JOGOS DA CD PROJEKT RED**

Este bestiário segue APENAS as descrições literárias, não as interpretações visuais dos jogos.

## 🏗️ Stack Tecnológica

- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript
- **Estilização**: CSS Modules (sem Tailwind)
- **Dados**: JSON local (sem banco de dados)
- **Geração**: SSG (Static Site Generation)
- **Deploy**: Vercel

## 📊 Estrutura de Dados

Todas as criaturas estão em `data/bestiario.json` com a seguinte estrutura:

```typescript
interface Criatura {
  id: string;                    
  nome_comum: string;            
  classificacao: string;         
  ilustracao_src: string;        
  habitat: string;               
  comportamento: string;         
  nivel_ameaca: string;          
  observacoes_cacador: string;   
}
```

## 🦅 Criaturas Incluídas (12 no MVP)

### Amaldiçoados
- **Estrige** - Criatura com duas cabeças de ave de rapina
- **Niveleno** - Espírito aquático que afoga vítimas

### Vampiros
- **Bruxa** - Vampiro de nascimento com transformação noturna
- **Mula** - Vampiro inferior bestial
- **Ekimmu** - Vampiro mesopotâmico ressecado

### Necrófagos
- **Carniçal** - Humano degenerado por canibalismo
- **Zeugl** - Massa amorfa de carne pútrida

### Relictos
- **Quiquimora** - Espírito doméstico em forma aracnídea
- **Silvano** - Sátiro guardião de florestas
- **Leshy** - Guardião vegetal de florestas primordiais

### Híbridos
- **Serpe** - Réptil alado com ferrão venenoso
- **Mantícora** - Híbrido persa com rosto humano e corpo de leão

## 🚀 Como Executar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

### Exportar Site Estático

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `out/`

## 🎨 Identidade Visual

### Paleta de Cores

```css
--papel-claro: #E8DCC4;    /* Pergaminho */
--papel-medio: #D4C4A8;    /* Papel velho */
--papel-escuro: #8B7355;   /* Borda queimada */
--tinta-preta: #1A1A1A;    /* Texto principal */
--tinta-sepia: #3E2723;    /* Texto secundário */
--sangue: #8B0000;         /* Alertas */
--ferrugem: #A0522D;       /* Detalhes metálicos */
```

### Tipografia

- **Títulos**: IM Fell English (manuscrito)
- **Corpo**: Crimson Text (serif clássica)
- **Dados**: Courier Prime (monospace)

## 📱 Funcionalidades

- ✅ Página inicial com índice de criaturas
- ✅ Filtro por classificação
- ✅ Páginas individuais com layout de livro aberto
- ✅ Navegação entre criaturas (anterior/próxima)
- ✅ Design responsivo (desktop/tablet/mobile)
- ✅ Tema único de papel envelhecido

## 📂 Estrutura de Pastas

```
manual-cacador/
├── app/
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Índice de criaturas
│   ├── page.module.css
│   ├── globals.css
│   ├── not-found.tsx           # Página 404
│   └── criatura/
│       └── [id]/
│           ├── page.tsx        # Página individual
│           └── page.module.css
├── data/
│   └── bestiario.json          # Dados das criaturas
├── types/
│   └── criatura.ts             # Interfaces TypeScript
└── public/
    └── images/
        └── criaturas/          # Ilustrações (futuro)
```

## 🎯 Próximos Passos

- [ ] Adicionar ilustrações das criaturas
- [ ] Implementar sistema de busca (quando houver mais criaturas)
- [ ] Adicionar mais criaturas do universo
- [ ] Melhorar animações de transição
- [ ] Adicionar sons ambientes (opcional)

## 📝 Diretrizes de Escrita

### Habitat
- Objetivo e científico
- Localização geográfica
- Condições ambientais

### Comportamento
- Biologia e padrões de caça
- Inteligência e capacidades
- Vulnerabilidades

### Observações do Caçador
- Primeira pessoa
- Subjetivo e experiencial
- Dicas práticas de sobrevivência
- Histórias curtas e flavor text

## 📄 Licença

Este projeto é baseado na obra literária de Andrzej Sapkowski e é criado apenas para fins educacionais e de demonstração.

---

**"Que este manual guie seus passos e preserve sua vida"**
