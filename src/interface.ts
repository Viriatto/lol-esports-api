import axios, { AxiosResponse } from "axios";
import { operations } from "./api-types.js";

interface LolEsportsAPIRequestConfig<T extends keyof APIEndpoints> {
  headers: {
    "x-api-key": "0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z";
  };
  params: APIEndpointQueryParameters<T>;
}

type APIResponse<T extends keyof operations> =
  operations[T]["responses"][200]["content"]["application/json"];

type APIEndpoints = operations;

type APIEndpointQueryParameters<T extends keyof APIEndpoints> =
  APIEndpoints[T] extends {
    parameters: {
      query?: Record<string, unknown>;
    };
  }
    ? APIEndpoints[T]["parameters"]["query"]
    : never;

export interface APIEventTeam {
  code: string;
  image: string;
  name: string;
  result: {
    gameWins: number;
    outcome: "won" | "loss";
  };
  record: {
    losses: number;
    wins: number;
  };
  slug: string;
}

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

export default abstract class Interface {
  protected _baseURLs: [string, ...string[]] | undefined;

  protected async _get<T extends keyof APIEndpoints>(
    endpoint: `/${T}`,
    params?: APIEndpointQueryParameters<T> | URLSearchParams
  ) {
    if (!this._baseURLs) {
      throw new Error("No API base URLs specified.");
    }

    for await (const baseURL of this._baseURLs) {
      try {
        const response = await axios.get<
          APIResponse<T>,
          AxiosResponse<APIResponse<T>, LolEsportsAPIRequestConfig<T>>,
          LolEsportsAPIRequestConfig<T>
        >(`${baseURL}${endpoint}`, {
          headers: {
            "x-api-key": "0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z",
          },
          params,
        });

        if (response.status === 200) {
          return response.data;
        } else {
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
