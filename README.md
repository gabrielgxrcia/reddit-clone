# Breadit - Fullstack Reddit Clone

Feito com o Next.js App Router, TypeScript e Tailwind

## Features

- Rolagem infinita para carregar posts dinamicamente.
- Autenticação usando NextAuth e Google.
- Feed personalizado para usuários autenticados.
- Caches usando [Upstash Redis](https://upstash.com/).
- Atualizações otimistas para uma ótima experiência do usuário
- Busca de dados usando React-Query.
- Um editor de postagem bonito e altamente funcional.
- Carregamentos de imagens e visualizações de links.
- Funcionalidade completa de comentários com respostas.
- ... and much more

## Funcionamento

Para começar com este projeto, execute

```bash
  gh repo clone gabrielgxrcia/reddit-clone
```

e copie essas variáveis ​​.env.example em um arquivo .env separado:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

REDIS_URL=
REDIS_SECRET=
```

se desejar, você pode colar este trecho para criação rápida de componentes (opcional):

```typescript
// vscode settings -> user snippets -> typescriptreact.json
```

```json
"Typescript React Function Component": {
    "prefix": "fc",
    "body": [
      "import { FC } from 'react'",
      "",
      "interface ${TM_FILENAME_BASE}Props {",
      "  $1",
      "}",
      "",
      "const $TM_FILENAME_BASE: FC<${TM_FILENAME_BASE}Props> = ({$2}) => {",
      "  return <div>$TM_FILENAME_BASE</div>",
      "}",
      "",
      "export default $TM_FILENAME_BASE"
    ],
    "description": "Typescript React Function Component"
  },
```

e isso é tudo que você precisa para funcionar o projeto localmente!

## Agradecimentos

- [Upstash Redis](https://upstash.com/) por tornar isso possível.
- [Code with Antonio](https://www.youtube.com/@codewithantonio) pela inspiração de design.
- Shadcn's [Taxonomy respository](https://github.com/shadcn/taxonomy) por mostrar o editor de postagem e pelo seus ótimos componentes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
