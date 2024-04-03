---
sidebar_position: 9
---

# Contratos inteligentes

## Vista general

Astar es una plataforma para el despliegue de contratos inteligentes.  Los desarrolladores pueden crear y desplegar contratos inteligentes en Astar Network usando una variedad de lenguajes de programación, incluyendo Solidity, que es compatible con contratos inteligentes Ethereum o ink! un lenguaje de contrato inteligente basado en Rust para el ecosistema de Polkadot. Esta compatibilidad garantiza una transición fluida para los desarrolladores de otros ecosistemas de blockchain, fomentando la interoperabilidad y favoreciendo la adopción de Astar Network.

Astar Network emplea un mecanismo de consenso de alto rendimiento que garantiza la ejecución rápida y eficiente de los contratos. La red utiliza una combinación única de algoritmos de consenso proof-of-stake (PoS) y proof-of-work (PoW), que mejoran la seguridad al tiempo que mantienen la escalabilidad. Esta arquitectura permite a Astar Network gestionar un gran volumen de transacciones de contratos inteligentes, lo que la hace adecuada para aplicaciones descentralizadas (DApps) con requisitos computacionales exigentes.

Además, Astar Network incorpora un amplio conjunto de herramientas y marcos de desarrollo para facilitar la creación, prueba y despliegue de contratos inteligentes. Entre ellos, un sólido kit de desarrollo de software (SDK), documentación detallada para desarrolladores y un entorno de desarrollo integrado (IDE) de fácil uso. Estos recursos permiten a los desarrolladores escribir contratos inteligentes seguros y eficientes, reduciendo el riesgo de vulnerabilidades y garantizando la fiabilidad de las aplicaciones descentralizadas.

## Contratos inteligentes de WebAssembly

Los tiempos de ejecución de Astar y Shiden se basan en Substrate, y ambas redes incorporan `pallet-contracts`, un entorno aislado utilizado para desplegar y ejecutar contratos inteligentes WebAssembly. Cualquier lenguaje que compile a Wasm puede ser desplegado y ejecutado en esta Máquina Virtual Wasm, sin embargo, el código debe ser compatible con la `pallet-contracts` [API](https://docs.rs/pallet-contracts/latest/pallet_contracts/api_doc/trait.Current.html).

Para evitar complejidades innecesarias y la escritura de código repetitivo, el método más apropiado de construcción implicará el uso de un eDSL específicamente dirigido a `contratos-paleta`, como [ink!] (basado en Rust), o [Ask!] (basado en AssemblblyScript), o posiblemente otros, a medida que el ecosistema crece.

Después de la compilación, un blob de Wasm puede ser desplegado y almacenado en cadena.

## Contratos inteligentes de máquina virtual de Ethereum

La implementación de Astar EVM se basa en el Substrate Pallet-EVM, y obtenemos una implementación completa de EVM basada en Rust.
Los contratos inteligentes en Astar EVM pueden implementarse utilizando Solidity, Vyper, y cualquier otro lenguaje que pueda compilar contratos inteligentes a bytecode compatible con EVM. El objetivo de Pallet-EVM es proporcionar un entorno seguro y de bajas fricciones para el desarrollo, las pruebas y la ejecución de contratos inteligentes que sea compatible con la actual cadena de herramientas para desarrolladores de Ethereum.

## Aprende más
