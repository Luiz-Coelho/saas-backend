import { ParsedQs } from "qs";

export default function stringContains(
  value: string | ParsedQs | string[] | ParsedQs[] | undefined
) {
  value = { $regex: value, $options: "i" };
}
