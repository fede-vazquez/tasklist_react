/**
 * Función que recupera los valores de los parámetros pasados en la url.
 * @param {String} urlParams Parámetros de la url donde se va a buscar.
 * @param {String} paramsToGet Nombre de los parámetros que se quieren encontrar.
 * @returns Retorna objeto con los parámetros encontrados.
 */
export function getQueryParams(urlParams, paramsToGet) {
  const paramsResult = {};

  const searchParams = new URLSearchParams(urlParams);

  paramsToGet = typeof paramsToGet == "string" ? [paramsToGet] : paramsToGet;

  for (const paramName of paramsToGet) {
    paramsResult[paramName] = searchParams.get(paramName);
  }
  return paramsResult;
}
