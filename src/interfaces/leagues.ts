import Interface, { APILocale } from "../interface.js";
import { parseValueOrValuesAsArray } from "../utils.js";

export default class Leagues extends Interface {
  protected override _baseURLs: [string, ...string[]] = [
    "https://esports-api.lolesports.com/persisted/gw",
    "https://prod-relapi.ewp.gg/persisted/gw",
  ];

  public async get(locale: APILocale = "en-US") {
    return this._get("/getLeagues", {
      hl: locale,
    });
  }

  public async getTournaments(leagueId?: number, locale: APILocale = "en-US") {
    return this._get("/getTournamentsForLeague", {
      leagueId,
      hl: locale,
    });
  }

  public async getSchedule(
    leagueIdOrIds?: number[] | number,
    pageToken?: string,
    locale: APILocale = "en-US"
  ) {
    return this._get("/getSchedule", {
      leagueId: leagueIdOrIds
        ? parseValueOrValuesAsArray(leagueIdOrIds)
        : undefined,
      pageToken,
      hl: locale,
    });
  }
}
