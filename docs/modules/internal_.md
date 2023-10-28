[LoL Esports API Wrapper - v0.2.0](../README.md) / [Exports](../modules.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [Events](../classes/internal_.Events.md)
- [Interface](../classes/internal_.Interface.md)
- [Leagues](../classes/internal_.Leagues.md)
- [Matches](../classes/internal_.Matches.md)
- [Tournaments](../classes/internal_.Tournaments.md)

### Interfaces

- [components](../interfaces/internal_.components.md)
- [paths](../interfaces/internal_.paths.md)

### Type Aliases

- [APIEndpointParameters](internal_.md#apiendpointparameters)
- [APIEndpoints](internal_.md#apiendpoints)
- [APILocale](internal_.md#apilocale)
- [APIOperations](internal_.md#apioperations)
- [APIResponse](internal_.md#apiresponse)
- [Exclude](internal_.md#exclude)
- [Record](internal_.md#record)
- [Without](internal_.md#without)

## Type Aliases

### APIEndpointParameters

Ƭ **APIEndpointParameters**<`T`\>: [`APIOperations`](internal_.md#apioperations)<`T`\> extends { `parameters`: { `path?`: [`Record`](internal_.md#record)<`string`, `unknown`\> ; `query?`: [`Record`](internal_.md#record)<`string`, `unknown`\> } } ? [`APIOperations`](internal_.md#apioperations)<`T`\>[``"parameters"``] : `never`

Mapped query parameters for API endpoint `T`.

**`Remarks`**

Searches for an existing type within the eSports API types, if it does not exist, defaults to `never`.

#### Type parameters

| Name | Type                                                      |
| :--- | :-------------------------------------------------------- |
| `T`  | extends keyof [`APIEndpoints`](internal_.md#apiendpoints) |

#### Defined in

[src/interface.ts:75](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interface.ts#L75)

---

### APIEndpoints

Ƭ **APIEndpoints**: [`paths`](../interfaces/internal_.paths.md)

The API endpoints as per [vickz84259's specification](https://vickz84259.github.io/lolesports-api-docs/).

#### Defined in

[src/interface.ts:58](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interface.ts#L58)

---

### APILocale

Ƭ **APILocale**: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"`

[ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)/[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) locale code.

#### Defined in

[src/interface.ts:90](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interface.ts#L90)

---

### APIOperations

Ƭ **APIOperations**<`T`\>: [`APIEndpoints`](internal_.md#apiendpoints)[`T`][``"get"``]

The API endpoint operations as per [vickz84259's specification](https://vickz84259.github.io/lolesports-api-docs/).

#### Type parameters

| Name | Type                                                      |
| :--- | :-------------------------------------------------------- |
| `T`  | extends keyof [`APIEndpoints`](internal_.md#apiendpoints) |

#### Defined in

[src/interface.ts:65](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interface.ts#L65)

---

### APIResponse

Ƭ **APIResponse**<`T`\>: [`APIOperations`](internal_.md#apioperations)<`T`\>[`"responses"`][``200``][`"content"`][``"application/json"``]

An API response's type, based on the endpoint `T`.

**`Remarks`**

The eSports API specification used here is a fork of [vickz84259's work](https://vickz84259.github.io/lolesports-api-docs/).

#### Type parameters

| Name | Type                                                      |
| :--- | :-------------------------------------------------------- |
| `T`  | extends keyof [`APIEndpoints`](internal_.md#apiendpoints) |

#### Defined in

[src/interface.ts:50](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interface.ts#L50)

---

### Exclude

Ƭ **Exclude**<`T`, `U`\>: `T` extends `U` ? `never` : `T`

Exclude from T those types that are assignable to U

#### Type parameters

| Name |
| :--- |
| `T`  |
| `U`  |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1606

---

### Record

Ƭ **Record**<`K`, `T`\>: { [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type                |
| :--- | :------------------ |
| `K`  | extends keyof `any` |
| `T`  | `T`                 |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1599

---

### Without

Ƭ **Without**<`T`, `U`\>: { [P in Exclude<keyof T, keyof U\>]?: never }

OneOf type helpers

#### Type parameters

| Name |
| :--- |
| `T`  |
| `U`  |

#### Defined in

[src/api-types.d.ts:7](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/api-types.d.ts#L7)
