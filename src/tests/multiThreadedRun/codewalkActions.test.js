import * as actions from 'actions/codeWalkActions'
import * as types from 'store/types'
import {state} from './multiThreadedDummyState';


describe('Debug_next_called', () => {
  it('should increment fileRun when no more lines available', () => {

    testCodeWalkAction(actions.nextCalled, types.INCREMENT_ACTIVE_FILERUN, 0);
  })
  
  it('should do nothing when debug end reached', () => {

    testCodeWalkAction(actions.nextCalled, "", 2);
  })
})


describe('Debug_Prev_called', () => {
  it('should decrement fileRun when present at start line pos', () => {

    testCodeWalkAction(actions.prevCalled, types.DECREMENT_ACTIVE_FILERUN, 1);
  })

  it('should do nothing when debug beginning reached', () => {

    testCodeWalkAction(actions.prevCalled, "", 0);
  })
})


function testCodeWalkAction(actionFunc, expActn, fileRunIdx)
{
   const getState = () =>
    {
      return state("tid_1", fileRunIdx, 119911);
    }
  

    const dispatch = jest.fn();

    actionFunc()(dispatch, getState);

  if(expActn != "")
  {
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0].type).toBe(expActn);
    expect(dispatch.mock.calls[1][0].type).toBe(types.UPDATE_TIME_STAMP);
    expect(dispatch.mock.calls[1][0].payload).toBe(119911);
  }
  else
  {
    expect(dispatch.mock.calls.length).toBe(0);
  }
}
