import {JsonPatcher} from 'services/jsonPatcher'

export function getActiveFileRunIdx(state)
{
  const curRunIdx = state.activeFrame.fileRunIdx;
  return curRunIdx;
}

export function fileRunEndReached(state)
{
  const curRunIdx = getActiveFileRunIdx(state);
  return ( curRunIdx + 1 >= state.fileRuns.length ) ;
}

export function isAtFirstFileRun(state)
{
  const curRunIdx = getActiveFileRunIdx(state);
  return  ( curRunIdx <= 0 );
}

export function getActiveFrameVarsDataId(state)
{
  return getActiveFileRunIdx(state);
  // const curRunIdx = getActiveFileRunIdx(state);
  // const lineIdx = getActiveLineSeqIdx(state);
  //
  // return state.fileRuns[curRunIdx].frameVarsData[lineIdx];
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
  const dataId = getActiveFrameVarsDataId(state);
  return getVarsDataFrameFromId(state, dataId);
}


export function getRunWithID(state, idx)
{
  return state.fileRuns[idx];
}

export function getActiveRun(state)
{
  const curRunIdx = getActiveFileRunIdx(state);
  return state.fileRuns[curRunIdx];

}

export function getActiveCode(state)
{
  const fname = getActiveFileName(state);
  const codefile = state.codeFiles[fname];
  if(codefile == undefined)
    return "";
  return codefile.code;
}

export function getActiveLineNo(state)
{
  const curRun = getActiveRun(state);
  return curRun[1];
}

export function getActiveFileName(state)
{
  const curRun = getActiveRun(state);
  return curRun[0];
}
