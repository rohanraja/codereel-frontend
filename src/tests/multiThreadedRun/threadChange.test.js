import {onThreadChange} from 'actions/codeWalkActions';
import {state} from './multiThreadedDummyState';
import * as types from 'store/types'

describe('Thread Change Action test', () => {

  it('returns correct codeframe based on active thread and threadPos', () => {

    const st = state("tid_1", 0, 15);
    const dispatch = jest.fn();

    onThreadChange("tid_0")(dispatch, ()=>st);

    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0].type).toBe(types.UPDATE_ACTIVE_THREAD);
    expect(dispatch.mock.calls[0][0].payload.newThreadId).toBe("tid_0");
    expect(dispatch.mock.calls[0][0].payload.threadPos).toBe(1);


  })
})


