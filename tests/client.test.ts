import Client from "../src/client.js";

describe("client instantiation", () => {
  const client = new Client();

  it("must have all api interfaces", () => {
    ["leagues", "events", "tournaments", "matches"].forEach(
      (interfaceIdentifier) => {
        expect(client).toHaveProperty(interfaceIdentifier);
      }
    );
  });
});
