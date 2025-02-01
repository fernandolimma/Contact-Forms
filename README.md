Executando o Projeto Localmente
Servidor Local:
Para testar o projeto localmente, você pode usar um servidor HTTP simples. Se você tem o Node.js instalado, pode usar o http-server:

Instale o http-server globalmente:

npm install -g http-server
Navegue até a pasta do projeto e inicie o servidor:

http-server -p 8000
Acesse http://localhost:8000 no seu navegador.

Autenticação:
Quando você acessar a página, será solicitado que você faça login com sua conta do Google e conceda permissão para acessar seus contatos.

1. Configuração do Projeto no Google Cloud Console: 

Crie um Projeto no Google Cloud Console:

1- Acesse o Google Cloud Console.

2- Clique em "Selecionar um projeto" no topo da página e depois em "Novo Projeto".

3- Dê um nome ao seu projeto e clique em "Criar".

Habilitar a API do Google People:

1- No menu lateral, vá em "APIs e Serviços" > "Biblioteca".

2- Pesquise por "Google People API" e clique nela.

3- Clique em "Ativar" para habilitar a API para o seu projeto.

Criar Credenciais OAuth 2.0:

1- No menu lateral, vá em "APIs e Serviços" > "Credenciais".

2- Clique em "Criar Credenciais" e selecione "ID do cliente OAuth".

3- Escolha o tipo de aplicativo "Aplicativo da Web".

4- Em "URIs de redirecionamento autorizados", adicione http://localhost:8000 (ou outra porta que você for usar localmente).

5- Clique em "Criar" e anote o ID do cliente e o Segredo do cliente.