import { APILocale, Interface } from "../interface.js";
import { parseValueOrValuesAsArray } from "../utils.js";

/**
 * Interfaces with all of game related endpoints.
 *
 * @internal @sealed
 */
export class Games extends Interface {
  /**
   * Fetches data for a game or games.
   *
   * @param gameIdOrIds - The id or ids of the games to which fetch.
   * @param locale - The locale of the response.
   * @returns Data about the games.
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getGames | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async get(
    gameIdOrIds: string | string[],
    locale: APILocale = "en-US"
  ) {
    return this._get(this._baseURLs.main, "/getGames", {
      query: {
        hl: locale,
        id: parseValueOrValuesAsArray(gameIdOrIds),
      },
    });
  }

  /**
   * Fetches overall information for a particular section of a game, such as game state, objectives taken and participants scoreboard information.
   *
   * @remarks
   * The response's data contains a `frames` array property which includes "snapshots" of game states for a time span of 10 seconds.
   *
   * @param startingAt - The starting date of the segment to fetch from the game. If it is later than the end date of the game, retrieves the last 10 frames.
   * @returns Data on a segment of the game.
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getGames | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async getWindow(gameId: string, startingAt: string | Date) {
    return this._get(this._baseURLs.feed, "/window/{gameId}", {
      query: {
        startingTime:
          typeof startingAt === "string"
            ? startingAt
            : startingAt.toISOString(),
      },
      path: {
        gameId,
      },
    });
  }

  /**
   * Fetches detailed information for a particular section of a game, such as participants' champion stats and ability level up sequence.
   *
   * @remarks
   * The response's data contains a `frames` array property which includes "snapshots" of game states for a time span of 10 seconds.
   *
   * @param gameId - The game id from which to fetch data.
   * @param participantIdsOrIds - The ids of the participants from which to fetch data.
   * @param startingAt - The starting date of the segment to fetch from the game. If it is later than the end date of the game, retrieves the last 10 frames.
   * @returns
   *
   * @example Log the details on the last 10 frames
   * ```ts
   * import APIClient from 'lol-esports-api';
   *
   * const client = new APIClient();
   * const liveEvents = await client.getLive();
   *
   * console.log(liveEvents);
   * ```
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getDetails | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async getDetails(
    gameId: string,
    participantIdsOrIds: number | number[],
    startingAt: string | Date
  ) {
    return this._get(this._baseURLs.feed, "/details/{gameId}", {
      query: {
        participantIds:
          parseValueOrValuesAsArray(participantIdsOrIds).join("_"),
        startingTime:
          typeof startingAt === "string"
            ? startingAt
            : startingAt.toISOString(),
      },
      path: {
        gameId,
      },
    });
  }
}
