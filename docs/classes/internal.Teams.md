[LoL Esports API Wrapper](../README.md) / [Exports](../modules.md) / [internal](../modules/internal.md) / Teams

# Class: Teams

[internal](../modules/internal.md).Teams

Interfaces with all of teams related endpoints.

## Hierarchy

- [`Interface`](internal.Interface.md)

  ↳ **`Teams`**

## Table of contents

### Constructors

- [constructor](internal.Teams.md#constructor)

### Properties

- [\_baseURLs](internal.Teams.md#_baseurls)

### Methods

- [\_get](internal.Teams.md#_get)
- [get](internal.Teams.md#get)

## Constructors

### constructor

• **new Teams**(): [`Teams`](internal.Teams.md)

#### Returns

[`Teams`](internal.Teams.md)

#### Inherited from

[Interface](internal.Interface.md).[constructor](internal.Interface.md#constructor)

## Properties

### \_baseURLs

• `Protected` `Readonly` **\_baseURLs**: `Object`

The eSports API's base URLs.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `feed` | readonly [``"https://feed.lolesports.com/livestats/v1"``] |
| `main` | readonly [``"https://esports-api.lolesports.com/persisted/gw"``, ``"https://prod-relapi.ewp.gg/persisted/gw"``] |

#### Inherited from

[Interface](internal.Interface.md).[_baseURLs](internal.Interface.md#_baseurls)

#### Defined in

[src/interface.ts:122](https://github.com/Viriatto/lol-esports-api/blob/23ba082b074e71776e5f609c5e6267b899ac0e37/src/interface.ts#L122)

## Methods

### \_get

▸ **_get**\<`T`\>(`baseURLs`, `endpoint`, `params`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`APIResponse`](../modules/internal.md#apiresponse)\<`T`\>\>

Issues a request to the eSports API.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends keyof [`paths`](../interfaces/internal.paths.md) | An API endpoint identifier. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseURLs` | readonly `string`[] | The base URL(s) to use within the request. |
| `endpoint` | `T` | The API endpoint to which send the request. |
| `params` | [`APIEndpointParameters`](../modules/internal.md#apiendpointparameters)\<`T`\> | The query parameters to send with the request. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`APIResponse`](../modules/internal.md#apiresponse)\<`T`\>\>

Data for the specified resource.

**`Remarks`**

Recursively tries to request each of the base URLs in [Interface._baseURLs](internal.Interface.md#_baseurls) if the previous one has failed to yield a successful response.

**`Throws`**

Error
When [Interface._baseURLs](internal.Interface.md#_baseurls) is undefined.

**`Throws`**

Error
When it can't get a successfuly response from any of the endpoints built from [Interface._baseURLs](internal.Interface.md#_baseurls).

#### Inherited from

[Interface](internal.Interface.md).[_get](internal.Interface.md#_get)

#### Defined in

[src/interface.ts:150](https://github.com/Viriatto/lol-esports-api/blob/23ba082b074e71776e5f609c5e6267b899ac0e37/src/interface.ts#L150)

___

### get

▸ **get**(`teamId?`, `locale?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  } & \{ `alternativeImage`: `string` ; `homeLeague`: \{ `name`: `string` ; `region`: `string`  } ; `id`: `string` ; `players`: \{ `firstName`: `string` ; `id`: `string` ; `image`: `string` ; `lastName`: `string` ; `role`: `string` ; `summonerName`: `string`  }[] ; `slug`: `string`  }[]  }  }\>

Fetches data for all teams or a particular team.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `teamId?` | `string` | `undefined` | A specific team id from which to pull data. |
| `locale` | [`APILocale`](../modules/internal.md#apilocale) | `"en-US"` | The locale of the response. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  } & \{ `alternativeImage`: `string` ; `homeLeague`: \{ `name`: `string` ; `region`: `string`  } ; `id`: `string` ; `players`: \{ `firstName`: `string` ; `id`: `string` ; `image`: `string` ; `lastName`: `string` ; `role`: `string` ; `summonerName`: `string`  }[] ; `slug`: `string`  }[]  }  }\>

Data on a particular team or all teams.

**`Remarks`**

If `teamId` is undefined, fetches data for all teams.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getTeams).

#### Defined in

[src/interfaces/teams.ts:23](https://github.com/Viriatto/lol-esports-api/blob/23ba082b074e71776e5f609c5e6267b899ac0e37/src/interfaces/teams.ts#L23)
