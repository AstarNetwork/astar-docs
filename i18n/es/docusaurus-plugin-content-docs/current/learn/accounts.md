---
sidebar_position: 2
---

# Cuentas

## Vista general

Una cuenta en Astar Network consta de dos partes: una clave privada y una clave pública. Una clave pública también se conoce como la dirección de una cuenta porque es accesible y conocida por el público, igual que una dirección de correo electrónico, por ejemplo. Una clave privada es una clave de acceso y gestión de su dirección. Dicho esto, cualquiera puede enviar tokens a tu dirección, pero sólo tú puedes acceder a ellos con tu clave privada. Por lo tanto, es crucial mantener tus claves privadas a salvo en todo momento.

Astar Network soporta dos máquinas virtuales (Wasm VM y EVM) y por lo tanto utiliza dos formatos de cuenta.

## Cuentas de Substrate

Astar está construido con Substrate, un marco para construir blockchains, y utiliza cuentas de Substrate. Las cadenas basadas en Substrate utilizan la clave pública subyacente para derivar una o varias direcciones públicas. En lugar de utilizar la clave pública directamente, Substrate te permite generar múltiples direcciones y formatos de dirección para una cuenta, lo que significa que sólo necesitas generar tu clave pública, par de claves privadas una vez y derivar diferentes direcciones para diferentes cadenas de Substrate.

La clave privada es una secuencia criptográficamente segura de números generados aleatoriamente. Para facilitar la lectura humana, la clave privada genera una secuencia aleatoria de palabras denominada frase semilla secreta o mnemotécnica.

El formato de dirección utilizado en las cadenas basadas en Substrate como Astar es ss58. ss58 es una modificación de Base-58-check de Bitcoin, con algunas modificaciones menores. En particular, el formato contiene un prefijo de tipo de dirección que identifica una dirección como perteneciente a una red específica.

Astar admite cuentas especializadas, como cuentas Proxy y Keyless.
Puedes leer más sobre cuentas Proxy [aquí](/docs/learn/Proxies).

## Cuentas EVM

El lado EVM de Astar permite direcciones del estilo de Ethereum (formato H160), que tiene una longitud de 40+2 caracteres hexadecimales, en una cadena basada en Substrate. Esta dirección coincide con una clave privada, que puede utilizarse para firmar transacciones en el lado Ethereum de la cadena. Además, la dirección se asigna a una ranura de almacenamiento dentro de la paleta de la balanza de Substrate a una dirección de tipo Substrate (formato H256).

## Aprende más

[Crea una cuenta Substrate](/docs/use/manage-wallets/create-wallet/)

[Crea una cuenta EVM](/docs/use/evm-guides/setup-metamask/)

[Lee sobre cuentas de Substrate](https://docs.substrate.io/learn/accounts-addresses-keys/)
