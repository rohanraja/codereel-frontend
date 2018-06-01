import * as selectors from 'selectors/codeWalkSelectors';

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

    var lastExited = -1;
  for(var i=0; i<=idx; i++)
  {
    const mrState = getMethodRunningStateForIdx(state, i);
    const mName = getMethodNameForIdx(state, i);
    if(mrState.indexOf("ENTERED") > 0)
      stack.push(mName);
    else{
      var j = i - 1;
      var maxExit = 0;
      while(j >=0 && j > lastExited)
      {
        const oldSt = getMethodRunningStateForIdx(state, j);
        if(oldSt.indexOf("EXITING") > 0)
        {
         stack.pop();
          if(j > maxExit)
            maxExit = j;
        }
        else
          break;
        j = j - 1;
      }
     lastExited = maxExit;
    }
  }

  return stack;
}

