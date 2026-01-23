# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o **Manual de Campo do Caçador**! Este documento estabelece as diretrizes para manter a qualidade e consistência do projeto.

---

## 🎯 Princípios Fundamentais

### 1. Fidelidade Literária SEMPRE

✅ **CORRETO:**
- Basear-se nos livros de Andrzej Sapkowski
- Consultar mitologias originais
- Citar fontes específicas

❌ **INCORRETO:**
- Usar descrições dos jogos da CD Projekt Red
- Inventar características sem base literária
- Misturar fontes sem critério

### 2. Biologia Realista

✅ **CORRETO:**
- Explicar como a criatura caça
- Descrever anatomia plausível
- Mencionar vulnerabilidades lógicas

❌ **INCORRETO:**
- Poderes mágicos sem explicação
- Características impossíveis
- Contradições biológicas

### 3. Tom de Manual de Campo

✅ **CORRETO:**
- Objetivo e científico (Habitat, Comportamento)
- Subjetivo e pessoal (Observações do Caçador)
- Linguagem clara e direta

❌ **INCORRETO:**
- Linguagem muito técnica/acadêmica
- Tom de ficção narrativa
- Descrições vagas ou poéticas demais

---

## 📝 Como Adicionar uma Criatura

### Checklist Obrigatório

Antes de adicionar uma criatura, verifique:

- [ ] A criatura aparece nos livros de Sapkowski OU em mitologia real
- [ ] Você tem citação específica da fonte
- [ ] A descrição é biologicamente plausível
- [ ] Não há elementos dos jogos da CD Projekt Red
- [ ] As observações do caçador estão em primeira pessoa
- [ ] O nível de ameaça é justificável

### Template de Criatura

```json
{
  "id": "nome-kebab-case",
  "nome_comum": "Nome Próprio",
  "classificacao": "Categoria",
  "ilustracao_src": "/images/criaturas/nome.png",
  "habitat": "[2-3 frases objetivas sobre onde vive, quando é ativa, condições ambientais]",
  "comportamento": "[3-5 frases sobre anatomia, biologia, padrões de caça, inteligência, vulnerabilidades]",
  "nivel_ameaca": "Extremo|Alto|Moderado|Baixo",
  "observacoes_cacador": "[2-4 frases em primeira pessoa, experiência pessoal, dicas práticas, reflexão moral opcional]"
}
```

### Exemplo Comentado

```json
{
  "id": "estrige",
  // ID em kebab-case, usado na URL
  
  "nome_comum": "Estrige",
  // Nome como aparece nos livros
  
  "classificacao": "Amaldiçoado",
  // Categorias: Amaldiçoado, Vampiro, Necrófago, Relicto, Híbrido, Espectro
  
  "ilustracao_src": "/images/criaturas/estrige.png",
  // Caminho relativo da imagem
  
  "habitat": "Ruínas abandonadas, cemitérios antigos...",
  // OBJETIVO: onde vive, quando é ativa, condições
  
  "comportamento": "Criatura atarracada de corpo humanoide...",
  // DESCRITIVO: anatomia, biologia, como caça, vulnerabilidades
  
  "nivel_ameaca": "Alto",
  // Baseado em: letalidade, inteligência, dificuldade de matar
  
  "observacoes_cacador": "Nunca subestime a força dessas garras..."
  // SUBJETIVO: primeira pessoa, experiência, dicas, reflexão
}
```

---

## 📚 Fontes Aceitas

### Prioridade 1: Livros de Sapkowski

**Saga Principal:**
1. O Último Desejo (1993)
2. A Espada do Destino (1992)
3. O Sangue dos Elfos (1994)
4. Tempo do Desprezo (1995)
5. Baptismo de Fogo (1996)
6. A Torre da Andorinha (1997)
7. A Senhora do Lago (1999)
8. A Estação das Tempestades (2013)

**Como Citar:**
```
Fonte: "O Último Desejo" - conto "O Menor dos Males"
Descrição: [citação direta ou paráfrase]
```

### Prioridade 2: Mitologias Originais

**Aceitas:**
- Eslava (Kikimora, Leshiy, Vodyanoy, Rusalka)
- Persa (Manticore, Div)
- Greco-Romana (Sátiros, Silvanus, Lamia)
- Celta (Banshee, Dullahan)
- Nórdica (Draugr, Huldra)
- Mesopotâmica (Ekimmu, Lilitu)

**Como Citar:**
```
Fonte: Mitologia Eslava - Kikimora
Adaptação: [como foi adaptado para o universo de Witcher]
```

### ❌ Fontes NÃO Aceitas

- Jogos da CD Projekt Red (The Witcher 1, 2, 3)
- Série da Netflix
- Quadrinhos não escritos por Sapkowski
- Fan fiction
- Wikis de jogos

---

## 🎨 Diretrizes de Estilo

### Habitat (Objetivo)

**Estrutura:**
1. Locais específicos
2. Condições ambientais
3. Padrões temporais (diurno/noturno)

**Exemplo:**
```
"Ruínas abandonadas, cemitérios antigos e locais de execução pública. 
Prefere estruturas com acesso a porões, criptas ou câmaras subterrâneas. 
Estritamente noturna, evita qualquer exposição à luz solar direta."
```

### Comportamento (Descritivo)

**Estrutura:**
1. Descrição física/anatômica
2. Padrões de caça/alimentação
3. Inteligência e capacidades
4. Vulnerabilidades

**Exemplo:**
```
"Criatura atarracada de corpo humanoide deformado, possuindo duas 
cabeças distintas de ave de rapina. Extremamente territorial, ataca 
intrusos com garras afiadas. Durante o dia, entra em torpor profundo. 
A maldição está ligada a um corpo físico que deve ser destruído."
```

### Observações do Caçador (Subjetivo)

**Estrutura:**
1. Experiência pessoal (1-2 frases)
2. Dica prática (1-2 frases)
3. Reflexão moral (opcional, 1 frase)

**Tom:**
- Primeira pessoa
- Experiente mas não arrogante
- Cético mas respeitoso
- Prático e direto

**Exemplo:**
```
"Nunca subestime a força dessas garras. Presenciei uma estrige 
arrancar o braço de um homem com um único golpe. O óleo funciona, 
mas a verdadeira solução é localizar o corpo durante o dia e 
incinerá-lo. Sem a âncora física, a maldição se desfaz."
```

---

## 🔍 Processo de Revisão

### Antes de Submeter

1. **Verificar Ortografia e Gramática**
   - Usar corretor ortográfico
   - Revisar pontuação
   - Verificar concordância

2. **Validar JSON**
   - Usar validador JSON online
   - Verificar vírgulas e aspas
   - Testar localmente

3. **Testar Localmente**
   ```bash
   npm run dev
   # Acessar http://localhost:3000
   # Verificar se a criatura aparece
   # Testar página individual
   ```

4. **Verificar Responsividade**
   - Desktop (1024px+)
   - Tablet (768px)
   - Mobile (375px)

### Critérios de Aprovação

✅ **Será Aprovado:**
- Fonte literária clara
- Descrição biologicamente plausível
- Tom consistente com o projeto
- JSON válido
- Sem erros de português

❌ **Será Rejeitado:**
- Baseado em jogos/série
- Descrição fantasiosa demais
- Tom inconsistente
- Erros de formatação
- Plágio de wikis

---

## 🐛 Reportar Problemas

### Template de Issue

```markdown
## Tipo de Problema
[ ] Bug técnico
[ ] Erro de conteúdo
[ ] Sugestão de melhoria
[ ] Nova criatura

## Descrição
[Descreva o problema ou sugestão]

## Fonte (se aplicável)
[Cite o livro/mitologia]

## Passos para Reproduzir (bugs)
1. [Passo 1]
2. [Passo 2]
3. [Resultado esperado vs obtido]

## Screenshots (opcional)
[Cole aqui]
```

---

## 🎯 Áreas que Precisam de Ajuda

### Alta Prioridade
- [ ] Ilustrações das 12 criaturas existentes
- [ ] Revisão de português das descrições
- [ ] Adicionar mais criaturas dos livros

### Média Prioridade
- [ ] Melhorar responsividade mobile
- [ ] Adicionar animações sutis
- [ ] Otimizar performance

### Baixa Prioridade
- [ ] Sistema de busca
- [ ] Filtros avançados
- [ ] PWA

---

## 📜 Código de Conduta

### Esperamos que Contribuidores:

✅ Sejam respeitosos e construtivos
✅ Aceitem feedback com profissionalismo
✅ Foquem na qualidade sobre quantidade
✅ Citem fontes adequadamente
✅ Mantenham o tom do projeto

❌ Não Toleramos:

❌ Plágio ou cópia sem atribuição
❌ Conteúdo ofensivo ou inapropriado
❌ Spam ou autopromoção
❌ Desrespeito a outros contribuidores
❌ Ignorar deliberadamente as diretrizes

---

## 📞 Contato

Para dúvidas sobre contribuição:
- Abra uma Issue no GitHub
- Marque com a tag `question`
- Seja específico na pergunta

---

## 🏆 Reconhecimento

Contribuidores serão creditados em:
- README.md (seção de contribuidores)
- Changelog do projeto
- Comentários no código (quando aplicável)

---

**Obrigado por ajudar a preservar a lore literária de The Witcher!** 🐺⚔️

---

*Última atualização: 2024*
*Versão: 1.0.0*
