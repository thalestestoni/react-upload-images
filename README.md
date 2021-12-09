# Bem-vindo ao projeto react-upload-images!

Este app faz upload de imagens e também mostra os uploads já feitos.

# Como rodar o projeto

Passos:
- Instalar o node.js
- Instalar o yarn
- Baixar as dependencias do projeto
- Criar uma conta no IMGBB, gerar uma API Key e configura-la no env do projeto.
- Criar uma conta no FaunaDB, gerar uma API Key e configura-la no env projeto.

Acesse https://nodejs.org/en/download/ e siga a instalação do node.js de acordo com seu sistema operacional.

Acesse https://classic.yarnpkg.com/lang/en/docs/install e siga a instalação do yarn de acordo com seu sistema operacional.

Após clonar o projeto na sua máquina, abra o terminal do seu sistema operacional, entre na pasta do projeto e execute o comando `yarn` para baixar as dependencias.

Agora abra o projeto na sua IDE preferida.

Faça uma cópia do arquivo `.env.example` e renomeie para `.env.local`

Acesse https://imgbb.com/ e se cadastre.

Após fazer o login no IMGBB, vá até as configurações de API da ferramenta e gere uma nova API Key.

Copie a key gerada e insira no arquivo `.env.local` na chave NEXT_PUBLIC_IMGBB_API_KEY dessa maneira:

NEXT_PUBLIC_IMGBB_API_KEY=ApiKeyGeradaNoImgBB

Acesse https://docs.fauna.com/fauna/current/learn/quick_start/quick_start.html siga os passos para criar uma conta e criar um novo database no FaunaDB.

Após se cadastrar e criar o database, acesse a aba "Security" do seu database no FaunaDB e gere uma KEY.

Copie o SECRET gerado e cole no arquivo `.env.local` do projeto na configuração FAUNA_API_KEY, dessa maneira:

FAUNA_API_KEY=SecretKeyGeradaNoFaunaDB

Abra o terminal dentro do projeto e execute o comando `yarn build` e depois o comando `yarn start`.

Acesse o link descrito no terminal para acessar a aplicação no seu navegador.

# Tecnologias

* React
* IMGBB
* FaunaDB
* React Query
* React Hook Form
* Chakra UI
* Jest
