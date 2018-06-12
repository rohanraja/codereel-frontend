import {getVarsDataAtTime} from './simpleVarStateSelector';
import {getActiveFrameTimeStamp, getActiveCodeFrame, getMrIdForCodeFrame} from './threadRunSelectors';

export function getCurrentScopeVars(state)
{
  const timeStamp = getActiveFrameTimeStamp(state);
  const mrid = getCurrentMRID(state)

  return getScopeStateOfMridAndTime(state, mrid, timeStamp)
}


export function getScopeStateOfMridAndTime(state, mrid, time)
{
  const allVars = getVarsDataAtTime(state, time)
  const scope = getScopeForMRID(state, mrid)

  if(scope == undefined || scope == null || Object.keys(scope).length == 0)
    return {};

  if(allVars == undefined || allVars == null || Object.keys(allVars).length == 0)
    return {};

  var outP = {};

  outP["this"] = getClassInstVal(state, scope, allVars)
  outP["locals"] = getLocalVals(state, scope, allVars)

  return outP;
}

function getCurrentMRID(state)
{
  const frame = getActiveCodeFrame(state);
  return getMrIdForCodeFrame(frame);
}


function getLocalVals(state, scope, allVars)
{
  var outp = {};
  const localIds = scope["locals"]

  const allLocals = allVars["localvars"];

  for(var i=0; i< localIds.length ; i++)
  {
    if(allLocals[localIds[i]] === undefined)
      continue;
    const varName = allLocals[localIds[i]]["name"];
    const varVal = allLocals[localIds[i]]["value"];
    outp[varName] = varVal;
  }

  return outp;
}

function getClassInstVal(state, scope, allVars)
{
  const thisId = scope["this"]
  const allCls = allVars["classes"]
  return allCls[thisId];

}

function getScopeForMRID(state, mrid)
{
  return state.scopeVars[mrid];
}

//===================

