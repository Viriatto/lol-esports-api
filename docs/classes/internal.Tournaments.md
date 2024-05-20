[LoL Esports API Wrapper](../README.md) / [Exports](../modules.md) / [internal](../modules/internal.md) / Tournaments

# Class: Tournaments

[internal](../modules/internal.md).Tournaments

Interfaces with all of tournaments related endpoints.

## Hierarchy

- [`Interface`](internal.Interface.md)

  ↳ **`Tournaments`**

## Table of contents

### Constructors

- [constructor](internal.Tournaments.md#constructor)

### Properties

- [\_baseURLs](internal.Tournaments.md#_baseurls)

### Methods

- [\_get](internal.Tournaments.md#_get)
- [getCompletedEvents](internal.Tournaments.md#getcompletedevents)
- [getStandings](internal.Tournaments.md#getstandings)

## Constructors

### constructor

• **new Tournaments**(): [`Tournaments`](internal.Tournaments.md)

#### Returns

[`Tournaments`](internal.Tournaments.md)

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

### getCompletedEvents

▸ **getCompletedEvents**(`tournamentId?`, `locale?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `schedule`: \{ `events`: \{ `blockName`: ``null`` \| `string` ; `match`: \{ `teams`: \{ `code`: ... ; `image`: ... ; `name`: ...  }[]  } & \{ `id`: `string`  } & \{ `strategy`: \{ `count`: ...  } & \{ `type`: ...  } ; `teams`: \{ `result`: ...  }[]  } ; `startTime`: `string`  } & \{ `games`: \{ `vods`: \{ `parameter`: ...  }[]  }[] ; `match`: \{ `type`: ``"normal"``  }  }[]  }  }  }\>

Fetches data for completed events of all tournaments, a particular tournament, or a set of tournaments.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tournamentId?` | `string` | `undefined` | The id of the tournament from which to pull completed event data. |
| `locale` | [`APILocale`](../modules/internal.md#apilocale) | `"en-US"` | The locale of the response. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `schedule`: \{ `events`: \{ `blockName`: ``null`` \| `string` ; `match`: \{ `teams`: \{ `code`: ... ; `image`: ... ; `name`: ...  }[]  } & \{ `id`: `string`  } & \{ `strategy`: \{ `count`: ...  } & \{ `type`: ...  } ; `teams`: \{ `result`: ...  }[]  } ; `startTime`: `string`  } & \{ `games`: \{ `vods`: \{ `parameter`: ...  }[]  }[] ; `match`: \{ `type`: ``"normal"``  }  }[]  }  }  }\>

Data on the completed events of the tournament.

**`Remarks`**

If `tournamentIdOrIds` is `undefined`, pulls data for all tournaments.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getCompletedEvents).

#### Defined in

[src/interfaces/tournaments.ts:24](https://github.com/Viriatto/lol-esports-api/blob/1af8582e6d7d153cbc954bcf8865ea1b56690c7e/src/interfaces/tournaments.ts#L24)

___

### getStandings

▸ **getStandings**(`tournamentId`, `locale?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `standings`: \{ `stages`: \{ `name`: `string` ; `sections`: \{ `matches`: ... & ... & ...[] ; `name`: `string` ; `rankings`: \{ `ordinal`: ... ; `teams`: ...  }[]  }[] ; `slug`: `string` ; `type`: ``"groups"`` \| ``"bracket"``  }[]  }[]  }  }\>

Fetches data for the standings of a particular tournament or tournaments.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tournamentId` | `string` | `undefined` | The id of the tournament from which to pull standings data. |
| `locale` | [`APILocale`](../modules/internal.md#apilocale) | `"en-US"` | The locale of the response. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: \{ `standings`: \{ `stages`: \{ `name`: `string` ; `sections`: \{ `matches`: ... & ... & ...[] ; `name`: `string` ; `rankings`: \{ `ordinal`: ... ; `teams`: ...  }[]  }[] ; `slug`: `string` ; `type`: ``"groups"`` \| ``"bracket"``  }[]  }[]  }  }\>

Data on the completed events of a particular tournament.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getCompletedEvents).

#### Defined in

[src/interfaces/tournaments.ts:47](https://github.com/Viriatto/lol-esports-api/blob/1af8582e6d7d153cbc954bcf8865ea1b56690c7e/src/interfaces/tournaments.ts#L47)
