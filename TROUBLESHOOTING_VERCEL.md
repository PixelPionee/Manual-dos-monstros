# Troubleshooting - Deploy Vercel 404

## ✅ Verificações Realizadas

1. **Estrutura do Projeto**: ✅ Correta
   - `app/` na raiz
   - `app/page.tsx` existe
   - `app/layout.tsx` existe

2. **Configurações**: ✅ Corretas
   - `package.json` com scripts corretos
   - `next.config.js` otimizado para Vercel
   - `vercel.json` com framework: "nextjs"

3. **Build Local**: ✅ Funciona
   - `npm run build` gera 16 páginas
   - `npm run dev` roda sem erros

## 🔍 Checklist para Resolver o 404 na Vercel

### 1. Verificar Framework Detection
Na Vercel, vá em **Settings > General**:
- [ ] **Framework Preset** deve estar como **"Next.js"**
- [ ] Se estiver como "Other", mude para "Next.js"

### 2. Verificar Build & Development Settings
Na Vercel, vá em **Settings > General**:
- [ ] **Build Command**: deve estar vazio OU `npm run build`
- [ ] **Output Directory**: deve estar **VAZIO** (não `.next`, não `out`)
- [ ] **Install Command**: deve estar vazio OU `npm install`
- [ ] **Development Command**: deve estar vazio OU `npm run dev`

### 3. Verificar Node.js Version
Na Vercel, vá em **Settings > General**:
- [ ] **Node.js Version**: deve ser **18.x** ou **20.x**

### 4. Limpar Cache e Redeploy
- [ ] Vá em **Deployments**
- [ ] Clique nos 3 pontinhos do último deploy
- [ ] Selecione **"Redeploy"**
- [ ] Marque a opção **"Clear build cache"**
- [ ] Clique em **"Redeploy"**

### 5. Verificar Logs de Build
- [ ] Vá em **Deployments**
- [ ] Clique no último deploy
- [ ] Vá na aba **"Build Logs"**
- [ ] Procure por erros ou avisos
- [ ] Verifique se aparece: "✓ Generating static pages (16/16)"

### 6. Verificar Environment Variables
Na Vercel, vá em **Settings > Environment Variables**:
- [ ] Não deve ter nenhuma variável conflitante
- [ ] Se tiver `NODE_ENV`, remova (Vercel define automaticamente)

## 🚨 Possíveis Causas do 404

### Causa 1: Framework não detectado
**Sintoma**: Vercel trata como site estático simples
**Solução**: Definir Framework Preset como "Next.js"

### Causa 2: Output Directory incorreto
**Sintoma**: Vercel procura arquivos em lugar errado
**Solução**: Deixar Output Directory VAZIO

### Causa 3: Build falhou silenciosamente
**Sintoma**: Deploy completa mas sem gerar páginas
**Solução**: Verificar Build Logs, limpar cache, redeploy

### Causa 4: Versão Node.js incompatível
**Sintoma**: Erros durante build ou runtime
**Solução**: Usar Node.js 18.x ou 20.x

## 📋 Ordem de Ações Recomendada

1. **Primeiro**: Verificar Framework Preset (deve ser "Next.js")
2. **Segundo**: Limpar Output Directory (deixar vazio)
3. **Terceiro**: Redeploy com cache limpo
4. **Quarto**: Se ainda não funcionar, verificar Build Logs

## 🔗 Links Úteis

- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Next.js App Router](https://nextjs.org/docs/app)

## 💡 Teste Rápido

Se após todas as verificações ainda não funcionar:

1. Delete o projeto na Vercel
2. Reimporte do GitHub
3. Certifique-se que detecta como "Next.js"
4. Deploy novamente

---

**Última atualização**: Deploy local funciona perfeitamente ✅
