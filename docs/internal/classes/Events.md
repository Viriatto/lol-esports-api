[**LoL Esports API Wrapper**](../../README.md) • **Docs**

***

[LoL Esports API Wrapper](../../globals.md) / [internal](../README.md) / Events

# Class: Events

Interfaces with all event related endpoints.

## Extends

- [`Interface`](Interface.md)

## Constructors

### new Events()

> **new Events**(): [`Events`](Events.md)

#### Returns

[`Events`](Events.md)

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

### getLive()

`Sealed`

> **getLive**(`locale`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Fetch data on currently live events.

#### Parameters

• **locale**: [`APILocale`](../type-aliases/APILocale.md)= `"en-US"`

The locale of the response data.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

An object containing data on currently live events.

##### data

> **data**: `object`

##### data.schedule

> **schedule**: `object`

##### data.schedule.events

> **events**: `null` \| `object` & `object` & `object`[]

Array of event objects representing matches that are
currently ongoing.

This will be null if no match is taking place at that
time

#### See

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getLive).

#### Example

```ts
import APIClient from 'lol-esports-api';

const client = new APIClient();
const liveEvents = await client.getLive();

console.log(liveEvents);
```

#### Source

[src/interfaces/events.ts:29](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/interfaces/events.ts#L29)
