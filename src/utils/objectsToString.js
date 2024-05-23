export default function objectsToString(object) {
  const valuesToString = (obj) =>
    Object.values(obj).reduce((result, value) => {
      if (typeof value === "string") {
        return `${result} ${value}`;
      }
      if (typeof value === "object" && !Array.isArray(value) && value !== null) {
        return `${result} ${valuesToString(value)}`;
      }
      return result;
    }, "").trim();

  return valuesToString(object);
}
