## Dependencias

### bcrypt (versión 5.1.0)

Una biblioteca para cifrado de contraseñas. Se utiliza para cifrar y descifrar contraseñas antes de almacenarlas en una base de datos para que sean más seguras.

Documentación: https://github.com/kelektiv/node.bcrypt.js/

### cors (versión 2.8.5)

Un middleware de Express que se utiliza para permitir solicitudes de recursos cruzados (CORS) en un servidor.

Documentación: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

### dotenv (versión 16.0.3)

Una biblioteca para cargar variables de entorno desde un archivo .env. Esto es útil para guardar información sensible, como claves de API y contraseñas, en un archivo separado de su código fuente.

Documentación: https://github.com/motdotla/dotenv

### express (versión 4.18.2)

Un framework web para Node.js. Express proporciona un conjunto de herramientas para crear aplicaciones web, incluyendo enrutamiento, middleware y gestión de errores.

Documentación: https://expressjs.com/

### jsonwebtoken (versión 9.0.0)

Una biblioteca para crear y verificar tokens de JSON Web. Se utiliza para autenticar usuarios y proporcionar acceso seguro a recursos protegidos.

Documentación: https://github.com/auth0/node-jsonwebtoken

### mysql (versión 2.18.1)

Un controlador para interactuar con bases de datos MySQL. Se utiliza para conectarse a una base de datos MySQL y realizar operaciones como consultas y actualizaciones.

Documentación: https://github.com/mysqljs/mysql

### nodemon (versión 2.0.20)

Una herramienta para reiniciar automáticamente su aplicación Node.js cuando se detectan cambios en los archivos de origen.

Documentación: https://nodemon.io/

### passport (versión 0.6.0)

Un middleware para autenticación de usuario en Express. Se utiliza para autenticar usuarios mediante diversas estrategias, como nombre de usuario y contraseña o autenticación de terceros como Google o Facebook.

Documentación: http://www.passportjs.org/

### passport-jwt (versión 4.0.1)

Una estrategia para autenticación de usuario en Passport que utiliza tokens de JSON Web. Se utiliza para autenticar usuarios mediante tokens JWT en lugar de nombre de usuario y contraseña.

Documentación: https://github.com/mikenicholson/passport-jwt

Para correr el proyecto necesitamos tener en local un servidor de bases de datos mysql y subir el archivo sql anexo

Instalar: npm i o npm install o yarn
Para correr el proyecto: npm run dev