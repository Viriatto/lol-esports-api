import APIMatches from "../../src/interfaces/matches";

describe("matches' data fetching", () => {
  const matchesAPI = new APIMatches();

  it("should return a valid response when fetching a match's event details", async () => {
    const response = await matchesAPI.getEvent("108998961199240268");
    expect(response).toHaveProperty("data");
  });
});
