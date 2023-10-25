import axios, { AxiosResponse } from "axios";
import { operations } from "./api-types.js";

/**
 * Options for the configuration of requests to the eSports API.
 *
 * @typeParam T - An endpoint identifier as specified by the API's open-api specification.
 *
 * @remarks
 * The eSports API specification used here is a fork of {@link https://vickz84259.github.io/lolesports-api-docs/ | vickz84259's work}.
 *
 * @internal
 */
interface LolEsportsAPIRequestConfig<T extends keyof APIEndpoints> {
  /**
   * The headers present in every request.
   */
  headers: {
    /**
     * The authorization header.
     *
     * @remarks
     * The API key here is supposed to be public.
     *
     * @defaultValue `0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z`
     *
     * @see {@link https://vickz84259.github.io/lolesports-api-docs/#section/Authentication/apiKeyAuth | vickz84259's documentation}
     *
     * @readonly
     */
    readonly "x-api-key": "0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z";
  };
  /**
   * Maps the query parameters relative to the endpoint specified by the generic parameter `T`.
   *
   * @see {@link APIEndpointQueryParameters}
   */
  params: APIEndpointQueryParameters<T>;
}

/**
 * An API response's type, based on the endpoint `T`.
 *
 * @remarks
 * The eSports API specification used here is a fork of {@link https://vickz84259.github.io/lolesports-api-docs/ | vickz84259's work}.
 */
type APIResponse<T extends keyof operations> =
  operations[T]["responses"][200]["content"]["application/json"];

/**
 * The API endpoints as per {@link https://vickz84259.github.io/lolesports-api-docs/ | vickz84259's specification}.
 */
type APIEndpoints = operations;

/**
 * Mapped query parameters for API endpoint `T`.
 *
 * @remarks
 * Searches for an existing type within the eSports API types, if it does not exist, defaults to `never`.
 */
type APIEndpointQueryParameters<T extends keyof APIEndpoints> =
  APIEndpoints[T] extends {
    parameters: {
      query?: Record<string, unknown>;
    };
  }
    ? APIEndpoints[T]["parameters"]["query"]
    : never;

/**
 * {@link https://en.wikipedia.org/wiki/ISO_639-1 | ISO 639-1}/{@link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 | ISO 3166-1 alpha-2} locale code.
 */
export type APILocale =
  | "en-US"
  | "en-GB"
  | "en-AU"
  | "cs-CZ"
  | "de-DE"
  | "el-GR"
  | "es-ES"
  | "es-MX"
  | "fr-FR"
  | "hu-HU"
  | "it-IT"
  | "pl-PL"
  | "pt-BR"
  | "ro-RO"
  | "ru-RU"
  | "tr-TR"
  | "ja-JP"
  | "ko-KR";

/**
 * Base class for interacting with the eSports API.
 *
 * @internal
 */
export default abstract class Interface {
  /**
   * The eSports API's base URLs.
   *
   * @sealed @internal @readonly
   */
  protected readonly _baseURLs = {
    main: [
      "https://esports-api.lolesports.com/persisted/gw",
      "https://prod-relapi.ewp.gg/persisted/gw",
    ],
    feed: ["https://feed.lolesports.com/livestats/v1"],
  } as const;

  /**
   * Issues a request to the eSports API.
   *
   * @remarks
   * Recursively tries to request each of the base URLs in {@link Interface._baseURLs} if the previous one has failed to yield a successful response.
   *
   * @typeParam T - An API endpoint identifier.
   * @param baseURLs - The base URL(s) to use within the request.
   * @param endpoint - The API endpoint to which send the request.
   * @param params - The query parameters to send with the request.
   * @returns Data for the specified resource.
   *
   * @throws {@link Error}
   * When {@link Interface._baseURLs} is undefined.
   *
   * @throws {@link Error}
   * When it can't get a successfuly response from any of the endpoints built from {@link Interface._baseURLs}.
   *
   * @internal @sealed
   */
  protected async _get<T extends keyof APIEndpoints>(
    baseURLs: readonly string[],
    endpoint: `/${T}`,
    params?: APIEndpointQueryParameters<T> | URLSearchParams
  ) {
    if (!this._baseURLs) {
      throw new Error("No API base URLs specified.");
    }

    for await (const baseURL of baseURLs) {
      try {
        const response = await axios.get<
          APIResponse<T>,
          AxiosResponse<APIResponse<T>, LolEsportsAPIRequestConfig<T>>,
          LolEsportsAPIRequestConfig<T>
        >(`${baseURL}${endpoint}`, {
          headers: {
            // API key is supposed to be public here.
            "x-api-key": "0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z",
          },
          params,
        });

        if (response.status === 200) {
          return response.data;
        } else {
          // It shouldn't throw here because we want it to test the other built endpoints.
          console.error(
            new Error(`${response.status} - ${response.statusText}`)
          );
        }
      } catch (reason: unknown) {
        console.error(reason);
      }
    }

    throw new Error(
      "Could not get a successful response from any of the base URLs."
    );
  }
}
