
![NLW](https://i.imgur.com/2y5GdI3.png)
# nlw-impulse

### Utilizar para criação do app vite-vanilha
> Javascript moderno 

```npm create vite@latest```
- nome do projeto
- Qual framework utilizar (react)
- Plugins adicional (react-ts)

Como padrão eliminar limpar estrutra e deixar somente
- App.tsx
- main.tsx
- vite.env.d.ts
 

# Componentes
1 - Nome sempre começar com letra maiúscula.  
2 - Seu conteudo deve retornar um unico html

# Propriedades
1 - Parametro passado como props
2 - Recebido com parametro de uma funçao

# Typescript
> sempre que detectar que uma função esta recebendo uma props e esta props não estiver utilizano uma iterface ele acusa.
```
interface ButtonType{
    nomeProps?: string;
}
```
> ? interrogação referencia se a props é obrigatoria ou nao.

# Tailwind CSS 
Extension VsCode: Tailwind CSS IntelliSense
Doc: https://tailwindcss.com/docs/installation/using-postcss
> Framework para adicionar classes de estilos no html.

1 - ```npm install -D tailwindcss postcss autoprefixer```
2 - ```npx tailwindcss init -p ```
3 - No arquivo **tailwind.config.js** cole em **content** ```["./src/**/*.{html,js}"],```
3.1 - Substitua o valor de {html,js} para tsx ```content: ["./src/**/*.tsx"],```
3.2 - Dentro de extends posso extender uma color
```
extend: {
    colors:{
        brand:{
            500: #8257e6
        }
    }
}
```
4 - Crie um arquivo **global.css** 
4.1 - Cole o codigo dentro do **global.css** 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
5 - Importa o **global.css** dentro do main.

# Icons Phosphoricons

> Foi utilizado a biblioteca phospor por ter integração direta com react

site: https://phosphoricons.com/
gitHub: https://github.com/phosphor-icons/phosphor-home
1 - ``` npm install phosphor-react```
 ```
 import { ChatTeardropText } from "phosphor-react";
   <ChatTeardropText/>
 ```
# Headless CSS  
> Estamos utilizando essa biblioteca para utilizar componentes acessiveis.

Popover: https://headlessui.dev/react/popover
1 - ```npm install @headlessui/react```
```
import { Popover } from '@headlessui/react'
```
