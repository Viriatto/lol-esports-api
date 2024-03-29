[LoL Esports API Wrapper](../README.md) / [Exports](../modules.md) / [internal](../modules/internal.md) / components

# Interface: components

[internal](../modules/internal.md).components

## Table of contents

### Properties

- [headers](internal.components.md#headers)
- [parameters](internal.components.md#parameters)
- [pathItems](internal.components.md#pathitems)
- [requestBodies](internal.components.md#requestbodies)
- [responses](internal.components.md#responses)
- [schemas](internal.components.md#schemas)

## Properties

### headers

• **headers**: `never`

#### Defined in

[src/api-types.ts:1132](https://github.com/Viriatto/lol-esports-api/blob/611afb5/src/api-types.ts#L1132)

___

### parameters

• **parameters**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameIds?` | `string`[] | The game Id(s). You can input more than one game Id(s). |
| `highlanderLeagueId` | `string` | The id of the league you want details of |
| `highlanderTournamentId` | `string` | The tournament ID. |
| `hl` | ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` | - |
| `id` | `string` | The id of the match that you want |
| `league` | `string` | The id of the league you want details of |
| `leagueId?` | `string` | The id of the league you want details of |
| `leagueIds?` | `string`[] | The id(s) of the league(s) you want details of |
| `pageToken?` | `string` | Base 64 encoded string used to determine the next "page" of data to pull |
| `pathGameId` | `string` | The game id of the match |
| `playerSlug` | `string` | The player slug. |
| `startingTime?` | `string` | The date-time (RFC3339) |
| `teamSlug` | `string` | The team slug. |
| `teamSlugs?` | `string`[] | The team slug(s). You can input more than one slug. |
| `tournamentIds?` | `string`[] | The id(s) of the tournament(s) you want details ofs |

#### Defined in

[src/api-types.ts:1089](https://github.com/Viriatto/lol-esports-api/blob/611afb5/src/api-types.ts#L1089)

___

### pathItems

• **pathItems**: `never`

#### Defined in

[src/api-types.ts:1133](https://github.com/Viriatto/lol-esports-api/blob/611afb5/src/api-types.ts#L1133)

___

### requestBodies

• **requestBodies**: `never`

#### Defined in

[src/api-types.ts:1131](https://github.com/Viriatto/lol-esports-api/blob/611afb5/src/api-types.ts#L1131)

___

### responses

• **responses**: `never`

#### Defined in

[src/api-types.ts:1088](https://github.com/Viriatto/lol-esports-api/blob/611afb5/src/api-types.ts#L1088)

___

### schemas

• **schemas**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `abilities` | ``"Q"`` \| ``"W"`` \| ``"E"`` \| ``"R"`` | Contains the abilities the summoner levelled up at each level |
| `baseEvent` | \{ `match?`: \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  }  } | - |
| `baseEvent.match?` | \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  } | - |
| `baseEvent.match.teams` | \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[] | - |
| `baseFrame` | \{ `rfc460Timestamp`: `string`  } | - |
| `baseFrame.rfc460Timestamp` | `string` | Format: date-time |
| `baseLeague` | \{ `name`: `string` ; `slug`: `string`  } | - |
| `baseLeague.name` | `string` | The name of the league |
| `baseLeague.slug` | `string` | URL friendly version of the league's name |
| `baseMatch` | \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  } | - |
| `baseMatch.teams` | \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[] | - |
| `baseParticipantStats` | \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } | - |
| `baseParticipantStats.assists` | `number` | - |
| `baseParticipantStats.creepScore` | `number` | - |
| `baseParticipantStats.deaths` | `number` | - |
| `baseParticipantStats.kills` | `number` | - |
| `baseParticipantStats.level` | `number` | - |
| `baseParticipantStats.participantId` | ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` | - |
| `baseScheduleItem` | \{ `id`: `string` ; `league`: `string` ; `scheduledTime`: `string` ; `tags`: \{ `blockLabel`: `string` ; `blockPrefix?`: `string` ; `leagueLabel`: `string` ; `stageLabel?`: `string` ; `subBlockLabel`: `string` ; `subBlockPrefix`: `string` ; `tournamentLabel`: `string` ; `yearLabel?`: `string`  } ; `tournament`: `string`  } | - |
| `baseScheduleItem.id` | `string` | The schedule item ID. |
| `baseScheduleItem.league` | `string` | The League ID |
| `baseScheduleItem.scheduledTime` | `string` | Format: date-time The time the match/event is/was scheduled to start. |
| `baseScheduleItem.tags` | \{ `blockLabel`: `string` ; `blockPrefix?`: `string` ; `leagueLabel`: `string` ; `stageLabel?`: `string` ; `subBlockLabel`: `string` ; `subBlockPrefix`: `string` ; `tournamentLabel`: `string` ; `yearLabel?`: `string`  } | - |
| `baseScheduleItem.tags.blockLabel` | `string` | - |
| `baseScheduleItem.tags.blockPrefix?` | `string` | - |
| `baseScheduleItem.tags.leagueLabel` | `string` | - |
| `baseScheduleItem.tags.stageLabel?` | `string` | Contains the tournament and bracket Ids the match/event belongs to. |
| `baseScheduleItem.tags.subBlockLabel` | `string` | - |
| `baseScheduleItem.tags.subBlockPrefix` | `string` | - |
| `baseScheduleItem.tags.tournamentLabel` | `string` | Contains the tournament ID. |
| `baseScheduleItem.tags.yearLabel?` | `string` | - |
| `baseScheduleItem.tournament` | `string` | The tournament ID |
| `baseStrategy` | \{ `count`: ``1`` \| ``3`` \| ``5``  } | - |
| `baseStrategy.count` | ``1`` \| ``3`` \| ``5`` | - |
| `bracketType` | \{ `identifier`: ``"bestOf"`` \| ``"round_robin"`` \| ``"single_elim"`` \| ``"gauntlet"`` ; `options?`: \{ `rounds`: `string`  }  } | - |
| `bracketType.identifier` | ``"bestOf"`` \| ``"round_robin"`` \| ``"single_elim"`` \| ``"gauntlet"`` | - |
| `bracketType.options?` | \{ `rounds`: `string`  } | - |
| `bracketType.options.rounds` | `string` | - |
| `brackets` | \{ `[key: string]`: \{ `bracketType?`: [`components`](internal.components.md)[``"schemas"``][``"bracketType"``] ; `canManufacture`: `boolean` ; `gameMode?`: [`components`](internal.components.md)[``"schemas"``][``"gameMode"``] ; `groupName?`: `string` ; `groupPosition`: `number` ; `id`: `string` ; `inheritableMatchScoringStrategy?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `input?`: [`components`](internal.components.md)[``"schemas"``][``"simpleRoster"``] & \{ `breakpoint?`: `string` ; `standing?`: `number`  }[] ; `matchScores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `matchScoring?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `matchType?`: [`components`](internal.components.md)[``"schemas"``][``"matchType"``] ; `matches`: \{ `[key: string]`: [`components`](internal.components.md)[``"schemas"``][``"highlanderMatch"``];  } ; `name`: `string` ; `position`: `number` ; `roles`: [`components`](internal.components.md)[``"schemas"``][``"roles"``] ; `scores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `scoring?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `standings?`: [`components`](internal.components.md)[``"schemas"``][``"standings"``] ; `state`: ``"resolved"`` \| ``"unresolved"`` \| ``"unlinked"``  };  } | The keys to this object are [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the bracket ID. |
| `breakpoints` | \{ `[key: string]`: \{ `generator`: \{ `identifier?`: ``"noop"``  } ; `id`: `string` ; `input`: [`components`](internal.components.md)[``"schemas"``][``"simpleRoster"``] & \{ `bracket?`: `string` ; `standing?`: `number`  }[] ; `name`: `string` ; `position`: `number` ; `roles`: [`components`](internal.components.md)[``"schemas"``][``"roles"``] ; `scores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `standings?`: [`components`](internal.components.md)[``"schemas"``][``"standings"``]  };  } | The keys to this object are [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the roster ID. |
| `customTeam` | \{ `id`: `string` ; `side`: ``"blue"`` \| ``"red"``  } | - |
| `customTeam.id` | `string` | - |
| `customTeam.side` | ``"blue"`` \| ``"red"`` | - |
| `detailsFrame` | \{ `rfc460Timestamp`: `string`  } & \{ `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  } & \{ `abilities`: ``"Q"`` \| ``"W"`` \| ``"E"`` \| ``"R"`` ; `abilityPower`: `number` ; `armor`: `number` ; `attackDamage`: `number` ; `attackSpeed`: `number` ; `championDamageShare`: `number` ; `criticalChance`: `number` ; `items`: `number`[] ; `killParticipation`: `number` ; `lifeSteal`: `number` ; `magicResistance`: `number` ; `perkMetadata`: \{ `perks`: `number`[] ; `styleId`: ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400`` ; `subStyleId`: ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400``  } ; `tenacity`: `number` ; `totalGoldEarned`: `number` ; `wardsDestroyed`: `number` ; `wardsPlaced`: `number`  }[]  } | - |
| `eventScheduleItem` | \{ `id`: `string` ; `league`: `string` ; `scheduledTime`: `string` ; `tags`: \{ `blockLabel`: `string` ; `blockPrefix?`: `string` ; `leagueLabel`: `string` ; `stageLabel?`: `string` ; `subBlockLabel`: `string` ; `subBlockPrefix`: `string` ; `tournamentLabel`: `string` ; `yearLabel?`: `string`  } ; `tournament`: `string`  } & \{ `content`: `string`  } | - |
| `eventType` | ``"match"`` \| ``"show"`` | - |
| `extendedEvent` | \{ `blockName`: ``null`` \| `string` ; `match`: \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  } & \{ `id`: `string`  } & \{ `strategy`: \{ `count`: ``1`` \| ``3`` \| ``5``  } & \{ `type`: ``"bestOf"``  } ; `teams`: \{ `result`: \{ `gameWins`: `number`  }  }[]  } ; `startTime`: `string`  } & \{ `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `type`: ``"match"`` \| ``"show"``  } | - |
| `extendedGame` | \{ `id`: `string` ; `number`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` ; `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `vods`: \{ `parameter`: `string`  } & \{ `locale`: ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` ; `offset`: `number` ; `provider`: ``"youtube"`` \| ``"twitch"``  }[]  } & \{ `teams`: \{ `id`: `string` ; `side`: ``"blue"`` \| ``"red"``  }[]  } | - |
| `extendedLeague` | \{ `name`: `string` ; `slug`: `string`  } & \{ `id`: `string` ; `image`: `string`  } & \{ `priority`: `number`  } | - |
| `extendedParticipantStats` | \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  } & \{ `abilities`: ``"Q"`` \| ``"W"`` \| ``"E"`` \| ``"R"`` ; `abilityPower`: `number` ; `armor`: `number` ; `attackDamage`: `number` ; `attackSpeed`: `number` ; `championDamageShare`: `number` ; `criticalChance`: `number` ; `items`: `number`[] ; `killParticipation`: `number` ; `lifeSteal`: `number` ; `magicResistance`: `number` ; `perkMetadata`: \{ `perks`: `number`[] ; `styleId`: ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400`` ; `subStyleId`: ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400``  } ; `tenacity`: `number` ; `totalGoldEarned`: `number` ; `wardsDestroyed`: `number` ; `wardsPlaced`: `number`  } | - |
| `extendedTeam` | \{ `code`: `string` ; `image`: `string` ; `name`: `string`  } & \{ `alternativeImage`: `string` ; `homeLeague`: \{ `name`: `string` ; `region`: `string`  } ; `id`: `string` ; `players`: \{ `firstName`: `string` ; `id`: `string` ; `image`: `string` ; `lastName`: `string` ; `role`: `string` ; `summonerName`: `string`  }[] ; `slug`: `string`  } | - |
| `extendedVod` | \{ `parameter`: `string`  } & \{ `locale`: ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` ; `offset`: `number` ; `provider`: ``"youtube"`` \| ``"twitch"``  } | - |
| `foreignIds` | \{ `drupalId?`: `string`  } | - |
| `foreignIds.drupalId?` | `string` | - |
| `game` | \{ `vods`: \{ `parameter`: `string`  }[]  } | - |
| `game.vods` | \{ `parameter`: `string`  }[] | - |
| `gameId` | `string` | The game Id of the match. It is a [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) |
| `gameMetadata` | \{ `blueTeamMetadata`: \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  } ; `patchVersion`: `string` ; `redTeamMetadata`: \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  }  } | - |
| `gameMetadata.blueTeamMetadata` | \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  } | - |
| `gameMetadata.blueTeamMetadata.esportsTeamId` | `string` | The team Id |
| `gameMetadata.blueTeamMetadata.participantMetadata` | (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[] | - |
| `gameMetadata.patchVersion` | `string` | The patch the match was played on |
| `gameMetadata.redTeamMetadata` | \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  } | - |
| `gameMetadata.redTeamMetadata.esportsTeamId` | `string` | The team Id |
| `gameMetadata.redTeamMetadata.participantMetadata` | (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[] | - |
| `gameMode` | \{ `identifier`: ``"lol:duel"`` \| ``"lol:classic"`` ; `mapName`: ``"summoner_rift"`` \| ``"howling_abyss"`` ; `requiredPlayers`: ``1`` \| ``5``  } | - |
| `gameMode.identifier` | ``"lol:duel"`` \| ``"lol:classic"`` | - |
| `gameMode.mapName` | ``"summoner_rift"`` \| ``"howling_abyss"`` | - |
| `gameMode.requiredPlayers` | ``1`` \| ``5`` | - |
| `highlanderGame` | \{ `gameId?`: `string` ; `gameMode?`: \{ `identifier`: ``"lol:duel"`` \| ``"lol:classic"`` ; `mapName`: ``"summoner_rift"`` \| ``"howling_abyss"`` ; `requiredPlayers`: ``1`` \| ``5``  } ; `gameRealm?`: `string` ; `generatedName`: `string` ; `id`: `string` ; `input`: \{ `roster?`: `string`  } & [`Without`](../modules/internal.md#without)\<\{ `match?`: `string`  }, \{ `breakpoint?`: `string`  }\> & \{ `breakpoint?`: `string`  } \| [`Without`](../modules/internal.md#without)\<\{ `breakpoint?`: `string`  }, \{ `match?`: `string`  }\> & \{ `match?`: `string`  } & \{ `standing?`: `number`  }[] ; `name`: `string` ; `platformId?`: `string` ; `revision`: `number` ; `roles`: \{ `creator`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] ; `owner`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[]  } ; `scores`: \{ `[key: string]`: `number`;  } ; `standings?`: \{ `closed`: `boolean` ; `history?`: \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] ; `note?`: `string` ; `result`: \{ `roster?`: `string`  }[][] ; `source?`: ``"bestOf"`` \| ``"manual"`` ; `timestamp`: `number`  } ; `state?`: ``"remade"``  } | - |
| `highlanderGame.gameId?` | `string` | The numeric version of the game ID This is what is used to access the ACS endpoint. |
| `highlanderGame.gameMode?` | \{ `identifier`: ``"lol:duel"`` \| ``"lol:classic"`` ; `mapName`: ``"summoner_rift"`` \| ``"howling_abyss"`` ; `requiredPlayers`: ``1`` \| ``5``  } | - |
| `highlanderGame.gameMode.identifier` | ``"lol:duel"`` \| ``"lol:classic"`` | - |
| `highlanderGame.gameMode.mapName` | ``"summoner_rift"`` \| ``"howling_abyss"`` | - |
| `highlanderGame.gameMode.requiredPlayers` | ``1`` \| ``5`` | - |
| `highlanderGame.gameRealm?` | `string` | The ID of the tournament realm on which the game was played on |
| `highlanderGame.generatedName` | `string` | - |
| `highlanderGame.id` | `string` | - |
| `highlanderGame.input` | \{ `roster?`: `string`  } & [`Without`](../modules/internal.md#without)\<\{ `match?`: `string`  }, \{ `breakpoint?`: `string`  }\> & \{ `breakpoint?`: `string`  } \| [`Without`](../modules/internal.md#without)\<\{ `breakpoint?`: `string`  }, \{ `match?`: `string`  }\> & \{ `match?`: `string`  } & \{ `standing?`: `number`  }[] | - |
| `highlanderGame.name` | `string` | - |
| `highlanderGame.platformId?` | `string` | A combination of the gameRealm and the gameId |
| `highlanderGame.revision` | `number` | - |
| `highlanderGame.roles` | \{ `creator`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] ; `owner`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[]  } | - |
| `highlanderGame.roles.creator` | \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] | - |
| `highlanderGame.roles.owner` | \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] | - |
| `highlanderGame.scores` | \{ `[key: string]`: `number`;  } | - |
| `highlanderGame.standings?` | \{ `closed`: `boolean` ; `history?`: \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] ; `note?`: `string` ; `result`: \{ `roster?`: `string`  }[][] ; `source?`: ``"bestOf"`` \| ``"manual"`` ; `timestamp`: `number`  } | - |
| `highlanderGame.standings.closed` | `boolean` | If the value is true then the league/tournament has concluded, otherwise it is ongoing. |
| `highlanderGame.standings.history?` | \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] | - |
| `highlanderGame.standings.note?` | `string` | - |
| `highlanderGame.standings.result` | \{ `roster?`: `string`  }[][] | - |
| `highlanderGame.standings.source?` | ``"bestOf"`` \| ``"manual"`` | How the record was created/updated. |
| `highlanderGame.standings.timestamp` | `number` | Format: int64 Unix timestamp in milliseconds of when the match started. |
| `highlanderGame.state?` | ``"remade"`` | - |
| `highlanderLeague` | \{ `name`: `string` ; `slug`: `string`  } & \{ `abouts`: \{ `[key: string]`: `string`;  } ; `createdAt`: `string` ; `drupalId`: ``null`` \| `number` ; `guid`: `string` ; `id`: `number` ; `logoUrl`: `string` ; `names`: \{ `[key: string]`: `string`;  } ; `region`: `string` ; `tournaments?`: `string`[] ; `updatedAt`: `string`  } | - |
| `highlanderMatch` | \{ `gameMode?`: \{ `identifier`: ``"lol:duel"`` \| ``"lol:classic"`` ; `mapName`: ``"summoner_rift"`` \| ``"howling_abyss"`` ; `requiredPlayers`: ``1`` \| ``5``  } ; `games`: \{ `[key: string]`: [`components`](internal.components.md)[``"schemas"``][``"highlanderGame"``];  } ; `groupPosition`: `number` ; `id`: `string` ; `input`: \{ `roster?`: `string`  } & [`Without`](../modules/internal.md#without)\<\{ `match?`: `string`  }, \{ `breakpoint?`: `string`  }\> & \{ `breakpoint?`: `string`  } \| [`Without`](../modules/internal.md#without)\<\{ `breakpoint?`: `string`  }, \{ `match?`: `string`  }\> & \{ `match?`: `string`  } & \{ `standing?`: `number`  }[] ; `matchType?`: \{ `identifier`: ``"bestOf"`` \| ``"single_elim"`` ; `options?`: \{ `best_of`: `string`  }  } ; `name`: `string` ; `position`: `number` ; `remadeGames`: \{ `gameId?`: `string` ; `gameMode?`: \{ `identifier`: ``"lol:duel"`` \| ``"lol:classic"`` ; `mapName`: ``"summoner_rift"`` \| ``"howling_abyss"`` ; `requiredPlayers`: ``1`` \| ``5``  } ; `gameRealm?`: `string` ; `generatedName`: `string` ; `id`: `string` ; `input`: \{ `roster?`: `string`  } & [`Without`](../modules/internal.md#without)\<\{ `match?`: `string`  }, \{ `breakpoint?`: `string`  }\> & \{ `breakpoint?`: `string`  } \| [`Without`](../modules/internal.md#without)\<\{ `breakpoint?`: `string`  }, \{ `match?`: `string`  }\> & \{ `match?`: `string`  } & \{ `standing?`: `number`  }[] ; `name`: `string` ; `platformId?`: `string` ; `revision`: `number` ; `roles`: \{ `creator`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] ; `owner`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[]  } ; `scores`: \{ `[key: string]`: `number`;  } ; `standings?`: \{ `closed`: `boolean` ; `history?`: \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] ; `note?`: `string` ; `result`: \{ `roster?`: `string`  }[][] ; `source?`: ``"bestOf"`` \| ``"manual"`` ; `timestamp`: `number`  } ; `state?`: ``"remade"``  }[] ; `roles`: \{ `creator`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] ; `owner`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[]  } ; `scores`: \{ `[key: string]`: `number`;  } ; `scoring?`: \{ `identifier`: ``"standard"`` \| ``"LegacyScoringStrategy"`` ; `options`: \{ `points`: `number`[]  }  } ; `standings?`: \{ `closed`: `boolean` ; `history?`: \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] ; `note?`: `string` ; `result`: \{ `roster?`: `string`  }[][] ; `source?`: ``"bestOf"`` \| ``"manual"`` ; `timestamp`: `number`  } ; `state`: ``"resolved"`` \| ``"unresolved"`` \| ``"unlinked"`` ; `tiebreaker`: `boolean`  } | - |
| `highlanderMatch.gameMode?` | \{ `identifier`: ``"lol:duel"`` \| ``"lol:classic"`` ; `mapName`: ``"summoner_rift"`` \| ``"howling_abyss"`` ; `requiredPlayers`: ``1`` \| ``5``  } | - |
| `highlanderMatch.gameMode.identifier` | ``"lol:duel"`` \| ``"lol:classic"`` | - |
| `highlanderMatch.gameMode.mapName` | ``"summoner_rift"`` \| ``"howling_abyss"`` | - |
| `highlanderMatch.gameMode.requiredPlayers` | ``1`` \| ``5`` | - |
| `highlanderMatch.games` | \{ `[key: string]`: [`components`](internal.components.md)[``"schemas"``][``"highlanderGame"``];  } | The keys to this object are [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the game ID. These are the games played in that series. The number of properties(key and value pair) in this object will be equal to the type of series that was played. For a best of 1 there will be only 1 game, 3 for best of 3s and 5 for best of 5s. |
| `highlanderMatch.groupPosition` | `number` | - |
| `highlanderMatch.id` | `string` | The match ID |
| `highlanderMatch.input` | \{ `roster?`: `string`  } & [`Without`](../modules/internal.md#without)\<\{ `match?`: `string`  }, \{ `breakpoint?`: `string`  }\> & \{ `breakpoint?`: `string`  } \| [`Without`](../modules/internal.md#without)\<\{ `breakpoint?`: `string`  }, \{ `match?`: `string`  }\> & \{ `match?`: `string`  } & \{ `standing?`: `number`  }[] | - |
| `highlanderMatch.matchType?` | \{ `identifier`: ``"bestOf"`` \| ``"single_elim"`` ; `options?`: \{ `best_of`: `string`  }  } | - |
| `highlanderMatch.matchType.identifier` | ``"bestOf"`` \| ``"single_elim"`` | - |
| `highlanderMatch.matchType.options?` | \{ `best_of`: `string`  } | - |
| `highlanderMatch.matchType.options.best_of` | `string` | - |
| `highlanderMatch.name` | `string` | - |
| `highlanderMatch.position` | `number` | - |
| `highlanderMatch.remadeGames` | \{ `gameId?`: `string` ; `gameMode?`: \{ `identifier`: ``"lol:duel"`` \| ``"lol:classic"`` ; `mapName`: ``"summoner_rift"`` \| ``"howling_abyss"`` ; `requiredPlayers`: ``1`` \| ``5``  } ; `gameRealm?`: `string` ; `generatedName`: `string` ; `id`: `string` ; `input`: \{ `roster?`: `string`  } & [`Without`](../modules/internal.md#without)\<\{ `match?`: `string`  }, \{ `breakpoint?`: `string`  }\> & \{ `breakpoint?`: `string`  } \| [`Without`](../modules/internal.md#without)\<\{ `breakpoint?`: `string`  }, \{ `match?`: `string`  }\> & \{ `match?`: `string`  } & \{ `standing?`: `number`  }[] ; `name`: `string` ; `platformId?`: `string` ; `revision`: `number` ; `roles`: \{ `creator`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] ; `owner`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[]  } ; `scores`: \{ `[key: string]`: `number`;  } ; `standings?`: \{ `closed`: `boolean` ; `history?`: \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] ; `note?`: `string` ; `result`: \{ `roster?`: `string`  }[][] ; `source?`: ``"bestOf"`` \| ``"manual"`` ; `timestamp`: `number`  } ; `state?`: ``"remade"``  }[] | - |
| `highlanderMatch.roles` | \{ `creator`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] ; `owner`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[]  } | - |
| `highlanderMatch.roles.creator` | \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] | - |
| `highlanderMatch.roles.owner` | \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] | - |
| `highlanderMatch.scores` | \{ `[key: string]`: `number`;  } | - |
| `highlanderMatch.scoring?` | \{ `identifier`: ``"standard"`` \| ``"LegacyScoringStrategy"`` ; `options`: \{ `points`: `number`[]  }  } | - |
| `highlanderMatch.scoring.identifier` | ``"standard"`` \| ``"LegacyScoringStrategy"`` | **Note:** The `LegacyScoringStrategy` value has only been found in the 2015 worlds championship. |
| `highlanderMatch.scoring.options` | \{ `points`: `number`[]  } | - |
| `highlanderMatch.scoring.options.points` | `number`[] | - |
| `highlanderMatch.standings?` | \{ `closed`: `boolean` ; `history?`: \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] ; `note?`: `string` ; `result`: \{ `roster?`: `string`  }[][] ; `source?`: ``"bestOf"`` \| ``"manual"`` ; `timestamp`: `number`  } | - |
| `highlanderMatch.standings.closed` | `boolean` | If the value is true then the league/tournament has concluded, otherwise it is ongoing. |
| `highlanderMatch.standings.history?` | \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] | - |
| `highlanderMatch.standings.note?` | `string` | - |
| `highlanderMatch.standings.result` | \{ `roster?`: `string`  }[][] | - |
| `highlanderMatch.standings.source?` | ``"bestOf"`` \| ``"manual"`` | How the record was created/updated. |
| `highlanderMatch.standings.timestamp` | `number` | Format: int64 Unix timestamp in milliseconds of when the match started. |
| `highlanderMatch.state` | ``"resolved"`` \| ``"unresolved"`` \| ``"unlinked"`` | Whether it is ongoing or completed. |
| `highlanderMatch.tiebreaker` | `boolean` | - |
| `highlanderPlayer` | \{ `LastName?`: ``null`` \| `string` ; `bios`: \{ `[key: string]`: `string`;  } ; `birthdate`: ``null`` \| `string` ; `champions`: \{ `championId`: `string` ; `championKey`: `string` ; `championName`: `string` ; `createdAt`: `string` ; `id`: `number` ; `playerId`: `number` ; `updatedAt`: `string`  }[] ; `createdAt`: `string` ; `firstName`: `string` ; `foreignIds`: \{ `drupalId?`: `string`  } & \{ `[key: string]`: `string`;  } ; `hometown`: ``null`` \| `string` ; `id`: `number` ; `name`: `string` ; `photoUrl`: ``null`` \| `string` ; `region`: `string` ; `roleSlug`: `string` ; `slug`: `string` ; `socialNetworks`: \{ `[key: string]`: `string`;  } ; `updatedAt`: `string`  } | - |
| `highlanderPlayer.LastName?` | ``null`` \| `string` | - |
| `highlanderPlayer.bios` | \{ `[key: string]`: `string`;  } | Contains a description of the player translated to various languages. The keys are presented in the format ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)) `{languageCode}_{countryCode}` The value is a string containing html tags representing the description in that specific locale. |
| `highlanderPlayer.birthdate` | ``null`` \| `string` | Format: date-time |
| `highlanderPlayer.champions` | \{ `championId`: `string` ; `championKey`: `string` ; `championName`: `string` ; `createdAt`: `string` ; `id`: `number` ; `playerId`: `number` ; `updatedAt`: `string`  }[] | - |
| `highlanderPlayer.createdAt` | `string` | Format: date-time The date and time when this entry was created. |
| `highlanderPlayer.firstName` | `string` | - |
| `highlanderPlayer.foreignIds` | \{ `drupalId?`: `string`  } & \{ `[key: string]`: `string`;  } | - |
| `highlanderPlayer.hometown` | ``null`` \| `string` | - |
| `highlanderPlayer.id` | `number` | The player ID |
| `highlanderPlayer.name` | `string` | The player's in game name |
| `highlanderPlayer.photoUrl` | ``null`` \| `string` | URL to the player's photo |
| `highlanderPlayer.region` | `string` | - |
| `highlanderPlayer.roleSlug` | `string` | The role they usually play |
| `highlanderPlayer.slug` | `string` | URL friendly version of the player's in game name |
| `highlanderPlayer.socialNetworks` | \{ `[key: string]`: `string`;  } | Contains links to the player's social media accounts. The key is the name of the social media platform and the value is the URL |
| `highlanderPlayer.updatedAt` | `string` | Format: date-time The date and time when this entry was last updated. |
| `highlanderPlayers` | \{ `LastName?`: ``null`` \| `string` ; `bios`: \{ `[key: string]`: `string`;  } ; `birthdate`: ``null`` \| `string` ; `champions`: \{ `championId`: `string` ; `championKey`: `string` ; `championName`: `string` ; `createdAt`: `string` ; `id`: `number` ; `playerId`: `number` ; `updatedAt`: `string`  }[] ; `createdAt`: `string` ; `firstName`: `string` ; `foreignIds`: \{ `drupalId?`: `string`  } & \{ `[key: string]`: `string`;  } ; `hometown`: ``null`` \| `string` ; `id`: `number` ; `name`: `string` ; `photoUrl`: ``null`` \| `string` ; `region`: `string` ; `roleSlug`: `string` ; `slug`: `string` ; `socialNetworks`: \{ `[key: string]`: `string`;  } ; `updatedAt`: `string`  }[] | - |
| `highlanderRecord` | \{ `bracket`: `string` ; `id`: `string` ; `losses`: `number` ; `roster`: `string` ; `score`: `number` ; `ties`: `number` ; `tournament`: `string` ; `wins`: `number`  } | - |
| `highlanderRecord.bracket` | `string` | The bracket's [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) |
| `highlanderRecord.id` | `string` | A combination of the bracket and roster UUIDs. The two are separated by a colon |
| `highlanderRecord.losses` | `number` | - |
| `highlanderRecord.roster` | `string` | The roster's [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) |
| `highlanderRecord.score` | `number` | - |
| `highlanderRecord.ties` | `number` | - |
| `highlanderRecord.tournament` | `string` | The tournament's [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) |
| `highlanderRecord.wins` | `number` | - |
| `highlanderRecords` | \{ `bracket`: `string` ; `id`: `string` ; `losses`: `number` ; `roster`: `string` ; `score`: `number` ; `ties`: `number` ; `tournament`: `string` ; `wins`: `number`  }[] | - |
| `highlanderResult` | \{ `roster?`: `string`  }[][] | - |
| `highlanderTeam` | \{ `acronym`: `string` ; `altLogoUrl`: ``null`` \| `string` ; `bios`: \{ `[key: string]`: `string`;  } ; `createdAt`: `string` ; `foreignIds`: \{ `drupalId?`: `string`  } ; `guid`: `string` ; `homeLeague`: `string` ; `id`: `number` ; `logoUrl`: `string` ; `name`: `string` ; `players`: `number`[] ; `slug`: `string` ; `starters`: `number`[] ; `subs`: `number`[] ; `teamPhotoUrl`: ``null`` \| `string` ; `updatedAt`: `string`  } | - |
| `highlanderTeam.acronym` | `string` | The acronym form of the team name |
| `highlanderTeam.altLogoUrl` | ``null`` \| `string` | Alternative URL to the team's logo. |
| `highlanderTeam.bios` | \{ `[key: string]`: `string`;  } | Contains a description of the team translated to various languages. The keys are presented in the format ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)) `{languageCode}_{countryCode}` The value is a string containing html tags representing the description in that specific locale. |
| `highlanderTeam.createdAt` | `string` | Format: date-time The date and time when this entry was created. |
| `highlanderTeam.foreignIds` | \{ `drupalId?`: `string`  } | - |
| `highlanderTeam.foreignIds.drupalId?` | `string` | - |
| `highlanderTeam.guid` | `string` | The team's [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). |
| `highlanderTeam.homeLeague` | `string` | Describes the league this team participates in during the regular seasons. |
| `highlanderTeam.id` | `number` | The team ID. |
| `highlanderTeam.logoUrl` | `string` | URL to an image of the team's logo. |
| `highlanderTeam.name` | `string` | The team name. |
| `highlanderTeam.players` | `number`[] | An array containing the player IDs for those belonging in that team. |
| `highlanderTeam.slug` | `string` | URL friendly version of the team name. |
| `highlanderTeam.starters` | `number`[] | An array of the player IDs of those in the main roster |
| `highlanderTeam.subs` | `number`[] | An array of the player IDs of the subs. |
| `highlanderTeam.teamPhotoUrl` | ``null`` \| `string` | - |
| `highlanderTeam.updatedAt` | `string` | Format: date-time The date and time when this entry was last updated. |
| `highlanderTeams` | \{ `acronym`: `string` ; `altLogoUrl`: ``null`` \| `string` ; `bios`: \{ `[key: string]`: `string`;  } ; `createdAt`: `string` ; `foreignIds`: \{ `drupalId?`: `string`  } ; `guid`: `string` ; `homeLeague`: `string` ; `id`: `number` ; `logoUrl`: `string` ; `name`: `string` ; `players`: `number`[] ; `slug`: `string` ; `starters`: `number`[] ; `subs`: `number`[] ; `teamPhotoUrl`: ``null`` \| `string` ; `updatedAt`: `string`  }[] | An array containing the teams that have participated in this league. |
| `highlanderTournament` | \{ `bracketType?`: \{ `identifier`: ``"bestOf"`` \| ``"round_robin"`` \| ``"single_elim"`` \| ``"gauntlet"`` ; `options?`: \{ `rounds`: `string`  }  } ; `brackets`: \{ `[key: string]`: \{ `bracketType?`: [`components`](internal.components.md)[``"schemas"``][``"bracketType"``] ; `canManufacture`: `boolean` ; `gameMode?`: [`components`](internal.components.md)[``"schemas"``][``"gameMode"``] ; `groupName?`: `string` ; `groupPosition`: `number` ; `id`: `string` ; `inheritableMatchScoringStrategy?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `input?`: [`components`](internal.components.md)[``"schemas"``][``"simpleRoster"``] & \{ `breakpoint?`: `string` ; `standing?`: `number`  }[] ; `matchScores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `matchScoring?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `matchType?`: [`components`](internal.components.md)[``"schemas"``][``"matchType"``] ; `matches`: \{ `[key: string]`: [`components`](internal.components.md)[``"schemas"``][``"highlanderMatch"``];  } ; `name`: `string` ; `position`: `number` ; `roles`: [`components`](internal.components.md)[``"schemas"``][``"roles"``] ; `scores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `scoring?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `standings?`: [`components`](internal.components.md)[``"schemas"``][``"standings"``] ; `state`: ``"resolved"`` \| ``"unresolved"`` \| ``"unlinked"``  };  } ; `breakpoints?`: \{ `[key: string]`: \{ `generator`: \{ `identifier?`: ``"noop"``  } ; `id`: `string` ; `input`: [`components`](internal.components.md)[``"schemas"``][``"simpleRoster"``] & \{ `bracket?`: `string` ; `standing?`: `number`  }[] ; `name`: `string` ; `position`: `number` ; `roles`: [`components`](internal.components.md)[``"schemas"``][``"roles"``] ; `scores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `standings?`: [`components`](internal.components.md)[``"schemas"``][``"standings"``]  };  } ; `description`: `string` ; `endDate`: `string` ; `gameIds`: `string`[] ; `id`: `string` ; `league`: `string` ; `leagueId`: `string` ; `leagueReference`: `string` ; `liveMatches`: `string`[] ; `matchType?`: \{ `identifier`: ``"bestOf"`` \| ``"single_elim"`` ; `options?`: \{ `best_of`: `string`  }  } ; `platformIds`: `string`[] ; `published`: `boolean` ; `queues`: [`Record`](../modules/internal.md#record)\<`string`, `never`\> ; `roles`: \{ `creator`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] ; `owner`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[]  } ; `rosteringStrategy?`: \{ `identifier`: ``"passthru"`` \| ``"random"``  } ; `rosters`: \{ `[key: string]`: \{ `id`: `string` ; `name`: `string` ; `roles`: [`Record`](../modules/internal.md#record)\<`string`, `never`\> ; `state?`: ``"eliminated"`` ; `substitutions`: [`Record`](../modules/internal.md#record)\<`string`, `never`\> ; `team`: `string` ; `teamReference`: `string`  };  } ; `seedingStrategy?`: \{ `identifier`: ``"passthru"`` \| ``"random"``  } ; `standings?`: \{ `closed`: `boolean` ; `history?`: \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] ; `note?`: `string` ; `result`: \{ `roster?`: `string`  }[][] ; `source?`: ``"bestOf"`` \| ``"manual"`` ; `timestamp`: `number`  } ; `startDate`: `string` ; `title`: `string`  } | - |
| `highlanderTournament.bracketType?` | \{ `identifier`: ``"bestOf"`` \| ``"round_robin"`` \| ``"single_elim"`` \| ``"gauntlet"`` ; `options?`: \{ `rounds`: `string`  }  } | - |
| `highlanderTournament.bracketType.identifier` | ``"bestOf"`` \| ``"round_robin"`` \| ``"single_elim"`` \| ``"gauntlet"`` | - |
| `highlanderTournament.bracketType.options?` | \{ `rounds`: `string`  } | - |
| `highlanderTournament.bracketType.options.rounds` | `string` | - |
| `highlanderTournament.brackets` | \{ `[key: string]`: \{ `bracketType?`: [`components`](internal.components.md)[``"schemas"``][``"bracketType"``] ; `canManufacture`: `boolean` ; `gameMode?`: [`components`](internal.components.md)[``"schemas"``][``"gameMode"``] ; `groupName?`: `string` ; `groupPosition`: `number` ; `id`: `string` ; `inheritableMatchScoringStrategy?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `input?`: [`components`](internal.components.md)[``"schemas"``][``"simpleRoster"``] & \{ `breakpoint?`: `string` ; `standing?`: `number`  }[] ; `matchScores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `matchScoring?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `matchType?`: [`components`](internal.components.md)[``"schemas"``][``"matchType"``] ; `matches`: \{ `[key: string]`: [`components`](internal.components.md)[``"schemas"``][``"highlanderMatch"``];  } ; `name`: `string` ; `position`: `number` ; `roles`: [`components`](internal.components.md)[``"schemas"``][``"roles"``] ; `scores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `scoring?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `standings?`: [`components`](internal.components.md)[``"schemas"``][``"standings"``] ; `state`: ``"resolved"`` \| ``"unresolved"`` \| ``"unlinked"``  };  } | - |
| `highlanderTournament.breakpoints?` | \{ `[key: string]`: \{ `generator`: \{ `identifier?`: ``"noop"``  } ; `id`: `string` ; `input`: [`components`](internal.components.md)[``"schemas"``][``"simpleRoster"``] & \{ `bracket?`: `string` ; `standing?`: `number`  }[] ; `name`: `string` ; `position`: `number` ; `roles`: [`components`](internal.components.md)[``"schemas"``][``"roles"``] ; `scores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `standings?`: [`components`](internal.components.md)[``"schemas"``][``"standings"``]  };  } | - |
| `highlanderTournament.description` | `string` | The tournament's name |
| `highlanderTournament.endDate` | `string` | Format: date The day the tournament ends/ended. |
| `highlanderTournament.gameIds` | `string`[] | 'Contains all the gameIds in this tournament. **Note:** The gameIds are in the format [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier)' |
| `highlanderTournament.id` | `string` | The tournament Id It is a [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) |
| `highlanderTournament.league` | `string` | The league ID |
| `highlanderTournament.leagueId` | `string` | The league ID |
| `highlanderTournament.leagueReference` | `string` | The integer in the string represents the league ID. |
| `highlanderTournament.liveMatches` | `string`[] | The array contains [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) Match IDs Despite the name of this property it is unreliable as for some tournaments this array will contain match IDs yet the matches are over. |
| `highlanderTournament.matchType?` | \{ `identifier`: ``"bestOf"`` \| ``"single_elim"`` ; `options?`: \{ `best_of`: `string`  }  } | - |
| `highlanderTournament.matchType.identifier` | ``"bestOf"`` \| ``"single_elim"`` | - |
| `highlanderTournament.matchType.options?` | \{ `best_of`: `string`  } | - |
| `highlanderTournament.matchType.options.best_of` | `string` | - |
| `highlanderTournament.platformIds` | `string`[] | Contains all the platform IDs in for this tournaments. A platform ID is combination of the gameRealm and the gameId. The regex below describes the format. `^[A-Z]+\d+:\d+$` |
| `highlanderTournament.published` | `boolean` | If the value is true then the league/tournament has concluded, otherwise it is ongoing. |
| `highlanderTournament.queues` | [`Record`](../modules/internal.md#record)\<`string`, `never`\> | - |
| `highlanderTournament.roles` | \{ `creator`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] ; `owner`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[]  } | - |
| `highlanderTournament.roles.creator` | \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] | - |
| `highlanderTournament.roles.owner` | \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] | - |
| `highlanderTournament.rosteringStrategy?` | \{ `identifier`: ``"passthru"`` \| ``"random"``  } | - |
| `highlanderTournament.rosteringStrategy.identifier` | ``"passthru"`` \| ``"random"`` | - |
| `highlanderTournament.rosters` | \{ `[key: string]`: \{ `id`: `string` ; `name`: `string` ; `roles`: [`Record`](../modules/internal.md#record)\<`string`, `never`\> ; `state?`: ``"eliminated"`` ; `substitutions`: [`Record`](../modules/internal.md#record)\<`string`, `never`\> ; `team`: `string` ; `teamReference`: `string`  };  } | The keys to this object are [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the roster ID. Their values are objects but they don't contain anything useful about the roster. |
| `highlanderTournament.seedingStrategy?` | \{ `identifier`: ``"passthru"`` \| ``"random"``  } | - |
| `highlanderTournament.seedingStrategy.identifier` | ``"passthru"`` \| ``"random"`` | - |
| `highlanderTournament.standings?` | \{ `closed`: `boolean` ; `history?`: \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] ; `note?`: `string` ; `result`: \{ `roster?`: `string`  }[][] ; `source?`: ``"bestOf"`` \| ``"manual"`` ; `timestamp`: `number`  } | - |
| `highlanderTournament.standings.closed` | `boolean` | If the value is true then the league/tournament has concluded, otherwise it is ongoing. |
| `highlanderTournament.standings.history?` | \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] | - |
| `highlanderTournament.standings.note?` | `string` | - |
| `highlanderTournament.standings.result` | \{ `roster?`: `string`  }[][] | - |
| `highlanderTournament.standings.source?` | ``"bestOf"`` \| ``"manual"`` | How the record was created/updated. |
| `highlanderTournament.standings.timestamp` | `number` | Format: int64 Unix timestamp in milliseconds of when the match started. |
| `highlanderTournament.startDate` | `string` | Format: date The day the tournament starts/started. |
| `highlanderTournament.title` | `string` | URL friendly version of the tournament name |
| `highlanderTournaments` | \{ `bracketType?`: \{ `identifier`: ``"bestOf"`` \| ``"round_robin"`` \| ``"single_elim"`` \| ``"gauntlet"`` ; `options?`: \{ `rounds`: `string`  }  } ; `brackets`: \{ `[key: string]`: \{ `bracketType?`: [`components`](internal.components.md)[``"schemas"``][``"bracketType"``] ; `canManufacture`: `boolean` ; `gameMode?`: [`components`](internal.components.md)[``"schemas"``][``"gameMode"``] ; `groupName?`: `string` ; `groupPosition`: `number` ; `id`: `string` ; `inheritableMatchScoringStrategy?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `input?`: [`components`](internal.components.md)[``"schemas"``][``"simpleRoster"``] & \{ `breakpoint?`: `string` ; `standing?`: `number`  }[] ; `matchScores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `matchScoring?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `matchType?`: [`components`](internal.components.md)[``"schemas"``][``"matchType"``] ; `matches`: \{ `[key: string]`: [`components`](internal.components.md)[``"schemas"``][``"highlanderMatch"``];  } ; `name`: `string` ; `position`: `number` ; `roles`: [`components`](internal.components.md)[``"schemas"``][``"roles"``] ; `scores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `scoring?`: [`components`](internal.components.md)[``"schemas"``][``"scoring"``] ; `standings?`: [`components`](internal.components.md)[``"schemas"``][``"standings"``] ; `state`: ``"resolved"`` \| ``"unresolved"`` \| ``"unlinked"``  };  } ; `breakpoints?`: \{ `[key: string]`: \{ `generator`: \{ `identifier?`: ``"noop"``  } ; `id`: `string` ; `input`: [`components`](internal.components.md)[``"schemas"``][``"simpleRoster"``] & \{ `bracket?`: `string` ; `standing?`: `number`  }[] ; `name`: `string` ; `position`: `number` ; `roles`: [`components`](internal.components.md)[``"schemas"``][``"roles"``] ; `scores`: [`components`](internal.components.md)[``"schemas"``][``"scores"``] ; `standings?`: [`components`](internal.components.md)[``"schemas"``][``"standings"``]  };  } ; `description`: `string` ; `endDate`: `string` ; `gameIds`: `string`[] ; `id`: `string` ; `league`: `string` ; `leagueId`: `string` ; `leagueReference`: `string` ; `liveMatches`: `string`[] ; `matchType?`: \{ `identifier`: ``"bestOf"`` \| ``"single_elim"`` ; `options?`: \{ `best_of`: `string`  }  } ; `platformIds`: `string`[] ; `published`: `boolean` ; `queues`: [`Record`](../modules/internal.md#record)\<`string`, `never`\> ; `roles`: \{ `creator`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] ; `owner`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[]  } ; `rosteringStrategy?`: \{ `identifier`: ``"passthru"`` \| ``"random"``  } ; `rosters`: \{ `[key: string]`: \{ `id`: `string` ; `name`: `string` ; `roles`: [`Record`](../modules/internal.md#record)\<`string`, `never`\> ; `state?`: ``"eliminated"`` ; `substitutions`: [`Record`](../modules/internal.md#record)\<`string`, `never`\> ; `team`: `string` ; `teamReference`: `string`  };  } ; `seedingStrategy?`: \{ `identifier`: ``"passthru"`` \| ``"random"``  } ; `standings?`: \{ `closed`: `boolean` ; `history?`: \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] ; `note?`: `string` ; `result`: \{ `roster?`: `string`  }[][] ; `source?`: ``"bestOf"`` \| ``"manual"`` ; `timestamp`: `number`  } ; `startDate`: `string` ; `title`: `string`  }[] | - |
| `homeLeague` | \{ `name`: `string` ; `region`: `string`  } | - |
| `homeLeague.name` | `string` | The name of the league |
| `homeLeague.region` | `string` | The region where the league is located |
| `locale` | ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` | This is the locale or language code using [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) |
| `matchScheduleItem` | \{ `id`: `string` ; `league`: `string` ; `scheduledTime`: `string` ; `tags`: \{ `blockLabel`: `string` ; `blockPrefix?`: `string` ; `leagueLabel`: `string` ; `stageLabel?`: `string` ; `subBlockLabel`: `string` ; `subBlockPrefix`: `string` ; `tournamentLabel`: `string` ; `yearLabel?`: `string`  } ; `tournament`: `string`  } & \{ `bracket`: `string` ; `content`: `string` ; `match`: `string`  } | - |
| `matchType` | \{ `identifier`: ``"bestOf"`` \| ``"single_elim"`` ; `options?`: \{ `best_of`: `string`  }  } | - |
| `matchType.identifier` | ``"bestOf"`` \| ``"single_elim"`` | - |
| `matchType.options?` | \{ `best_of`: `string`  } | - |
| `matchType.options.best_of` | `string` | - |
| `navItem` | \{ `createdAt`: `string` ; `external`: `boolean` ; `id`: `number` ; `imageUrl`: ``null`` \| `string` ; `label`: `string` ; `link`: `string` ; `order`: `number` ; `parentNavItem`: \{ id: number; link: string; slug: string \| null; label: string; imageUrl: string \| null; order: number; external: boolean; parentNavItem: ... & Record\<string, unknown\>; createdAt: string; updatedAt: string; } & [`Record`](../modules/internal.md#record)\<`string`, `unknown`\> ; `slug`: ``null`` \| `string` ; `updatedAt`: `string`  } | - |
| `navItem.createdAt` | `string` | Format: date-time The date and time when this entry was created. |
| `navItem.external` | `boolean` | - |
| `navItem.id` | `number` | - |
| `navItem.imageUrl` | ``null`` \| `string` | - |
| `navItem.label` | `string` | - |
| `navItem.link` | `string` | - |
| `navItem.order` | `number` | - |
| `navItem.parentNavItem` | \{ id: number; link: string; slug: string \| null; label: string; imageUrl: string \| null; order: number; external: boolean; parentNavItem: ... & Record\<string, unknown\>; createdAt: string; updatedAt: string; } & [`Record`](../modules/internal.md#record)\<`string`, `unknown`\> | - |
| `navItem.slug` | ``null`` \| `string` | - |
| `navItem.updatedAt` | `string` | Format: date-time The date and time when this entry was last updated. |
| `outcome` | ``null`` \| ``"loss"`` \| ``"win"`` | Indicate whether the team won or lost the series This will be null if the match is ongoing |
| `pageToken` | ``null`` \| `string` | Format: byte Base 64 encoded string used to determine the next "page" of data to pull |
| `participantId` | ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` | - |
| `participantMetadata` | \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } | - |
| `participantMetadata.championId` | `string` | - |
| `participantMetadata.participantId` | ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` | - |
| `participantMetadata.role` | ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` | - |
| `participantMetadata.summonerName` | `string` | - |
| `participantMetadataExtended` | \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  } | - |
| `participantStats` | \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  } | - |
| `perkMetadata` | \{ `perks`: `number`[] ; `styleId`: ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400`` ; `subStyleId`: ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400``  } | - |
| `perkMetadata.perks` | `number`[] | The runes selected. Index 0 - 3 are the ids of the primary runes Index 4 - 5 are the ids of the secondary runes Index 6 - 8 are the ids of the stats shard |
| `perkMetadata.styleId` | ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400`` | The id of the primary rune path |
| `perkMetadata.subStyleId` | ``8000`` \| ``8100`` \| ``8200`` \| ``8300`` \| ``8400`` | The id of the secondary rune path |
| `player` | \{ `firstName`: `string` ; `id`: `string` ; `image`: `string` ; `lastName`: `string` ; `role`: `string` ; `summonerName`: `string`  } | - |
| `player.firstName` | `string` | - |
| `player.id` | `string` | - |
| `player.image` | `string` | - |
| `player.lastName` | `string` | - |
| `player.role` | `string` | - |
| `player.summonerName` | `string` | - |
| `ranking` | \{ `ordinal`: `number` ; `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  } & \{ `id?`: `string` ; `record?`: ``null`` \| \{ `losses`: `number` ; `wins`: `number`  } ; `slug?`: `string`  }[]  } | - |
| `ranking.ordinal` | `number` | The league position |
| `ranking.teams` | \{ `code`: `string` ; `image`: `string` ; `name`: `string`  } & \{ `id?`: `string` ; `record?`: ``null`` \| \{ `losses`: `number` ; `wins`: `number`  } ; `slug?`: `string`  }[] | The teams that are at that league position. In most cases there will only be one team object in this array. In cases where several teams are tied with the same score, this array will contain all teams tied for that position. |
| `record` | ``null`` \| \{ `losses`: `number` ; `wins`: `number`  } | Describes the amount of wins and losses the team has incurred in a particular stage of the tournament specifically group stage For knockout phase, each series is treated individually. This object is null when the match is ongoing and it is in the knockout stage. |
| `result` | \{ `gameWins`: `number`  } | - |
| `result.gameWins` | `number` | The number of games the team has won in that in the series |
| `role` | \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  } | - |
| `role.admin` | ``true`` | - |
| `role.origin` | ``"BEARER_TOKEN"`` | - |
| `role.profileIconId` | ``0`` | - |
| `role.region` | ``"global"`` | - |
| `role.summonerLevel` | ``0`` | - |
| `role.summonerName` | ``"test-user"`` | - |
| `roles` | \{ `creator`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] ; `owner`: \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[]  } | - |
| `roles.creator` | \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] | - |
| `roles.owner` | \{ `admin`: ``true`` ; `origin`: ``"BEARER_TOKEN"`` ; `profileIconId`: ``0`` ; `region`: ``"global"`` ; `summonerLevel`: ``0`` ; `summonerName`: ``"test-user"``  }[] | - |
| `rosteringStrategy` | \{ `identifier`: ``"passthru"`` \| ``"random"``  } | - |
| `rosteringStrategy.identifier` | ``"passthru"`` \| ``"random"`` | - |
| `scheduleItem` | \{ `id`: `string` ; `league`: `string` ; `scheduledTime`: `string` ; `tags`: \{ `blockLabel`: `string` ; `blockPrefix?`: `string` ; `leagueLabel`: `string` ; `stageLabel?`: `string` ; `subBlockLabel`: `string` ; `subBlockPrefix`: `string` ; `tournamentLabel`: `string` ; `yearLabel?`: `string`  } ; `tournament`: `string`  } & \{ `bracket`: `string` ; `content`: `string` ; `match`: `string`  } \| \{ `id`: `string` ; `league`: `string` ; `scheduledTime`: `string` ; `tags`: \{ `blockLabel`: `string` ; `blockPrefix?`: `string` ; `leagueLabel`: `string` ; `stageLabel?`: `string` ; `subBlockLabel`: `string` ; `subBlockPrefix`: `string` ; `tournamentLabel`: `string` ; `yearLabel?`: `string`  } ; `tournament`: `string`  } & \{ `content`: `string`  } | - |
| `scores` | \{ `[key: string]`: `number`;  } | The keys to this object are [UUID version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the roster ID. |
| `scoring` | \{ `identifier`: ``"standard"`` \| ``"LegacyScoringStrategy"`` ; `options`: \{ `points`: `number`[]  }  } | - |
| `scoring.identifier` | ``"standard"`` \| ``"LegacyScoringStrategy"`` | **Note:** The `LegacyScoringStrategy` value has only been found in the 2015 worlds championship. |
| `scoring.options` | \{ `points`: `number`[]  } | - |
| `scoring.options.points` | `number`[] | - |
| `section` | \{ `matches`: \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  } & \{ `id`: `string`  } & \{ `flags`: ``null`` \| `string` ; `previousMatchIds`: ``null`` \| `string`[] ; `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `teams`: \{ `id`: `string` ; `result`: \{ `gameWins`: `number`  } & \{ `outcome?`: ``null`` \| ``"loss"`` \| ``"win"``  } ; `slug`: `string`  }[]  }[] ; `name`: `string` ; `rankings`: \{ `ordinal`: `number` ; `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  } & \{ `id?`: `string` ; `record?`: ``null`` \| \{ `losses`: `number` ; `wins`: `number`  } ; `slug?`: `string`  }[]  }[]  } | - |
| `section.matches` | \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  } & \{ `id`: `string`  } & \{ `flags`: ``null`` \| `string` ; `previousMatchIds`: ``null`` \| `string`[] ; `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `teams`: \{ `id`: `string` ; `result`: \{ `gameWins`: `number`  } & \{ `outcome?`: ``null`` \| ``"loss"`` \| ``"win"``  } ; `slug`: `string`  }[]  }[] | - |
| `section.name` | `string` | The name of the section |
| `section.rankings` | \{ `ordinal`: `number` ; `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  } & \{ `id?`: `string` ; `record?`: ``null`` \| \{ `losses`: `number` ; `wins`: `number`  } ; `slug?`: `string`  }[]  }[] | Contains details about the actual standings for that particular section This is mostly used for the group stage. For the knockout stages, it is usually empty. |
| `simpleEvent` | \{ `blockName`: ``null`` \| `string` ; `match`: \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  } & \{ `id`: `string`  } & \{ `strategy`: \{ `count`: ``1`` \| ``3`` \| ``5``  } & \{ `type`: ``"bestOf"``  } ; `teams`: \{ `result`: \{ `gameWins`: `number`  }  }[]  } ; `startTime`: `string`  } | - |
| `simpleEvent.blockName` | ``null`` \| `string` | - |
| `simpleEvent.match` | \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  } & \{ `id`: `string`  } & \{ `strategy`: \{ `count`: ``1`` \| ``3`` \| ``5``  } & \{ `type`: ``"bestOf"``  } ; `teams`: \{ `result`: \{ `gameWins`: `number`  }  }[]  } | - |
| `simpleEvent.startTime` | `string` | Format: date-time The time the match started |
| `simpleGame` | \{ `id`: `string` ; `number`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` ; `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `vods`: \{ `parameter`: `string`  } & \{ `locale`: ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` ; `offset`: `number` ; `provider`: ``"youtube"`` \| ``"twitch"``  }[]  } | - |
| `simpleGame.id` | `string` | The game ID |
| `simpleGame.number` | ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` | The number of the game |
| `simpleGame.state` | ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` | - |
| `simpleGame.vods` | \{ `parameter`: `string`  } & \{ `locale`: ``"en-US"`` \| ``"en-GB"`` \| ``"en-AU"`` \| ``"cs-CZ"`` \| ``"de-DE"`` \| ``"el-GR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"hu-HU"`` \| ``"it-IT"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ro-RO"`` \| ``"ru-RU"`` \| ``"tr-TR"`` \| ``"ja-JP"`` \| ``"ko-KR"`` ; `offset`: `number` ; `provider`: ``"youtube"`` \| ``"twitch"``  }[] | - |
| `simpleLeague` | \{ `name`: `string` ; `slug`: `string`  } & \{ `id`: `string` ; `image`: `string`  } | - |
| `simpleMatch` | \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  } & \{ `id`: `string`  } | - |
| `simpleRoster` | \{ `roster?`: `string`  } | - |
| `simpleRoster.roster?` | `string` | The roster ID |
| `stage` | \{ `name`: `string` ; `sections`: \{ `matches`: \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  } & \{ `id`: `string`  } & \{ `flags`: ``null`` \| `string` ; `previousMatchIds`: ``null`` \| `string`[] ; `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `teams`: \{ `id`: `string` ; `result`: \{ `gameWins`: `number`  } & \{ `outcome?`: ``null`` \| ``"loss"`` \| ``"win"``  } ; `slug`: `string`  }[]  }[] ; `name`: `string` ; `rankings`: \{ `ordinal`: `number` ; `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  } & \{ `id?`: `string` ; `record?`: ``null`` \| \{ `losses`: `number` ; `wins`: `number`  } ; `slug?`: `string`  }[]  }[]  }[] ; `slug`: `string` ; `type`: ``"groups"`` \| ``"bracket"``  } | Represents a stage in a tournament. Whether it is the group or knockout stage. |
| `stage.name` | `string` | The name of that stage of the tournament |
| `stage.sections` | \{ `matches`: \{ `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[]  } & \{ `id`: `string`  } & \{ `flags`: ``null`` \| `string` ; `previousMatchIds`: ``null`` \| `string`[] ; `state`: ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` ; `teams`: \{ `id`: `string` ; `result`: \{ `gameWins`: `number`  } & \{ `outcome?`: ``null`` \| ``"loss"`` \| ``"win"``  } ; `slug`: `string`  }[]  }[] ; `name`: `string` ; `rankings`: \{ `ordinal`: `number` ; `teams`: \{ `code`: `string` ; `image`: `string` ; `name`: `string`  } & \{ `id?`: `string` ; `record?`: ``null`` \| \{ `losses`: `number` ; `wins`: `number`  } ; `slug?`: `string`  }[]  }[]  }[] | Each object in the array represents a particular round in that specific stage in the tournament. For the knockout stages, we could have the quarter finals, semi finals and the finals under their own sections. For the group stage, there is usually only one section. |
| `stage.slug` | `string` | - |
| `stage.type` | ``"groups"`` \| ``"bracket"`` | The type of the stage. |
| `standings` | \{ `closed`: `boolean` ; `history?`: \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] ; `note?`: `string` ; `result`: \{ `roster?`: `string`  }[][] ; `source?`: ``"bestOf"`` \| ``"manual"`` ; `timestamp`: `number`  } | - |
| `standings.closed` | `boolean` | If the value is true then the league/tournament has concluded, otherwise it is ongoing. |
| `standings.history?` | \{ result: \{ roster?: string \| undefined; }[][]; timestamp: number; source?: "bestOf" \| "manual" \| undefined; note?: string \| undefined; history?: ...[] \| undefined; closed: boolean; }[] | - |
| `standings.note?` | `string` | - |
| `standings.result` | \{ `roster?`: `string`  }[][] | - |
| `standings.source?` | ``"bestOf"`` \| ``"manual"`` | How the record was created/updated. |
| `standings.timestamp` | `number` | Format: int64 Unix timestamp in milliseconds of when the match started. |
| `state` | ``"completed"`` \| ``"unstarted"`` \| ``"inProgress"`` | - |
| `strategy` | \{ `count`: ``1`` \| ``3`` \| ``5``  } & \{ `type`: ``"bestOf"``  } | - |
| `tags` | \{ `blockLabel`: `string` ; `blockPrefix?`: `string` ; `leagueLabel`: `string` ; `stageLabel?`: `string` ; `subBlockLabel`: `string` ; `subBlockPrefix`: `string` ; `tournamentLabel`: `string` ; `yearLabel?`: `string`  } | The labels are used to describe the week and day the match/event is taking place in. Also, it could indicate the stage of the tournament. The blockPrefix comes before the block Label. Same with the subBlockPrefix and the subBlockLabel. |
| `tags.blockLabel` | `string` | - |
| `tags.blockPrefix?` | `string` | - |
| `tags.leagueLabel` | `string` | - |
| `tags.stageLabel?` | `string` | Contains the tournament and bracket Ids the match/event belongs to. |
| `tags.subBlockLabel` | `string` | - |
| `tags.subBlockPrefix` | `string` | - |
| `tags.tournamentLabel` | `string` | Contains the tournament ID. |
| `tags.yearLabel?` | `string` | - |
| `team` | \{ `code`: `string` ; `image`: `string` ; `name`: `string`  } | - |
| `team.code` | `string` | - |
| `team.image` | `string` | - |
| `team.name` | `string` | - |
| `teamId` | `string` | The team id |
| `teamMetadata` | \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  } | - |
| `teamMetadata.esportsTeamId` | `string` | The team Id |
| `teamMetadata.participantMetadata` | (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[] | - |
| `teamSlug` | `string` | The URL friendly version of the team name |
| `teamStats` | \{ `barons`: `number` ; `dragons`: (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] ; `inhibitors`: `number` ; `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] ; `totalGold`: `number` ; `totalKills`: `number` ; `towers`: `number`  } | - |
| `teamStats.barons` | `number` | - |
| `teamStats.dragons` | (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] | - |
| `teamStats.inhibitors` | `number` | - |
| `teamStats.participants` | \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] | - |
| `teamStats.totalGold` | `number` | - |
| `teamStats.totalKills` | `number` | - |
| `teamStats.towers` | `number` | - |
| `teams` | \{ `code`: `string` ; `image`: `string` ; `name`: `string`  }[] | - |
| `tournament` | \{ `endDate`: `string` ; `id`: `string` ; `slug`: `string` ; `startDate`: `string`  } | - |
| `tournament.endDate` | `string` | Format: full-date The date the tournament ends/ended. |
| `tournament.id` | `string` | This is the tournament id |
| `tournament.slug` | `string` | - |
| `tournament.startDate` | `string` | Format: full-date The date the tournament starts/started. |
| `video` | \{ `createdAt`: `string` ; `game`: `string` ; `id`: `number` ; `label`: ``null`` \| `string` ; `locale`: `string` ; `reference`: `string` ; `slug`: ``null`` \| `string` ; `source`: `string` ; `updatedAt`: `string`  } | - |
| `video.createdAt` | `string` | Format: date-time The date and time when this entry was created. |
| `video.game` | `string` | - |
| `video.id` | `number` | - |
| `video.label` | ``null`` \| `string` | - |
| `video.locale` | `string` | The video's locale. The value is a [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code. |
| `video.reference` | `string` | Contains the tournament Id and the game Id of that match. |
| `video.slug` | ``null`` \| `string` | - |
| `video.source` | `string` | URL to the YouTube video of the match |
| `video.updatedAt` | `string` | Format: date-time The date and time when this entry was last updated. |
| `vod` | \{ `parameter`: `string`  } | - |
| `vod.parameter` | `string` | - |
| `window` | \{ `esportsGameId`: `string` ; `esportsMatchId`: `string` ; `frames`: \{ `rfc460Timestamp`: `string`  } & \{ `blueTeam`: \{ `barons`: `number` ; `dragons`: (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] ; `inhibitors`: `number` ; `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] ; `totalGold`: `number` ; `totalKills`: `number` ; `towers`: `number`  } ; `gameState`: ``"in_game"`` \| ``"finished"`` ; `redTeam`: \{ `barons`: `number` ; `dragons`: (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] ; `inhibitors`: `number` ; `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] ; `totalGold`: `number` ; `totalKills`: `number` ; `towers`: `number`  } ; `rfc460Timestamp`: `string`  }[] ; `gameMetadata`: \{ `blueTeamMetadata`: \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  } ; `patchVersion`: `string` ; `redTeamMetadata`: \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  }  }  } | - |
| `window.esportsGameId` | `string` | The game Id of the match |
| `window.esportsMatchId` | `string` | The match Id of the match |
| `window.frames` | \{ `rfc460Timestamp`: `string`  } & \{ `blueTeam`: \{ `barons`: `number` ; `dragons`: (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] ; `inhibitors`: `number` ; `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] ; `totalGold`: `number` ; `totalKills`: `number` ; `towers`: `number`  } ; `gameState`: ``"in_game"`` \| ``"finished"`` ; `redTeam`: \{ `barons`: `number` ; `dragons`: (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] ; `inhibitors`: `number` ; `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] ; `totalGold`: `number` ; `totalKills`: `number` ; `towers`: `number`  } ; `rfc460Timestamp`: `string`  }[] | - |
| `window.gameMetadata` | \{ `blueTeamMetadata`: \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  } ; `patchVersion`: `string` ; `redTeamMetadata`: \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  }  } | - |
| `window.gameMetadata.blueTeamMetadata` | \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  } | - |
| `window.gameMetadata.blueTeamMetadata.esportsTeamId` | `string` | The team Id |
| `window.gameMetadata.blueTeamMetadata.participantMetadata` | (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[] | - |
| `window.gameMetadata.patchVersion` | `string` | The patch the match was played on |
| `window.gameMetadata.redTeamMetadata` | \{ `esportsTeamId`: `string` ; `participantMetadata`: (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[]  } | - |
| `window.gameMetadata.redTeamMetadata.esportsTeamId` | `string` | The team Id |
| `window.gameMetadata.redTeamMetadata.participantMetadata` | (\{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } \| \{ `championId`: `string` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` ; `role`: ``"top"`` \| ``"jungle"`` \| ``"mid"`` \| ``"bottom"`` \| ``"support"`` ; `summonerName`: `string`  } & \{ `esportsPlayerId`: `string`  })[] | - |
| `windowFrame` | \{ `rfc460Timestamp`: `string`  } & \{ `blueTeam`: \{ `barons`: `number` ; `dragons`: (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] ; `inhibitors`: `number` ; `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] ; `totalGold`: `number` ; `totalKills`: `number` ; `towers`: `number`  } ; `gameState`: ``"in_game"`` \| ``"finished"`` ; `redTeam`: \{ `barons`: `number` ; `dragons`: (``"ocean"`` \| ``"mountain"`` \| ``"infernal"`` \| ``"cloud"`` \| ``"elder"``)[] ; `inhibitors`: `number` ; `participants`: \{ `assists`: `number` ; `creepScore`: `number` ; `deaths`: `number` ; `kills`: `number` ; `level`: `number` ; `participantId`: ``1`` \| ``3`` \| ``5`` \| ``2`` \| ``4`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10``  } & \{ `currentHealth`: `number` ; `maxHealth`: `number` ; `totalGold`: `number`  }[] ; `totalGold`: `number` ; `totalKills`: `number` ; `towers`: `number`  } ; `rfc460Timestamp`: `string`  } | - |

#### Defined in

[src/api-types.ts:98](https://github.com/Viriatto/lol-esports-api/blob/611afb5/src/api-types.ts#L98)
