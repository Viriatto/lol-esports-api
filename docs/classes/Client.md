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

**`Example`**

Logs currently live events.

```ts
import eSportsAPI from "@viriato/lol-esports-api";

const liveEvents = await eSportsAPI.events.getLive();
console.log(liveEvents);
```

#### Defined in

[src/client.ts:49](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/client.ts#L49)

---

### \_leagues

• `Private` `Readonly` **\_leagues**: [`Leagues`](internal_.Leagues.md)

API for league related data fetching, such as their schedules and tournaments.

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

[src/client.ts:33](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/client.ts#L33)

---

### \_matches

• `Private` `Readonly` **\_matches**: [`Matches`](internal_.Matches.md)

API for match related data fetching, such as getting a match event.

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

[src/client.ts:81](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/client.ts#L81)

---

### \_tournaments

• `Private` `Readonly` **\_tournaments**: [`Tournaments`](internal_.Tournaments.md)

API for tournament related data fetching, such as standings and completed events.

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

[src/client.ts:65](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/client.ts#L65)

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

[src/client.ts:115](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/client.ts#L115)

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

[src/client.ts:97](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/client.ts#L97)

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

[src/client.ts:151](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/client.ts#L151)

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

[src/client.ts:133](https://github.com/Viriatto/lol-esports-api/blob/f81735a/src/client.ts#L133)
