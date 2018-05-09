import * as actions from '../actions'
import * as types from '../../../store/types'



describe('Debug_next_called', () => {
  it('should increment line of current file when more lines available', () => {

    testIncrementor(0, types.INCREMENT_ACTIVE_LINE, 0);
  })
  it('should increment fileRun when no more lines available', () => {

    testIncrementor(2, types.INCREMENT_ACTIVE_FILERUN, 0);
  })
  
  it('should do nothing when debug end reached', () => {

    testIncrementor(1, "", 2);
  })
})


describe('Debug_Prev_called', () => {
  it('should decrement line of current file when not present at start line pos', () => {

    testDecrementor(2, types.DECREMENT_ACTIVE_LINE, 0);
  })
  it('should decrement fileRun when present at start line pos', () => {

    testDecrementor(0, types.DECREMENT_ACTIVE_FILERUN, 1);
  })

  it('should do nothing when debug beginning reached', () => {

    testDecrementor(0, "", 0);
  })
})

function testIncrementor(lineSeq, expActn, fileRunIdx)
{
   const getState = () => (
    {
        activeFrame: {
          fileRunIdx: fileRunIdx,
          lineSeqIdx: lineSeq,
          maxFileRuns: 3,
          maxLineSeqs: [3,5,2]
        },
    }
  );

    const dispatch = jest.fn();

    actions.nextCalled()(dispatch, getState);

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

function testDecrementor(lineSeq, expActn, fileRunIdx)
{
   const getState = () => (
    {
        activeFrame: {
          fileRunIdx: fileRunIdx,
          lineSeqIdx: lineSeq,
          maxFileRuns: 3,
          maxLineSeqs: [3,5,2]
        },
    }
  );

    const dispatch = jest.fn();

    actions.prevCalled()(dispatch, getState);

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

