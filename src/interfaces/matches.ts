import Interface, { APILocale } from "../interface.js";

export default class Matches extends Interface {
  public async getEvent(matchId: number, locale: APILocale = "en-US") {
    return this._get("/getEventDetails", {
      id: matchId,
      hl: locale,
    });
  }
}
