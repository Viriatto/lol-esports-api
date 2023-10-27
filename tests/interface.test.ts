import axios from "axios";
import Interface from "../src/interface.js";

jest.mock("axios");

class DummyInterface extends Interface {
  public async get() {
    return this._get(this._baseURLs.main, "/getCompletedEvents", {
      query: {
        hl: "en-US",
        tournamentId: ["110852926142971547"],
      },
    });
  }
}

describe("api interface implementation", () => {
  const mockedAxios = jest.mocked(axios);
  const mockedAPIResponseData = {};

  mockedAxios.get.mockResolvedValue({
    status: 200,
    data: mockedAPIResponseData,
  });

  const dummyInterface = new DummyInterface();

  it(`"get" method should return a value when the request was successful`, async () => {
    await expect(dummyInterface.get()).resolves.toBe(mockedAPIResponseData);
  });
});
