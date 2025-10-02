---
title: Product Requirements Document (PRD)
description: Flujo y entidades para la plataforma web de onboarding de créditos para PYMES
---

## Índice

- Breve investigación KYC/AML
- Entidades y relaciones
- Flujo del proceso (paso a paso)
- Resultados y métricas
- Notas operativas y próximos pasos

## Breve investigación de KYC/AML (resumen)

Los requisitos mínimos a cubrir en el formulario y la carga documental suelen incluir:

- Identidad: nombre completo, documento de identidad (DNI/pasaporte), fecha de nacimiento.
- Domicilio: dirección completa + comprobante (factura/servicio bancario reciente, < 3 meses).
- Empresa (si aplica): razón social, CUIT, fecha de constitución, domicilio fiscal, estados financieros básicos.
- UBO / Beneficiarios finales: nombre y porcentaje de participación.
- Origen de fondos: fuente principal de ingresos y documentación de respaldo cuando aplique.
- Evaluación de riesgo: clasificación preliminar (bajo/medio/alto) y verificación de buró de crédito.
- Consentimientos y trazabilidad: aceptación del tratamiento de datos y registro auditable de cambios.

Fuentes de referencia: kyc.io, Sumsub, ShuftiPro y guías locales (BCRA / UIF).

## Entidades y campos clave

Estas son las entidades principales que el sistema debe modelar y los campos mínimos recomendados.

- Usuario

  - id, nombre, email, teléfono, rol (solicitante, operador), estado de cuenta

- Solicitante (PYME)

  - id, nombre comercial, CUIT, representante legal, domicilio fiscal

- Solicitud de crédito

  - id, solicitante_id, monto, moneda, propósito, estado (borrador, enviado, en_revisión, aprobado, rechazado), nivel_riesgo, created_at, updated_at

- Documento KYC

  - id, solicitud_id, tipo (DNI, CUIT, balance, comprobante), nombre_archivo, ruta, estado_verificación, uploaded_at

- Operador / Revisor

  - id, nombre, email_corporativo, rol (analista, supervisor), permisos

- Acción / Auditoría
  - id, operador_id, solicitud_id, tipo_accion, comentario, timestamp

Relaciones importantes:

- Usuario (1) — Solicitudes (N)
- Solicitud (1) — Documentos (N)
- Operador (1) — Acciones (N)
- Solicitud (1) — Contrato (0..1)

## Flujo del proceso (alto nivel)

1. Registro / autenticación

   - Solicitante: registro con verificación de email (o login si ya existe).
   - Operador: acceso mediante credenciales corporativas.

2. Inicio de solicitud (Solicitante)

   - El solicitante completa el formulario inicial y carga documentos.
   - El sistema guarda borradores automáticamente.
   - Validaciones automáticas: formatos, campos obligatorios, tamaño/formatos de archivos.

3. Validación automática y pre-checks

   - Reglas: verificación de DNI sintaxis, verificación básica de CUIT, comprobación de duplicados, chequeos contra listas sancionadas (si aplica).
   - Resultado: si faltan datos → estado `incompleto` (se notifica); si está ok → se envía al flujo de revisión.

4. Revisión por operador

   - El operador consulta la solicitud y los documentos, marca observaciones y cambia estado.
   - Posibles decisiones:
     - `aprobada`: genera contrato (0..1) y pasa a firma/desembolso.
     - `pendiente_info`: solicita documentos adicionales; vuelve al solicitante.
     - `rechazada`: registra motivo y notifica al solicitante.
   - El sistema registra cada acción en la tabla de auditoría.

5. Contrato y firma digital

   - Si la solicitud está aprobada, se genera el contrato y se envía para firma digital integrada.

6. Resultados y cierre
   - Aprobada: contrato firmado y política de retención documental aplicada.
   - Rechazada: cierre y registro de motivos.
   - En ambos casos, se generan eventos/alertas y métricas para reportes.

### Eventos y notificaciones

- Notificación al solicitante cuando cambia el estado de la solicitud.
- Emails automáticos para requerimientos de documentación.
- Webhooks para integrar con sistemas de firma o pagos.

## Casos borde y validaciones adicionales

- Solicitudes duplicadas: detectar por CUIT + representante.
- Documentos corruptos o ilegibles: marcar estado `verificacion_manual`.
- UBO no declarado o conflictivo: elevar a nivel de riesgo y revisión manual.
- Pérdida temporal de conectividad: guardar borrador localmente en el cliente (autosave) y reintentar subida.

## Métricas y reportes

- Tasa de aprobación (aprobadas / enviadas)
- Tiempo medio de revisión (tiempo desde envío hasta decisión)
- Porcentaje de solicitudes con requerimientos adicionales
- Alertas por motivos frecuentes de rechazo

## Notas operativas y próximos pasos

- Añadir un archivo `docs/.env.example` con variables de entorno usadas en desarrollo.
- Crear ejemplos de endpoints (curl) para las APIs clave: registro, crear solicitud, subir documento, revisar solicitud.
- Diseñar un tablero de métricas para operadores con filtros por riesgo, fecha y monto.

---

Si quieres, adapto este documento para generar:

- Un `diagram.png` o diagrama Mermaid del flujo.
- Un `README` de integración para el equipo de backend con ejemplos de API.
