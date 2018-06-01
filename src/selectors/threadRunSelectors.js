export function getCodeFrameWithPos(state, pos)
{

  const threadId = getActiveThreadId(state);
  const threadRun = getThreadRunWithTid(state, threadId);
  return threadRun[pos];
}

export function getActiveCodeFramePos(state)
{
  const frame = activeFrame(state);
  return frame.threadPosition;
}

export function getActiveCodeFrame(state)
{
  const cid = getActiveCodeFramePos(state);
  return getCodeFrameWithPos(state, cid);
}

export function evalNeartestPosForThread(state, threadId, timeStamp)
{
  const threadRun = getThreadRunWithTid(state, threadId);

  if(threadRun == undefined || threadRun.length == 0)
    return 0;

  if(timeStamp <= timeStampForFrame(threadRun[0]) )
    return 0;

  const runLen = threadRun.length - 1;

  if(timeStamp >= timeStampForFrame(threadRun[threadRun.length-1]) )
    return threadRun.length - 1;

  var outVal = 0;
  threadRun.map((frame, i) => {
    const revIdx = runLen - i;
    if(timeStamp <= timeStampForFrame(threadRun[revIdx]))
      outVal = revIdx;
  });
  return outVal;
}

// -- Private Methods

function timeStampForFrame(codeFrame)
{
  return codeFrame[4];
}

function activeFrame(state)
{
  return state.activeFrame;
}

function getActiveThreadId(state)
{
  const frame = activeFrame(state);
  return frame.threadId;

}

function getThreadRunWithTid(state, tid)
{
  try{
    return state.codeStory[tid];
  }
  catch(e)
  {
    return [];
  }

}

