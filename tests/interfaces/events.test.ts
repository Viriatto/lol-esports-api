import { Events as APIEvents } from "../../src/interfaces/events";

describe("live events' data fetching", () => {
  const eventsAPI = new APIEvents();

  it("should return a valid response when fetching live event data", async () => {
    const response = await eventsAPI.getLive();
    expect(response).toHaveProperty("data");
  });
});
