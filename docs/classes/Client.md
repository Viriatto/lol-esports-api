[**LoL Esports API Wrapper**](../README.md) • **Docs**

***

[LoL Esports API Wrapper](../globals.md) / Client

# Class: Client

Main entity of the module.

## Example

```ts
import eSportsAPI from '@viriato/lol-esports-api';

const schedule = await eSportsAPI.leagues.getSchedule();
```

## Constructors

### new Client()

> **new Client**(): [`Client`](Client.md)

#### Returns

[`Client`](Client.md)

## Properties

### \_events

`Sealed` `Internal`

> `private` `readonly` **\_events**: [`Events`](../internal/classes/Events.md)

API for live event data fetching.

#### Source

[src/client.ts:33](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L33)

***

### \_games

`Sealed` `Internal`

> `private` `readonly` **\_games**: [`Games`](../internal/classes/Games.md)

API for game related data fetching, such as fetching a game segment's data.

#### Source

[src/client.ts:54](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L54)

***

### \_leagues

`Sealed` `Internal`

> `private` `readonly` **\_leagues**: [`Leagues`](../internal/classes/Leagues.md)

API for league related data fetching, such as their schedules and tournaments.

#### Source

[src/client.ts:26](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L26)

***

### \_matches

`Sealed` `Internal`

> `private` `readonly` **\_matches**: [`Matches`](../internal/classes/Matches.md)

API for match related data fetching, such as getting a match event.

#### Source

[src/client.ts:47](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L47)

***

### \_teams

`Sealed` `Internal`

> `private` `readonly` **\_teams**: [`Teams`](../internal/classes/Teams.md)

API for team related data fetching.

#### Source

[src/client.ts:61](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L61)

***

### \_tournaments

`Sealed` `Internal`

> `private` `readonly` **\_tournaments**: [`Tournaments`](../internal/classes/Tournaments.md)

API for tournament related data fetching, such as standings and completed events.

#### Source

[src/client.ts:40](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L40)

## Accessors

### events

> `get` **events**(): [`Events`](../internal/classes/Events.md)

API for live event data fetching.

#### Example

```ts
import eSportsAPI from '@viriato/lol-esports-api';

const liveEvents = await eSportsAPI.events.getLive();
console.log(liveEvents);

```

#### Returns

[`Events`](../internal/classes/Events.md)

#### Source

[src/client.ts:94](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L94)

***

### games

> `get` **games**(): [`Games`](../internal/classes/Games.md)

API for game related data fetching, such as fetching a game segment's data.

#### Example

```ts
import eSportsAPI from '@viriato/lol-esports-api';

const game = await eSportsAPI.games.get("110853167109116577");
console.log(game);

```

#### Returns

[`Games`](../internal/classes/Games.md)

#### Source

[src/client.ts:148](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L148)

***

### leagues

> `get` **leagues**(): [`Leagues`](../internal/classes/Leagues.md)

API for league related data fetching, such as their schedules and tournaments.

#### Example

```ts
import eSportsAPI from '@viriato/lol-esports-api';

const tournaments = await eSportsAPI.leagues.getTournaments("98767975604431411");
console.log(tournaments);
```

#### Returns

[`Leagues`](../internal/classes/Leagues.md)

#### Source

[src/client.ts:76](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L76)

***

### matches

> `get` **matches**(): [`Matches`](../internal/classes/Matches.md)

API for match related data fetching, such as getting a match event.

#### Example

```ts
import eSportsAPI from '@viriato/lol-esports-api';

const matchEventDetails = await eSportsAPI.matches.getEventDetails("108998961199240268");
console.log(matchEventDetails);

```

#### Returns

[`Matches`](../internal/classes/Matches.md)

#### Source

[src/client.ts:130](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L130)

***

### teams

> `get` **teams**(): [`Teams`](../internal/classes/Teams.md)

API for team related data fetching.

#### Example

```ts
import eSportsAPI from '@viriato/lol-esports-api';

const game = await eSportsAPI.teams.get("fnatic");
console.log(game);

```

#### Returns

[`Teams`](../internal/classes/Teams.md)

#### Source

[src/client.ts:166](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L166)

***

### tournaments

> `get` **tournaments**(): [`Tournaments`](../internal/classes/Tournaments.md)

API for tournament related data fetching, such as standings and completed events.

#### Example

```ts
import eSportsAPI from '@viriato/lol-esports-api';

const tournaments = await eSportsAPI.leagues.getTournaments("98767975604431411");
console.log(tournaments);

```

#### Returns

[`Tournaments`](../internal/classes/Tournaments.md)

#### Source

[src/client.ts:112](https://github.com/Viriatto/lol-esports-api/blob/783dfab6fe0c5578f68e0ef039a6d4ddff241e06/src/client.ts#L112)
