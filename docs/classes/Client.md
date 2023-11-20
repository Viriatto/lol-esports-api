[LoL Esports API Wrapper - v0.2.5](../README.md) / [Exports](../modules.md) / Client

# Class: Client

Main entity of the module.

**`Example`**

Getting all leagues' schedules.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const schedule = await eSportsAPI.leagues.getSchedule();
```

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [\_events](Client.md#_events)
- [\_games](Client.md#_games)
- [\_leagues](Client.md#_leagues)
- [\_matches](Client.md#_matches)
- [\_teams](Client.md#_teams)
- [\_tournaments](Client.md#_tournaments)

### Accessors

- [events](Client.md#events)
- [games](Client.md#games)
- [leagues](Client.md#leagues)
- [matches](Client.md#matches)
- [teams](Client.md#teams)
- [tournaments](Client.md#tournaments)

## Constructors

### constructor

• **new Client**()

## Properties

### \_events

• `Private` `Readonly` **\_events**: [`Events`](internal.Events.md)

API for live event data fetching.

#### Defined in

[src/client.ts:33](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L33)

---

### \_games

• `Private` `Readonly` **\_games**: [`Games`](internal.Games.md)

API for game related data fetching, such as fetching a game segment's data.

#### Defined in

[src/client.ts:54](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L54)

---

### \_leagues

• `Private` `Readonly` **\_leagues**: [`Leagues`](internal.Leagues.md)

API for league related data fetching, such as their schedules and tournaments.

#### Defined in

[src/client.ts:26](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L26)

---

### \_matches

• `Private` `Readonly` **\_matches**: [`Matches`](internal.Matches.md)

API for match related data fetching, such as getting a match event.

#### Defined in

[src/client.ts:47](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L47)

---

### \_teams

• `Private` `Readonly` **\_teams**: [`Teams`](internal.Teams.md)

API for team related data fetching.

#### Defined in

[src/client.ts:61](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L61)

---

### \_tournaments

• `Private` `Readonly` **\_tournaments**: [`Tournaments`](internal.Tournaments.md)

API for tournament related data fetching, such as standings and completed events.

#### Defined in

[src/client.ts:40](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L40)

## Accessors

### events

• `get` **events**(): [`Events`](internal.Events.md)

API for live event data fetching.

#### Returns

[`Events`](internal.Events.md)

**`Example`**

Logs currently live events.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const liveEvents = await eSportsAPI.events.getLive();
console.log(liveEvents);
```

#### Defined in

[src/client.ts:94](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L94)

---

### games

• `get` **games**(): [`Games`](internal.Games.md)

API for game related data fetching, such as fetching a game segment's data.

#### Returns

[`Games`](internal.Games.md)

**`Example`**

Logs a game's response data.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const game = await eSportsAPI.games.get("110853167109116577");
console.log(game);
```

#### Defined in

[src/client.ts:148](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L148)

---

### leagues

• `get` **leagues**(): [`Leagues`](internal.Leagues.md)

API for league related data fetching, such as their schedules and tournaments.

#### Returns

[`Leagues`](internal.Leagues.md)

**`Example`**

Logs data of all Worlds tournaments.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const tournaments =
  await eSportsAPI.leagues.getTournaments("98767975604431411");
console.log(tournaments);
```

#### Defined in

[src/client.ts:76](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L76)

---

### matches

• `get` **matches**(): [`Matches`](internal.Matches.md)

API for match related data fetching, such as getting a match event.

#### Returns

[`Matches`](internal.Matches.md)

**`Example`**

Logs the event details of Worlds 2022 MAD vs ISG match.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const matchEventDetails =
  await eSportsAPI.matches.getEventDetails("108998961199240268");
console.log(matchEventDetails);
```

#### Defined in

[src/client.ts:130](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L130)

---

### teams

• `get` **teams**(): [`Teams`](internal.Teams.md)

API for team related data fetching.

#### Returns

[`Teams`](internal.Teams.md)

**`Example`**

Logs a team's response data.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const game = await eSportsAPI.teams.get("fnatic");
console.log(game);
```

#### Defined in

[src/client.ts:166](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L166)

---

### tournaments

• `get` **tournaments**(): [`Tournaments`](internal.Tournaments.md)

API for tournament related data fetching, such as standings and completed events.

#### Returns

[`Tournaments`](internal.Tournaments.md)

**`Example`**

Logs data of all Worlds tournaments.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const tournaments =
  await eSportsAPI.leagues.getTournaments("98767975604431411");
console.log(tournaments);
```

#### Defined in

[src/client.ts:112](https://github.com/Viriatto/lol-esports-api/blob/d78a7bd/src/client.ts#L112)
