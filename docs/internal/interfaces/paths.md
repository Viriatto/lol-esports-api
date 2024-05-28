[**LoL Esports API Wrapper**](../../README.md) • **Docs**

***

[LoL Esports API Wrapper](../../globals.md) / [internal](../README.md) / paths

# Interface: paths

## Properties

### /details/\{gameId\}

> **/details/\{gameId\}**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.path

> **path**: `object`

#### get.parameters.path.gameId

> **gameId**: `string`

#### get.parameters.query?

> `optional` **query**: `object`

#### get.parameters.query.participantIds?

> `optional` **participantIds**: `string`

A list of the participant Ids separated by underscores and not commas

#### get.parameters.query.startingTime?

> `optional` **startingTime**: `string`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.frames

> **frames**: `object` & `object`[]

#### Source

[src/api-types.ts:48](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L48)

***

### /getCompletedEvents

> **/getCompletedEvents**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.hl

> **hl**: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"`

#### get.parameters.query.tournamentId?

> `optional` **tournamentId**: `string`[]

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.data

> **data**: `object`

#### get.responses.200.content.application/json.data.schedule

> **schedule**: `object`

#### get.responses.200.content.application/json.data.schedule.events

> **events**: `object` & `object`[]

#### Source

[src/api-types.ts:33](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L33)

***

### /getEventDetails

> **/getEventDetails**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.hl

> **hl**: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"`

#### get.parameters.query.id

> **id**: `string`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Succesful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.data

> **data**: `object`

#### get.responses.200.content.application/json.data.event

> **event**: `object` & `object`

##### Type declaration

###### match?

> `optional` **match**: `object`

###### match.teams

> **teams**: ...

##### Type declaration

###### id

> **id**: `string`

###### league

> **league**: `object` & `object`

###### Type declaration

###### name

> **name**: ...

The name of the league

###### slug

> **slug**: ...

URL friendly version of the league's name

###### Type declaration

###### id

> **id**: ...

The league's ID

###### image

> **image**: ...

URL to an image of the League's logo

###### match

> **match**: `object`

###### match.games

> **games**: ...[]

###### match.strategy

> **strategy**: `object`

###### match.strategy.count

> **count**: ...

###### match.teams

> **teams**: ...[]

###### streams

> **streams**: `null` \| ...[]

For a live match this will contain information about various streams,
the platforms they are on and the locale.

Otherwise it will be null.

###### type

> **type**: `"match"` \| `"show"`

#### Source

[src/api-types.ts:36](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L36)

***

### /getGames

> **/getGames**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.hl

> **hl**: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"`

#### get.parameters.query.id?

> `optional` **id**: `string`[]

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.data

> **data**: `object`

#### get.responses.200.content.application/json.data.games

> **games**: `object`[]

#### Source

[src/api-types.ts:42](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L42)

***

### /getLeagues

> **/getLeagues**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.hl

> **hl**: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.data

> **data**: `object`

#### get.responses.200.content.application/json.data.leagues

> **leagues**: `object` & `object` & `object` & `object`[]

#### Source

[src/api-types.ts:18](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L18)

***

### /getLive

> **/getLive**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.hl

> **hl**: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.data

> **data**: `object`

#### get.responses.200.content.application/json.data.schedule

> **schedule**: `object`

#### get.responses.200.content.application/json.data.schedule.events

> **events**: `null` \| ... & ... & ...[]

Array of event objects representing matches that are
currently ongoing.

This will be null if no match is taking place at that
time

#### Source

[src/api-types.ts:24](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L24)

***

### /getSchedule

> **/getSchedule**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.hl

> **hl**: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"`

#### get.parameters.query.leagueId?

> `optional` **leagueId**: `string`[]

#### get.parameters.query.pageToken?

> `optional` **pageToken**: `string`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.data

> **data**: `object`

#### get.responses.200.content.application/json.data.schedule

> **schedule**: `object`

#### get.responses.200.content.application/json.data.schedule.events

> **events**: `object` & `object` & `object`[]

#### get.responses.200.content.application/json.data.schedule.pages

> **pages**: `object`

#### get.responses.200.content.application/json.data.schedule.pages.newer

> **newer**: `null` \| `string`

#### get.responses.200.content.application/json.data.schedule.pages.older

> **older**: `null` \| `string`

#### get.responses.200.content.application/json.data.schedule.updated

> **updated**: `string`

Format: date-time
 The time the data presented was last updated

#### Source

[src/api-types.ts:21](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L21)

***

### /getStandings

> **/getStandings**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.hl

> **hl**: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"`

#### get.parameters.query.tournamentId?

> `optional` **tournamentId**: `string`[]

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.data

> **data**: `object`

#### get.responses.200.content.application/json.data.standings

> **standings**: `object`[]

Each object in the array contains details of each tournament requested.

#### Source

[src/api-types.ts:30](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L30)

***

### /getTeams

> **/getTeams**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.hl

> **hl**: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"`

#### get.parameters.query.id?

> `optional` **id**: `string`[]

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.data

> **data**: `object`

#### get.responses.200.content.application/json.data.teams

> **teams**: `object` & `object`[]

#### Source

[src/api-types.ts:39](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L39)

***

### /getTournamentsForLeague

> **/getTournamentsForLeague**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.hl

> **hl**: `"en-US"` \| `"en-GB"` \| `"en-AU"` \| `"cs-CZ"` \| `"de-DE"` \| `"el-GR"` \| `"es-ES"` \| `"es-MX"` \| `"fr-FR"` \| `"hu-HU"` \| `"it-IT"` \| `"pl-PL"` \| `"pt-BR"` \| `"ro-RO"` \| `"ru-RU"` \| `"tr-TR"` \| `"ja-JP"` \| `"ko-KR"`

#### get.parameters.query.leagueId?

> `optional` **leagueId**: `string`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.data

> **data**: `object`

#### get.responses.200.content.application/json.data.leagues

> **leagues**: `object`[]

An array of league object(s) where each object contains an array of
tournaments.

#### Source

[src/api-types.ts:27](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L27)

***

### /highlanderTournaments

> **/highlanderTournaments**: `object`

#### get

> **get**: `object`

If a league does not have highlanderTournament objects, the API will return 404

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.league

> **league**: `string`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`[]

#### get.responses.404

> **404**: `object`

Not Found

#### get.responses.404.content

> **content**: `object`

#### get.responses.404.content.application/json

> **application/json**: `object`

#### get.responses.404.content.application/json.error

> **error**: `object`

#### get.responses.404.content.application/json.error.message

> **message**: `string`

#### get.responses.404.content.application/json.error.statusCode

> **statusCode**: `404`

#### Source

[src/api-types.ts:69](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L69)

***

### /leagues

> **/leagues**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.query

> **query**: [`Without`](../type-aliases/Without.md)\<`object`, `object`\> & `object` \| [`Without`](../type-aliases/Without.md)\<`object`, `object`\> & `object`

'This endpoint requires either the id or the slug to be passed. If both are present then only the first
one will be considered.

_Due to a limitation in the OpenApi specification it is not possible to show the mutual exclusive nature
that the query parameters in this endpoint require. The schema below is as close as a representation I
could get in expressing the nature of the query parameters._

Check the examples below to help better understand the query parameters needed.

**Example 1**

`https://api.lolesports.com/api/v1/leagues?id=3`

This will return the details for **LEC**.

**Example 2**

`https://api.lolesports.com/api/v1/leagues?slug=worlds`

This will return the details for **Worlds**

**Example 3**

`https://api.lolesports.com/api/v1/leagues?id=3&slug=worlds`

In such a scenario where both query parameters are used only the first will be considered, hence it will
only return the details for **LEC**.

**Example 4**

`https://api.lolesports.com/api/v1/leagues`

This is not valid. At least one of the two query parameters (id or slug) is required.'

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.highlanderRecords?

> `optional` **highlanderRecords**: `object`[]

#### get.responses.200.content.application/json.highlanderTournaments?

> `optional` **highlanderTournaments**: `object`[]

#### get.responses.200.content.application/json.leagues

> **leagues**: `object` & `object`[]

This array contains information about the league retrieved.

#### get.responses.200.content.application/json.players?

> `optional` **players**: `object`[]

#### get.responses.200.content.application/json.teams?

> `optional` **teams**: `object`[]

#### get.responses.404

> **404**: `object`

Not Found

#### get.responses.404.content

> **content**: `object`

#### get.responses.404.content.application/json

> **application/json**: `object`

#### get.responses.404.content.application/json.error?

> `optional` **error**: `"Invalid Input Error"`

#### Source

[src/api-types.ts:73](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L73)

***

### /navItems

> **/navItems**: `object`

#### get

> **get**: `object`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.leagues

> **leagues**: `object` & `object`[]

#### get.responses.200.content.application/json.navItems

> **navItems**: `object`[]

#### Source

[src/api-types.ts:51](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L51)

***

### /players

> **/players**: `object`

#### get

> **get**: `object`

If the `playerStatsSummaries` and `playerStatsHistories` keys are not present,
then the player did not take part in that particular tournament.

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.slug

> **slug**: `string`

#### get.parameters.query.tournament

> **tournament**: `string`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.highlanderTournaments

> **highlanderTournaments**: `object`[]

Contains the various tournaments the player has participated in.

#### get.responses.200.content.application/json.playerStatsHistories?

> `optional` **playerStatsHistories**: `object`[]

Displays stats from the recently played matches in that particular tournaments.
The array starts with the most recently played match.

#### get.responses.200.content.application/json.playerStatsSummaries?

> `optional` **playerStatsSummaries**: `object`[]

The stats displayed here are for the player during the tournament specified in the url

#### get.responses.200.content.application/json.players

> **players**: `object` & `object`[]

Contains information about the player in question.

If `playerStatsSummary` and `playerStatsHistory` are missing then the player did not take part
in the tournament specificed by the tournament ID in the url.

#### get.responses.200.content.application/json.scheduleItems

> **scheduleItems**: `object` & `object`[]

Contains details about the next 4 matches the player's team is schedule to participate in.

#### get.responses.200.content.application/json.teams

> **teams**: `object`[]

#### Source

[src/api-types.ts:86](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L86)

***

### /scheduleItems

> **/scheduleItems**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.leagueId

> **leagueId**: `string`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.highlanderRecords?

> `optional` **highlanderRecords**: `object`[]

#### get.responses.200.content.application/json.highlanderTournaments?

> `optional` **highlanderTournaments**: `object`[]

#### get.responses.200.content.application/json.players?

> `optional` **players**: `object`[]

#### get.responses.200.content.application/json.scheduleItems?

> `optional` **scheduleItems**: (`object` & `object` \| `object` & `object`)[]

#### get.responses.200.content.application/json.teams?

> `optional` **teams**: `object`[]

#### Source

[src/api-types.ts:76](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L76)

***

### /teams

> **/teams**: `object`

#### get

> **get**: `object`

If the `teamStatsSummaries`, `teamRosterStats` and `teamStatsHistories` keys are not present,
then the team did not take part in that particular tournament.

#### get.parameters

> **parameters**: `object`

#### get.parameters.query

> **query**: `object`

#### get.parameters.query.slug

> **slug**: `string`

#### get.parameters.query.tournament

> **tournament**: `string`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.highlanderTournaments

> **highlanderTournaments**: `object`[]

#### get.responses.200.content.application/json.players

> **players**: `object` & `object`[]

Contains the players currently in the team.

#### get.responses.200.content.application/json.scheduleItems

> **scheduleItems**: (`object` & `object` \| `object` & `object`)[]

Contains details about a few of the team's upcoming matches

#### get.responses.200.content.application/json.teamRosterStats?

> `optional` **teamRosterStats**: `object`[]

Contains stats of the players of the particular team who played in that tournament.

#### get.responses.200.content.application/json.teamStatsHistories?

> `optional` **teamStatsHistories**: `object`[]

A contains stats of the team's previous 4 matches in that particular tournament.

#### get.responses.200.content.application/json.teamStatsSummaries?

> `optional` **teamStatsSummaries**: `object`[]

Contains a summary of the team stats during that particular tournament.

#### get.responses.200.content.application/json.teams

> **teams**: `object`[]

#### Source

[src/api-types.ts:79](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L79)

***

### /videos

> **/videos**: `object`

#### get

> **get**: `object`

This endpoint returns details about esports vods on YouTube.

The data returned by this endpoint is fairly large (more than 5MB) since
it includes vods from 2015 up to (at the time of writing this) June 2019
and it will continue growing.

Do consider this when dealing with clients (like mobile phones) where
bandwidth and memory may be scarce.

It is highly advised that you cache the data from this endpoint.

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.videos

> **videos**: `object`[]

#### Source

[src/api-types.ts:54](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L54)

***

### /window/\{gameId\}

> **/window/\{gameId\}**: `object`

#### get

> **get**: `object`

#### get.parameters

> **parameters**: `object`

#### get.parameters.path

> **path**: `object`

#### get.parameters.path.gameId

> **gameId**: `string`

#### get.parameters.query?

> `optional` **query**: `object`

#### get.parameters.query.startingTime?

> `optional` **startingTime**: `string`

#### get.responses

> **responses**: `object`

#### get.responses.200

> **200**: `object`

Successful request

#### get.responses.200.content

> **content**: `object`

#### get.responses.200.content.application/json

> **application/json**: `object`

#### get.responses.200.content.application/json.esportsGameId

> **esportsGameId**: `string`

The game Id of the match

#### get.responses.200.content.application/json.esportsMatchId

> **esportsMatchId**: `string`

The match Id of the match

#### get.responses.200.content.application/json.frames

> **frames**: `object` & `object`[]

#### get.responses.200.content.application/json.gameMetadata

> **gameMetadata**: `object`

#### get.responses.200.content.application/json.gameMetadata.blueTeamMetadata

> **blueTeamMetadata**: `object`

#### get.responses.200.content.application/json.gameMetadata.blueTeamMetadata.esportsTeamId

> **esportsTeamId**: `string`

The team Id

#### get.responses.200.content.application/json.gameMetadata.blueTeamMetadata.participantMetadata

> **participantMetadata**: (`object` \| ... & ...)[]

#### get.responses.200.content.application/json.gameMetadata.patchVersion

> **patchVersion**: `string`

The patch the match was played on

#### get.responses.200.content.application/json.gameMetadata.redTeamMetadata

> **redTeamMetadata**: `object`

#### get.responses.200.content.application/json.gameMetadata.redTeamMetadata.esportsTeamId

> **esportsTeamId**: `string`

The team Id

#### get.responses.200.content.application/json.gameMetadata.redTeamMetadata.participantMetadata

> **participantMetadata**: (`object` \| ... & ...)[]

#### Source

[src/api-types.ts:45](https://github.com/Viriatto/lol-esports-api/blob/f75af3cc48e6c5c022cb9cef4afcf61deb2fdb5b/src/api-types.ts#L45)
