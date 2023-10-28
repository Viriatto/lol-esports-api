import { APILocale, Interface } from "../interface.js";
import { parseValueOrValuesAsArray } from "../utils.js";

/**
 * Interfaces with all of tournaments related endpoints.
 *
 * @internal @sealed
 */
export class Tournaments extends Interface {
  /**
   * Fetches data for completed events of all tournaments, a particular tournament, or a set of tournaments.
   *
   * @remarks
   * If `tournamentIdOrIds` is `undefined`, pulls data for all tournaments.
   *
   * @param tournamentIdOrIds - The id(s) of the tournament(s) from which to pull completed event data.
   * @param locale - The locale of the response.
   * @returns Data on the completed events of the tournament(s).
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getCompletedEvents | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async getCompletedEvents(
    tournamentIdOrIds?: string | [string, ...string[]],
    locale: APILocale = "en-US"
  ) {
    return this._get(this._baseURLs.main, "/getCompletedEvents", {
      query: {
        tournamentId: tournamentIdOrIds
          ? parseValueOrValuesAsArray(tournamentIdOrIds)
          : undefined,
        hl: locale,
      },
    });
  }

  /**
   * Fetches data for the standings of a particular tournament or tournaments.
   *
   * @param tournamentIdOrIds - The id(s) of the tournament(s) from which to pull completed event data.
   * @param locale - The locale of the response.
   * @returns Data on the completed events of a particular tournament.
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getCompletedEvents | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async getStandings(
    tournamentIdOrIds: string | [string, ...string[]],
    locale: APILocale = "en-US"
  ) {
    return this._get(this._baseURLs.main, "/getStandings", {
      query: {
        tournamentId: parseValueOrValuesAsArray(tournamentIdOrIds),
        hl: locale,
      },
    });
  }
}
