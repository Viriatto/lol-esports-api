import Interface, { APILocale } from "../interface.js";
import { parseValueOrValuesAsArray } from "../utils.js";

export default class Games extends Interface {
  public async get(
    gameIdOrIds: number | number[],
    locale: APILocale = "en-US"
  ) {
    return this._get("/getGames", {
      hl: locale,
      id: parseValueOrValuesAsArray(gameIdOrIds),
    });
  }

  public async getWindow(startingAt: string | Date) {
    return this._get("/getWindow", {
      startingTime:
        typeof startingAt === "string" ? startingAt : startingAt.toISOString(),
    });
  }

  public async getDetails(
    participantIdsOrIds: number | number[],
    startingAt: string | Date
  ) {
    return this._get("/getDetails", {
      participantIds: parseValueOrValuesAsArray(participantIdsOrIds).join("_"),
      startingTime:
        typeof startingAt === "string" ? startingAt : startingAt.toISOString(),
    });
  }
}
