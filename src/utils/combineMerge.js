import merge from "deepmerge";

export default function combineMerge(target, source, options) {
  const destination = target.slice();
  const { cloneUnlessOtherwiseSpecified, isMergeableObject } = options;

  source.forEach((item, index) => {
    if (destination[index] === undefined) {
      destination[index] = cloneUnlessOtherwiseSpecified(item, options);
    } else if (isMergeableObject(item)) {
      destination[index] = merge(target[index], item, options);
    } else if (!target.includes(item)) {
      destination.push(item);
    }
  });

  return destination;
}
