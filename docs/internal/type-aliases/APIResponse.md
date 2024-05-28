[**LoL Esports API Wrapper**](../../README.md) • **Docs**

***

[LoL Esports API Wrapper](../../globals.md) / [internal](../README.md) / APIResponse

# Type alias: APIResponse\<T\>

`Internal`

> **APIResponse**\<`T`\>: [`APIOperations`](APIOperations.md)\<`T`\>\[`"responses"`\]\[`200`\]\[`"content"`\]\[`"application/json"`\]

An API response's type, based on the endpoint `T`.

## Remarks

The eSports API specification used here is a fork of [vickz84259's work](https://vickz84259.github.io/lolesports-api-docs/).

## Type parameters

• **T** *extends* keyof [`APIEndpoints`](APIEndpoints.md)

## Source

[src/interface.ts:50](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/interface.ts#L50)
