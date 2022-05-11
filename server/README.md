
![NLW](https://i.imgur.com/2y5GdI3.png)
# IMPULSE - BackEnd

- NodeJs
- Prisma
- SQLite


### Utilizar para criação server 
> node + typescript
- dentro da pasta do server
```npm init -y```
- Cria a src
- Instala o Typescript e demais dependencias
```  npm instal -D @types/express @types/node ts-node-dev typescript express ```


# Prisma
> Instalar o Prisma VS Code Extension para obter o lint
``` npm i prisma -D ```
``` npm i @prisma/client  ```
- Roda o comando para inicar o prisma 
````npx prisma init ```

# Nodemailer
> Utilizado para envio de email 

# Jest
> utilizado para testes

```npm install jest -D```
```npm install ts-node -D```
```npm install @types/jest```
# SWC
> utilizando para compilar os testes 

```npm i -D jest @swc/core @swc/jest```


# SOLID
1. Single Responsibility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle
---------------------------------------------
1. Cada Classe/Função tem uma responsabilidade única;
2. As clasees da aplicação devem ser aberta para extensão mas fechadas para modificação;
3. Nos devemos substituir uma classe pai por uma herança dela e tudo continua funcionando;
4. Separar ao maximo as interfaces
5. Receber uma dependencia externa e usar