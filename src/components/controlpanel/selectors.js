export function lineSeqEndReached(state)
{

  const curRunIdx = state.activeFrame.fileRunIdx;
  const lineIdx = state.activeFrame.lineSeqIdx;
  const lineSeqLen = state.activeFrame.maxLineSeqs[curRunIdx];
  return ( lineIdx + 1 >= lineSeqLen );
}

export function fileRunEndReached(state)
{
  const curRunIdx = state.activeFrame.fileRunIdx;
  return ( curRunIdx + 1 >= state.activeFrame.maxFileRuns ) ;
}


export function isAtFileStartPosition(state)
{
  const lineIdx = state.activeFrame.lineSeqIdx;
  return  (lineIdx -1  >= 0) ; 
}

export function isAtFirstFileRun(state)
{
  const curRunIdx = state.activeFrame.fileRunIdx;
  return  ( curRunIdx <= 0 );
}
