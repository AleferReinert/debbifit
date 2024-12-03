# Consultoria Fitness

Landing page para consultoria fitness online.

## Começando

1. Clone o repositório:
   ```
   git clone https://github.com/aleferreinert/consultoria-fitness.git
   ```
2. Entre no diretório do projeto:
   ```
   cd consultoria-fitness
   ```
3. Instale as dependências:
   ```
    npm install
   ```
4. Inicie o servidor de desenvolvimento:

   ```
   npm run dev
   ```

# Scripts

### Commits

1. Adicione os arquivos:

   ```
   git add .
   ```

2. Selecione uma mensagem de commit válida:

   ```
   git commit
   ```

### Storybook

1. Iniciar:

   ```
   npm run storybook
   ```

2. Executar testes:
   ```
   npm run test --watch
   ```

### Lint

```
npm run lint
```

### Criar componente

```
npm run plop
```

## Tecnologias Utilizadas

- **Chromatic:** Ferramenta para captura de tela, revisão e testes visuais automatizados para componentes de interface de usuário.
- **commitlint:** Ferramenta para validar e padronizar mensagens de commit.
- **cz-commitlint:** Adaptador para Commitizen que aplica regras de mensagens de commit definidas pelo Commitlint.
- **ESLint:** Ferramenta de linting para identificar e corrigir problemas em código JavaScript/TypeScript.
- **Framer Motion:** Ferramenta para animações.
- **Husky:** Ferramenta para adicionar hooks de Git, como pré-commit e pré-push, para automatizar verificações de código.
- **Next.js:** Framework React para a construção de aplicações web estáticas e dinâmicas.
- **React:** Biblioteca JavaScript para construir interfaces de usuário.
- **Plop:** Ferramenta de scaffolding para gerar código e arquivos de forma consistente e automatizada.
- **Prettier:** Formatador de código opinativo que garante um estilo consistente de código.
- **Storybook:** Ferramenta de desenvolvimento para construir e testar componentes de interface de usuário de forma isolada.
- **Tailwind CSS:** Framework de utilidades CSS para estilização rápida e eficiente.
- **TypeScript:** Superconjunto de JavaScript que adiciona tipagem estática ao código.

## URL do Projeto

Explore o projeto no link: [Consultoria Fitness](https://consultoria-fitness-online.vercel.app).

## Registro de performance de Banner em celular

Com sizes em <Image /> e server component sem fetch: 90%
Sem sizes em <Image /> e server component sem fetch: 92%
Sem sizes e quality 100 em <Image /> e server component sem fetch: 92%
Sem componente <Image />: 94%
Sem componente <Image /> e sem background: 99%
Sem componente <Image /> e com background xsmall: 96%
Sem background e floatImg como client component: 95%

em produção: 29 de nov. de 2024, 11:17:37: 92%

feat(Banner, BannerImages): create background mobile: 93
feat(Banner): remove client component bannerimages: 90
feat(Banner): re-add client component and refactor replace tags function: 92
