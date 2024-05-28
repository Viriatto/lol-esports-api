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

[src/interface.ts:76](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/interface.ts#L76)
