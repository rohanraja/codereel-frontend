import {JsonPatcher} from '../../services/jsonPatcher'

function getActiveFileRunIdx(state)
{
  const curRunIdx = state.activeFrame.fileRunIdx;
  return curRunIdx;
}

function getActiveLineSeqIdx(state)
{
  const lineIdx = state.activeFrame.lineSeqIdx;
  return lineIdx;
}

function getActievLineSeqLength(state)
{
  const curRunIdx = getActiveFileRunIdx(state);
  const lineSeqLen = state.activeFrame.maxLineSeqs[curRunIdx];
  return lineSeqLen;
}

export function lineSeqEndReached(state)
{

  const curRunIdx = getActiveFileRunIdx(state);
  const lineIdx = getActiveLineSeqIdx(state);
  const lineSeqLen = getActievLineSeqLength(state);
  return ( lineIdx + 1 >= lineSeqLen );
}

export function fileRunEndReached(state)
{
  const curRunIdx = getActiveFileRunIdx(state);
  return ( curRunIdx + 1 >= state.activeFrame.maxFileRuns ) ;
}


export function isAtFileStartPosition(state)
{
  const lineIdx = getActiveLineSeqIdx(state);
  return  (lineIdx -1  >= 0) ; 
}

export function isAtFirstFileRun(state)
{
  const curRunIdx = getActiveFileRunIdx(state);
  return  ( curRunIdx <= 0 );
}

export function getActiveFrameVarsDataId(state)
{
  const curRunIdx = getActiveFileRunIdx(state);
  const lineIdx = getActiveLineSeqIdx(state);

  return state.fileRuns[curRunIdx].frameVarsData[lineIdx];
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
  const dataId = getActiveFrameVarsDataId(state);
  return getVarsDataFrameFromId(state, dataId);
}
