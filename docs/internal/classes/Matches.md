[**LoL Esports API Wrapper**](../../README.md) • **Docs**

***

[LoL Esports API Wrapper](../../globals.md) / [internal](../README.md) / Matches

# Class: Matches

Interfaces with all of match related endpoints.

## Extends

- [`Interface`](Interface.md)

## Constructors

### new Matches()

> **new Matches**(): [`Matches`](Matches.md)

#### Returns

[`Matches`](Matches.md)

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

### getEvent()

`Sealed`

> **getEvent**(`matchId`, `locale`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Fetches event details for a particular match.

#### Parameters

• **matchId**: `string`

The id of the match from which pull the event's details.

• **locale**: [`APILocale`](../type-aliases/APILocale.md)= `"en-US"`

The locale of the response.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Data on the event details of a particular match.

##### data

> **data**: `object`

##### data.event

> **event**: `object` & `object`

###### Type declaration

###### match?

> `optional` **match**: `object`

###### match.teams

> **teams**: `object`[]

###### Type declaration

###### id

> **id**: `string`

###### league

> **league**: `object` & `object`

###### Type declaration

###### name

> **name**: `string`

The name of the league

###### slug

> **slug**: `string`

URL friendly version of the league's name

###### Type declaration

###### id

> **id**: `string`

The league's ID

###### image

> **image**: `string`

URL to an image of the League's logo

###### match

> **match**: `object`

###### match.games

> **games**: `object` & `object`[]

###### match.strategy

> **strategy**: `object`

###### match.strategy.count

> **count**: `1` \| `3` \| `5`

###### match.teams

> **teams**: `object`[]

###### streams

> **streams**: `null` \| `object` & `object`[]

For a live match this will contain information about various streams,
the platforms they are on and the locale.

Otherwise it will be null.

###### type

> **type**: `"match"` \| `"show"`

#### See

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getGames).

#### Source

[src/interfaces/matches.ts:20](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/interfaces/matches.ts#L20)
