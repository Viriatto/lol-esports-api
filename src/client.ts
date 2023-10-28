import { Events as APIEvents } from "./interfaces/events.js";
import { Leagues as APILeagues } from "./interfaces/leagues.js";
import { Matches as APIMatches } from "./interfaces/matches.js";
import { Tournaments as APITournaments } from "./interfaces/tournaments.js";

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
export class Client {
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
}
