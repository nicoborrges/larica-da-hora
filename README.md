# Larica Fácil

Este é um aplicativo de receitas desenvolvido em React Native com Expo. O aplicativo utiliza o banco de dados Firestore do Firebase para armazenar e acessar as receitas, e também utiliza Async Storage para armazenar dados localmente. O aplicativo tem uma interface simples e fácil de usar, com opções de pesquisa, filtragem e favoritos.

## Funcionalidades

O objetivo do projeto é ser uma ferramenta para ajudar a organizar receitas culinárias. As funcionalidades principais são:

- Pesquisa e filtro de receitas
- Adicionar receitas aos favoritos
- Visualizar as receitas favoritas
- Adicionar novas receitas ao banco de dados (a implementar)
- Editar ou excluir receitas existentes (a implementar)
- Visualizar detalhes em tela cheia
- Utilização de modals para visualizar videos
- Opção de compartilhamento nativo entre apps mobile

## Banco de dados

O Firestore do Firebase é utilizado para armazenar as receitas. Cada receita é representada por um documento na coleção "receitas". O documento contém os seguintes campos:

- `id` (string): ID único da receita
- `name` (string): Nome da receita
- `cover` (string): Url da imagem da receita
- `ingredients` (map): Lista de ingredientes da receita
- `instructions` (array): Modo de preparo da receita
- `time` (number): Tempo de preparo da receita
- `total_ingredients` (number): Total de ingredientes da receita
- `video` (string): Url do video da receita

## AsyncStorage

O AsyncStorage é utilizado para salvar as receitas favoritas localmente. As receitas favoritas são salvas em um único item do AsyncStorage, utilizando a chave "@applarica".

## Routes e stack routes

O React Navigation é utilizado para gerenciar as rotas da aplicação. A navegação é feita através de uma stack navigator, que empilha as telas à medida que o usuário navega pela aplicação. Também é utilizado um TabBar que aloca a "Home Page" e "Favorites Page"

## Modals

O React Native Modal é utilizado para exibir o video no youtube das receitas. O video é aberto em um formato de pop-up e pode ser fechado sem sair do aplicativo.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou um pull request.
