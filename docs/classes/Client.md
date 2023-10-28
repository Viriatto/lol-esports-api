[LoL Esports API Wrapper - v0.2.0](../README.md) / [Exports](../modules.md) / Client

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
- [\_leagues](Client.md#_leagues)
- [\_matches](Client.md#_matches)
- [\_tournaments](Client.md#_tournaments)

### Accessors

- [events](Client.md#events)
- [leagues](Client.md#leagues)
- [matches](Client.md#matches)
- [tournaments](Client.md#tournaments)

## Constructors

### constructor

• **new Client**()

## Properties

### \_events

• `Private` `Readonly` **\_events**: [`Events`](internal_.Events.md)

API for live event data fetching.

#### Defined in

[src/client.ts:31](https://github.com/Viriatto/lol-esports-api/blob/263a411/src/client.ts#L31)

---

### \_leagues

• `Private` `Readonly` **\_leagues**: [`Leagues`](internal_.Leagues.md)

API for league related data fetching, such as their schedules and tournaments.

#### Defined in

[src/client.ts:24](https://github.com/Viriatto/lol-esports-api/blob/263a411/src/client.ts#L24)

---

### \_matches

• `Private` `Readonly` **\_matches**: [`Matches`](internal_.Matches.md)

API for match related data fetching, such as getting a match event.

#### Defined in

[src/client.ts:45](https://github.com/Viriatto/lol-esports-api/blob/263a411/src/client.ts#L45)

---

### \_tournaments

• `Private` `Readonly` **\_tournaments**: [`Tournaments`](internal_.Tournaments.md)

API for tournament related data fetching, such as standings and completed events.

#### Defined in

[src/client.ts:38](https://github.com/Viriatto/lol-esports-api/blob/263a411/src/client.ts#L38)

## Accessors

### events

• `get` **events**(): [`Events`](internal_.Events.md)

API for live event data fetching.

#### Returns

[`Events`](internal_.Events.md)

**`Example`**

Logs currently live events.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const liveEvents = await eSportsAPI.events.getLive();
console.log(liveEvents);
```

#### Defined in

[src/client.ts:78](https://github.com/Viriatto/lol-esports-api/blob/263a411/src/client.ts#L78)

---

### leagues

• `get` **leagues**(): [`Leagues`](internal_.Leagues.md)

API for league related data fetching, such as their schedules and tournaments.

#### Returns

[`Leagues`](internal_.Leagues.md)

**`Example`**

Logs data of all Worlds tournaments.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const tournaments = await eSportsAPI.leagues.getTournaments(
  "98767975604431411"
);
console.log(tournaments);
```

#### Defined in

[src/client.ts:60](https://github.com/Viriatto/lol-esports-api/blob/263a411/src/client.ts#L60)

---

### matches

• `get` **matches**(): [`Matches`](internal_.Matches.md)

API for match related data fetching, such as getting a match event.

#### Returns

[`Matches`](internal_.Matches.md)

**`Example`**

Logs the event details of Worlds 2022 MAD vs ISG match.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const matchEventDetails = await eSportsAPI.matches.getEventDetails(
  "108998961199240268"
);
console.log(matchEventDetails);
```

#### Defined in

[src/client.ts:114](https://github.com/Viriatto/lol-esports-api/blob/263a411/src/client.ts#L114)

---

### tournaments

• `get` **tournaments**(): [`Tournaments`](internal_.Tournaments.md)

API for tournament related data fetching, such as standings and completed events.

#### Returns

[`Tournaments`](internal_.Tournaments.md)

**`Example`**

Logs data of all Worlds tournaments.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const tournaments = await eSportsAPI.leagues.getTournaments(
  "98767975604431411"
);
console.log(tournaments);
```

#### Defined in

[src/client.ts:96](https://github.com/Viriatto/lol-esports-api/blob/263a411/src/client.ts#L96)
