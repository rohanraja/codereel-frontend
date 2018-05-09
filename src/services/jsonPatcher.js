import _ from 'lodash';
var jsonpatch = require('fast-json-patch')

export function JsonPatcher(baseState, diffPatch)
{
  if (_.isEmpty(diffPatch))
    return baseState;

  if (!(diffPatch instanceof Array))
    diffPatch = [diffPatch];

  return jsonpatch.applyPatch(baseState, diffPatch).newDocument;
}
