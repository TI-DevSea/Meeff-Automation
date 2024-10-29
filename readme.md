
# Meeff Friend Request Automation

Script para automatizar o envio de solicitações de amizade para o app MEEFF, com esse script você não irá ter que assistir anúncios a cada 6 pedidos de amizade enviados via APP, pois enviamos o pedido via API.


## Funcionalidades

- Listar os usuarios disponiveis para amizade
- Enviar solicitações de amizade


## Documentação da API

#### Retornar todos os usuarios da fila de envio de solicitação

```http
  GET user/explore/v2/?lat=-3.7895238&lng=-38.5327365
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `meeff-access-token` | `string` | **Obrigatório**. Seu access token do usuario |
| `-firebase-appcheck` | `string` |  Firebase Token (caso tenha) |
| `Authorization` | `string` | Auth (caso tenha) |

#### Envia a solicitação de amizade para o usuario

```http
  GET /user/undoableAnswer/v5/?userId=${user._id}&isOkay=1
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `meeff-access-token` | `string` | **Obrigatório**. Seu access token do usuario |
| `-firebase-appcheck` | `string` |  Firebase Token (caso tenha) |
| `Authorization` | `string` | Auth (caso tenha) |

## Autores

- [@jvictorbap](https://www.github.com/jvictorbap)


## Demonstração

![Console Demonstration](https://i.imgur.com/idpUojK.png "Console Demonstration")
