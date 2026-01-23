# 🚀 Deploy via GitHub Pages - Guia Completo

## ✅ Sim, é TOTALMENTE POSSÍVEL hospedar via GitHub Pages!

O projeto já está configurado para gerar arquivos estáticos (SSG), então funciona perfeitamente com GitHub Pages.

---

## 📋 Passo a Passo Completo

### 1️⃣ Enviar o Código para o GitHub

#### Opção A: GitHub Desktop (Mais Fácil)
1. Abra o **GitHub Desktop**
2. **File** → **Add Local Repository**
3. Selecione: `C:\Users\Caio\OneDrive\Documentos\GitHub\Manual-dos-monstros`
4. Clique em **"Publish repository"**
5. Configure:
   - **Name:** `Manual-dos-monstros`
   - **Description:** `Bestiário digital baseado na saga The Witcher`
   - ☑️ Marque como **público** (necessário para GitHub Pages gratuito)
6. Clique em **"Publish repository"**

#### Opção B: Linha de Comando
```bash
# 1. Crie um repositório PÚBLICO no GitHub.com
# 2. Execute:

git remote add origin https://github.com/SEU_USUARIO/Manual-dos-monstros.git
git branch -M main
git push -u origin main
```

---

### 2️⃣ Configurar GitHub Pages no Repositório

1. Vá para o repositório no GitHub.com
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - **Source:** GitHub Actions
5. Pronto! A configuração está feita.

---

### 3️⃣ O Deploy Acontece Automaticamente! 🎉

Quando você fizer push para o repositório:
1. O GitHub Actions vai executar automaticamente
2. Vai instalar as dependências (`npm ci`)
3. Vai fazer o build (`npm run build`)
4. Vai fazer deploy dos arquivos da pasta `out/`
5. Seu site estará disponível em:
   ```
   https://SEU_USUARIO.github.io/Manual-dos-monstros/
   ```

---

## 🔍 Verificar o Deploy

### Ver o Progresso:
1. Vá para o repositório no GitHub
2. Clique na aba **Actions**
3. Você verá o workflow "Deploy to GitHub Pages" rodando
4. Aguarde 2-3 minutos
5. ✅ Quando ficar verde, o site está no ar!

### Acessar o Site:
```
https://SEU_USUARIO.github.io/Manual-dos-monstros/
```

---

## 📁 Arquivos Criados para GitHub Pages

### `.github/workflows/deploy.yml`
Workflow do GitHub Actions que:
- Detecta push na branch `main` ou `master`
- Instala Node.js 20
- Instala dependências
- Faz build do Next.js
- Faz deploy automático

### `next.config.js` (já configurado)
```javascript
output: 'export',  // Gera arquivos estáticos
images: {
  unoptimized: true  // Necessário para GitHub Pages
}
```

---

## 🆚 GitHub Pages vs Vercel

### GitHub Pages ✅
**Vantagens:**
- ✅ Totalmente gratuito
- ✅ Sem limite de projetos
- ✅ Deploy automático via GitHub Actions
- ✅ URL: `usuario.github.io/projeto`
- ✅ Simples de configurar

**Desvantagens:**
- ⚠️ Apenas sites estáticos (mas nosso projeto já é!)
- ⚠️ Sem server-side rendering (não precisamos)
- ⚠️ Sem edge functions (não precisamos)

### Vercel ✅
**Vantagens:**
- ✅ Otimizado para Next.js
- ✅ Deploy instantâneo
- ✅ Preview de PRs
- ✅ Analytics integrado
- ✅ URL customizada fácil

**Desvantagens:**
- ⚠️ Limite de 100GB bandwidth/mês (gratuito)
- ⚠️ Limite de builds

---

## 🎯 Recomendação

**Para este projeto, ambos funcionam perfeitamente!**

### Use GitHub Pages se:
- ✅ Quer 100% gratuito sem limites
- ✅ Já usa GitHub para o código
- ✅ Não precisa de analytics avançado

### Use Vercel se:
- ✅ Quer deploy mais rápido
- ✅ Quer preview de mudanças
- ✅ Quer analytics integrado
- ✅ Quer domínio customizado fácil

---

## 🐛 Solução de Problemas

### Erro: "Page build failed"
**Solução:**
```bash
# Teste o build localmente primeiro:
npm run build

# Se funcionar localmente, o problema pode ser:
# 1. Dependências faltando no package.json
# 2. Erro de sintaxe em algum arquivo
```

### Erro: "404 - Page not found"
**Solução:**
1. Verifique se o repositório é **público**
2. Verifique se GitHub Pages está ativado em Settings → Pages
3. Aguarde 5 minutos após o primeiro deploy

### Site não atualiza
**Solução:**
1. Limpe o cache do navegador (Ctrl + Shift + R)
2. Aguarde alguns minutos
3. Verifique se o workflow terminou com sucesso

---

## 📊 Status do Projeto

- ✅ Git inicializado
- ✅ Commits realizados
- ✅ Workflow do GitHub Actions criado
- ✅ Next.js configurado para SSG
- ✅ Pronto para deploy!

---

## 🎬 Próxima Ação

1. **Envie o código para o GitHub** (Passo 1)
2. **Configure GitHub Pages** (Passo 2)
3. **Aguarde o deploy automático** (Passo 3)
4. **Acesse seu site!** 🎉

---

## 📞 Comandos Úteis

```bash
# Ver status do Git
git status

# Ver histórico de commits
git log --oneline

# Fazer novo commit
git add .
git commit -m "sua mensagem"
git push

# Ver branches
git branch

# Mudar para branch main (se necessário)
git checkout -b main
```

---

**Resumo:** Sim, é totalmente possível e até mais simples que Vercel! Basta enviar para o GitHub e ativar GitHub Pages. O deploy é automático! 🚀
