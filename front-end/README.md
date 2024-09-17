# Kazu Moda (Front-End) 

Kazu Moda Circular es un proyecto desarrollado con React, NodeJs y JavaScript. Usando el Framework de NextJs, en conjunto con otras librerías, como Axios para las llamadas al API, Redux para el manejo del Contexto en la App, TailwindCss, Shadcn-ui para los estilos, Yup para la validación de datos en formularios

## Requerimientos

- VisualStudio Code o algún editor de código de tu preferencia
- NodeJs >=18.20
- npm
- git

## Instrucciones

1.- Copiar el repositorio en la maquina local.

```bash
git clone url_repo
```

2.- Moverse a la carpeta del proyecto y a front-end

```bash
cd .\c17-19-n-node-react\front-end\
```

3.- Definición de las variables de entorno si no se define ninguna buscara el localhost en el puerto ```4000```:
  - Fuera de todas las carpetas, crear un archivo .env
  ```bash
  # Crear el archivo desde la terminal en Linux o mac
    touch .env
  # Windows
    .env
  ```
  - Dentro de nuestro archivo ```.env``` colocar una variable nueva.
  ```js
  NEXT_PUBLIC_API_URL= "https://www.example.com"
  ```
  - Guardar los cambios y proceder con el resto de pasos.

4.- Instalación de las dependencias del proyecto:

```bash
npm i
```

5.- Crear un build de producción optimizado.

```bash
npm run build
```

6.- Una vez terminado el proceso, se crearan las vistas estáticas y dinámicas optimizadas para el despliegue y solo se require iniciar el proyecto:

```bash
npm start
```

Abriendo [http://localhost:3000](http://localhost:3000) en el navegador.
