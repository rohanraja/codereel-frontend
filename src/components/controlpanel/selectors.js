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
