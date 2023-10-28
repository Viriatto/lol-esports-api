[LoL Esports API Wrapper - v0.2.0](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Tournaments

# Class: Tournaments

[<internal>](../modules/internal_.md).Tournaments

Interfaces with all of tournaments related endpoints.

## Hierarchy

- [`Interface`](internal_.Interface.md)

  ↳ **`Tournaments`**

## Table of contents

### Constructors

- [constructor](internal_.Tournaments.md#constructor)

### Properties

- [\_baseURLs](internal_.Tournaments.md#_baseurls)

### Methods

- [\_get](internal_.Tournaments.md#_get)
- [getCompletedEvents](internal_.Tournaments.md#getcompletedevents)
- [getStandings](internal_.Tournaments.md#getstandings)

## Constructors

### constructor

• **new Tournaments**()

#### Inherited from

[Interface](internal_.Interface.md).[constructor](internal_.Interface.md#constructor)

## Properties

### \_baseURLs

• `Protected` `Readonly` **\_baseURLs**: `Object`

The eSports API's base URLs.

#### Type declaration

| Name   | Type                                                                                                            |
| :----- | :-------------------------------------------------------------------------------------------------------------- |
| `feed` | readonly [``"https://feed.lolesports.com/livestats/v1"``]                                                       |
| `main` | readonly [``"https://esports-api.lolesports.com/persisted/gw"``, ``"https://prod-relapi.ewp.gg/persisted/gw"``] |

#### Inherited from

[Interface](internal_.Interface.md).[\_baseURLs](internal_.Interface.md#_baseurls)

#### Defined in

[src/interface.ts:121](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interface.ts#L121)

## Methods

### \_get

▸ `Protected` **\_get**<`T`\>(`baseURLs`, `endpoint`, `params`): `Promise`<[`APIResponse`](../modules/internal_.md#apiresponse)<`T`\>\>

Issues a request to the eSports API.

#### Type parameters

| Name | Type                                                      | Description                 |
| :--- | :-------------------------------------------------------- | :-------------------------- |
| `T`  | extends keyof [`paths`](../interfaces/internal_.paths.md) | An API endpoint identifier. |

#### Parameters

| Name       | Type                                                                           | Description                                    |
| :--------- | :----------------------------------------------------------------------------- | :--------------------------------------------- |
| `baseURLs` | readonly `string`[]                                                            | The base URL(s) to use within the request.     |
| `endpoint` | `T`                                                                            | The API endpoint to which send the request.    |
| `params`   | [`APIEndpointParameters`](../modules/internal_.md#apiendpointparameters)<`T`\> | The query parameters to send with the request. |

#### Returns

`Promise`<[`APIResponse`](../modules/internal_.md#apiresponse)<`T`\>\>

Data for the specified resource.

**`Remarks`**

Recursively tries to request each of the base URLs in [Interface.\_baseURLs](internal_.Leagues.md#_baseurls) if the previous one has failed to yield a successful response.

**`Throws`**

Error
When [Interface.\_baseURLs](internal_.Leagues.md#_baseurls) is undefined.

**`Throws`**

Error
When it can't get a successfuly response from any of the endpoints built from [Interface.\_baseURLs](internal_.Leagues.md#_baseurls).

#### Inherited from

[Interface](internal_.Interface.md).[\_get](internal_.Interface.md#_get)

#### Defined in

[src/interface.ts:149](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interface.ts#L149)

---

### getCompletedEvents

▸ **getCompletedEvents**(`tournamentIdOrIds?`, `locale?`): `Promise`<{ `data`: { `schedule`: { `events`: { `blockName`: `null` \| `string` ; `match`: { `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` }[] } & { `id`: `string` } & { `strategy`: { `count`: `1` \| `3` \| `5` } & { `type`: `"bestOf"` } ; `teams`: { `result`: { `gameWins`: `number` } }[] } ; `startTime`: `string` } & { `games`: { `vods`: { `parameter`: `string` }[] }[] ; `match`: { `type`: `"normal"` } }[] } } }\>

Fetches data for completed events of all tournaments, a particular tournament, or a set of tournaments.

#### Parameters

| Name                 | Type                                             | Default value | Description                                                             |
| :------------------- | :----------------------------------------------- | :------------ | :---------------------------------------------------------------------- |
| `tournamentIdOrIds?` | `string` \| [`string`, ...string[]]              | `undefined`   | The id(s) of the tournament(s) from which to pull completed event data. |
| `locale`             | [`APILocale`](../modules/internal_.md#apilocale) | `"en-US"`     | The locale of the response.                                             |

#### Returns

`Promise`<{ `data`: { `schedule`: { `events`: { `blockName`: `null` \| `string` ; `match`: { `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` }[] } & { `id`: `string` } & { `strategy`: { `count`: `1` \| `3` \| `5` } & { `type`: `"bestOf"` } ; `teams`: { `result`: { `gameWins`: `number` } }[] } ; `startTime`: `string` } & { `games`: { `vods`: { `parameter`: `string` }[] }[] ; `match`: { `type`: `"normal"` } }[] } } }\>

Data on the completed events of the tournament(s).

**`Remarks`**

If `tournamentIdOrIds` is `undefined`, pulls data for all tournaments.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getCompletedEvents).

#### Defined in

[src/interfaces/tournaments.ts:24](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interfaces/tournaments.ts#L24)

---

### getStandings

▸ **getStandings**(`tournamentIdOrIds`, `locale?`): `Promise`<{ `data`: { `standings`: { `stages`: { `name`: `string` ; `sections`: { `matches`: { `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` }[] } & { `id`: `string` } & { `flags`: `null` \| `string` ; `previousMatchIds`: `null` \| `string`[] ; `state`: `"completed"` \| `"unstarted"` \| `"inProgress"` ; `teams`: { `id`: `string` ; `result`: { `gameWins`: `number` } & { `outcome?`: `null` \| `"loss"` \| `"win"` } ; `slug`: `string` }[] }[] ; `name`: `string` ; `rankings`: { `ordinal`: `number` ; `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` } & { `id?`: `string` ; `record?`: `null` \| { `losses`: `number` ; `wins`: `number` } ; `slug?`: `string` }[] }[] }[] ; `slug`: `string` ; `type`: `"groups"` \| `"bracket"` }[] }[] } }\>

Fetches data for the standings of a particular tournament or tournaments.

#### Parameters

| Name                | Type                                             | Default value | Description                                                             |
| :------------------ | :----------------------------------------------- | :------------ | :---------------------------------------------------------------------- |
| `tournamentIdOrIds` | `string` \| [`string`, ...string[]]              | `undefined`   | The id(s) of the tournament(s) from which to pull completed event data. |
| `locale`            | [`APILocale`](../modules/internal_.md#apilocale) | `"en-US"`     | The locale of the response.                                             |

#### Returns

`Promise`<{ `data`: { `standings`: { `stages`: { `name`: `string` ; `sections`: { `matches`: { `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` }[] } & { `id`: `string` } & { `flags`: `null` \| `string` ; `previousMatchIds`: `null` \| `string`[] ; `state`: `"completed"` \| `"unstarted"` \| `"inProgress"` ; `teams`: { `id`: `string` ; `result`: { `gameWins`: `number` } & { `outcome?`: `null` \| `"loss"` \| `"win"` } ; `slug`: `string` }[] }[] ; `name`: `string` ; `rankings`: { `ordinal`: `number` ; `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` } & { `id?`: `string` ; `record?`: `null` \| { `losses`: `number` ; `wins`: `number` } ; `slug?`: `string` }[] }[] }[] ; `slug`: `string` ; `type`: `"groups"` \| `"bracket"` }[] }[] } }\>

Data on the completed events of a particular tournament.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getCompletedEvents).

#### Defined in

[src/interfaces/tournaments.ts:49](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interfaces/tournaments.ts#L49)
