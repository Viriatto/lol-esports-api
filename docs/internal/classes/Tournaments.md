[**LoL Esports API Wrapper**](../../README.md) • **Docs**

***

[LoL Esports API Wrapper](../../globals.md) / [internal](../README.md) / Tournaments

# Class: Tournaments

Interfaces with all of tournaments related endpoints.

## Extends

- [`Interface`](Interface.md)

## Constructors

### new Tournaments()

> **new Tournaments**(): [`Tournaments`](Tournaments.md)

#### Returns

[`Tournaments`](Tournaments.md)

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

[src/interface.ts:122](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/interface.ts#L122)

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

[src/interface.ts:150](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/interface.ts#L150)

***

### getCompletedEvents()

`Sealed`

> **getCompletedEvents**(`tournamentId`?, `locale`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Fetches data for completed events of all tournaments, a particular tournament, or a set of tournaments.

#### Parameters

• **tournamentId?**: `string`

The id of the tournament from which to pull completed event data.

• **locale?**: [`APILocale`](../type-aliases/APILocale.md)= `"en-US"`

The locale of the response.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Data on the completed events of the tournament.

##### data

> **data**: `object`

##### data.schedule

> **schedule**: `object`

##### data.schedule.events

> **events**: `object` & `object`[]

#### Remarks

If `tournamentIdOrIds` is `undefined`, pulls data for all tournaments.

#### See

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getCompletedEvents).

#### Source

[src/interfaces/tournaments.ts:24](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/interfaces/tournaments.ts#L24)

***

### getStandings()

`Sealed`

> **getStandings**(`tournamentId`, `locale`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Fetches data for the standings of a particular tournament or tournaments.

#### Parameters

• **tournamentId**: `string`

The id of the tournament from which to pull standings data.

• **locale**: [`APILocale`](../type-aliases/APILocale.md)= `"en-US"`

The locale of the response.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Data on the completed events of a particular tournament.

##### data

> **data**: `object`

##### data.standings

> **standings**: `object`[]

Each object in the array contains details of each tournament requested.

#### See

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getCompletedEvents).

#### Source

[src/interfaces/tournaments.ts:47](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/interfaces/tournaments.ts#L47)
