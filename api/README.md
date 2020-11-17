SEQUENCIA PARA CRIAR O PROJETO

Criar o arquivo package
### npm init

Gerencia as requisição, rotas e URLs, entre outra funcionalidades
### npm install express

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código
fonte, g significa globalmente
### npm install -g nodemon

Instalar o banco de daos MongoDB
### npm install --save mongodb

Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos
JavaScript para que possam ser utilizados pela aplicação.
### npm install --save mongoose

Permitir acesso a API
### npm install --save cors

Gerar o backup do banco de dados MongoDB
### mongodump --db celke --out (Exemplo: Users\data\db)

Restaurar o backup do banco de dados MongoDB
### mongorestore --db celke (Exemplo: Users\data\db\celke)