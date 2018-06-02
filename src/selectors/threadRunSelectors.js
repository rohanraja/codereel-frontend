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

export function getTimeStampForCodeFrameWithId(state, threadId, position)
{
  const threadRun = getThreadRunWithTid(state, threadId);
  var frame = threadRun[position];

  return timeStampForFrame(frame);
}
export function getActiveCodeFrameTimeStamp(state)
{
  const frame = getActiveCodeFrame(state)
  return timeStampForFrame(frame);
}

export function getActiveFrameTimeStamp(state)
{
  const frame = activeFrame(state)
  return frame.timeStamp;
}

export function isAtFirstCodeFrame(state)
{
  const curRunIdx = getActiveCodeFramePos(state);
  return  ( curRunIdx == 0 );
}

export function isAtLastCodeFrame(state)
{
  const curRunIdx = getActiveCodeFramePos(state);
  const threadId = getActiveThreadId(state);
  const threadRun = getThreadRunWithTid(state, threadId);

  return  ( curRunIdx == threadRun.length - 1 );
}

export function listAllThreads(state)
{
  var threads = []
  Object.keys(state.codeStory).map((tid) => {
    threads.push(["Thread - " + tid, tid]);
  })

  return threads;
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

export function getActiveThreadId(state)
{
  const frame = activeFrame(state);
  var thid = frame.threadId;

  if (state.codeStory[thid] == undefined || state.codeStory[thid] == null)
    thid = getThreadIdWithEarliestTimeStamp(state)

  return thid;

}

function getThreadIdWithEarliestTimeStamp(state)
{
  var thid = "-1";

  // Todo - find a way to get the maximum int val
  var minTime = 9999999

  Object.keys(state.codeStory).map((k) => {
    const thrun = getThreadRunWithTid(state, k)
    if(thrun.length > 0)
    {
      const time = timeStampForFrame(thrun[0])
      if(time < minTime)
      {
        minTime = time;
        thid = k;
      }
    }
  })

  return thid;
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

