import Interface, { APILocale } from "../interface.js";

export default class Events extends Interface {
  protected override _baseURLs: [string, ...string[]] = [
    "https://esports-api.lolesports.com/persisted/gw",
    "https://prod-relapi.ewp.gg/persisted/gw",
  ];

  public async getLive(locale: APILocale = "en-US") {
    return this._get("/getLive", {
      hl: locale,
    });
  }
}
