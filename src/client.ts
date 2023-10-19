import APIEvents from "./interfaces/events.js";
import APILeagues from "./interfaces/leagues.js";
import APIMatches from "./interfaces/matches.js";
import APITournaments from "./interfaces/tournaments.js";

export default class Client {
  private _leagues = new APILeagues();
  private _events = new APIEvents();
  private _tournaments = new APITournaments();
  private _matches = new APIMatches();

  public get leagues() {
    return this._leagues;
  }

  public get events() {
    return this._events;
  }

  public get tournaments() {
    return this._tournaments;
  }

  public get matches() {
    return this._matches;
  }
}
