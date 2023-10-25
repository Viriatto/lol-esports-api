import Interface, { APILocale } from "../interface.js";
import { parseValueOrValuesAsArray } from "../utils.js";

/**
 * Interfaces with all of game related endpoints.
 *
 * @internal @sealed
 */
export default class Games extends Interface {
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
    gameIdOrIds: number | number[],
    locale: APILocale = "en-US"
  ) {
    return this._get(this._baseURLs.main, "/getGames", {
      hl: locale,
      id: parseValueOrValuesAsArray(gameIdOrIds),
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
  public async getWindow(startingAt: string | Date) {
    return this._get(this._baseURLs.feed, "/getWindow", {
      startingTime:
        typeof startingAt === "string" ? startingAt : startingAt.toISOString(),
    });
  }

  /**
   * Fetches detailed information for a particular section of a game, such as participants' champion stats and ability level up sequence.
   *
   * @remarks
   * The response's data contains a `frames` array property which includes "snapshots" of game states for a time span of 10 seconds.
   *
   * @param participantIdsOrIds - The ids of the participants from which to fetch data.
   * @param startingAt - The starting date of the segment to fetch from the game. If it is later than the end date of the game, retrieves the last 10 frames.
   * @returns
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getDetails | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async getDetails(
    participantIdsOrIds: number | number[],
    startingAt: string | Date
  ) {
    return this._get(this._baseURLs.feed, "/getDetails", {
      participantIds: parseValueOrValuesAsArray(participantIdsOrIds).join("_"),
      startingTime:
        typeof startingAt === "string" ? startingAt : startingAt.toISOString(),
    });
  }
}
