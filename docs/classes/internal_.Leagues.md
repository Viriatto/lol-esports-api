[LoL Esports API Wrapper - v0.2.0](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Leagues

# Class: Leagues

[<internal>](../modules/internal_.md).Leagues

Interfaces with all of league related endpoints.

## Hierarchy

- [`Interface`](internal_.Interface.md)

  ↳ **`Leagues`**

## Table of contents

### Constructors

- [constructor](internal_.Leagues.md#constructor)

### Properties

- [\_baseURLs](internal_.Leagues.md#_baseurls)

### Methods

- [\_get](internal_.Leagues.md#_get)
- [get](internal_.Leagues.md#get)
- [getSchedule](internal_.Leagues.md#getschedule)
- [getTournaments](internal_.Leagues.md#gettournaments)

## Constructors

### constructor

• **new Leagues**()

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

### get

▸ **get**(`locale?`): `Promise`<{ `data`: { `leagues`: { `name`: `string` ; `slug`: `string` } & { `id`: `string` ; `image`: `string` } & { `priority`: `number` } & { `region`: `string` }[] } }\>

Fetches data on all leagues.

#### Parameters

| Name     | Type                                             | Default value | Description                 |
| :------- | :----------------------------------------------- | :------------ | :-------------------------- |
| `locale` | [`APILocale`](../modules/internal_.md#apilocale) | `"en-US"`     | The locale of the response. |

#### Returns

`Promise`<{ `data`: { `leagues`: { `name`: `string` ; `slug`: `string` } & { `id`: `string` ; `image`: `string` } & { `priority`: `number` } & { `region`: `string` }[] } }\>

Data about all leagues.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getLeagues).

#### Defined in

[src/interfaces/leagues.ts:20](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interfaces/leagues.ts#L20)

---

### getSchedule

▸ **getSchedule**(`leagueIdOrIds?`, `pageToken?`, `locale?`): `Promise`<{ `data`: { `schedule`: { `events`: { `blockName`: `null` \| `string` ; `match`: { `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` }[] } & { `id`: `string` } & { `strategy`: { `count`: `1` \| `3` \| `5` } & { `type`: `"bestOf"` } ; `teams`: { `result`: { `gameWins`: `number` } }[] } ; `startTime`: `string` } & { `state`: `"completed"` \| `"unstarted"` \| `"inProgress"` ; `type`: `"match"` \| `"show"` } & { `league`: { `name`: `string` ; `slug`: `string` } ; `match`: { `teams`: { `record`: `null` \| { `losses`: `number` ; `wins`: `number` } ; `result`: { `outcome`: `null` \| `"loss"` \| `"win"` } }[] } }[] ; `pages`: { `newer`: `null` \| `string` ; `older`: `null` \| `string` } ; `updated`: `string` } } }\>

Fetches the schedule for a particular league.

#### Parameters

| Name             | Type                                             | Default value | Description                                                               |
| :--------------- | :----------------------------------------------- | :------------ | :------------------------------------------------------------------------ |
| `leagueIdOrIds?` | `string` \| [`string`, ...string[]]              | `undefined`   | The id of the league from which to fetch the schedule.                    |
| `pageToken?`     | `string`                                         | `undefined`   | Base 64 encoded string used to determine the next "page" of data to pull. |
| `locale`         | [`APILocale`](../modules/internal_.md#apilocale) | `"en-US"`     | The locale of the response.                                               |

#### Returns

`Promise`<{ `data`: { `schedule`: { `events`: { `blockName`: `null` \| `string` ; `match`: { `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` }[] } & { `id`: `string` } & { `strategy`: { `count`: `1` \| `3` \| `5` } & { `type`: `"bestOf"` } ; `teams`: { `result`: { `gameWins`: `number` } }[] } ; `startTime`: `string` } & { `state`: `"completed"` \| `"unstarted"` \| `"inProgress"` ; `type`: `"match"` \| `"show"` } & { `league`: { `name`: `string` ; `slug`: `string` } ; `match`: { `teams`: { `record`: `null` \| { `losses`: `number` ; `wins`: `number` } ; `result`: { `outcome`: `null` \| `"loss"` \| `"win"` } }[] } }[] ; `pages`: { `newer`: `null` \| `string` ; `older`: `null` \| `string` } ; `updated`: `string` } } }\>

Data on all tournaments from a specific league.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getSchedule).

#### Defined in

[src/interfaces/leagues.ts:60](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interfaces/leagues.ts#L60)

---

### getTournaments

▸ **getTournaments**(`leagueId?`, `locale?`): `Promise`<{ `data`: { `leagues`: { `tournaments`: { `endDate`: `string` ; `id`: `string` ; `slug`: `string` ; `startDate`: `string` }[] }[] } }\>

Fetches data on all tournaments from a specific league.

#### Parameters

| Name        | Type                                             | Default value | Description                                                       |
| :---------- | :----------------------------------------------- | :------------ | :---------------------------------------------------------------- |
| `leagueId?` | `string`                                         | `undefined`   | The id of the league from which to fetch tournaments information. |
| `locale`    | [`APILocale`](../modules/internal_.md#apilocale) | `"en-US"`     | The locale of the response.                                       |

#### Returns

`Promise`<{ `data`: { `leagues`: { `tournaments`: { `endDate`: `string` ; `id`: `string` ; `slug`: `string` ; `startDate`: `string` }[] }[] } }\>

Data on all tournaments from a specific league.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getTournamentsForLeague).

#### Defined in

[src/interfaces/leagues.ts:39](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/interfaces/leagues.ts#L39)