import * as actions from '../actions'
import * as types from '../../../store/types'


describe('Debug_next_called', () => {
  it('should increment line of current file when more lines available', () => {

   const getState = () => (
    {
        activeFrame: {
          fileRunIdx: 0,
          lineSeqIdx: 1,
          maxFileRuns: 3,
          maxLineSeqs: [3,5,2]
        },
    }
  );

    const dispatch = jest.fn();

    actions.nextCalled()(dispatch, getState);

    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0].type).toBe(types.INCREMENT_ACTIVE_LINE);


  })
})
