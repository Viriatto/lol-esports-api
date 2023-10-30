import APIEvents from "./interfaces/events.js";
import APILeagues from "./interfaces/leagues.js";
import APIMatches from "./interfaces/matches.js";
import APITournaments from "./interfaces/tournaments.js";
import APIGames from "./interfaces/games.js";
import APITeams from "./interfaces/teams.js";

/**
 * Main entity of the module.
 *
 * @example Getting all leagues' schedules.
 * ```ts
 * import eSportsAPI from '@viriato/lol-esports-api';
 *
 * const schedule = await eSportsAPI.leagues.getSchedule();
 * ```
 *
 * @public
 */
export default class Client {
  /**
   * API for league related data fetching, such as their schedules and tournaments.
   *
   * @sealed @readonly @internal
   */
  private readonly _leagues = new APILeagues();

  /**
   * API for live event data fetching.
   *
   * @sealed @readonly @internal
   */
  private readonly _events = new APIEvents();

  /**
   * API for tournament related data fetching, such as standings and completed events.
   *
   * @sealed @readonly @internal
   */
  private readonly _tournaments = new APITournaments();

  /**
   * API for match related data fetching, such as getting a match event.
   *
   * @sealed @readonly @internal
   */
  private readonly _matches = new APIMatches();

  /**
   * API for game related data fetching, such as fetching a game segment's data.
   *
   * @sealed @readonly @internal
   */
  private readonly _games = new APIGames();

  /**
   * API for team related data fetching.
   *
   * @sealed @readonly @internal
   */
  private readonly _teams = new APITeams();

  /**
   * {@inheritDoc Client._leagues}
   *
   * @example Logs data of all Worlds tournaments.
   * ```ts
   * import eSportsAPI from '@viriato/lol-esports-api';
   *
   * const tournaments = await eSportsAPI.leagues.getTournaments("98767975604431411");
   * console.log(tournaments);
   * ```
   *
   * @public @readonly @sealed
   */
  public get leagues() {
    return this._leagues;
  }

  /**
   * {@inheritDoc Client._events}
   *
   * @example Logs currently live events.
   * ```ts
   * import eSportsAPI from '@viriato/lol-esports-api';
   *
   * const liveEvents = await eSportsAPI.events.getLive();
   * console.log(liveEvents);
   *
   * ```
   *
   * @public @readonly @sealed
   */
  public get events() {
    return this._events;
  }

  /**
   * {@inheritDoc Client._tournaments}
   *
   * @example Logs data of all Worlds tournaments.
   * ```ts
   * import eSportsAPI from '@viriato/lol-esports-api';
   *
   * const tournaments = await eSportsAPI.leagues.getTournaments("98767975604431411");
   * console.log(tournaments);
   *
   * ```
   *
   * @public @readonly @sealed
   */
  public get tournaments() {
    return this._tournaments;
  }

  /**
   * {@inheritDoc Client._matches}
   *
   * @example Logs the event details of Worlds 2022 MAD vs ISG match.
   * ```ts
   * import eSportsAPI from '@viriato/lol-esports-api';
   *
   * const matchEventDetails = await eSportsAPI.matches.getEventDetails("108998961199240268");
   * console.log(matchEventDetails);
   *
   * ```
   *
   * @public @readonly @sealed
   */
  public get matches() {
    return this._matches;
  }

  /**
   * {@inheritDoc Client._games}
   *
   * @example Logs a game's response data.
   * ```ts
   * import eSportsAPI from '@viriato/lol-esports-api';
   *
   * const game = await eSportsAPI.games.get("110853167109116577");
   * console.log(game);
   *
   * ```
   *
   * @public @readonly @sealed
   */
  public get games() {
    return this._games;
  }

  /**
   * {@inheritDoc Client._teams}
   *
   * @example Logs a team's response data.
   * ```ts
   * import eSportsAPI from '@viriato/lol-esports-api';
   *
   * const game = await eSportsAPI.teams.get("fnatic");
   * console.log(game);
   *
   * ```
   *
   * @public @readonly @sealed
   */
  public get teams() {
    return this._teams;
  }
}
