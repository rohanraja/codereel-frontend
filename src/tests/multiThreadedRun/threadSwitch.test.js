import * as actions from 'actions/codeWalkActions'
import * as types from 'store/types'
import {state} from './multiThreadedDummyState';
import {configureStore} from 'store'
import initialState from 'store/initialState'


describe('Thread switch in codewalk [INTEGRATION]', () => {
  
  
  it('should update active timestamp on increment', () => {
    const store = configureStore(initialState)
    var curState = store.getState();
    expect(curState.activeFrame.threadPosition).toBe(0);
    expect(curState.activeFrame.timeStamp).toBe(0);

    store.dispatch(actions.nextCalled());

    curState = store.getState();
    expect(curState.activeFrame.threadPosition).toBe(1);
    expect(curState.activeFrame.timeStamp).toBe(20);

  })
  
  it('takes to the thread position nearest to the active timestamp during thread switch ', () => {
    const newState = Object.assign(initialState, {activeFrame: {threadId: 'tid_1', timeStamp: 15, threadPosition: 0}})
    const store = configureStore(newState)
    var curState = store.getState();
    expect(curState.activeFrame.threadId).toBe('tid_1');

    store.dispatch(actions.onThreadChange('tid_0'));

    curState = store.getState();

    expect(curState.activeFrame.threadId).toBe('tid_0');
    expect(curState.activeFrame.threadPosition).toBe(1);
    expect(curState.activeFrame.timeStamp).toBe(15);

    store.dispatch(actions.onThreadChange('tid_1'));

    curState = store.getState();

    expect(curState.activeFrame.threadId).toBe('tid_1');
    expect(curState.activeFrame.threadPosition).toBe(0);
    expect(curState.activeFrame.timeStamp).toBe(15);

  })

})

