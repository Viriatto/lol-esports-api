[LoL Esports API Wrapper - v0.2.0](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Matches

# Class: Matches

[<internal>](../modules/internal_.md).Matches

Interfaces with all of match related endpoints.

## Hierarchy

- [`Interface`](internal_.Interface.md)

  ↳ **`Matches`**

## Table of contents

### Constructors

- [constructor](internal_.Matches.md#constructor)

### Properties

- [\_baseURLs](internal_.Matches.md#_baseurls)

### Methods

- [\_get](internal_.Matches.md#_get)
- [getEvent](internal_.Matches.md#getevent)

## Constructors

### constructor

• **new Matches**()

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

[src/interface.ts:121](https://github.com/Viriatto/lol-esports-api/blob/263a411/src/interface.ts#L121)

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

[src/interface.ts:149](https://github.com/Viriatto/lol-esports-api/blob/263a411/src/interface.ts#L149)

---

### getEvent

▸ **getEvent**(`matchId`, `locale?`): `Promise`<{ `data`: { `event`: { `match?`: { `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` }[] } } & { `id`: `string` ; `league`: { `name`: `string` ; `slug`: `string` } & { `id`: `string` ; `image`: `string` } ; `match`: { `games`: { `id`: `string` ; `number`: `2` \| `1` \| `3` \| `5` \| `4` ; `state`: `"completed"` \| `"unstarted"` \| `"inProgress"` ; `vods`: { `parameter`: `string` } & { `locale`: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"` ; `offset`: `number` ; `provider`: `"youtube"` \| `"twitch"` }[] } & { `teams`: { `id`: `string` ; `side`: `"blue"` \| `"red"` }[] }[] ; `strategy`: { `count`: `1` \| `3` \| `5` } ; `teams`: { `id`: `string` ; `result`: { `gameWins`: `number` } }[] } ; `streams`: `null` \| { `parameter`: `string` } & { `locale`: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"` ; `offset`: `number` ; `provider`: `"youtube"` \| `"twitch"` }[] ; `type`: `"match"` \| `"show"` } } }\>

Fetches event details for a particular match.

#### Parameters

| Name      | Type                                             | Default value | Description                                              |
| :-------- | :----------------------------------------------- | :------------ | :------------------------------------------------------- |
| `matchId` | `string`                                         | `undefined`   | The id of the match from which pull the event's details. |
| `locale`  | [`APILocale`](../modules/internal_.md#apilocale) | `"en-US"`     | The locale of the response.                              |

#### Returns

`Promise`<{ `data`: { `event`: { `match?`: { `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` }[] } } & { `id`: `string` ; `league`: { `name`: `string` ; `slug`: `string` } & { `id`: `string` ; `image`: `string` } ; `match`: { `games`: { `id`: `string` ; `number`: `2` \| `1` \| `3` \| `5` \| `4` ; `state`: `"completed"` \| `"unstarted"` \| `"inProgress"` ; `vods`: { `parameter`: `string` } & { `locale`: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"` ; `offset`: `number` ; `provider`: `"youtube"` \| `"twitch"` }[] } & { `teams`: { `id`: `string` ; `side`: `"blue"` \| `"red"` }[] }[] ; `strategy`: { `count`: `1` \| `3` \| `5` } ; `teams`: { `id`: `string` ; `result`: { `gameWins`: `number` } }[] } ; `streams`: `null` \| { `parameter`: `string` } & { `locale`: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"` ; `offset`: `number` ; `provider`: `"youtube"` \| `"twitch"` }[] ; `type`: `"match"` \| `"show"` } } }\>

Data on the event details of a particular match.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getGames).

#### Defined in

[src/interfaces/matches.ts:20](https://github.com/Viriatto/lol-esports-api/blob/263a411/src/interfaces/matches.ts#L20)
