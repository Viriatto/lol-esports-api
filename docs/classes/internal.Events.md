[LoL Esports API Wrapper - v0.2.3](../README.md) / [Exports](../modules.md) / [internal](../modules/internal.md) / Events

# Class: Events

[internal](../modules/internal.md).Events

Interfaces with all event related endpoints.

## Hierarchy

- [`Interface`](internal.Interface.md)

  ↳ **`Events`**

## Table of contents

### Constructors

- [constructor](internal.Events.md#constructor)

### Properties

- [\_baseURLs](internal.Events.md#_baseurls)

### Methods

- [\_get](internal.Events.md#_get)
- [getLive](internal.Events.md#getlive)

## Constructors

### constructor

• **new Events**()

#### Inherited from

[Interface](internal.Interface.md).[constructor](internal.Interface.md#constructor)

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

[Interface](internal.Interface.md).[\_baseURLs](internal.Interface.md#_baseurls)

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

#### Inherited from

[Interface](internal.Interface.md).[\_get](internal.Interface.md#_get)

#### Defined in

[src/interface.ts:150](https://github.com/Viriatto/lol-esports-api/blob/2b06612/src/interface.ts#L150)

---

### getLive

▸ **getLive**(`locale?`): `Promise`<{ `data`: { `schedule`: { `events`: `null` \| { `blockName`: `null` \| `string` ; `match`: { `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` }[] } & { `id`: `string` } & { `strategy`: { `count`: `1` \| `3` \| `5` } & { `type`: `"bestOf"` } ; `teams`: { `result`: { `gameWins`: `number` } }[] } ; `startTime`: `string` } & { `state`: `"completed"` \| `"unstarted"` \| `"inProgress"` ; `type`: `"match"` \| `"show"` } & { `id`: `string` ; `league`: { `name`: `string` ; `slug`: `string` } & { `id`: `string` ; `image`: `string` } & { `priority`: `number` } ; `match?`: { `teams`: { `record`: `null` \| { `losses`: `number` ; `wins`: `number` } ; `result`: { `outcome`: `null` \| `"loss"` \| `"win"` } ; `slug`: `string` }[] } }[] } } }\>

Fetch data on currently live events.

#### Parameters

| Name     | Type                                            | Default value | Description                      |
| :------- | :---------------------------------------------- | :------------ | :------------------------------- |
| `locale` | [`APILocale`](../modules/internal.md#apilocale) | `"en-US"`     | The locale of the response data. |

#### Returns

`Promise`<{ `data`: { `schedule`: { `events`: `null` \| { `blockName`: `null` \| `string` ; `match`: { `teams`: { `code`: `string` ; `image`: `string` ; `name`: `string` }[] } & { `id`: `string` } & { `strategy`: { `count`: `1` \| `3` \| `5` } & { `type`: `"bestOf"` } ; `teams`: { `result`: { `gameWins`: `number` } }[] } ; `startTime`: `string` } & { `state`: `"completed"` \| `"unstarted"` \| `"inProgress"` ; `type`: `"match"` \| `"show"` } & { `id`: `string` ; `league`: { `name`: `string` ; `slug`: `string` } & { `id`: `string` ; `image`: `string` } & { `priority`: `number` } ; `match?`: { `teams`: { `record`: `null` \| { `losses`: `number` ; `wins`: `number` } ; `result`: { `outcome`: `null` \| `"loss"` \| `"win"` } ; `slug`: `string` }[] } }[] } } }\>

An object containing data on currently live events.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getLive).

**`Example`**

Log all currently live events.

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();
const liveEvents = await client.getLive();

console.log(liveEvents);
```

#### Defined in

[src/interfaces/events.ts:29](https://github.com/Viriatto/lol-esports-api/blob/2b06612/src/interfaces/events.ts#L29)
