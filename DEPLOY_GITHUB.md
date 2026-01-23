# 🚀 Guia de Deploy - Manual de Campo do Caçador

## ✅ Status Atual
- ✅ Repositório Git inicializado
- ✅ Primeiro commit realizado (24 arquivos, 3446 linhas)
- ✅ Projeto pronto para upload

---

## 📤 Passo 1: Criar Repositório no GitHub

### Opção A: Via GitHub Desktop (Recomendado)
1. Abra o GitHub Desktop
2. Clique em "Add" → "Add existing repository"
3. Selecione a pasta: `C:\Users\Caio\OneDrive\Documentos\GitHub\Manual-dos-monstros`
4. Clique em "Publish repository"
5. Configure:
   - **Name:** `Manual-dos-monstros`
   - **Description:** `Bestiário digital baseado na saga The Witcher de Andrzej Sapkowski`
   - ☑️ Keep this code private (ou desmarque para público)
6. Clique em "Publish repository"

### Opção B: Via Linha de Comando
```bash
# 1. Crie um repositório no GitHub.com primeiro
# 2. Depois execute:

git remote add origin https://github.com/SEU_USUARIO/Manual-dos-monstros.git
git branch -M main
git push -u origin main
```

---

## 🌐 Passo 2: Deploy na Vercel

### Método 1: Via Vercel Dashboard (Mais Fácil)

1. Acesse: https://vercel.com
2. Faça login com sua conta GitHub
3. Clique em "Add New..." → "Project"
4. Selecione o repositório `Manual-dos-monstros`
5. Configure o projeto:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (deixe vazio)
   - **Build Command:** `npm run build` (já configurado)
   - **Output Directory:** `out` (já configurado)
6. Clique em "Deploy"
7. Aguarde 2-3 minutos
8. ✅ Seu site estará no ar!

### Método 2: Via Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

---

## 🔧 Configurações Importantes

### Variáveis de Ambiente (se necessário)
Não há variáveis de ambiente necessárias para este projeto.

### Domínio Personalizado (Opcional)
1. No dashboard da Vercel, vá em "Settings" → "Domains"
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções

---

## 📋 Checklist de Deploy

- [x] Git inicializado
- [x] Primeiro commit realizado
- [ ] Repositório criado no GitHub
- [ ] Código enviado para GitHub
- [ ] Projeto importado na Vercel
- [ ] Deploy realizado com sucesso
- [ ] Site acessível online

---

## 🐛 Problemas Comuns

### Erro: "This directory does not appear to be a Git repository"
**Solução:** Já resolvido! O Git foi inicializado.

### Erro: "Failed to compile"
**Solução:** Execute `npm install` antes de fazer deploy.

### Erro: "Module not found"
**Solução:** Verifique se todos os arquivos foram commitados:
```bash
git status
git add .
git commit -m "Fix: adicionar arquivos faltantes"
git push
```

### Deploy na Vercel falha
**Solução:** 
1. Verifique se o `next.config.js` está correto
2. Confirme que `output: 'export'` está configurado
3. Execute `npm run build` localmente para testar

---

## 📊 Estrutura do Projeto

```
Manual-dos-monstros/
├── app/                    # Páginas Next.js
│   ├── page.tsx           # Página inicial (índice)
│   ├── layout.tsx         # Layout global
│   ├── globals.css        # Estilos globais
│   └── criatura/[id]/     # Páginas dinâmicas
├── data/
│   └── bestiario.json     # Dados das criaturas (UTF-8 ✅)
├── types/
│   └── criatura.ts        # Interfaces TypeScript
├── public/
│   └── images/criaturas/  # Imagens (adicionar futuramente)
├── package.json           # Dependências
├── next.config.js         # Configuração Next.js
└── tsconfig.json          # Configuração TypeScript
```

---

## 🎯 Próximos Passos Após Deploy

1. **Adicionar Imagens**
   - Criar ilustrações para cada criatura
   - Salvar em `public/images/criaturas/`
   - Formato: PNG transparente

2. **Testar Responsividade**
   - Desktop
   - Tablet
   - Mobile

3. **SEO**
   - Adicionar meta tags
   - Criar sitemap.xml
   - Configurar robots.txt

4. **Analytics (Opcional)**
   - Google Analytics
   - Vercel Analytics

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs no dashboard da Vercel
2. Execute `npm run build` localmente
3. Consulte a documentação: https://nextjs.org/docs

---

**Status:** ✅ Projeto pronto para deploy!
**Última atualização:** 2024
