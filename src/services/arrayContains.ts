import { ParsedQs } from "qs";

export default function arrayContains(
  value: string | ParsedQs | string[] | ParsedQs[] | undefined
) {
  Array.isArray(value) ? (value = { $all: value }) : (value = { $in: value });
}
