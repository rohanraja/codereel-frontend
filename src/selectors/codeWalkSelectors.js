import * as threadSelectors from 'selectors/threadRunSelectors'


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
  const curRun = threadSelectors.getActiveCodeFrame(state);
  return curRun[1];
}

export function getActiveFileName(state)
{
  const curRun = threadSelectors.getActiveCodeFrame(state);
  return curRun[0];
}


// Todo - check and remove below methods
// export function getActiveFileRunIdx(state)
// {
//   const curRunIdx = state.activeFrame.fileRunIdx;
//   return curRunIdx;
// }
//
// export function getActiveFrameVarsDataId(state)
// {
//   return getActiveFileRunIdx(state);
// }
//
// export function getRunWithID(state, idx)
// {
//   return state.fileRuns[idx];
// }
