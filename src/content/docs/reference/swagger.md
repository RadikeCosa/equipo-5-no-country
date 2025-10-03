---
title: Documentación API con Swagger
description: Documentación completa de la API REST del sistema de créditos.
---

# Documentación de la API con Swagger

Este proyecto usa Swagger (OpenAPI 3.0) para documentar la API REST del sistema de créditos. La documentación incluye descripciones de endpoints, esquemas de datos, ejemplos y la interfaz interactiva Swagger UI.

## Acceso

Una vez que el servidor esté en ejecución, la interfaz de Swagger UI está disponible en:

- Entorno de desarrollo: http://localhost:3000/api-docs
- Entorno de producción: https://equipo5-webapp-onboardingcreditos.onrender.com/api-docs/

## Resumen de la documentación

La documentación cubre:

- Endpoints agrupados por categoría (autenticación, usuarios, confirmaciones, administración, etc.)
- Esquemas de datos (modelos de request/response)
- Ejemplos de peticiones y respuestas
- Autenticación mediante JWT en Swagger UI
- Pruebas interactivas con "Try it out"

### Endpoints principales documentados

- Autenticación: registro, inicio de sesión, cierre de sesión
- Confirmación: verificación y reenvío de confirmación por email
- Usuario: obtener y actualizar perfil, desactivar cuenta
- Administración: gestión de usuarios (rutas disponibles solo para operadores)

## Autenticación en Swagger (usar JWT)

1. Obtén un token JWT mediante:

   - POST /api/usuarios/login
   - Envía { email, password } y copia el token de la respuesta.

2. En Swagger UI, haz clic en "Authorize" y pega:

   Bearer <tu_token_aqui>

3. Ahora podrás ejecutar endpoints protegidos desde Swagger UI.

## Esquemas incluidos

La documentación contiene, entre otros, los siguientes esquemas:

- Usuario — representación completa del recurso usuario
- UsuarioRegistro — datos requeridos para el registro
- Login — credenciales de acceso
- Response — formato estándar para respuestas exitosas
- Error — formato estándar para respuestas de error

## Probar la API

Cada endpoint documentado incluye:

- Descripción y etiquetas
- Parámetros (ruta, query, headers, body)
- Ejemplos de request/response
- Códigos de estado posibles
- Botón "Try it out" para ejecutar pruebas desde la interfaz

## Usuarios de prueba

Puedes usar cuentas de prueba para validar flujos comunes:

- Operador (admin)

  - Email: jomeregildo64@gmail.com
  - Contraseña: operador1234
  - Permisos: acceso administrativo

- Solicitante (usuario)
  - Email: joshuamerejildo846@gmail.com
  - Contraseña: cliente123
  - Permisos: rutas básicas de usuario

## Ejemplos de uso

1. Registrar nuevo usuario

```json
POST /api/usuarios/registro
{
   "email": "nuevo@ejemplo.com",
   "password": "password123",
   "nombre_completo": "Nuevo Usuario",
   "documento_identidad": "12345678",
   "telefono": "+573001234567",
   "rol": "solicitante"
}
```

2. Iniciar sesión

```json
POST /api/usuarios/login
{
   "email": "nuevo@ejemplo.com",
   "password": "password123"
}
```

3. Obtener perfil (requiere Authorization)

```http
GET /api/usuario/perfil
Authorization: Bearer <tu_token>
```

## Para desarrolladores

Agregar o actualizar documentación se hace mediante comentarios JSDoc/Swagger en los archivos de rutas y controladores. Ejemplo de endpoint:

```javascript
/**
 * @swagger
 * /api/nuevo-endpoint:
 *   post:
 *     summary: Descripción del endpoint
 *     tags: [Categoría]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               campo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 */
```

Y para esquemas:

```javascript
/**
 * @swagger
 * components:
 *   schemas:
 *     NuevoEsquema:
 *       type: object
 *       properties:
 *         campo1:
 *           type: string
 *           description: Descripción del campo
 */
```

## Configuración

La configuración de Swagger suele encontrarse en el archivo que inicializa la documentación (por ejemplo, `index.js` o `swagger.js`) y contiene:

- Título: "API Sistema de Créditos"
- Versión: 1.0.0
- Especificación: OpenAPI 3.0.0
- Seguridad: JWT Bearer
- Archivos fuente: `./routes/*.js`, `./controladores/*.js`

## Recursos

- https://swagger.io/docs/
- https://spec.openapis.org/oas/v3.0.0
- https://github.com/Surnet/swagger-jsdoc

---
