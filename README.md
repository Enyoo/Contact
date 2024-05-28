# Contatos

Este é um projeto Angular simples que faz a gestão de contatos de uma pessoa usando o Angular.

## Visão Geral

Este projeto inclui:

- Componentes para representar diferentes partes da interface do usuário.
- Serviços para lidar com lógica de negócios e interação com APIs externas.
- Rotas para navegação entre diferentes partes do aplicativo.
- Integração com o Bootstrap para estilos e componentes adicionais.

## Requisitos

- Node.js e npm instalados globalmente.
- Angular CLI instalado globalmente.

## Como Usar

### 1. Instalação

Clone este repositório:

```bash
git clone git@github.com:Enyoo/Contact.git
```

Navegue até o diretório do projeto:
```bash
cd Contact
```

Instale as dependências:
```bash
npm install
```

2. Execução do Servidor de Desenvolvimento
Execute o servidor de desenvolvimento:
```bash
ng serve ou npm start
```
Acesse o aplicativo em seu navegador em http://localhost:4200/.

3. Construção do Projeto
Para construir o projeto para produção, use o seguinte comando:
```bash
ng build --prod
```

Isso irá criar uma versão otimizada do aplicativo no diretório dist/. Você pode implantar este diretório em qualquer servidor web para lançamento em produção.

Estrutura do Projeto
O projeto está estruturado da seguinte forma:
```bash
/src
  /app
    /components       # Componentes reutilizáveis
    /services         # Serviços para lógica de negócios
    /models           # Modelos de dados
    app-routing.module.ts  # Configuração de rotas
    app.module.ts     # Módulo principal do aplicativo
    ...
```

