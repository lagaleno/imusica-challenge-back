# MyAutoBlogChallenge

# Requisitos de sistema

- Node.Js na versão Fermium(14.17.3) ou acima;
- Gerenciador de pacotes npm acima da versão 7.0.0 ou yarn versão 1.22.0 ou
  acima;
- IDE ou editor de texto de preferência;
- Ferramenta de visualização e gerência de banco de dados SQLite(opcional);
- Conta Github.

# Descrição do desafio

Neste desafio serão avaliados os conhecimentos do candidato no campo do
desenvolvimento de sistemas Web, código limpo e otimização. Destacando-se o
conhecimento das seguintes tecnologias:

- Node.Js;
- Express;
- Bearer token;
- Upload de arquivos em uma aplicação Node.Js (opcional);
- Conexão e manipulação de bancos de dados;
- React.Js;
- HTML;
- CSS e pré-processadores.

O objetivo desta tarefa é a manutenção de um sistema que armazene usuários e
suas respectivas postagens, para tal serão requeridas tarefas em uma api RESTful
em NodeJs utilizando express aliada a uma interface web implementada com uso de
React.Js. Requisita-se a persistência de informações relacionadas a usuários e
postagens através do uso de uma tecnologia de banco de dados.

A seguir serão descritos os requisitos do back-end e front-end do sistema
proposto, entregas bônus são opcionais por parte do candidato.

# Requisitos back-end

Usuários:

- A comunicação entre as requisições da aplicação devem ser realizadas
  utilizando-se o formato JSON e Multipart-form-data.
- Usuário deve ser capaz de cadastrar-se no sistema provendo as informações
  básicas de nome, email e senha. Não deve ser possível a existência de dois
  usuários de ids diferentes com o mesmo endereço de email.
- Usuário deve ser capaz de logar-se no sistema fornecendo email e senha.
  - Resposta da api deve conter um Bearer token que será utilizado para acesso a
    rotas privadas.
- Senha do usuário deve ser criptografada antes de ser armazenada no banco de
  dados.
- Sistema deve prover token de sessão do usuário com tempo de vida de até 7 dias
  desde sua criação.
- O usuário deverá realizar operações privadas na aplicação utilizando-se de um
  mecanismo de Bearer Token que deve ser enviado através de header nas
  requisições de listagem, criação, edição, exclusão de postagens e atualização
  de imagem de perfil/postagens.

Requisitos bônus:

- Usuário deve ser capaz de após sua criação na base de dados, atualizar sua
  foto de perfil fazendo upload de arquivos nos formatos png, jpg, jpeg e gif
  (sugestão: adição de campo avatarURL).
  - Api deve disponibilizar rota para que seja possível visualizar imagens de
    perfil dos usuários.
  - Ao realizar o upload de uma nova imagem de perfil, caso este já tenha alguma
    imagem previamente cadastrada, esta(imagem antiga) deve ser removida do
    storage de arquivos.

Postagens:

- Usuário deve ser capaz de criar postagens contendo título, corpo da postagem e
  imagem; além destes campos, a hora de criação da postagem também deve ser
  armazenada, porém, esta deve ser obtida de forma automatizada.
- Usuário deve ser capaz de listar as postagens disponíveis criadas por ele e
  por outros usuários da aplicação.
- Usuário deve ser capaz de editar atributos de uma postagem que tenha criado
  com exceção dos campos id e data de criação da postagem.
- Usuário deve ser capaz de excluir uma postagem que tenha criado.

Requisitos bônus:

- Usuário deve ser capaz de anexar imagens a suas postagens fazendo upload de
  arquivos nos formatos png, jpg, jpeg e gif (sugestão: adição de campo
  imageURL).
  - Api deve disponibilizar rota para que seja possível visualizar imagens de
    postagens dos usuários.
  - Ao realizar o upload de uma nova imagem de um post, caso este já tenha
    alguma imagem previamente cadastrada, esta(imagem antiga) deve ser removida
    do storage de arquivos.

Rotas de criação/ listagem/ update/remoção de postagens e atualização de imagem
de perfil/postagens devem ser implementadas de forma privada sendo acessíveis
somente através de passagem de token de autenticação no header Authorization da
requisição.

## Rotas da aplicação

Para facilitar o entendimento do desafio proposto, abaixo uma sugestão para as
rotas da aplicação:

```markdown
[POST] {{baseURL}}/users = Rota de criação de usuários
[POST] {{baseURL}}/users/signIn = Rota de autenticação de usuários
[PATCH] {{baseURL}}/users/updateAvatar = Rota de atualização de imagem de perfil
[GET] {{baseURL}}/uploads/:filename = Rota de acesso a arquivos de imagens
[GET] {{baseURL}}/posts = Rota de listagem de posts do usuário
[POST] {{baseURL}}/posts = Rota de criação de posts do usuário
[PUT] {{baseURL}}/posts/:postId = Rota para atualização de posts do usuário
[PATCH] {{baseURL}}/posts/:postId/updateImg = Rota para atualização de imagem de post do usuário
[DELETE] {{baseURL}}/posts/:postId = Rota para exclusão de posts do usuário
```

# Requisitos de front-end

- Interface deve ser fiel ao layout proposto.
- Sistema deve possuir 3 páginas implementadas, sendo estas:
  - SignIn: Página para autenticação de usuários previamente cadastrados.
    - Esta deve ser a primeira página apresentada a um visitante da página que
      não possua sessão ativa.
    - O formulário desta página deve realizar a ação de autenticação de
      usuário(implementada como requisito back-end).
    - Caso a resposta da api seja válida deve-se estabelecer uma sessão para o
      usuário e direcioná-lo para a página Dashboard.
  - SignUp: Página para cadastro de novos usuários.
    - Navegável por url ou a partir da página SignIn.
    - O formulário desta página deve realizar a ação de cadastro de
      usuário(implementada como requisito back-end).
    - Em caso de sucesso na resposta da api, usuário deve ser redirecionado para
      página SignIn.
  - Dashboard: Página apresentada para usuários que possuam uma sessão ativa.
    - Nesta página serão listadas as postagens dos usuários juntamente com
      botões de exclusão e edição para postagens que tenham sido criadas pelo
      usuário logado.
    - Ainda nesta página, deve-ser exibir como resposta aos botões de edição e
      criação uma modal contendo formulário para edição/criação de novas
      postagens.
    - As ações esperadas de acesso ao back-end para os elementos descritos são:
      Listar postagens criadas por usuários; Excluir ou editar postagem do
      usuário ativo através de id e criação de postagens.
- Sistema deve prover permanência do usuário até que este realize operação de
  logout ou até que o token gerado por sua autenticação chegue ao fim de sua
  vida útil.
- Acesso a rotas privadas devem enviar Bearer token como header Authorization.
- Usuários que possuam sessão ativa devem ser apresentados a página Dashboard ao
  acessar rotas públicas da aplicação.
- Usuários que não possuam sessão logada devem ser apresentados a página SignIn
  ao acessar rotas privadas da aplicação.

## Especificação de layout

Acesso direto ao Figma completo da aplicação:

[MyAutoBlogChallenge - Figma](https://www.figma.com/file/OOEIGnSdt9s5PI3zwINBEB/MyBlogChallenge?node-id=0%3A1)

# TAREFAS DO CANDIDATO

O candidato avaliado deverá enfrentar e vencer alguns cenários do cotidiano da
empresa detentora desta aplicação. As tarefas solicitadas estão divididas nos
setores backend e frontend.

## Cenários Backend

- Entrega de feature: Para finalizar a entrega da aplicação com os casos de uso
  descritos o desenvolvedor responsável deve finalizar os módulos da aplicação
  responsáveis pela criação de usuário e criação de posts. É de extrema
  importância atentar as regras de domínio destas funcionalidades.

- Correção de bug: O time de testes e qualidade reportou um problema com a
  funcionalidade de atualização de posts do usuário. Apesar da descrição da rota
  afirmar ser possível enviar no corpo da requisição somente os atributos que
  serão atualizados, ao tentar efetuar esta operação, a aplicação retorna um
  erro 500. Em anexo foi reportada a seguinte evidência:

```
curl --request PUT \
  --url http://localhost:3333/posts/1 \
  --header 'Authorization: Bearer {{token}}' \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "teste de update de titulo"
}'
```

- Entrega de feature opcional: Para a primeira entrega do projeto foi acordado
  que a aplicação não realizaria funcionalidades de upload de arquivo, uma vez
  que o módulo de armazenamento ainda estava incompleto. Entretanto, caso a
  aplicação esteja dentro do tempo limite para entrega, uma boa estratégia pode
  ser adiantar esta demanda.

## Cenários Frontend

- Entrega de feature: Após realizar a construção da interface de postagens,
  resta ao desenvolvedor a implementação da comunicação com a API para
  recuperação, listagem dinâmica das postagens cadastradas e respectivos
  autores.

- Entrega de feature: Após implementar a listagem de postagens, o programador
  pode prosseguir com o desenvolvimento das funcionalidades de exclusão de
  postagens e modal para criação e edição, encerrando assim a entrega dos casos
  de uso solicitados.

# Orientações gerais

A arquitetura da aplicação Backend encontra-se em padrões de Arquitetura Limpa, DDD e princípios SOLID. Assim, dependências entre os casos de uso foram invertidas e estes utilizam-se apenas de interfaces para aplicar suas regras de domínio. As efetivas implementações dos repositórios e provedores de serviço encontra-se fisicamente nas camadas(e também folders) de infra. Atente-se as funcionalidades já presentes na aplicação para compreender o fluxo desde o endpoint exposto, passando pelo controllers até ser executado pelos casos de uso.

Exemplos de chamadas para cada uma das rotas presentes encontram-se disponíveis em curls.md.

- As dependências do projeto podem ser instaladas através dos gerenciadores de
  pacote yarn ou npm por meio dos comandos:

```
yarn
npm install
```

- Os setores de código incompletos ou a serem implementados possuem comentários
  no formato "// TODO";

- Para a execução da aplicação backend deve ser acionado o script contido no
  arquivo package.json:

```
yarn dev:server
npm run dev:server
```

- A criação do banco de dados, entidades e relacionamentos é gerenciada de forma
  automatizada pela aplicação. O arquivo referente a esta base encontra-se na
  raiz do diretório de backend.

- Para a execução da aplicação frontend deve ser acionado o script contido no
  arquivo package.json:

```
yarn dev:web
npm run dev:web
```
