# Kazu Moda (Back-End)

Kazu Moda Circular es un proyecto desarrollado en Node.js y Express para el backend. En cuanto a la base de datos se utilizó MongoDB Atlas para alojar la base de datos de producción en la nube, y MongoDB Comprass para pruebas en modo desarrollo. 

## Dependecias

- **bcryptjs:** Para asegurar la seguridad de las contraseñas mediante hashing y comparación segura.
- **cookie-parser y cookie-session:** Para la gestión de cookies. 
- **cors:** Para facilitar las solicitudes desde diferentes dominios. 
- **jsonwebtoken:** Se encarga de la autenticación mediante tokens JWT de manera segura. 
- **mongoose:** Para modelar objetos MongoDB de forma asincrónica. 
- **morgan:** Para registrar las solicitudes HTTP y mostrarlas en consola. 
- **swagger-jsdoc y swagger-ui-express:** Para documentar la API a través de una interfas gráfica. 
- **zod:** Para simplificar y perfeccionar la validación de datos.

## Requerimientos

- VS Code o cualquier editor de código de su preferencia.
- GIT
- Node v20+
- MongoDB Compass v7+ 
## instrucciones

1.- Copiar el repositorio en la maquina local.

```bash
  git clone url_repo
```

2.- Moverse a la carpeta del proyecto y a back-end
    
```bash
  cd .\c17-19-n-node-react\back-end\
```

3.- Definición de las variables de entorno si no se define ninguna buscara el localhost en el puerto 4200:

- Fuera de todas las carpetas, crear un archivo .env

```bash
# Crear el archivo desde la terminal en Linux o mac
  touch .env
# Windows
  .env
```

- Dentro de nuestro archivo .env colocar las siguientes variables.

```bash
PORT=4000
MONGODB_URI=your_mongodb_uri
TOKEN_SECRET=your_secret_key
BASE_CLIENT_URI=your_base_uri
```

- Guardar los cambios y proceder con el resto de pasos.

4.- Instalación de las dependencias del proyecto:

```bash
npm i
```

5.- Una vez terminado el proceso solo se require iniciar el proyecto:

```bash
npm start
```

6.- Acceder a la API abriendo http://localhost:4000/ en el navegador o bien, acceder a la documentación a través de la siguiente ruta http://localhost:4000/api-docs/.
