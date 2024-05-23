[**LoL Esports API Wrapper**](../../README.md) • **Docs**

***

[LoL Esports API Wrapper](../../globals.md) / [internal](../README.md) / Leagues

# Class: Leagues

Interfaces with all of league related endpoints.

## Extends

- [`Interface`](Interface.md)

## Constructors

### new Leagues()

> **new Leagues**(): [`Leagues`](Leagues.md)

#### Returns

[`Leagues`](Leagues.md)

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

### get()

`Sealed`

> **get**(`locale`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Fetches data on all leagues.

#### Parameters

• **locale**: [`APILocale`](../type-aliases/APILocale.md)= `"en-US"`

The locale of the response.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Data about all leagues.

##### data

> **data**: `object`

##### data.leagues

> **leagues**: `object` & `object` & `object` & `object`[]

#### See

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getLeagues).

#### Source

[src/interfaces/leagues.ts:20](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/interfaces/leagues.ts#L20)

***

### getSchedule()

`Sealed`

> **getSchedule**(`leagueId`?, `pageToken`?, `locale`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Fetches the schedule for a particular league.

#### Parameters

• **leagueId?**: `string`

The id of the league from which to fetch the schedule.

• **pageToken?**: `string`

Base 64 encoded string used to determine the next "page" of data to pull.

• **locale?**: [`APILocale`](../type-aliases/APILocale.md)= `"en-US"`

The locale of the response.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Data on all tournaments from a specific league.

##### data

> **data**: `object`

##### data.schedule

> **schedule**: `object`

##### data.schedule.events

> **events**: `object` & `object` & `object`[]

##### data.schedule.pages

> **pages**: `object`

##### data.schedule.pages.newer

> **newer**: `null` \| `string`

##### data.schedule.pages.older

> **older**: `null` \| `string`

##### data.schedule.updated

> **updated**: `string`

Format: date-time
 The time the data presented was last updated

#### See

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getSchedule).

#### Source

[src/interfaces/leagues.ts:60](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/interfaces/leagues.ts#L60)

***

### getTournaments()

`Sealed`

> **getTournaments**(`leagueId`?, `locale`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Fetches data on all tournaments from a specific league.

#### Parameters

• **leagueId?**: `string`

The id of the league from which to fetch tournaments information.

• **locale?**: [`APILocale`](../type-aliases/APILocale.md)= `"en-US"`

The locale of the response.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Data on all tournaments from a specific league.

##### data

> **data**: `object`

##### data.leagues

> **leagues**: `object`[]

An array of league object(s) where each object contains an array of
tournaments.

#### See

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getTournamentsForLeague).

#### Source

[src/interfaces/leagues.ts:39](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/interfaces/leagues.ts#L39)
