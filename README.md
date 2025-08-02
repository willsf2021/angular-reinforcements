# Angular Reinforcements

Este repositório foi criado com o objetivo de reforçar conceitos fundamentais do Angular por meio de pequenos exercícios e exemplos práticos.  
A ideia é consolidar conhecimentos importantes para o desenvolvimento com Angular, trabalhando desde **componentes básicos** até **comunicação entre componentes** e **boas práticas de template e binding**.

---

## 📚 O que você encontra aqui

- **Criação e organização de componentes**
- **Property Binding (`@Input`) e Event Binding (`@Output`)**
- **Filtros e exibição dinâmica de listas**
- **Formulários com Template-driven Forms**
- **Boas práticas com estruturação de código e HTML**

---

## 🚀 Tecnologias utilizadas

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap 5](https://getbootstrap.com/) (para estilização rápida)

---

## 📂 Estrutura do projeto

- `app.component` → Componente principal, responsável pelo estado geral.
- `wish-list.component` → Componente filho, exibe a lista de desejos usando `@Input`.
- `add-wish-form.component` → Componente filho, envia novos itens para o pai usando `@Output`.

---

## 🔧 Como executar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/willsf2021/angular-reinforcements
   cd wish-list
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode a aplicação:

   ```bash
    ng serve
   ```

4. Abra o navegador:

   ```bash
   http://localhost:4200/
   ```

## ✨ Objetivo

- Este projeto tem caráter didático e de reforço.
  A ideia não é criar uma aplicação complexa, mas praticar conceitos essenciais e manter o "muscle memory" para Angular ativo, servindo como um ponto de referência rápido para revisões futuras.
