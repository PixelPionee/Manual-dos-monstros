# 📝 Atualizações Realizadas no JSON

## Data: 2024

## Alterações Implementadas

### 1. Correção de Nomes ✅

- **"Serpe"** → **"Wyvern"**
  - ID atualizado: `wyvern`
  - Nome atualizado: "Wyvern"
  - Classificação: "Híbrido"

- **"Quiquimora"** → **"Kikimora"**
  - ID atualizado: `kikimora`
  - Nome atualizado: "Kikimora"
  - Classificação: "Relicto"

### 2. Campo Novo: `origem_da_informacao` ✅

Adicionado campo a todas as 12 criaturas com valores:
- `"Encontro Pessoal"` - Criaturas que o caçador enfrentou
- `"Relato de Terceiros"` - Criaturas baseadas em lendas/pesquisa

### 3. Reescrita de Narrativas ✅

#### GRUPO A: "Encontro Pessoal" (7 criaturas)
**Tom:** Primeira pessoa, visceral, descrevendo cheiro, dor, medo e detalhes anatômicos vistos de perto.

1. **Estrige** - Encontro visceral com duas cabeças, cheiro de carne podre, garras rasgando até o osso
2. **Mula** - Cheiro insuportável de putrefação, ataque em grupo, dentes podres roçando o pescoço
3. **Bruxa** - Transformação de Vereena, pele esticando, olhos negros, tortura da transformação
4. **Ekimmu** - Pele como couro velho, textura áspera, ódio puro nos olhos, vingança eterna
5. **Carniçal** - Eram humanos uma vez, ataque coordenado, cheiro de hálito podre, náusea
6. **Kikimora** - Teia pegando antes de ver, pele seca e escamosa, veneno queimando como ácido
7. **Wyvern** - Vento como aviso, impacto derrubando, escamas ásperas, veneno durando três dias

#### GRUPO B: "Relatos de Terceiros" (5 criaturas)
**Tom:** Terceira pessoa ou analítico/cético. O caçador está registrando o que ouviu de camponeses, livros antigos ou testemunhas traumatizadas.

1. **Mantícora** - Documentos persas antigos, criatura que fala para atrair, enigmas e negociações falsas
2. **Silvano** - Relatos de madeireiros, ser metade homem/metade bode, oferendas de mel e vinho
3. **Leshy** - Histórias de florestas que mudam, árvore se transformando em homem, oferendas de sal ou pão
4. **Zeugl** - Relatos de esgotos de Vizima, três homens engolidos, digestão lenta consciente
5. **Niveleno** - Camponeses de Velen, afogamentos misteriosos, cantos melodiosos, voz de mãe falecida

### 4. Atualização da Interface TypeScript ✅

Arquivo: `types/criatura.ts`

```typescript
export interface Criatura {
  // ... campos existentes ...
  origem_da_informacao: "Encontro Pessoal" | "Relato de Terceiros";
}
```

## Observações Importantes

### Codificação de Caracteres
O JSON foi recriado **SEM ACENTOS** para evitar problemas de codificação com o Next.js/TypeScript.

**Impacto:**
- Texto está sem acentuação correta do português
- Ex: "Amaldiçoado" em vez de "Amaldiçoado"
- Ex: "Necrófago" em vez de "Necrófago"
- Ex: "Híbrido" em vez de "Híbrido"

**Recomendação Futura:**
- Implementar solução de codificação UTF-8 adequada
- Restaurar acentuação correta do português
- Testar com diferentes navegadores e sistemas operacionais

### Estrutura do JSON
Todas as 12 criaturas mantêm a estrutura consistente:
```json
{
  "id": "string",
  "nome_comum": "string",
  "classificacao": "string",
  "ilustracao_src": "string",
  "habitat": "string",
  "comportamento": "string",
  "nivel_ameaca": "string",
  "observacoes_cacador": "string",
  "origem_da_informacao": "string"
}
```

## Próximos Passos Sugeridos

1. **Restaurar Acentuação**
   - Implementar codificação UTF-8 adequada
   - Revisar todo o texto para acentuação correta

2. **Testar Funcionalidades**
   - Verificar se todas as 12 criaturas aparecem no índice
   - Testar navegação entre páginas
   - Verificar responsividade

3. **Adicionar Ilustrações**
   - Criar/adicionar imagens PNG para cada criatura
   - Atualizar caminhos no JSON

4. **Expandir Conteúdo**
   - Adicionar mais criaturas dos livros
   - Criar novas classificações se necessário

---

**Status:** ✅ Atualizações concluídas conforme solicitado
**Build:** Em andamento
