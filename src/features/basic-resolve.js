import { systemJSPrototype } from '../system-core.js';
import { resolveIfNotPlainOrUrl, baseUrl, errMsg } from '../common.js';
systemJSPrototype.resolve = function (id, parentUrl) {
  const resolved = resolveIfNotPlainOrUrl(id, parentUrl || baseUrl);
  if (!resolved) {
    if (id.indexOf(':') !== -1)
      return Promise.resolve(id);
    throw Error(errMsg(3, DEV ? 'Cannot resolve "' + id + (parentUrl ? '" from ' + parentUrl : '"') : [id, parentUrl]))
  }
  return Promise.resolve(resolved);
};