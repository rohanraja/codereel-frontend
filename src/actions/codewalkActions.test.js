import * as actions from './codeWalkActions'
import * as types from 'store/types'



describe('Debug_next_called', () => {
  it('should increment fileRun when no more lines available', () => {

    testCodeWalkAction(actions.nextCalled, 2, types.INCREMENT_ACTIVE_FILERUN, 0);
  })
  
  it('should do nothing when debug end reached', () => {

    testCodeWalkAction(actions.nextCalled, 1, "", 2);
  })
})


describe('Debug_Prev_called', () => {
  it('should decrement fileRun when present at start line pos', () => {

    testCodeWalkAction(actions.prevCalled, 0, types.DECREMENT_ACTIVE_FILERUN, 1);
  })

  it('should do nothing when debug beginning reached', () => {

    testCodeWalkAction(actions.prevCalled, 0, "", 0);
  })
})


function testCodeWalkAction(actionFunc, lineSeq, expActn, fileRunIdx)
{
   const getState = () => (
    {
        activeFrame: {
          fileRunIdx: fileRunIdx,
          lineSeqIdx: lineSeq
        },
  fileRuns: [
    {
      fileName: "main.thor",
      lineSequence: [28,29,30],
    },
    {
      fileName: "action_creator.rb",
      lineSequence: [2,4,5,6,8],
    },
    {
      fileName: "main.thor",
      lineSequence: [30, 31],
    },
  ],


    }
  );

    const dispatch = jest.fn();

    actionFunc()(dispatch, getState);

  if(expActn != "")
  {
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0].type).toBe(expActn);
  }
  else
  {
    expect(dispatch.mock.calls.length).toBe(0);
  }
}