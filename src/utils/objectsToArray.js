export default function objectsToArray(object) {
  return Object.values(object).reduce((result, value) => {
    if (typeof value === "string") {
      return [...result, value];
    }
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      return [...result, ...objectsToArray(value)];
    }
    return result;
  }, []);
}
