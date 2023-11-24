[LoL Esports API Wrapper](../README.md) / [Exports](../modules.md) / [internal](../modules/internal.md) / Games

# Class: Games

[internal](../modules/internal.md).Games

Interfaces with all of game related endpoints.

## Hierarchy

- [`Interface`](internal.Interface.md)

  ↳ **`Games`**

## Table of contents

### Constructors

- [constructor](internal.Games.md#constructor)

### Properties

- [\_baseURLs](internal.Games.md#_baseurls)

### Methods

- [\_get](internal.Games.md#_get)
- [get](internal.Games.md#get)
- [getDetails](internal.Games.md#getdetails)
- [getWindow](internal.Games.md#getwindow)

## Constructors

### constructor

• **new Games**(): [`Games`](internal.Games.md)

#### Returns

[`Games`](internal.Games.md)

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

[src/interface.ts:122](https://github.com/Viriatto/lol-esports-api/blob/f62e77f/src/interface.ts#L122)

## Methods

### \_get

▸ **_get**\<`T`\>(`baseURLs`, `endpoint`, `params`): `Promise`\<[`APIResponse`](../modules/internal.md#apiresponse)\<`T`\>\>

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

`Promise`\<[`APIResponse`](../modules/internal.md#apiresponse)\<`T`\>\>

Data for the specified resource.

**`Remarks`**

Recursively tries to request each of the base URLs in [Interface._baseURLs](internal.Leagues.md#_baseurls) if the previous one has failed to yield a successful response.

**`Throws`**

Error
When [Interface._baseURLs](internal.Leagues.md#_baseurls) is undefined.

**`Throws`**

Error
When it can't get a successfuly response from any of the endpoints built from [Interface._baseURLs](internal.Leagues.md#_baseurls).

#### Inherited from

[Interface](internal.Interface.md).[_get](internal.Interface.md#_get)

#### Defined in

[src/interface.ts:150](https://github.com/Viriatto/lol-esports-api/blob/f62e77f/src/interface.ts#L150)

___

### get

▸ **get**(`gameId`, `locale?`): `Promise`\<\{ `data`: \{ `games`: \{ `id`: `string` ; `number`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` ; `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `vods`: \{ `parameter`: `string`  } & \{ `locale`: ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` ; `offset`: `number` ; `provider`: ``"youtube"`` \| ``"twitch"``  }[]  }[]  }  }\>

Fetches data for a game or games.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `gameId` | `string` | `undefined` | The id of the game to fetch. |
| `locale` | [`APILocale`](../modules/internal.md#apilocale) | `"en-US"` | The locale of the response. |

#### Returns

`Promise`\<\{ `data`: \{ `games`: \{ `id`: `string` ; `number`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` ; `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `vods`: \{ `parameter`: `string`  } & \{ `locale`: ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` ; `offset`: `number` ; `provider`: ``"youtube"`` \| ``"twitch"``  }[]  }[]  }  }\>

Data about the games.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getGames).

#### Defined in

[src/interfaces/games.ts:21](https://github.com/Viriatto/lol-esports-api/blob/f62e77f/src/interfaces/games.ts#L21)

___

### getDetails

▸ **getDetails**(`gameId`, `startingAt`, `participantIdsOrIds?`): `Promise`\<\{ `frames`: \{ `rfc460Timestamp`: `string`  } & \{ `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  } & \{ `abilities`: ``"Q"`` \| ``"W"`` \| ``"E"`` \| ``"R"`` ; `abilityPower`: `number` ; `armor`: `number` ; `attackDamage`: `number` ; `attackSpeed`: `number` ; `championDamageShare`: `number` ; `criticalChance`: `number` ; `items`: `number`[] ; `killParticipation`: `number` ; `lifeSteal`: `number` ; `magicResistance`: `number` ; `perkMetadata`: \{ `perks`: `number`[] ; `styleId`: ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400`` ; `subStyleId`: ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400``  } ; `tenacity`: `number` ; `totalGoldEarned`: `number` ; `wardsDestroyed`: `number` ; `wardsPlaced`: `number`  }[]  }[]  }\>

Fetches detailed information for a particular section of a game, such as participants' champion stats and ability level up sequence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameId` | `string` | The game id from which to fetch data. |
| `startingAt` | `string` \| `Date` | The starting date of the segment to fetch from the game. If it is later than the end date of the game, retrieves the last 10 frames. |
| `participantIdsOrIds?` | `number` \| [`number`, ...number[]] | The ids of the participants from which to fetch data. |

#### Returns

`Promise`\<\{ `frames`: \{ `rfc460Timestamp`: `string`  } & \{ `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  } & \{ `abilities`: ``"Q"`` \| ``"W"`` \| ``"E"`` \| ``"R"`` ; `abilityPower`: `number` ; `armor`: `number` ; `attackDamage`: `number` ; `attackSpeed`: `number` ; `championDamageShare`: `number` ; `criticalChance`: `number` ; `items`: `number`[] ; `killParticipation`: `number` ; `lifeSteal`: `number` ; `magicResistance`: `number` ; `perkMetadata`: \{ `perks`: `number`[] ; `styleId`: ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400`` ; `subStyleId`: ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400``  } ; `tenacity`: `number` ; `totalGoldEarned`: `number` ; `wardsDestroyed`: `number` ; `wardsPlaced`: `number`  }[]  }[]  }\>

**`Remarks`**

The response's data contains a `frames` array property which includes "snapshots" of game states for a time span of 10 seconds.

**`Example`**

Log the details on the last 10 frames
```ts
import APIClient from 'lol-esports-api';

const client = new APIClient();
const liveEvents = await client.getLive();

console.log(liveEvents);
```

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getDetails).

#### Defined in

[src/interfaces/games.ts:84](https://github.com/Viriatto/lol-esports-api/blob/f62e77f/src/interfaces/games.ts#L84)

___

### getWindow

▸ **getWindow**(`gameId`, `startingAt?`): `Promise`\<\{ `esportsGameId`: `string` ; `esportsMatchId`: `string` ; `frames`: \{ `rfc460Timestamp`: `string`  } & \{ `blueTeam`: \{ `barons`: `number` ; `dragons`: (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] ; `inhibitors`: `number` ; `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] ; `totalGold`: `number` ; `totalKills`: `number` ; `towers`: `number`  } ; `gameState`: ``"in_game"`` \| ``"finished"`` ; `redTeam`: \{ `barons`: `number` ; `dragons`: (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] ; `inhibitors`: `number` ; `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] ; `totalGold`: `number` ; `totalKills`: `number` ; `towers`: `number`  } ; `rfc460Timestamp`: `string`  }[] ; `gameMetadata`: \{ `blueTeamMetadata`: \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  } ; `patchVersion`: `string` ; `redTeamMetadata`: \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  }  }  }\>

Fetches overall information for a particular section of a game, such as game state, objectives taken and participants scoreboard information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameId` | `string` | - |
| `startingAt?` | `string` \| `Date` | The starting date of the segment to fetch from the game. If it is later than the end date of the game, retrieves the last 10 frames. If `undefined`, returns the first 10 frames of the game. |

#### Returns

`Promise`\<\{ `esportsGameId`: `string` ; `esportsMatchId`: `string` ; `frames`: \{ `rfc460Timestamp`: `string`  } & \{ `blueTeam`: \{ `barons`: `number` ; `dragons`: (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] ; `inhibitors`: `number` ; `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] ; `totalGold`: `number` ; `totalKills`: `number` ; `towers`: `number`  } ; `gameState`: ``"in_game"`` \| ``"finished"`` ; `redTeam`: \{ `barons`: `number` ; `dragons`: (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] ; `inhibitors`: `number` ; `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] ; `totalGold`: `number` ; `totalKills`: `number` ; `towers`: `number`  } ; `rfc460Timestamp`: `string`  }[] ; `gameMetadata`: \{ `blueTeamMetadata`: \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  } ; `patchVersion`: `string` ; `redTeamMetadata`: \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  }  }  }\>

Data on a segment of the game.

**`Remarks`**

The response's data contains a `frames` array property which includes "snapshots" of game states for a time span of 10 seconds.

**`See`**

[vickz84259's endpoint documentation](https://vickz84259.github.io/lolesports-api-docs/#operation/getGames).

#### Defined in

[src/interfaces/games.ts:44](https://github.com/Viriatto/lol-esports-api/blob/f62e77f/src/interfaces/games.ts#L44)
