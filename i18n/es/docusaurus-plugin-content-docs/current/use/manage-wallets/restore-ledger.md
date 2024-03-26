---
sidebar_position: 7
---

# Restaurar cartera Ledger en Polkadot.js

Es posible que algunos de vosotros tengáis problemas para realizar transacciones con el monedero Ledger en el portal. Esto es porque la aplicación Ledger que estás utilizando es una versión mínima. Por ahora, restaurar la frase semilla de Ledger en Polkadot.js puede ayudar con el problema.

<br />

Se trata de un proceso de dos pasos.

1. Restaurar la cartera en Polkadot.js.
2. Restaurar el archivo json en la extensión Polkadot.js.

## Paso 1:

1. Ve a [Polkadot.js](https://polkadot.js.org/apps/#/settings).

2. Ir a configuración.

3. En los menús desplegables Opciones de cuenta, seleccione `Permitir almacenamiento local de la cuenta en el navegador` y `Conectar Ledger a través de WebUSB (Chrome, recomendado)`.

4. Haz clic en Guardar.
   ![image](https://user-images.githubusercontent.com/37278708/218649665-db576329-7a93-4286-9b46-965e9bed3b2d.png)

5. A continuación, vaya a Cuenta y haga clic en "Añadir cuenta”.

6. Reemplaza la semilla mnemónica con tu semilla Ledger.

7. Amplíe "Opciones avanzadas de creación".

8. En "keypair crypto type", seleccione `Ledger (ed25519, BIP32 derivation)`.

9. En "ledger app type", selecciona `Astar Network`.

10. Marque la casilla "He guardado mi frase mnemotécnica de forma segura".

11. Haga clic en "Siguiente".
    ![image](https://user-images.githubusercontent.com/37278708/218649577-6eaf7936-bf3b-4610-8d3e-458b39353780.png)

12. Dé un nombre y una contraseña a la cuenta y haga clic en "Siguiente". Asegúrese de guardar la contraseña.

13. Haz clic en "Guardar".
    ![image](https://user-images.githubusercontent.com/37278708/214498123-dab270e0-9534-410f-8115-e254ac707041.png)

14. Se le pedirá guardar el archivo json. Por favor, guarde el archivo json de forma segura, ya que lo necesitará en el siguiente paso.

## Paso 2:

1. Visite https\://polkadot.js.org/extension/ para descargar e instalar la extensión de navegador Monedero.
2. Tras la instalación, haga clic en el icono "+" y seleccione "Restaurar cuenta desde un archivo json de copia de seguridad"
3. Seleccione el archivo json que guardó en el paso 1 y haga clic en "Restaurar".
4. Introduzca la contraseña que guardó en el paso 1 y haga clic en "Restaurar".
5. La cartera ahora se restaura en la extensión Polkadot.js.
6. Haga clic en los 3 puntos y seleccione “Permitir el uso en cualquier cadena”.
7. Tu monedero Ledger está ahora restaurado en Polkadot.js y puedes usarlo con Astar Portal.
