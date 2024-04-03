---
sidebar_position: 2
---

# Registro de activos XCM

## Resumen

Este paso se refiere sobre todo al aspecto técnico del registro de activos, pero una vez que hayamos abierto canales, debemos ponernos de acuerdo sobre qué activos puentear. Los activos más comunes y esperados son los nativos. E.g. **ACA** de Acala o **GLMR** de Moonbeam.

El primer paso aquí es crear un activo local en nuestra red que representará el token. Utilizaremos `asset_id` con permiso (sólo root). Los metadatos de los activos deben reflejar lo que se utiliza en la parachain de reserva, por ejemplo, el nombre del activo, el nombre del símbolo y el número de decimales.

Utilizamos el saldo mínimo unitario (depósito existencial) para los activos exteriores respaldados.

En cuanto a la ubicación de los activos, tomemos el token **ACA** como referencia `{ "padres": 1, "interior": { "X2": [{ "Parachain": 2000 }, { "GeneralKey": [0, 128] } ]}}`.

Necesitaremos registrar el mapeo entre nuestro Id de activo creado localmente y esa MultiLocalización.

El Id. del activo local se elegirá de un rango predeterminado, comenzando en **2^64** y aumentando a partir de ahí.

`2 ** 64 + offset`

Para **offset** 0, esto producirá el id de activo permitido: **18446744073709551616**.

## Solicitud para añadir un activo XCM

Para añadir un activo XCM en Astar o Shiden, necesitarás crear una propuesta en nuestro [forum](https://forum.astar.network/). Crea tu propuesta en la categoría correcta:

- Shiden Network: [https://forum.astar.network/c/shiden/proposal/10](https://forum.astar.network/c/shiden/proposal/10)
- Astar Network: [https://forum.astar.network/c/astar/proposal/20](https://forum.astar.network/c/astar/proposal/20)

Hemos creado una plantilla que puedes utilizar para publicar tu propuesta. Puedes encontrar la plantilla [aquí](https://astarnetwork.notion.site/XCM-Asset-Registration-Template-ece966dca72d43a38645b54f2fb9f674).

## Flujo de trabajo

### Crear Propuesta

Después de crear su propuesta, informaremos a nuestra comunidad, y se espera que haga un seguimiento en caso de que haya alguna pregunta. Para continuar con el siguiente paso tendrá que ser aprobado por nuestro consejo (gobernanza), lo que se hará a través de una encuesta en nuestro foro.

### Asignación de activos

Después de que su propuesta reciba la aprobación de nuestro consejo, asignaremos su activo a nuestra red.
