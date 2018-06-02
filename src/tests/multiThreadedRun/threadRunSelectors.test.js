import * as selector from 'selectors/threadRunSelectors';
import {state} from './multiThreadedDummyState';

//ToDo: Write more test cases

describe('Thread Run Selectors', () => {

  it('returns correct codeframe based on active thread and threadPos', () => {

    const st = state("tid_0", 1);
    const frame = selector.getActiveCodeFrame(st);
    expect(frame[0]).toBe("File2");

  })

  it('returns correct codeframe based on active thread and threadPos', () => {

    const st = state("tid_1", 0);
    const frame = selector.getActiveCodeFrame(st);
    expect(frame[0]).toBe("CSFile1");

  })

  it('evaluates the next nearest thread position based on timestamp - time stamp of other thread', () => {

    var st = state();
    var threadPos = selector.evalNeartestPosForThread(st, "tid_0", 15);
    expect(threadPos).toBe(1);
  })

  it('evaluates the next nearest thread position based on timestamp - earlier timer', () => {
    var st = state();
    var threadPos = selector.evalNeartestPosForThread(st, "tid_1", 20);
    expect(threadPos).toBe(1);
  })

  it('evaluates the next nearest thread position based on timestamp - overlapping', () => {
    var st = state();
    var threadPos = selector.evalNeartestPosForThread(st, "tid_1", 15);
    expect(threadPos).toBe(0);
  })

  it('evaluates the next nearest thread position based on timestamp - time exceeding', () => {
    var st = state();
    var threadPos = selector.evalNeartestPosForThread(st, "tid_1", 999);
    expect(threadPos).toBe(st.codeStory["tid_1"].length - 1);
  })

  it('evaluates the timeStamp of a codeFrame given threadId and position', () => {
    var st = state();
    var timeStamp = selector.getTimeStampForCodeFrameWithId(st, "tid_1", 1);
    expect(timeStamp).toBe(25);

    timeStamp = selector.getTimeStampForCodeFrameWithId(st, "tid_0", 0);
    expect(timeStamp).toBe(10);

  })
  
  it('evaluates the first thread that should be run at 0 time position', () => {

  })

})
