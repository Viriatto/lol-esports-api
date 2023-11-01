LoL Esports API Wrapper / [Exports](modules.md)

# Unofficial League Esports API Wrapper

This is a simple wrapper of League of Legends' eSports API.

A huge contribution to this project has been [vickz84259's documentation](https://vickz84259.github.io/lolesports-api-docs/), from which the API responses' types have been generated.

**[Full API Reference](https://github.com/Viriatto/lol-esports-api/blob/master/docs/modules.md)**

---

## Usage

- [Events](#events)
- [Games](#games)
- [Leagues](#leagues)
- [Matches](#matches)
- [Teams](#teams)
- [Tournaments](#tournaments)

#### Events

##### Fetching currently live events:

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();
const liveEvents = await client.events.getLive();
```

---

#### Games

##### Fetching a game:

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();
const game = await client.games.get("110853167109116577");
```

##### Fetching data for a portion of a game:

The API's response contains a `frames` array property where each element represents a "snapshot" of the game's state. It spans a period of 10 seconds.

If given a `startingDate` parameter value of a later point in time than the end of the game, it will return with the game's last 10 frames. This can be useful if you'd like to fetch a game's finished state data.

It includes information such as objectives taken and players' scoreboard data. To fetch more detailed information, see [getDetails](#fetching-detailed-data-for-a-portion-of-a-game).

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();

const gameWindow = await client.games.getWindow(
  "110853167109116577",
  "2023-10-19T09:35:40.000Z" // can either be a string or a Date
);
```

##### Fetching **detailed** data for a portion of a game:

Works similarly to [getWindow](#fetching-data-for-a-portion-of-a-game), except it returns with more detailed information such as champion level and stats, creep score, gold earned, ability level up sequence, etc.

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();

const detailedGameWindow = await client.games.getDetails(
  "110853167109116577",
  "2023-10-19T09:35:40.000Z" // can either be a string or a Date
);
```

---

#### Leagues

##### Fetching all leagues:

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();
const leagues = await client.leagues.get();
```

##### Fetching a league's tournaments:

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();
const leagueTournaments = await client.leagues.getTournaments(
  "98767975604431411"
);
```

##### Fetching a league's schedule:

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();
const leagueSchedule = await client.leagues.getSchedule("98767975604431411");
```

---

#### Matches

##### Fetching a match's event:

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();
const matchEvent = await client.matches.getEvent("108998961199240268");
```

---

#### Teams

##### Fetching all teams:

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();
const teams = await client.teams.get();
```

##### Fetching a single team:

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();
const fnaticTeam = await client.teams.get("fnatic");
```

---

#### Tournaments

##### Fetch a tournament's completed events:

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();
const tournaments = await client.tournaments.getCompletedEvents(
  "108998961191900167"
);
```

##### Fetch a tournament's standings:

```ts
import APIClient from "lol-esports-api";

const client = new APIClient();
const standings = await client.tournaments.getStandings("108998961191900167");
```
