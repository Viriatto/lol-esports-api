import Interface, { APILocale } from "../interface.js";
import { parseValueOrValuesAsArray } from "../utils.js";

export default class Tournaments extends Interface {
  public async getCompletedEvents(
    tournamentIdOrIds: number | number[],
    locale: APILocale = "en-US"
  ) {
    return this._get("/getCompletedEvents", {
      tournamentId: tournamentIdOrIds
        ? parseValueOrValuesAsArray(tournamentIdOrIds)
        : undefined,
      hl: locale,
    });
  }

  public async getStandings(
    tournamentIdOrIds?: number | number[],
    locale: APILocale = "en-US"
  ) {
    return this._get("/getStandings", {
      tournamentId: tournamentIdOrIds
        ? parseValueOrValuesAsArray(tournamentIdOrIds)
        : undefined,
      hl: locale,
    });
  }
}
