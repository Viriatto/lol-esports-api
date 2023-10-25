import Interface, { APILocale } from "../interface.js";

/**
 * Interfaces with all of match related endpoints.
 *
 * @internal @sealed
 */
export default class Matches extends Interface {
  /**
   * Fetches event details for a particular match.
   *
   * @param matchId - The id of the match from which pull the event's details.
   * @param locale - The locale of the response.
   * @returns Data on the event details of a particular match.
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getGames | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async getEvent(matchId: number, locale: APILocale = "en-US") {
    return this._get(this._baseURLs.main, "/getEventDetails", {
      id: matchId,
      hl: locale,
    });
  }
}
