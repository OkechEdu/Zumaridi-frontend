export default function isEmptyObject(obj: any) {
  if (obj === undefined || obj === null) return true;
  return !Object.keys(obj).length;
}
