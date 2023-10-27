import Interface, { APILocale } from "../interface.js";
import { parseValueOrValuesAsArray } from "../utils.js";

/**
 * Interfaces with all of teams related endpoints.
 *
 * @internal @sealed
 */
export default class Teams extends Interface {
  /**
   * Fetches data for all teams or a particular team.
   *
   * @remarks
   * If `teamId` is undefined, fetches data for all teams.
   *
   * @param teamIdOrIds - A specific team id from which to pull data.
   * @param locale - The locale of the response.
   * @returns Data on a particular team or all teams.
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getTeams | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async get(
    teamIdOrIds?: string | [string, ...string[]],
    locale: APILocale = "en-US"
  ) {
    return this._get(this._baseURLs.main, "/getTeams", {
      query: {
        id: teamIdOrIds ? parseValueOrValuesAsArray(teamIdOrIds) : undefined,
        hl: locale,
      },
    });
  }
}
