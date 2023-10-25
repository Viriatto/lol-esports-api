import Interface, { APILocale } from "../interface.js";

/**
 * Interfaces with all event related endpoints.
 *
 * @internal @sealed
 */
export default class Events extends Interface {
  /**
   * Fetch data on currently live events.
   *
   * @param locale - The locale of the response data.
   * @returns An object containing data on currently live events.
   *
   * @see {@link https://vickz84259.github.io/lolesports-api-docs/#operation/getLive | vickz84259's endpoint documentation}.
   *
   * @public @sealed
   */
  public async getLive(locale: APILocale = "en-US") {
    return this._get(this._baseURLs.main, "/getLive", {
      hl: locale,
    });
  }
}
