import { Leagues as APILeagues } from "../../src/interfaces/leagues";

describe("leagues' data fetching", () => {
  const leagues = new APILeagues();

  describe("fetching all leagues' data", () => {
    it("should return a valid response", async () => {
      const response = await leagues.get();
      expect(response.data.leagues.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("fetch league tournament data", () => {
    it("should return a valid response with all tournaments' data when not given a league id", async () => {
      const response = await leagues.getTournaments();
      expect(response.data.leagues.length).toBeGreaterThanOrEqual(1);
    });

    it("should return a valid response with a single league's tournament data when given a league id", async () => {
      const response = await leagues.getTournaments("98767975604431411");
      expect(response.data.leagues).toHaveLength(1);
    });
  });

  describe("fetching a league's schedule", () => {
    it("should return a valid response when fetching a league's schedule", async () => {
      const response = await leagues.getSchedule("98767991299243165");

      expect(response.data).toBeDefined();
    });
  });
});
