---
title: Backend
description: Guia de instalacion del Backend
---

**Instrucciones para ejecutar localmente**

# Clonar el repositorio {#clonar-el-repositorio}

En tu símbolo del sistema o terminal de visual studio code usar los siguientes comandos:

git clone [https://github.com/CastilloJoshuaEE/Equipo5-WebApp-OnboardingCreditos.git](https://github.com/CastilloJoshuaEE/Equipo5-WebApp-OnboardingCreditos.git)

- cd Equipo5-WebApp-OnboardingCreditos

Ya estando en la carpeta “Equipo5-WebApp-OnboardingCreditos” usa los siguientes comandos:

**Instrucciones para ejecutar el backend localmente**

## 1. Clonar el repositorio

Abre una terminal y clona el repositorio del proyecto:

```bash
git clone https://github.com/CastilloJoshuaEE/Equipo5-WebApp-OnboardingCreditos.git
cd Equipo5-WebApp-OnboardingCreditos
```

Si tu equipo usa ramas remotas del upstream del proyecto, sincroniza así:

```bash
git fetch --all
git checkout --track origin/dev
# (Si necesitas enviar cambios a tu fork/remote)
git push origin dev
```

Para mantener tu copia actualizada con el upstream del equipo:

```bash
git pull upstream dev
```

## 2. Entrar a la carpeta del servidor

```bash
cd backend
```

## 3. Inicializar y instalar dependencias

Si el proyecto aún no tiene `package.json` (solo la primera vez):

```bash
npm init -y
```

Instala las dependencias usadas por el servidor:

```bash
npm install dotenv body-parser express jsonwebtoken bcryptjs cors @supabase/supabase-js resend nodemailer axios
npm install --save-dev nodemon
```

Agrega un script `dev` en `package.json` si no existe:

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

> Nota: si el proyecto usa módulos ES (import/export) en lugar de CommonJS (require/module.exports), ajusta `type` en `package.json` a `"module"` o modifica los archivos según la convención que use el repo.

## 4. Ejecutar el servidor en modo desarrollo

```bash
npm run dev
```

Si ves errores relacionados con la configuración de `package.json`, añade `"type": "commonjs"` o `"module"` según corresponda.

## 5. (Opcional) Generar un secret seguro para JWT

Es recomendable no incluir secretos en el repositorio. Usa un script pequeño para generar un JWT secret fuerte.

Crear `generateSecret.js` en la raíz de la carpeta `backend` con este contenido (CommonJS):

```js
// generateSecret.js
const crypto = require("crypto");
const secret = crypto.randomBytes(64).toString("hex");
console.log(secret);
```

Ejecuta el script para obtener un valor seguro:

```bash
node generateSecret.js
# Copia la salida y pégala en tu .env local como JWT_SECRET
```

Después de obtener el secret, puedes eliminar el script si lo deseas:

```bash
# Windows (PowerShell / cmd)
del generateSecret.js
# Linux / macOS
rm generateSecret.js
```

## 6. Configurar el archivo .env (ejemplo)

No incluyas valores reales ni secretos en el repositorio. A continuación tienes un ejemplo con placeholders que debes reemplazar por tus valores locales (sin versionar):

```
PORT=3000
SUPABASE_URL="https://<tu-supabase>.supabase.co"
SUPABASE_ANON_KEY="<SUPABASE_ANON_KEY>"
SUPABASE_SERVICE_ROLE_KEY="<SUPABASE_SERVICE_ROLE_KEY>"
NODE_ENV=development
JWT_SECRET=<valor_generado_con_generateSecret>
JWT_EXPIRE=30d
GMAIL_USER="<tu_email@gmail.com>"
GMAIL_APP_PASSWORD="<app_password>"
EMAIL_FROM_NAME="Sistema de Créditos"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_SECURE=false
FRONTEND_URL="http://localhost:5173"
HUBSPOT_ACCESS_TOKEN=""
EMAIL_HUNTER_API_KEY=""
ABSTRACT_API_KEY="<ABSTRACT_API_KEY>"
```

Consejos de seguridad:

- Añade `.env` a `.gitignore` para evitar subir secretos al repositorio.
- Si necesitas compartir variables con el equipo, usa un gestor de secretos o variables de entorno en la plataforma de despliegue.

## 7. Notas y recomendaciones

- Usa `nodemon` para recargar el servidor automáticamente durante el desarrollo.
- Verifica la versión de Node.js recomendada por el proyecto (añadir `.nvmrc` o en README si falta).
- Si el backend se conecta a Supabase, asegúrate de que las reglas de seguridad (RLS) y las keys estén configuradas correctamente.
- Evita publicar claves sensibles en la documentación; usa placeholders o instrucciones para obtenerlas desde el proveedor.

---

Si quieres, puedo también:

- Añadir una sección con ejemplos de endpoints (curl) para probar el servidor.
- Crear un archivo `.env.example` con los placeholders listos para el repo.
- Añadir una entrada a `README.md` con estos pasos.

Fin del documento.
