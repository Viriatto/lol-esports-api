import { Teams as APITeams } from "../../src/interfaces/teams";

describe("teams' data fetching", () => {
  const matchesAPI = new APITeams();

  it("should return a valid response when fetching a single team's information", async () => {
    const response = await matchesAPI.get("fnatic");
    expect(response.data.teams.length).toBeGreaterThanOrEqual(1);
  });

  it("should return a valid response when fetching all teams' information", async () => {
    const response = await matchesAPI.get();
    expect(response.data.teams.length).toBeGreaterThanOrEqual(1);
  });
});
