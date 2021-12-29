export function getFilterQuery(filter, currentPage) {
  let result = currentPage > 1 ? "page=" + currentPage : "";
  result += result.length > 0 ? "&" : "";
  result += filter;
  return result.length > 0 ? `?${result}` : "";
}
