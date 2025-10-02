**PRD – Plataforma Web de Onboarding de Créditos para PYMES**

**1\. Información General**

- **Producto:** Plataforma Web de Onboarding de Créditos para PYMES

- **Vertical:** Web App

- **Sector:** Fintech

**2\. Contexto y Necesidad del Cliente**

Las pequeñas y medianas empresas (PYMES) enfrentan barreras para acceder a créditos debido a procesos burocráticos y tiempos de aprobación largos.

Las entidades financieras necesitan:

- Recopilar y validar información de manera digital.

- Reducir tiempos de aprobación.

- Mejorar la experiencia del usuario en el proceso de solicitud.

**3\. Validación de Mercado**

- Bancos y fintechs ya implementan plataformas digitales de onboarding y banca en línea.

- Casos de uso exitosos muestran reducción de tiempos de aprobación y mejora de conversión.

- La tendencia del sector es la automatización de procesos KYC/AML y scoring crediticio digital.

**4\. Objetivos del Producto**

1. **Simplificar el acceso al crédito** para PYMES mediante un proceso digital, ágil y seguro.

2. **Reducir la fricción burocrática** en las entidades financieras.

3. **Automatizar validaciones y evaluaciones iniciales**, disminuyendo tiempos y costos operativos.

4. **Generar trazabilidad y transparencia** en el estado de cada solicitud.

**5\. Alcance del Producto**

**5.1 Roles definidos**

- **Usuario PyME/Solicitante:**

  - Se registra, completa solicitud, carga documentos y firma digitalmente.

  - Consulta estado de la solicitud en tiempo real.

- **Administrador/Operador:**

  - Revisa solicitudes recibidas.

  - Valida información (documentos, identidad, scoring).

  - Actualiza estado (aprobada, en revisión, rechazada).

  - Gestiona tareas mediante panel con filtros.

**5.2 Funcionalidades**

**Must-Have**

- Registro y autenticación segura de usuarios (con MFA/2FA opcional).

- Formulario dinámico de solicitud con guardado automático.

- Carga de documentos digitales y firma electrónica.

- Panel de administración para revisar y gestionar solicitudes.

- Integración con servicios de verificación de identidad (KYC/AML).

- Estado de la solicitud visible en tiempo real.

**Nice-to-Have**

- Chat de soporte integrado (bot o humano).

**6\. Requisitos No Funcionales**

- **Seguridad:** Cumplimiento con normativas de datos sensibles ( GDPR, normativas locales).

- **Escalabilidad:** Arquitectura que permita escalar en volumen de usuarios y documentos.

- **Compatibilidad:** Acceso desde navegadores modernos y dispositivos móviles (responsive).

- **Trazabilidad:** Logs de acciones de usuario y administrador.

**7\. Flujo del Usuario Solicitante**

1. Registro / login.

2. Completar formulario con datos de empresa y requerimiento de crédito.

3. Subir documentos obligatorios.

4. Firmar digitalmente la solicitud.

5. Consultar estado (En revisión → Aprobado/Rechazado).

**8\. Flujo del Operador**

1. Login seguro con rol Operador.

2. Visualizar dashboard con solicitudes pendientes.

3. Aplicar filtros por estado, fecha, monto, PyME.

4. Revisar documentación y validaciones automáticas (KYC/AML).

5. Actualizar estado y dejar comentarios internos.

6. Generar reportes de actividad.

**9\. Entregables**

- Web App funcional (front \+ back).

- API documentada para integraciones externas.

- Manual de usuario (PyME y Admin).

- Panel de administración con filtros avanzados.

- Integración con servicios KYC/AML.

**10\. KPIs de Éxito**

- % de solicitudes completadas vs. iniciadas.

- Tiempo promedio de aprobación.

- % de reducción en el uso de procesos manuales.

**11\. Roadmap Tentativo (High-Level)**

**Fase 1:**

- Registro y login.

- Formulario dinámico.

- Carga de documentos.

- Panel de administración básico.

**Fase 2:**

- Integración KYC/AML.

- Firma digital.

- Estado en tiempo real.

**Fase 3 (optimizado):**

- Chat de soporte.

**1- Módulo: Gestión de Usuarios y Autenticación**

**Objetivo**

Permitir que los diferentes perfiles (Solicitante PYME y Operador) accedan a la plataforma de forma segura, con controles de registro, autenticación y administración de roles.

**Funcionalidades incluidas**

1. **Registro de usuarios**

   - Registro de Solicitantes con datos personales y de empresa.

   - Registro de Operadores con datos de identificación y credenciales.

   - Validación de email, CUIT, contraseñas y envío de correo de verificación.

2. **Login**

   - Autenticación mediante email \+ contraseña.

   - Diferenciación de acceso según rol (Solicitante → panel de solicitudes, Operador → panel de administración).

   - Manejo de intentos fallidos (bloqueo temporal tras 5 intentos).

3. **Cerrar sesión**

   - Botón visible para cerrar sesión.

   - Invalidación de la sesión activa y tokens generados.

4. **Cambio de contraseña**

   - Cambio desde el perfil con contraseña actual.

   - Recuperación de contraseña mediante correo de restablecimiento.

   - Validación de contraseñas seguras (longitud, mayúscula, número).

**2- Módulo: Gestión de Solicitudes de Crédito (CRUD)**

**Objetivo**

Permitir que el Usuario PyME pueda **crear, consultar, editar y eliminar** sus solicitudes de crédito antes de ser procesadas por un operador, y que los Operadores puedan gestionarlas (aprobar, rechazar, dejar en revisión).

**Funcionalidades incluidas**

1. **Crear Solicitud (Create)**

   - Completar formulario dinámico con datos de la PyME y monto solicitado.

   - Cargar documentos obligatorios (ej. estatuto, balances, DNI).

   - Guardado automático de avance (borrador).

   - Firma digital de la solicitud.

2. **Consultar Solicitud (Read)**

   - El usuario PyME puede ver todas sus solicitudes con su estado: _Borrador, En revisión, Aprobada, Rechazada_.

   - El operador puede ver todas las solicitudes del sistema, con filtros por estado, fecha, monto.

3. **Editar Solicitud (Update)**

   - El solicitante puede modificar los datos de su solicitud **mientras esté en estado Borrador o En revisión** (si el operador aún no la cerró).

   - Se deben mantener versiones para trazabilidad (historial de cambios).

4. **Eliminar Solicitud (Delete)**

   - El solicitante puede eliminar solicitudes en estado Borrador.

   - Una vez enviada a revisión, no podrá eliminarla (solo el operador puede marcar como rechazada).

**3- Módulo: Gestión de Documentos**

**Objetivo**

Permitir que los usuarios PyME puedan subir, gestionar y validar los documentos requeridos para completar su solicitud de crédito, de forma segura y trazable.

**Funcionalidades incluidas**

- Subida de documentos obligatorios (estatutos, balances, DNI, comprobante de domicilio, etc.).

- Validación de formato y tamaño (ej. PDF, JPG, PNG, máximo 10 MB).

- Previsualización básica del documento cargado.

- Eliminación o reemplazo de documentos mientras la solicitud esté en borrador.

- Asociación automática de los documentos con la solicitud correspondiente.

- Almacenamiento seguro y encriptado en servidor o servicio externo (ej. S3).

**4- Módulo: Firma Digital y Validaciones Legales**

**Objetivo**

Garantizar la validez legal y trazabilidad de las solicitudes mediante firma digital y auditoría.

**Funcionalidades incluidas**

- Firma digital de solicitudes por parte del solicitante.

- Integración con proveedor externo de firma digital (ej. Auth0, FirmaGob, etc.).

- Registro de hash único para cada documento firmado.

- Validación de integridad (el documento firmado debe coincidir con el enviado).

- Trazabilidad legal para auditoría (fecha, hora, IP, usuario firmante).

**5- Módulo: Panel de Administración (Operadores)**

**Objetivo**

Facilitar a los operadores la gestión y validación de solicitudes de crédito mediante un panel con filtros, estados y tareas.

**Funcionalidades incluidas**

- Dashboard con listado de solicitudes recibidas.

- Filtros por estado, fecha, monto, nombre de PyME.

- Visualización de detalles de la solicitud (datos \+ documentos asociados).

- Revisión y validación manual de documentos.

- Cambio de estado de solicitudes: _En revisión → Aprobada / Rechazada / Cancelada_.

- Agregar comentarios internos o notas de seguimiento.

- Generar reportes de solicitudes (descarga CSV/Excel).

**6- Módulo: Integraciones Externas (KYC/AML, verificación)**

**Objetivo**

Automatizar la validación de identidad, antecedentes financieros y riesgo legal de las PYMES para reducir fraude y agilizar el proceso.

**Funcionalidades incluidas**

- Validación de identidad del solicitante (ej. RENAPER o equivalente).

- Verificación de CUIT en AFIP o entidad fiscal.

- Integración con listas de prevención de lavado de dinero (AML).

- Validación en tiempo real de documentación cargada.

- Recepción de respuesta automática desde APIs externas y actualización de estado.

**7- Módulo: Notificaciones y Comunicación**

**Objetivo**

Mantener informado al usuario PyME y al operador sobre cambios relevantes en el estado de la solicitud mediante notificaciones y alertas.

**Funcionalidades incluidas**

- Envío de correo electrónico en eventos clave:

  - Registro de usuario.

  - Verificación de cuenta.

  - Cambio de estado de la solicitud.

  - Recuperación de contraseña.

- Notificaciones dentro de la plataforma (ej. banner de “Solicitud en revisión”).

- Integración futura con chat de soporte (bot o humano).

- Plantillas configurables para mensajes.

Backlog inicial

Mapa de Módulos → Funcionalidades → HU

| Módulo                                                 | Funcionalidades Clave                                                                                                                                     | Historias de Usuario (HU)                                                                                                                    |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **1\. Gestión de Usuarios y Autenticación**            | Registro (Solicitante y Operador) Login Logout Cambio/recuperación de contraseña                                                                          | HU-01 Registro solicitante HU-02 Registro operador HU-03 Login HU-08 Logout HU-09 Cambio de contraseña HU-10 Recuperar contraseña            |
| **2\. Gestión de Solicitudes de Crédito (CRUD)**       | Crear solicitud Editar solicitud- Eliminar solicitud (en borrador) Ver estado en tiempo real                                                              | HU-04 Crear solicitud HU-05 Editar solicitud HU-06 Eliminar solicitud HU-07 Consultar estado solicitud                                       |
| **3\. Gestión de Documentos**                          | Subir documentos Validar formato y tamaño Reemplazar o eliminar en borrador Asociar documentos a la solicitud                                             | HU-11 Subir documentos HU-12 Validar documentos HU-13 Reemplazar/eliminar documentos                                                         |
| **4\. Firma Digital y Validaciones Legales**           | Firma digital de solicitud Registro de hash/ID Validación de integridad Auditoría legal                                                                   | HU-14 Firmar digitalmente solicitud HU-15 Validar integridad firma                                                                           |
| **5\. Panel de Administración (Operadores)**           | Dashboard de solicitudes Filtros por estado, fecha, monto Revisión de documentos Cambio de estado (aprobada/rechazada/revisión) Reportes y notas internas | HU-16 Ver dashboard solicitudes HU-17 Filtrar solicitudes HU-18 Revisar documentos HU-19 Cambiar estado solicitud HU-20 Exportar reportes    |
| **6\. Integraciones Externas (KYC/AML, verificación)** | Validación de identidad (RENAPER, AFIP, etc.) Verificación de CUIT Validaciones AML Respuesta automática API                                              | HU-21 Validar identidad KYC HU-22 Verificar CUIT HU-23 Validar AML HU-24 Registrar validaciones automáticas                                  |
| **7\. Notificaciones y Comunicación**                  | Email en eventos clave (registro, cambios de estado) Notificaciones in-app Plantillas de correo Futuro: chat de soporte                                   | HU-25 Enviar email de verificación HU-26 Notificar cambios de estado HU-27 Notificación interna en plataforma HU-28 Chat de soporte (futuro) |
