---
sidebar_position: 4
---

# Herramientas XCM

Hemos preparado una caja de xcm-tools que facilita a los usuarios la búsqueda de una cuenta soberana o el cálculo de un Id. de activo XC20. Esta sección está destinada a desarrolladores o integradores que posean conocimientos técnicos básicos.

## Instalación

1. Asegúrese de que su máquina es capaz de compilar el código Substrate. Para más información, consulta [aquí](https://docs.substrate.io/install/).
2. Clonar [Astar repo](https://github.com/AstarNetwork/Astar)
3. Sitúate en la raíz del repositorio y ejecuta `cargo build --release -p xcm-tools`
4. Una vez finalizada la compilación, busque el binario `xcm-tools` en la carpeta `./target/release`
5. Guárdalo para utilizarlo más tarde y no tener que recompilarlo desde cero.

## Cuenta Soberana

Para encontrar la dirección de la cuenta soberana de una parachain en la Relay Chain, utilice el siguiente comando:

```bash
./xcm-tools sovereign-account 2006
5Ec4AhPW97z4ZyYkd3mYkJrSeZWcwVv4wiANES2QrJi1x17F
```

Reemplace **2006** con el Id de parachain que usted requiera.

Para calcular la dirección de la cuenta soberana de una parachain hermana, utilice el siguiente comando:

```bash
./xcm-tools sovereign-account -s 2006
5Eg2fntKDrAxhaGuB3idrxCFu3BveuyB1MooVPYuj2jaoSsw
```

E.g. esta será la dirección de la cuenta soberana de Astar en Statemint.
Reemplace **2006** con el Id de parachain que usted requiera.

## Dirección XC20

Para calcular la dirección de una EVM XC20, utilice el siguiente comando:

```bash
./xcm-tools asset-id 42424242424242
pallet_assets: 42424242424242
EVM XC20: 0xffffffff000000000000000000002695a9e649b2
```

También puede introducir un Id. de activo estándar (como el que se ve en pallet-assets), y obtendrá la dirección H160 de ese activo.

## Cuenta remota

Para calcular la cuenta remota, revisa ([aquí](https://github.com/paritytech/polkadot/blob/master/xcm/xcm-builder/src/location_conversion.rs#L25)), hemos proveído un comando específico. Sin embargo, el posible formato de `MultiLocation` se limita a:

1. `{ parents: 1, interior: X1(AccountId32{ network: _, id: 0x<id>}) }`
2. `{ parents: 1, interior: X2(Parachain(<parachain_id>), AccountId32{ network: _, id: 0x<id>}) }`
3. `{ parents: 1, interior: X2(Parachain(<parachain_id>), AccountKey20{ network: _, key: 0x<id>}) }`

Para el primer caso, utilice el siguiente comando:

```bash
./xcm-tools remote-account -a 0x84746218b9858233f45f99d742aa3ea2f31aeb5a525938f240fdee3000000000
5H2dw5K45MfT4dwB7u924MYFASzGoWvACzKuMo3TdgJRkg2R
```

El valor bajo `-a` es una clave pública SS58.

Para el segundo caso, utilice el siguiente comando:

```bash
./xcm-tools remote-account -p 1000 -a 0x84746218b9858233f45f99d742aa3ea2f31aeb5a525938f240fdee3000000000
5FkWm28hUM7XC9qvrS3w4RP38wCgajfvFpqyfjeTSVxShdzC
```

El valor bajo `-p` es el parachain Id, mientras que `-a` es de nuevo la clave pública.
