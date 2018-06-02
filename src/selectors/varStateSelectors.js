import {JsonPatcher} from 'services/jsonPatcher'
import {getActiveCodeFramePos} from './threadRunSelectors';

export function getActiveFrameVarsDataId(state)
{
  return getActiveCodeFramePos(state);
}

function getFrameVarsDict(state)
{
  return state.frameVarsDataDict ;
}
export function getVarsDataFrameFromId(state, id)
{

  const frameVarsDict = getFrameVarsDict(state);
  const varFrameMD = frameVarsDict[id];


  switch(varFrameMD.type)
  {
    case("FULL_STATE"):
      return varFrameMD.data;

    case("DIFF"):
      const resolvedFrame = applyPatchRecursive(varFrameMD , frameVarsDict )
      return resolvedFrame;
  }
}

function getParentFrame(curFrame, frameVarsDict)
{
  const parId = curFrame.baseId;
  return frameVarsDict[parId]
}

function applyPatchRecursive(curFrame, frameVarsDict)
{
  if(curFrame.type == "FULL_STATE")
    return curFrame.data;

  if(curFrame.type == "DIFF")
  {
    const parentFrame = getParentFrame(curFrame, frameVarsDict); 
    const baseState = applyPatchRecursive(parentFrame, frameVarsDict);
    const derivedState = JsonPatcher(baseState, curFrame.patch);
    return derivedState;
  }

  return curFrame;
}

// Used by Variable Inspector component
export function getActiveVarsData(state)
{
  return {};
  // Todo - Fix this to return proper activeVarsData
  const dataId = getActiveFrameVarsDataId(state);
  return getVarsDataFrameFromId(state, dataId);
}
