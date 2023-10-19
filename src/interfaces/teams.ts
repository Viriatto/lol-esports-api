import Interface, { APILocale } from "../interface.js";

export default class Teams extends Interface {
  public async get(teamId?: string[], locale: APILocale = "en-US") {
    return this._get("/getTeams", {
      id: teamId,
      hl: locale,
    });
  }
}
