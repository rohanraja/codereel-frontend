import * as selector from 'selectors/threadRunSelectors';
import {state} from './multiThreadedDummyState';

//ToDo: Write more test cases

describe('Thread Run Selectors', () => {

  it('returns correct codeframe based on active thread and threadPos', () => {

    var st = state("tid_0", 1);
    var frame = selector.getActiveCodeFrame(st);
    expect(frame[0]).toBe("File2");

    st = state("tid_1", 0);
    frame = selector.getActiveCodeFrame(st);
    expect(frame[0]).toBe("CSFile1");

  })


})
