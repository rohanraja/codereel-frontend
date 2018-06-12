import {getActiveFrameTimeStamp} from './threadRunSelectors';

export function getActiveVarsData(state)
{

  const timeStamp = getActiveFrameTimeStamp(state);
  const outP = getVarsDataAtTime(state, timeStamp);
  return outP
}

export function getVarsDataAtTime(state, time)
{
  const varsDict = getFrameVarsDict(state);
  if(varsDict === undefined || Object.keys(varsDict).length === 0)
    return {};

  const sortedKeys = getSortedVarFrameTimeKeys(state);
  const targetKey = getNearestTimeKey(sortedKeys, time);

  return getVarsDictAtTimeKey(state, targetKey);
}

function getNearestTimeKey(sortedKeys, time)
{
  if(sortedKeys.indexOf(time) !== -1)
    return time;
  if(sortedKeys.indexOf(time.toString()) !== -1)
    return time;

  if(time < sortedKeys[0])
    return sortedKeys[0];

  if(time > sortedKeys[sortedKeys.length - 1])
    return sortedKeys[sortedKeys.length - 1];

  for(var i=0; i<sortedKeys.length; i++)
  {
    const j = sortedKeys.length - i - 1;
    if(time > sortedKeys[j])
      return sortedKeys[j];
  }

  return 0;
}

function getSortedVarFrameTimeKeys(state)
{
  const varsDict = getFrameVarsDict(state);
  var outP = Object.keys(varsDict);
  return outP.sort(function(a, b){return a-b});
}

function getVarsDictAtTimeKey(state, key)
{
  const varsDict = getFrameVarsDict(state);
  return varsDict[key];
}

function getFrameVarsDict(state)
{
  return state.frameVarsDataDict ;
}
