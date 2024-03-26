---
sidebar_position: 6
---

# Restaurar una cartera ECDSA en Polkadot.js

Durante el Lockdrop 1 y 2, algunos de vosotros habréis reclamado tokens PLM al monedero por defecto. Si eres uno de ellos y has perdido el acceso a tu monedero Polkadot.js, este tutorial te guiará sobre cómo restaurar dicho monedero.

<br />

Se trata de un proceso de dos pasos.

1. Restaurar la cartera en Polkadot.js.
2. Restaurar el archivo json en la extensión Polkadot.js.

## Paso 1:

1. Ve a [Polkadot.js](https://polkadot.js.org/apps/#/settings).

2. Ir a "configuración".

3. En el menú desplegable Opciones de cuenta, seleccione `Permitir el almacenamiento local de la cuenta en el navegador`

4. Haz clic en Guardar.
   ![image](https://user-images.githubusercontent.com/37278708/214497161-f31e7685-f090-4e4c-806e-6a47bf18e48f.png)

5. A continuación, vaya a Cuenta y haga clic en Añadir cuenta.

6. Cambia "Mnemonic" por "Raw Seed".

7. Amplíe "Opciones avanzadas de creación".

8. En "keypair crypto type", y seleccione `ECDSA`.

9. En la casilla SEMILLA, escriba 0x y pegue su clave privada ETH.

10. Marque la casilla "He guardado mi frase mnemotécnica de forma segura".

11. Haga clic en "Siguiente".
    ![image](https://user-images.githubusercontent.com/37278708/214499043-aacc13c5-8e31-4a91-8384-e943169011a6.png)

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
7. Su cartera ECDSA ha sido restaurada en Polkadot.js y puede usarla con Astar Portal.
