[LoL Esports API Wrapper](../README.md) / [Exports](../modules.md) / [internal](../modules/internal.md) / Leagues

# Class: Leagues

[internal](../modules/internal.md).Leagues

Interfaces with all of league related endpoints.

## Hierarchy

- [`Interface`](internal.Interface.md)

  ↳ **`Leagues`**

## Table of contents

### Constructors

- [constructor](internal.Leagues.md#constructor)

### Properties

- [\_baseURLs](internal.Leagues.md#_baseurls)

### Methods

- [\_get](internal.Leagues.md#_get)
- [get](internal.Leagues.md#get)
- [getSchedule](internal.Leagues.md#getschedule)
- [getTournaments](internal.Leagues.md#gettournaments)

## Constructors

### constructor

• **new Leagues**(): [`Leagues`](internal.Leagues.md)

#### Returns

[`Leagues`](internal.Leagues.md)

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

[src/interface.ts:122](https://github.com/Viriatto/lol-esports-api/blob/1af8582e6d7d153cbc954bcf8865ea1b56690c7e/src/interface.ts#L122)

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

[src/interface.ts:150](https://github.com/Viriatto/lol-esports-api/blob/1af8582e6d7d153cbc954bcf8865ea1b56690c7e/src/interface.ts#L150)

___

### get

▸ **get**(`locale?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `leagues`: \{ `name`: `string` ; `slug`: `string`  } & \{ `id`: `string` ; `image`: `string`  } & \{ `priority`: `number`  } & \{ `region`: `string`  }[]  }  }\>

Fetches data on all leagues.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `locale` | [`APILocale`](../modules/internal.md#apilocale) | `"en-US"` | The locale of the response. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `leagues`: \{ `name`: `string` ; `slug`: `string`  } & \{ `id`: `string` ; `image`: `string`  } & \{ `priority`: `number`  } & \{ `region`: `string`  }[]  }  }\>

Data about all leagues.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getLeagues).

#### Defined in

[src/interfaces/leagues.ts:20](https://github.com/Viriatto/lol-esports-api/blob/1af8582e6d7d153cbc954bcf8865ea1b56690c7e/src/interfaces/leagues.ts#L20)

___

### getSchedule

▸ **getSchedule**(`leagueId?`, `pageToken?`, `locale?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `schedule`: \{ `events`: \{ `blockName`: ``null`` \| `string` ; `match`: \{ `teams`: \{ `code`: ... ; `image`: ... ; `name`: ...  }[]  } & \{ `id`: `string`  } & \{ `strategy`: \{ `count`: ...  } & \{ `type`: ...  } ; `teams`: \{ `result`: ...  }[]  } ; `startTime`: `string`  } & \{ `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `type`: ``"match"`` \| ``"show"``  } & \{ `league`: \{ `name`: `string` ; `slug`: `string`  } ; `match`: \{ `teams`: \{ `record`: ... \| ... ; `result`: \{ `outcome`: ...  }  }[]  }  }[] ; `pages`: \{ `newer`: ``null`` \| `string` ; `older`: ``null`` \| `string`  } ; `updated`: `string`  }  }  }\>

Fetches the schedule for a particular league.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `leagueId?` | `string` | `undefined` | The id of the league from which to fetch the schedule. |
| `pageToken?` | `string` | `undefined` | Base 64 encoded string used to determine the next "page" of data to pull. |
| `locale` | [`APILocale`](../modules/internal.md#apilocale) | `"en-US"` | The locale of the response. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `schedule`: \{ `events`: \{ `blockName`: ``null`` \| `string` ; `match`: \{ `teams`: \{ `code`: ... ; `image`: ... ; `name`: ...  }[]  } & \{ `id`: `string`  } & \{ `strategy`: \{ `count`: ...  } & \{ `type`: ...  } ; `teams`: \{ `result`: ...  }[]  } ; `startTime`: `string`  } & \{ `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `type`: ``"match"`` \| ``"show"``  } & \{ `league`: \{ `name`: `string` ; `slug`: `string`  } ; `match`: \{ `teams`: \{ `record`: ... \| ... ; `result`: \{ `outcome`: ...  }  }[]  }  }[] ; `pages`: \{ `newer`: ``null`` \| `string` ; `older`: ``null`` \| `string`  } ; `updated`: `string`  }  }  }\>

Data on all tournaments from a specific league.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getSchedule).

#### Defined in

[src/interfaces/leagues.ts:60](https://github.com/Viriatto/lol-esports-api/blob/1af8582e6d7d153cbc954bcf8865ea1b56690c7e/src/interfaces/leagues.ts#L60)

___

### getTournaments

▸ **getTournaments**(`leagueId?`, `locale?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `leagues`: \{ `tournaments`: \{ `endDate`: `string` ; `id`: `string` ; `slug`: `string` ; `startDate`: `string`  }[]  }[]  }  }\>

Fetches data on all tournaments from a specific league.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `leagueId?` | `string` | `undefined` | The id of the league from which to fetch tournaments information. |
| `locale` | [`APILocale`](../modules/internal.md#apilocale) | `"en-US"` | The locale of the response. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `leagues`: \{ `tournaments`: \{ `endDate`: `string` ; `id`: `string` ; `slug`: `string` ; `startDate`: `string`  }[]  }[]  }  }\>

Data on all tournaments from a specific league.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getTournamentsForLeague).

#### Defined in

[src/interfaces/leagues.ts:39](https://github.com/Viriatto/lol-esports-api/blob/1af8582e6d7d153cbc954bcf8865ea1b56690c7e/src/interfaces/leagues.ts#L39)
