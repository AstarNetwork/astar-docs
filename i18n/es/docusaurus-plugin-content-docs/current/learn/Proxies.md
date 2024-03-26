---
sidebar_position: 8
---

# Cuentas Proxy

## Vista general

Pallet Proxy permite a las cuentas conceder permisos específicos a otras cuentas, facultándolas para realizar llamadas en su nombre, salvaguardando así la seguridad de las cuentas subyacentes.
En esta página encontrará una descripción detallada de los distintos tipos de proxy, extrínsecos, definiciones generales y características asociadas a la paleta de proxy. Además, hay tutoriales disponibles para ayudarte a entender y utilizar la funcionalidad proxy de forma efectiva.

## **Tipos de Proxy**

1. **Any** - Este tipo de proxy permite a la cuenta delegada realizar cualquier llamada soportada por la paleta de proxy. Este es el nivel más alto de privilegio, por lo que siempre debe usarlo con precaución.

2. **No Transferencia** - Este tipo de proxy permite a la cuenta delegada realizar cualquier llamada soportada por la paleta de proxy excepto las funciones de transferencia de activos. Esto puede resultar útil cuando desee mantener sus fondos seguros en un almacén frigorífico y desee delegar todas las demás funcionalidades en una cuenta proxy.
   Para ver la lista completa de funciones, consulta el código fuente en el repositorio de Astar.

3. **Saldos** - Este tipo de proxy da el control del manejo de cuentas y saldos a la cuenta delegada. La lista completa de llamadas puede consultarse [aquí](https://docs.rs/pallet-balances/latest/pallet_balances/pallet/enum.Call.html).

4. **Activos** - Este tipo de proxy permite a la cuenta delegada controlar las funciones relacionadas con los activos fungibles, entre las que se incluyen la emisión, transferencia, acuñación, etc. de activos. Hay que tener en cuenta que este tipo de proxy no controla la moneda nativa como Astar o Shiden que son controladas por el proxy Balances.

5. **IdentityJudgement** - Este tipo de proxy permite una única funcionalidad para delegar cuenta que es proporcionar un juicio a una identidad en un sistema de nombres. El delegado tiene que ser un registrador.

6. **CancelProxy** - Este tipo de proxy permite a la cuenta delegada rechazar y eliminar cualquier llamada proxy anunciada.

7. **DappsStaking** - Este tipo de proxy permite a la cuenta delegada realizar transacciones relacionadas con DappStaking como registrar, anular el registro de contratos, reclamar recompensas, etc.

## **Extrinsics**

La paleta de proxy proporciona las siguientes extrínsecas (funciones):

- **addProxy**(delegate, proxyType, delay) - permite al emisor registrar una cuenta proxy capaz de realizar llamadas en nombre del emisor. Si el valor de retardo se establece en un número mayor que 0, la cuenta proxy debe anunciar una transacción y esperar el número de bloques especificado antes de ejecutarla como proxy. Esta función también emite un evento ProxyAdded.

- **announce**(real, callHash) - se utiliza para registrar el anuncio de una operación de representación realizado por cuentas de representación que tienen un requisito de demora. Esta función emite un evento Anunciado.

- **anonymous**(proxyType, delay, index) - genera una nueva cuenta con una clave privada inaccesible, haciéndola inaccesible. El remitente asume el papel de proxy para esta cuenta, en función del tipo y el retraso especificados. Atención: Si se elimina el proxy, la cuenta principal quedará inaccesible. Esta función emite un evento AnonymousCreated.

- **killAnonymous**(spawner, proxyType, index, height, extIndex) - elimina un proxy anónimo generado previamente.

- **proxy**(real, forceProxyType, llamada) - realiza una transacción como proxy. Esta función emite un evento ProxyExecuted.

- **proxyAnnounced**(delegate, real, forceProxyType, call) - ejecuta una transacción como proxy y elimina cualquier anuncio previo correspondiente. Esta función emite un evento ProxyExecuted.

- **rejectAnnouncement**(delegate, callHash) - si el remitente es una cuenta principal, elimina un anuncio específico de su cuenta proxy.

- **removeAnnouncement**(real, callHash) - si el remitente es una cuenta proxy, elimina un anuncio específico de su cuenta principal.

- **removeProxies()** - anula el registro de todas las cuentas proxy asociadas al remitente.

- **removeProxy**(delegate, proxyType, delay) - anula el registro de una cuenta proxy específica vinculada al remitente. Esta función emite un evento ProxyRemoved.

## **Constantes para Pallet Proxy**

| Constante                 | Descripción                                                          |
| ------------------------- | -------------------------------------------------------------------- |
| announcementDepositBase   | cantidad base de moneda requerida para reservar al crear un anuncio. |
| announcementDepositFactor | cantidad de moneda requerida por anuncio hecho.                      |
| maxPending                | número máximo de anuncios diferidos que pueden estar pendientes.     |
| maxProxies                | número máximo de proxies permitidos para una misma cuenta.           |
| proxyDepositBase          | cantidad base de moneda que se debe reservar al crear un proxy.      |
| proxyDepositFactor        | cantidad de moneda necesaria por proxy añadido.                      |

## **¿Por qué Depósitos de Proxy?**

Para crear proxies dentro de la red, es necesario proporcionar depósitos en la moneda nativa (como ASTR o SDN). El depósito es necesario porque añadir un proxy requiere cierto espacio de almacenamiento en la cadena, que debe replicarse en todos los pares de la red. Debido a su elevado coste, estas funciones podrían abrir la red a un ataque de denegación de servicio.

Al crear un apoderamiento, se deduce un bono de su saldo libre y se transfiere a su saldo reservado. Este mecanismo ayuda a mantener la integridad y estabilidad del sistema proxy, al tiempo que garantiza que el bono pueda ser devuelto cuando se desactive o elimine el proxy.

La cantidad de depósito requerida para proxies `n` es igual a:

`ProxyDepositBase` + `ProxyDepositFactor` \* `n`

## **Proxy puro / anónimo**

Los proxies anónimos (proxies puros) son cuentas recién generadas, distintas de la original, que se originan a partir de una cuenta principal. La cuenta principal asume el papel de proxy, representando al proxy anónimo. Estos proxies no son deterministas y carecen de clave privada, pero poseen una dirección generada aleatoriamente. Cabe señalar que los proxies anónimos carecen de propietario, ya que ningún individuo posee una clave privada para ejercer control sobre ellos.

A pesar de su complejidad y peligros asociados, los proxies puros tienen muchas ventajas importantes, como una mayor seguridad y la gestión de cuentas multisig.

:::tip

Se recomienda encarecidamente consultar la documentación de [**Polkadot**](https://wiki.polkadot.network/docs/learn-proxies#anonymous-proxy-pure-proxy) para obtener más información sobre Pure proxy, sus limitaciones y ventajas.

Recurso visual para Pure Proxy - https\://youtu.be/MqY6yU-YLO0

:::

## **Proxy con retardo de tiempo**

Para mejorar la seguridad de los proxies, podemos aplicar un mecanismo de retardo medido en bloques. Un valor de retardo de 10 corresponde a diez bloques, lo que resulta en un retardo de unos dos minutos (para la red Astar). El proxy utilizará el extrínseco `proxy.announce` para declarar su acción prevista y esperará el número de bloques especificado según el tiempo de retardo definido antes de ejecutarla.

Durante esta ventana de retardo, la acción prevista puede ser cancelada por el propio proxy utilizando el extrínseco `proxy.removeAnnouncement` o por las cuentas que controlan el proxy a través del extrínseco `proxy.rejectAnnouncement`. El anuncio realizado por el proxy incluye el hash de la llamada a la función prevista, lo que permite identificar y validar la acción.

Al incorporar este mecanismo de retardo, cualquier actividad maliciosa puede detectarse y revertirse dentro del periodo de retardo designado. Una vez transcurrido el tiempo de retardo, el proxy puede proceder a ejecutar la llamada anunciada utilizando el extrínseco `proxy.proxyAnnounced`.

:::caution

Cualquier intento de firmar la transacción usando **proxy** extrínseco con proxy puro fallará. Más información sobre los proxies [**pure**](https://wiki.polkadot.network/docs/learn-proxies#anonymous-proxy-pure-proxy) aquí.

:::

Esta implementación añade una capa adicional de seguridad a los proxies, proporcionando confianza en su uso, sabiendo que las acciones pueden ser observadas y deshechas dentro del periodo de retardo especificado.

:::tip

Echa un vistazo a este [**vídeo**](https://www.youtube.com/watch?v=3L7Vu2SX0PE) de Polkadot para aprender a configurar proxies temporizados.

:::
