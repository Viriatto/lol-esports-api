[**LoL Esports API Wrapper**](../../README.md) • **Docs**

***

[LoL Esports API Wrapper](../../globals.md) / [internal](../README.md) / Games

# Class: Games

Interfaces with all of game related endpoints.

## Extends

- [`Interface`](Interface.md)

## Constructors

### new Games()

> **new Games**(): [`Games`](Games.md)

#### Returns

[`Games`](Games.md)

#### Inherited from

[`Interface`](Interface.md).[`constructor`](Interface.md#constructors)

## Properties

### \_baseURLs

`Sealed` `Internal`

> `protected` `readonly` **\_baseURLs**: `object`

The eSports API's base URLs.

#### feed

> `readonly` **feed**: readonly [`"https://feed.lolesports.com/livestats/v1"`]

#### main

> `readonly` **main**: readonly [`"https://esports-api.lolesports.com/persisted/gw"`, `"https://prod-relapi.ewp.gg/persisted/gw"`]

#### Inherited from

[`Interface`](Interface.md).[`_baseURLs`](Interface.md#_baseurls)

#### Source

[src/interface.ts:122](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/interface.ts#L122)

## Methods

### \_get()

`Internal` `Sealed`

> `protected` **\_get**\<`T`\>(`baseURLs`, `endpoint`, `params`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`APIResponse`](../type-aliases/APIResponse.md)\<`T`\>\>

Issues a request to the eSports API.

#### Type parameters

• **T** *extends* keyof [`paths`](../interfaces/paths.md)

An API endpoint identifier.

#### Parameters

• **baseURLs**: readonly `string`[]

The base URL(s) to use within the request.

• **endpoint**: `T`

The API endpoint to which send the request.

• **params**: [`APIEndpointParameters`](../type-aliases/APIEndpointParameters.md)\<`T`\>

The query parameters to send with the request.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`APIResponse`](../type-aliases/APIResponse.md)\<`T`\>\>

Data for the specified resource.

#### Inherited from

[`Interface`](Interface.md).[`_get`](Interface.md#_get)

#### Remarks

Recursively tries to request each of the base URLs in [Interface._baseURLs](Interface.md#_baseurls) if the previous one has failed to yield a successful response.

#### Throws

Error
When [Interface._baseURLs](Interface.md#_baseurls) is undefined.

#### Throws

Error
When it can't get a successfuly response from any of the endpoints built from [Interface._baseURLs](Interface.md#_baseurls).

#### Source

[src/interface.ts:150](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/interface.ts#L150)

***

### get()

`Sealed`

> **get**(`gameId`, `locale`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Fetches data for a game or games.

#### Parameters

• **gameId**: `string`

The id of the game to fetch.

• **locale**: [`APILocale`](../type-aliases/APILocale.md)= `"en-US"`

The locale of the response.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Data about the games.

##### data

> **data**: `object`

##### data.games

> **games**: `object`[]

#### See

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getGames).

#### Source

[src/interfaces/games.ts:21](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/interfaces/games.ts#L21)

***

### getDetails()

`Sealed`

> **getDetails**(`gameId`, `startingAt`, `participantIdsOrIds`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Fetches detailed information for a particular section of a game, such as participants' champion stats and ability level up sequence.

#### Parameters

• **gameId**: `string`

The game id from which to fetch data.

• **startingAt**: `string` \| [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

The starting date of the segment to fetch from the game. If it is later than the end date of the game, retrieves the last 10 frames.

• **participantIdsOrIds?**: `number` \| [`number`, `...number[]`]

The ids of the participants from which to fetch data.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

##### frames

> **frames**: `object` & `object`[]

#### Remarks

The response's data contains a `frames` array property which includes "snapshots" of game states for a time span of 10 seconds.

#### Example

```ts
import APIClient from 'lol-esports-api';

const client = new APIClient();
const liveEvents = await client.getLive();

console.log(liveEvents);
```

#### See

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getDetails).

#### Source

[src/interfaces/games.ts:84](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/interfaces/games.ts#L84)

***

### getWindow()

`Sealed`

> **getWindow**(`gameId`, `startingAt`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Fetches overall information for a particular section of a game, such as game state, objectives taken and participants scoreboard information.

#### Parameters

• **gameId**: `string`

• **startingAt?**: `string` \| [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

The starting date of the segment to fetch from the game. If it is later than the end date of the game, retrieves the last 10 frames.
If `undefined`, returns the first 10 frames of the game.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Data on a segment of the game.

##### esportsGameId

> **esportsGameId**: `string`

The game Id of the match

##### esportsMatchId

> **esportsMatchId**: `string`

The match Id of the match

##### frames

> **frames**: `object` & `object`[]

##### gameMetadata

> **gameMetadata**: `object`

##### gameMetadata.blueTeamMetadata

> **blueTeamMetadata**: `object`

##### gameMetadata.blueTeamMetadata.esportsTeamId

> **esportsTeamId**: `string`

The team Id

##### gameMetadata.blueTeamMetadata.participantMetadata

> **participantMetadata**: (`object` \| `object` & `object`)[]

##### gameMetadata.patchVersion

> **patchVersion**: `string`

The patch the match was played on

##### gameMetadata.redTeamMetadata

> **redTeamMetadata**: `object`

##### gameMetadata.redTeamMetadata.esportsTeamId

> **esportsTeamId**: `string`

The team Id

##### gameMetadata.redTeamMetadata.participantMetadata

> **participantMetadata**: (`object` \| `object` & `object`)[]

#### Remarks

The response's data contains a `frames` array property which includes "snapshots" of game states for a time span of 10 seconds.

#### See

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getGames).

#### Source

[src/interfaces/games.ts:44](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/interfaces/games.ts#L44)
