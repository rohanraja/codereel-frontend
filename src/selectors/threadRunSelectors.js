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

