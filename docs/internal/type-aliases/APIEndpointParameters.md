[**LoL Esports API Wrapper**](../../README.md) • **Docs**

***

[LoL Esports API Wrapper](../../globals.md) / [internal](../README.md) / APIEndpointParameters

# Type alias: APIEndpointParameters\<T\>

`Internal`

> **APIEndpointParameters**\<`T`\>: [`APIOperations`](APIOperations.md)\<`T`\> *extends* `object` ? [`APIOperations`](APIOperations.md)\<`T`\>\[`"parameters"`\] : `never`

Mapped query parameters for API endpoint `T`.

## Remarks

Searches for an existing type within the eSports API types, if it does not exist, defaults to `never`.

## Type parameters

• **T** *extends* keyof [`APIEndpoints`](APIEndpoints.md)

## Source

[src/interface.ts:76](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/interface.ts#L76)
