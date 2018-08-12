# Todo list

Este projeto foi criado com o intuito de colocar em prática meus
os conhecimentos adquiridos sobre a implementação de classes e alguns
design patterns do JavaScript moderno. A ideia inicial é desenvolver
um Todo List ir acrescentando recursos à medida que avanço com meus estudos.

Este projeto foi inspirado no projeto [Todo list](https://larismourullo.github.io/todo-list/)
da Larissa Mourullo.

## Estudo de caso

A lista das tarefas, ou todo list como nós costumamos dizer, é a mais
simples e eficaz ferramenta de produtividade pessoal. Todos nós já tivemos a
necessidade de fazer uma lista escrevendo as coisas que precisamos fazer.

Uma tarefa pode possuir uma descrição, um status (finalizada ou não) uma
data de finalização e outras informações.

Uma lista de tarefas pode adicionar uma tarefa, pode remover uma ou todas
as tarefas.

Sempre que uma tarefa for acrescentada na lista de tarefas ou possuir
seu status alterado, essas informações devem ser refletida na view
(data binding).

Essas tarefas podem ser salvas em um banco de dados ou serem "pegas"
de uma API externa.

O projeto não é _tão complexo assim_, mas para facilitar futuras manutenções
e seguir uma linha de raciocínio, deve haver uma separação entre a regra de
negócio e a exibição da informação para o usuário final.

> **Atenção:** Nem todos esses recursos já foram implementados.

### Não se prenda na simplicidade do projeto, se prenda na implementação

A intenção deste projeto é criar uma espécie de framework (apenas para fins didáticos)
com alguns recursos existentes nos principais frameworks do mercado.

Então foram/serão aplicados neste projeto alguns design patterns e features interessantes do JavaScript moderno:

- Foi aplicado o padrão MVC, onde fica claro a separação Model-View-Controller

- Para fins de conhecimento, optei por criar toda a estrutura do projeto
  utilizando classes

- As views são criadas utilizando o recurso de template literals

- Foi acrescentado um recurso que simula o princípio da reatividade. Como
  assim?! Não entendi. Execute este código no seu terminal: `todoController._message.message = "Estou testando a reatividade."`

- Futuramente será criada uma API que utilizará `promises`, `async` e `await`

## Começando

Essas instruções farão com que você tenha uma cópia deste projeto em
execução na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

Para desenvolver este projeto utilizei o navegador Google Chrome Versão 67.
Então para conseguir colocar este projeto em funcionamento em sua máquina,
você precisará de um navegador compatível com algumas das principais
features do JavaScript moderno. [Aqui você terá acesso à lista de navegadores
compatíveis.](https://kangax.github.io/compat-table/es6/)

### Instalando

Para você colocar este projeto em funcionamento, basta você clonar este
projeto ou fazer download e executar o arquivo `index.html` em seu
navegador.

Como este projeto é apenas para fins educativos, a princípio optei por não
acrescentar um transpiler. _EU SEI QUE ISSO É ERRADO_, por isso futuramente
pretendo adicionar o [Babel](https://babeljs.io/) neste projeto para manter
compatibilidade com navegadores mais antigos.
[Veja mais em próximas etapas](#proximas-etapas)

> **Sem dependências, sem complicações.**

## Testes

Até o momento estou utilizando a [metodologia eXtreme Go Horse (XGH)](http://sou.gohorseprocess.com.br/extreme-go-horse-xgh/)
para codificar e realizar testes. Em um futuro próximo pretendo adicionar
testes automatizados neste projeto.
[Veja mais em próximas etapas](#proximas-etapas)

## Próximas etapas

- [x] Publicar no github pages.
- [x] Adicionar eslint e editor config
- [x] Adicionar webpack e incluir recurso de minificação do código fonte.
- [x] Adicionar suporte para navegadores antigos utilizando babel.
- [x] Adicionar suporte à imports e corrigir multiplas tags scripts no arquivo `index.html`
- [ ] Adicionar pwa-manifest, offline-plugin, bunduler-analyzer.
- [ ] Adicionar testes automatizados.
- [ ] Implementar uma API para "pegar" a lista de tarefas de um outro servidor.
- [ ] Implementar um layout mais bonito e amigável, sem utilizar o bootstrap.

## Contribuindo

Por favor leita o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes
sobre como enviar suas pull requests.

Encontrou algum problema? Possui alguma sugestão? Abra uma Issue!

## Versionamento

Usei [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, veja as [tags neste repositório](https://github.com/drianoaz/studying-classes-js/tags).

## Autores

- **Adriano de Azevedo** - _Trabalho inicial_ - [@drianoaz](https://twitter.com/drianoaz)

Veja também a lista de [contribuidores](https://github.com/drianoaz/studying-classes-js/contributors) que participaram deste projeto.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo
[LICENSE.md](LICENSE.md) para mais detalhes.

## Agradecimentos

- [Flávio Almeida](https://twitter.com/flaviohalmeida) - O melhor cangaceiro e professor do melhor curso sobre JavaScript que já fiz.

- [Larissa Mourullo](https://twitter.com/larismourullo) - Por ter "me dado" a ideia de desenvolver este projeto.

- [JavaScript For Everyone](https://t.me/joinchat/BAqjug7FxYSa6fmpDy_rSA) - Nosso grupo maravilhoso e inclusivo de JavaScript.

- [Leo Balter](https://twitter.com/leobalter) - Por suas "Aulas" sobre JavaScript e design patterns em nosso grupo.
