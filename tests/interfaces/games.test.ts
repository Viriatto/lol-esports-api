import APIGames from "../../src/interfaces/games";

describe("games' data fetching", () => {
  const gamesAPI = new APIGames();

  describe("should return a valid response when fetching game data", () => {
    it("should return a valid response when given a single game id", async () => {
      const response = await gamesAPI.get("110853167109116577");
      expect(response.data.games).toHaveLength(1);
    });
  });

  describe("should return a valid response when fetching game window data", () => {
    it("should return a valid response when not given a date", async () => {
      const response = await gamesAPI.getWindow("110853167109116579");

      expect(response.frames.length).toBeGreaterThanOrEqual(1);
    });

    it("should return a valid response when given a date of type string", async () => {
      const response = await gamesAPI.getWindow(
        "110853167109116579",
        "2023-10-20T13:23:00.000Z",
      );

      expect(response.frames.length).toBeGreaterThanOrEqual(1);
    });

    it("should return a valid response when given a date of type Date", async () => {
      const response = await gamesAPI.getWindow(
        "110853167109116577",
        new Date("2023-10-19T09:35:40.000Z"),
      );

      expect(response.frames.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("should return a valid response when fetching game details data", () => {
    it("should return a valid response when given a date of type string", async () => {
      const response = await gamesAPI.getDetails(
        "110853167109116577",
        "2023-10-19T09:35:40.000Z",
      );

      expect(response.frames.length).toBeGreaterThanOrEqual(1);
    });

    it("should return a valid response when given a date of type Date", async () => {
      const response = await gamesAPI.getDetails(
        "110853167109116577",
        new Date("2023-10-19T09:35:40.000Z"),
      );

      expect(response.frames.length).toBeGreaterThanOrEqual(1);
    });

    it("should return a valid response with all participant data when no participant ids are specified", async () => {
      const response = await gamesAPI.getDetails(
        "110853167109116577",
        new Date("2023-10-19T09:35:40.000Z"),
      );

      expect(response.frames.length).toBeGreaterThanOrEqual(1);
      expect(response.frames[0]?.participants).toHaveLength(10);
    });

    it("should return a valid response with specified participant ids' data", async () => {
      const participantIds: [number, ...number[]] = [1, 2, 3];

      const response = await gamesAPI.getDetails(
        "110853167109116577",
        new Date("2023-10-19T09:35:40.000Z"),
        participantIds,
      );

      expect(response.frames.length).toBeGreaterThanOrEqual(1);
      expect(response.frames[0]?.participants).toHaveLength(
        participantIds.length,
      );
    });
  });
});
