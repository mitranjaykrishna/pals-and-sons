import EN from "./language/EN.json";

export function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

export const getJSONData = (key) => {
  return EN?.[key];
};
