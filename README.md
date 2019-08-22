# Proyecto: Calculadora
## Pasos iniciales para despliegue
>Instalacion de dependencias:

Para consumir servicio SOAP:
```sh
 npm install unirest
```
>Para transformar xml a json y biceversa:
```sh
 npm install --save xml-js
```
>Class-validator para agregar decoradores y validaciones basicas:
```sh
 npm install class-validator --save
```
>Para inicializar este proyecto se utilizo Nestjs y se los comandos para levantarlo son:
>Clonar repositorio:
```sh
    git clone https://github.com/pcasgo/calculator.git
```
>Acceder a carpeta contenedora y ejecutar lo siguiente:

    cd project
    npm install
    npm run start


// TODOs: Pendientes por hacer

- Crear utilitario para consumo de soap
- Integrar front
- Ambientar / Dockerizar
- Refactorizar metodos en service