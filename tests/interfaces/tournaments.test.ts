import APITournaments from "../../src/interfaces/tournaments";

describe("tournaments' data fetching", () => {
  const tournamentsAPI = new APITournaments();

  describe("fetching completed events' data", () => {
    it("should return a valid response when fetching a single league's completed events' data", async () => {
      const response = await tournamentsAPI.getCompletedEvents(
        "110852926142971547"
      );

      expect(response.data).toBeDefined();
    });
  });

  describe("fetching standings", () => {
    it("should return a valid response when fetching a single league's standings", async () => {
      const response = await tournamentsAPI.getStandings("108998961191900167");

      expect(response.data.standings).toHaveLength(1);
    });
  });
});
