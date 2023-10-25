import Interface, { APILocale } from "../interface.js";
import { parseValueOrValuesAsArray } from "../utils.js";

/**
 * Interfaces with all of league related endpoints.
 *
 * @internal @sealed
 */
export default class Leagues extends Interface {
  /**
   * Fetches data on all leagues.
   *
   * @param locale - The locale of the response.
   * @returns Data about all leagues.
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getLeagues | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async get(locale: APILocale = "en-US") {
    return this._get(this._baseURLs.main, "/getLeagues", {
      hl: locale,
    });
  }

  /**
   * Fetches data on all tournaments from a specific league.
   *
   * @param leagueId - The id of the league from which to fetch tournaments information.
   * @param locale - The locale of the response.
   * @returns Data on all tournaments from a specific league.
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getTournamentsForLeague | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async getTournaments(leagueId?: number, locale: APILocale = "en-US") {
    return this._get(this._baseURLs.main, "/getTournamentsForLeague", {
      leagueId,
      hl: locale,
    });
  }

  /**
   * Fetches the schedule for a particular league.
   *
   * @param leagueIdOrIds - The id of the league from which to fetch the schedule.
   * @param locale - The locale of the response.
   * @param pageToken - Base 64 encoded string used to determine the next "page" of data to pull.
   * @returns Data on all tournaments from a specific league.
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getSchedule | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async getSchedule(
    leagueIdOrIds?: number[] | number,
    pageToken?: string,
    locale: APILocale = "en-US"
  ) {
    return this._get(this._baseURLs.main, "/getSchedule", {
      leagueId: leagueIdOrIds
        ? parseValueOrValuesAsArray(leagueIdOrIds)
        : undefined,
      pageToken,
      hl: locale,
    });
  }
}
