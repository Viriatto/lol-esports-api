import Interface, { APILocale } from "../interface.js";
import { parseValueOrValuesAsArray } from "../utils.js";

/**
 * Interfaces with all of tournaments related endpoints.
 *
 * @internal @sealed
 */
export default class Tournaments extends Interface {
  /**
   * Fetches data for completed events of all tournaments, a particular tournament, or a set of tournaments.
   *
   * @remarks
   * If `tournamentIdOrIds` is `undefined`, pulls data for all tournaments.
   *
   * @param tournamentId - The id of the tournament from which to pull completed event data.
   * @param locale - The locale of the response.
   * @returns Data on the completed events of the tournament.
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getCompletedEvents | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async getCompletedEvents(
    tournamentId?: string,
    locale: APILocale = "en-US"
  ) {
    return this._get(this._baseURLs.main, "/getCompletedEvents", {
      query: {
        tournamentId: tournamentId ? [tournamentId] : undefined,
        hl: locale,
      },
    });
  }

  /**
   * Fetches data for the standings of a particular tournament or tournaments.
   *
   * @param tournamentId - The id of the tournament from which to pull standings data.
   * @param locale - The locale of the response.
   * @returns Data on the completed events of a particular tournament.
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getCompletedEvents | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async getStandings(tournamentId: string, locale: APILocale = "en-US") {
    return this._get(this._baseURLs.main, "/getStandings", {
      query: {
        tournamentId: parseValueOrValuesAsArray(tournamentId),
        hl: locale,
      },
    });
  }
}
