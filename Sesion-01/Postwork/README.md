# Sesión #: PostWork

## :dart: Objetivos

- Generar un Proyecto Angular listo para usar en el proyecto final.
- Crear componentes, pipes, directivas, etc. necesarias para el proyecto
- Identificar las mejores prácticas para la creación de un proyecto escalable y mantenible

- Usar el angular cli para generar los elementos necesarios.

## Antes de empezar

Al crear el proyecto te recomendamos usar una estructura de carpetas legible para esta y las demás sesiones.

Ejem:

develop/
├─ angular2022/
│ ├─ sesion01/
│ ├─ sesion02/
│ ├─ sesion…/
├─ Work
│ ├─ dashboardApp/

## ⚙ Requisitos

- VSCode
- Computadora personal con Mac/Windows/Linux
- NodeJS
- TypeScrip

## Desarrollo

- Crea una estructura de carpetas ordenadas
- Usa PascalCase para los nombres de las clases en los componentes.
- Los nombres de los archivos de componentes y carpetas deben usar kebab-case
- Crea las mismas directivas, pipes, páginas etc. que usamos en el work.

<details open>
    <summary>Solución </summary>
    
 Primero abriremos VSCode y abriremos una nueva terminal, y nos posicionamos en la carpeta raiz del curso

<img src="assets/Screenshot_1.png" width="78%"/>
<br><br>
 Seguidamente creamos una carpeta llamada proyectoFinal que contendra nuestro proyecto.
<img src="assets/Screenshot_2.png" width="78%"/>
    <br><br>
 Una vez creada la carpeta entramos en ella para ejecutar los comando necesarios.
    <img src="assets/Screenshot_3.png" width="78%"/>

<br><br>
 Ya dentro de la carpeta ejecutamos el comando `ng new dashboardApp` y presionamos `ENTER`
    <img src="assets/Screenshot_4.png" width="78%"/>


<br><br>
 Al presionar `ENTER` la terminal nos preguntara si queremos agregar el routing; solo escribimos la tecla `y` y presionamos `ENTER`
    <img src="assets/Screenshot_5.png" width="78%"/>

<br><br>
 Despues nos preguntara que formato de estilos queremos usar, con las teclas de navegacion bajamos hasta la opcion SCSS y presionamos `ENTER`
    <img src="assets/Screenshot_6.png" width="78%"/>

<br><br>
 En este punto el cli comenzara a crear y descargar los archivos necesarion para el proyecto.
    <img src="assets/Screenshot_7.png" width="78%"/>
  

<br><br>
 Ya terminado el proceso abriremos el proyecto.
    <img src="assets/Screenshot_8.png" width="78%"/>

<br><br>
Seleccionamos la carpeta correspondiente
    <img src="assets/Screenshot_9.png" width="78%"/>

<br><br>
Abrimos nuevamente la terminal.
    <img src="assets/Screenshot_10.png" width="78%"/>

<br>
    <img src="assets/Screenshot_11.png" width="78%"/>
<br><br>
Una vez en la terminal escribimos el comando `ng serve --open`
    <img src="assets/Screenshot_13.png" width="78%"/>

<br><br>
Este comando comenzara a compilar el proyecto.
    <img src="assets/Screenshot_14.png" width="78%"/>
  <br><br>
Se nos abrira una ventana del navegador automaticamente con nuestro proyecto funcionando.
    <img src="assets/run.png" width="78%"/>


<br><br>
Ahora abriremos una nueva ventana de la terminal.
    <img src="assets/Screenshot_15.png" width="78%"/>

<br><br>
Ahora crearemos nuestra pagina que usaremos mas adelante como login de nuestra aplicacion, para ello ejecutamos el comando:
 `ng generate component /pages/login/login-page`
 <br>
    <img src="assets/Screenshot_16.png" width="78%"/>
<br><br>
Este comando creara las carpetas y componentes automaticamente.
 <br>
    <img src="assets/Screenshot_17.png" width="78%"/>


<br><br>
Ahora crearemos una directiva para convertir texto a minusculas, esta directiva la usaremos mas adelante. Ejecutamos el comando:
`ng generate directive /core/directives/to-lower-case/to-lower-case`
 <br>
    <img src="assets/Screenshot_19.png" width="78%"/>


<br><br>
Este comando creara las carpetas y componentes automaticamente.
 <br>
    <img src="assets/Screenshot_20.png" width="78%"/>

<br><br>
Tabien crearemos un pipe para tranformar fechas de manera customizada, este pipe lo usaremos mas adelante. Ejecutamos el comando:
`ng generate pipe /core/pipes/date-custom/date-custom`
 <br>
    <img src="assets/Screenshot_21.png" width="78%"/>

<br><br>
Este comando creara las carpetas y componentes automaticamente.
 <br>
    <img src="assets/Screenshot_22.png" width="78%"/>

<br><br>
Con todo esto aplicado ahora inspeccionaremos el archivo app.module.ts
 <br>
    <img src="assets/Screenshot_23.png" width="78%"/>


<br><br>
Ahora podemos comprobar que el cli ha echo todas las declaracion automaticamente.
 <br>
    <img src="assets/Screenshot_24.png" width="78%"/>


<br><br><br>

En este punto la inicializacion del proyecto esta terminada.
</details>
