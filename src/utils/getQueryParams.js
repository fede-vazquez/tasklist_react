export function getQueryParams(urlParams, paramsToGet) {
  const paramsResult = {};

  const searchParams = new URLSearchParams(urlParams);

  paramsToGet = typeof paramsToGet == "string" ? [paramsToGet] : paramsToGet;

  for (const paramName of paramsToGet) {
    paramsResult[paramName] = searchParams.get(paramName);
  }
  return paramsResult;
}
