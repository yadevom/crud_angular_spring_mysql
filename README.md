# crud_angula_spring_mysql

# personaBACKEND
En la carpeta backendspring encontrara el proyecto creado Spring Boot, conectado a la BD.

- Descomentar las últimas lineas y configurar los datos para la conexión a la BD mysql del archivo application.properties
- Esta últimas 3 lineas se comentan para que cada que se inicie la aplicación no cree las tablas nuevamente

# Configuración Angular para que no obligue que las propiedades deben ser inicializadas
Se busca el archivo tsconfig.json
En la opción de "compilarOptions" vamos agregar "strictPropertyInitialization": false
Se realiza cambios adicionales de restrincciones que causan molestia

# Instalación libreria sweet alert (alerta de mensajes)
npm install --save sweetalert2@7.26.9

# Script creacionbd.sql
Cuenta con los script de guia para creación de la BD y tabla

# Consulta endpoint
- Consulta empleados
http://localhost:8080/api/v1/empleados
