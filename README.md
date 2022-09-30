<h1 align="center">Server-Express</h1>
<div align="center">
<img src="https://img.shields.io/badge/License-MIT-green">
</div>
</br>

<img align='right' height="200" src="https://user-images.githubusercontent.com/15266097/183833511-8b582f64-d0e2-4b9c-ba33-cb8be8e8fb6a.png" />

**Descripción** Este servidor es una práctica básica para reafirmar los conocimientos teóricos. Se realizó una modularización para que sea más entendible para otros.

Si quieres ejecutar este servidor en tu equipo sigue las siguientes instrucciones.

1. Forkea el repositorio y clonalo en tu equipo.
1. En tu terminal ejecuta el comando `npm install` para que se instalen las dependencias necesarias para el servidor.

Adicionalmente para que funcione el archivo [**index.http**](./index.http) instala la extencion [_REST Client_](https://marketplace.visualstudio.com/items?itemName=humao.rest-client), con ella podras hacer las pruebas de funcionamiento de ejemplo que se encuentran en dicho archivo al presionar la leyenda **_Send Request_**

Las ruta que incluye son:

```txt
http://localhost:3000
```

```txt
http://localhost:3000/api/cursos
```

```txt
http://localhost:3000/api/cursos/programacion
http://localhost:3000/api/cursos/matematicas
```

```txt
http://localhost:3000/api/cursos/programacion/lenguaje/nivel

ej
http://localhost:3000/api/cursos/programacion/python/basico
```

```txt
http://localhost:3000/api/cursos/matematicas/tema

ej
http://localhost:3000/api/cursos/matematicas/calculo
```

- La configuración para iniciar el servidor está en el archivo [app.js](./app.js).

- Las rutas de cada curso están en la carpeta [routers](/routers)

- Los datos consultados están en el archivo [cursos.js](./data/cursos.js)

`Siéntete libre de hacer modificaciones y practicar`

## Tecnologías ocupadas

- Express: 4.18.1
- nodemon: 2.0.20
- Node js: 18.7.0
- npm: 8.19.2

## Autor

| [<img src="https://user-images.githubusercontent.com/15266097/186324804-11517757-4f94-4a12-a975-d21800dca11b.png" width=115><br><sub>Emmanuel Arenas</sub>](https://github.com/EmmanuelArenas) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

## Licencia 📄

Licencia: [MIT](License)
