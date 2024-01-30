[LoL Esports API Wrapper](../README.md) / [Exports](../modules.md) / [internal](../modules/internal.md) / Matches

# Class: Matches

[internal](../modules/internal.md).Matches

Interfaces with all of match related endpoints.

## Hierarchy

- [`Interface`](internal.Interface.md)

  ↳ **`Matches`**

## Table of contents

### Constructors

- [constructor](internal.Matches.md#constructor)

### Properties

- [\_baseURLs](internal.Matches.md#_baseurls)

### Methods

- [\_get](internal.Matches.md#_get)
- [getEvent](internal.Matches.md#getevent)

## Constructors

### constructor

• **new Matches**(): [`Matches`](internal.Matches.md)

#### Returns

[`Matches`](internal.Matches.md)

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

[src/interface.ts:122](https://github.com/Viriatto/lol-esports-api/blob/611afb5/src/interface.ts#L122)

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

[src/interface.ts:150](https://github.com/Viriatto/lol-esports-api/blob/611afb5/src/interface.ts#L150)

___

### getEvent

▸ **getEvent**(`matchId`, `locale?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `event`: \{ `match?`: \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  }  } & \{ `id`: `string` ; `league`: \{ `name`: `string` ; `slug`: `string`  } & \{ `id`: `string` ; `image`: `string`  } ; `match`: \{ `games`: \{ `id`: `string` ; `number`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` ; `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `vods`: \{ `parameter`: `string`  } & \{ `locale`: ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` ; `offset`: `number` ; `provider`: ``"youtube"`` \| ``"twitch"``  }[]  } & \{ `teams`: \{ `id`: `string` ; `side`: ``"blue"`` \| ``"red"``  }[]  }[] ; `strategy`: \{ `count`: ``1`` \| ``3`` \| ``5``  } ; `teams`: \{ `id`: `string` ; `result`: \{ `gameWins`: `number`  }  }[]  } ; `streams`: ``null`` \| \{ `parameter`: `string`  } & \{ `locale`: ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` ; `offset`: `number` ; `provider`: ``"youtube"`` \| ``"twitch"``  }[] ; `type`: ``"match"`` \| ``"show"``  }  }  }\>

Fetches event details for a particular match.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `matchId` | `string` | `undefined` | The id of the match from which pull the event's details. |
| `locale` | [`APILocale`](../modules/internal.md#apilocale) | `"en-US"` | The locale of the response. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `event`: \{ `match?`: \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  }  } & \{ `id`: `string` ; `league`: \{ `name`: `string` ; `slug`: `string`  } & \{ `id`: `string` ; `image`: `string`  } ; `match`: \{ `games`: \{ `id`: `string` ; `number`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` ; `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `vods`: \{ `parameter`: `string`  } & \{ `locale`: ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` ; `offset`: `number` ; `provider`: ``"youtube"`` \| ``"twitch"``  }[]  } & \{ `teams`: \{ `id`: `string` ; `side`: ``"blue"`` \| ``"red"``  }[]  }[] ; `strategy`: \{ `count`: ``1`` \| ``3`` \| ``5``  } ; `teams`: \{ `id`: `string` ; `result`: \{ `gameWins`: `number`  }  }[]  } ; `streams`: ``null`` \| \{ `parameter`: `string`  } & \{ `locale`: ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` ; `offset`: `number` ; `provider`: ``"youtube"`` \| ``"twitch"``  }[] ; `type`: ``"match"`` \| ``"show"``  }  }  }\>

Data on the event details of a particular match.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getGames).

#### Defined in

[src/interfaces/matches.ts:20](https://github.com/Viriatto/lol-esports-api/blob/611afb5/src/interfaces/matches.ts#L20)
