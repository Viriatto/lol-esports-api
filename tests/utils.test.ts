import {
  parseParameterizedEndpointPath,
  parseValueOrValuesAsArray,
} from "../src/utils";

describe("transforming a single value or an array of values into an array", () => {
  it("should return an array with a single element of type T when given a primitive of type T", () => {
    const elementTypes = ["a", 1, {}, null, undefined, NaN];

    elementTypes.forEach((elementType) => {
      const parsedArray = parseValueOrValuesAsArray(elementType);
      expect(parsedArray).toHaveLength(1);
      expect(parsedArray[0]).toBe(elementType);
    });
  });

  it("should return the same array when given one", () => {
    expect(parseValueOrValuesAsArray([1, 2])).toEqual([1, 2]);
  });
});

describe("parsing an endpoint with path parameters", () => {
  it("should throw when missing a path parameter's value", () => {
    expect(() =>
      parseParameterizedEndpointPath("/{gameId}/{participantId}", {
        gameId: 1,
        something: 2,
      })
    ).toThrow();
  });

  it("should return a valid endpoint when given all path parameters", () => {
    expect(
      parseParameterizedEndpointPath("/{gameId}/{participantId}", {
        gameId: "a",
        participantId: 1,
      })
    ).toBe("/a/1");
  });
});
