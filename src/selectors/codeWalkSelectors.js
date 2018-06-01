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
