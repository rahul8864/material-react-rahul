export default function findMatch(data, find, defaultValue) {
  return data.includes(find) ? find : defaultValue;
}
