[LoL Esports API Wrapper - v0.2.3](../README.md) / [Exports](../modules.md) / [internal](../modules/internal.md) / Interface

# Class: Interface

[internal](../modules/internal.md).Interface

Base class for interacting with the eSports API.

## Hierarchy

- **`Interface`**

  ↳ [`Leagues`](internal.Leagues.md)

  ↳ [`Events`](internal.Events.md)

  ↳ [`Tournaments`](internal.Tournaments.md)

  ↳ [`Matches`](internal.Matches.md)

  ↳ [`Games`](internal.Games.md)

  ↳ [`Teams`](internal.Teams.md)

## Table of contents

### Constructors

- [constructor](internal.Interface.md#constructor)

### Properties

- [\_baseURLs](internal.Interface.md#_baseurls)

### Methods

- [\_get](internal.Interface.md#_get)

## Constructors

### constructor

• **new Interface**()

## Properties

### \_baseURLs

• `Protected` `Readonly` **\_baseURLs**: `Object`

The eSports API's base URLs.

#### Type declaration

| Name   | Type                                                                                                            |
| :----- | :-------------------------------------------------------------------------------------------------------------- |
| `feed` | readonly [``"https://feed.lolesports.com/livestats/v1"``]                                                       |
| `main` | readonly [``"https://esports-api.lolesports.com/persisted/gw"``, ``"https://prod-relapi.ewp.gg/persisted/gw"``] |

#### Defined in

[src/interface.ts:122](https://github.com/Viriatto/lol-esports-api/blob/2b06612/src/interface.ts#L122)

## Methods

### \_get

▸ `Protected` **\_get**<`T`\>(`baseURLs`, `endpoint`, `params`): `Promise`<[`APIResponse`](../modules/internal.md#apiresponse)<`T`\>\>

Issues a request to the eSports API.

#### Type parameters

| Name | Type                                                     | Description                 |
| :--- | :------------------------------------------------------- | :-------------------------- |
| `T`  | extends keyof [`paths`](../interfaces/internal.paths.md) | An API endpoint identifier. |

#### Parameters

| Name       | Type                                                                          | Description                                    |
| :--------- | :---------------------------------------------------------------------------- | :--------------------------------------------- |
| `baseURLs` | readonly `string`[]                                                           | The base URL(s) to use within the request.     |
| `endpoint` | `T`                                                                           | The API endpoint to which send the request.    |
| `params`   | [`APIEndpointParameters`](../modules/internal.md#apiendpointparameters)<`T`\> | The query parameters to send with the request. |

#### Returns

`Promise`<[`APIResponse`](../modules/internal.md#apiresponse)<`T`\>\>

Data for the specified resource.

**`Remarks`**

Recursively tries to request each of the base URLs in [Interface.\_baseURLs](internal.Leagues.md#_baseurls) if the previous one has failed to yield a successful response.

**`Throws`**

Error
When [Interface.\_baseURLs](internal.Leagues.md#_baseurls) is undefined.

**`Throws`**

Error
When it can't get a successfuly response from any of the endpoints built from [Interface.\_baseURLs](internal.Leagues.md#_baseurls).

#### Defined in

[src/interface.ts:150](https://github.com/Viriatto/lol-esports-api/blob/2b06612/src/interface.ts#L150)
