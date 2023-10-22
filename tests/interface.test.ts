import Interface from "../src/interface.js";

class DummyInterface extends Interface {
  constructor(baseURLs?: Interface["_baseURLs"]) {
    super();
    this._baseURLs = baseURLs;
  }

  public async get() {
    return this._get("/getCompletedEvents");
  }
}

describe("api interface implementation", () => {
  jest.mock("axios");

  it(`"get" method should throw when it's called while the instance's "_baseURLs" property is undefined`, async () => {
    const dummyInterface = new DummyInterface();
    await expect(dummyInterface.get()).rejects.toThrow();
  });

  it(`"get" method should throw when both "_baseURLs" are unreachable`, async () => {
    const dummyInterface = new DummyInterface(["a", "b"]);
    await expect(dummyInterface.get()).rejects.toThrow();
  });

  // it.todo(`should return a value when the request was successful`, async () => {
  //   const expectedData = {};

  //   mockedAxios.get.mockResolvedValue({
  //     status: 200,
  //     data: expectedData,
  //   });

  //   const dummyInterface = new DummyInterface(["a"]);
  //   await expect(dummyInterface.get()).resolves.toBe(expectedData);
  // });
});
