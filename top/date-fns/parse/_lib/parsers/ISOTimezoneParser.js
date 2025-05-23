import { constructFrom } from "../../../constructFrom.js";
import { getTimezoneOffsetInMilliseconds } from "../../../_lib/getTimezoneOffsetInMilliseconds.js";
import { timezonePatterns } from "../constants.js";
import { Parser } from "../Parser.js";

import { parseTimezonePattern } from "../utils.js";

// Timezone (ISO-8601)
export class ISOTimezoneParser extends Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "x":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "xx":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "xxxx":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "xxxxx":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "xxx":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "X"];
}
