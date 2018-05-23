import * as selectors from './selectors';

export function getActiveCallStack(state)
{
  const curRunIdx = selectors.getActiveFileRunIdx(state);
  return getCallStackForIdx(state, curRunIdx);
}


function getMethodNameForIdx(state, idx)
{
  const curRun = selectors.getRunWithID(state, idx);
  return curRun[3];
}

function getMethodRunningStateForIdx(state, idx)
{
  const curRun = selectors.getRunWithID(state, idx);
  return curRun[2];
}

export function getCallStackForIdx(state, idx)
{
  var stack = [];

  for(var i=0; i<=idx; i++)
  {
    const mrState = getMethodRunningStateForIdx(state, i);
    const mName = getMethodNameForIdx(state, i);
    if(mrState.indexOf("ENTERED") > 0)
      stack.push(mName);
    else{
      var j = i - 1;
      while(j >=0)
      {
        const oldSt = getMethodRunningStateForIdx(state, j);
        if(oldSt.indexOf("EXITING") > 0)
         stack.pop();
        else
          break;
        j = j - 1;
      }
    }
  }

  return stack;
}

