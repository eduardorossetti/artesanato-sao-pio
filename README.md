# Artesanato São Pio

## Sobre

### Qual a Finalidade?

Nossa finalidade é divulgar a vida e os trabalhos artesanais das Irmãs Clarissas do Mosteiro Maria Imaculada, de Marília-SP, que vivem suas entregas ao Senhor pela vida monástica, com intenso amor e generosidade.  
“Ora et Labora”. Como conhecemos pela regra monástica de São Bento, inspirador da vida contemplativa no ocidente, o trabalho manual é pilar essencial no cotidiano do religioso, juntamente com a oração. No labor do trabalho diário, encontramos o mesmo Senhor que, escondido na carpintaria de Nazaré, soube oferecer cada gota de Seu suor ao Bondoso Pai, em favor de toda humanidade.

## Tecnologias Utilizadas

### Frontend
- **Next.js**: Framework para construção de aplicações React com suporte a renderização no lado do servidor (SSR) e geração de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS para estilização rápida e eficiente através de classes utilitárias.
- **Radix UI**: Conjunto de componentes acessíveis e não opinativos para construção de interfaces de usuário, usados para elementos como área de rolagem, separadores, slots e abas.
- **Zustand**: Biblioteca para gerenciamento de estado em aplicações React, leve e simplificada.

### Estilização e Animação
- **Tailwindcss-animate**: Extensão do Tailwind CSS para adicionar animações.
- **Tailwind Merge**: Utilitário para combinar classes Tailwind sem conflito.
- **Clsx**: Utilitário para condicionalmente concatenar classes CSS.

### Integração e Utilitários
- **@notionhq/client**: Cliente para integração com a API do Notion.
- **React-number-format**: Componente para formatação de números, útil para entradas monetárias ou formatadas.
- **Lucide React**: Pacote de ícones React baseados no Feather Icons.

### Desenvolvimento e Qualidade de Código
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **ESLint**: Ferramenta de análise de código para identificar problemas e manter a consistência de estilo.
- **Husky**: Ferramenta para adicionar hooks Git para automatizar verificações de código antes de commits.
- **Lint-Staged**: Executa linters nos arquivos que serão commitados, garantindo que apenas código limpo seja enviado.
- **@commitlint/cli e @commitlint/format**: Ferramentas para padronizar mensagens de commit.

### Scripts Disponíveis
- **`dev`**: Inicia o servidor de desenvolvimento.
- **`build`**: Gera a build de produção.
- **`start`**: Inicia o servidor da aplicação em modo de produção.
- **`lint`**: Executa o ESLint para verificar o código.
- **`prepare`**: Configura o Husky para usar hooks Git.
- **`reinstall`**: Remove todas as pastas `node_modules` e reinstala as dependências usando `pnpm`.

### Gerenciamento de Pacotes
- **Pnpm**: Gerenciador de pacotes para Node.js, otimizado para eficiência e velocidade.

### Ambiente
- **Node.js**: Versão >=20 é necessária para rodar a aplicação.

## Licença
Este projeto é licenciado sob a Licença MIT.
