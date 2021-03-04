# Aula 2 Versionamento com Git e Github

>Permite o uso de "nuvem" para poder salvar codigo e versionar, melhorando o desenhepenho para construções de software em equipe.

## Git 

Sitema de controle de verão, onde documenta quem fez, onde fez, e oque fez.

### Funcionalidade

- Pode fazer manutenção com 2 ou mais desenvolvedores no mesmo arquivos, pasta ou projeto;

- Fazer alteração sem que as alterações feitas sejam sobre escritas;

- Poder voltar um salve(commit), em caso de erros;


### Fluxo

Esse fluxo ocorre quando é pidido uma nova funcionalidade para o projeto.

Exemplo:<br>
Produção (master) < Homologação < Desenvolvimento (feature) (só é apagado apos o "ok" da Homologação)

## Comandos para uso:

- git init<br>
Inicia um repositorio local

- git add .<br>
Faz o salve de todos os arquivos modificado,

- git status<br>
Verifica quais arquivos foram modificados, e deixa as cores vermelhas para os que não foram preparados para o commit, e verde para arquivos prontos para commit.

- git commit -m "qualquer msg"<br>
Salva a modificações preparadas para o salvamento e gera um ponto de salve.

### Nomenclatura usada (alguns termos tecnicos)

- hotfix - correção rapida e pontual(urgencia)
- feature - 
<br>

# Github e Gitlab

>São plataformas de hospedagem de código-fonte.Elas permitem que os desenvolvedores contribuam em projetos privados ou abertos (mais conhecidos como projetos open source).


### Gitlab

Foco em integração com ferramentas de DevOps. O Gitlab proporciona, nativamente, ferramentas de integração e entrega contínua ou CI/CD, além de métricas para acompanhamento de qualidade de código, performance e teste de usabilidade.

>Aula 3 pratica do que foi estudado.