import * as callStackSelectors from 'selectors/callStackSelectors';

//ToDo: Write more test cases

describe('Call Stack Selectors', () => {
    const state = {
      activeFrame: {
        threadPosition: 0,
        threadId: "tid_1"
      },

      fileRuns: [
          [
            'Program.cs',
            8,
            'RUNNING,ENTERED',
            'Main'
          ],
          [
            'ClassA.cs',
            13,
            'RUNNING,ENTERED,EXITING',
            'ClassA'
          ],
          [
            'ClassB.cs',
            12,
            'RUNNING,ENTERED,EXITING',
            'ClassB'
          ],
          [
            'Program.cs',
            9,
            'RUNNING',
            'Main'
          ],
          [
            'Program.cs',
            10,
            'RUNNING',
            'Main'
          ]
      ]

    };

  // Todo - Fix call stack test cases
  it('get current call stack based on the file run idx and file runs state: single', () => {
  })

  //
  //
  //   const idx = 0;
  //   const callStack = callStackSelectors.getCallStackForIdx(state, idx);
  //   expect(callStack.length).toBe(1);
  //   expect(callStack[0]).toBe("Main");
  // })
  //
  // it('get current call stack based on the file run idx and file runs state 2', () => {
  //
  //   const idx = 1;
  //   const callStack = callStackSelectors.getCallStackForIdx(state, idx);
  //   expect(callStack.length).toBe(2);
  //   expect(callStack[0]).toBe("Main");
  //   expect(callStack[1]).toBe("ClassA");
  // })
  //
  // it('get current call stack based on the file run idx and file runs state 3', () => {
  //
  //   const idx = 2;
  //   const callStack = callStackSelectors.getCallStackForIdx(state, idx);
  //   expect(callStack.length).toBe(3);
  //   expect(callStack[0]).toBe("Main");
  //   expect(callStack[1]).toBe("ClassA");
  //   expect(callStack[2]).toBe("ClassB");
  //
  // })
  //
  // it('get current call stack based on the file run idx and file runs state - popping', () => {
  //
  //   const idx = 3;
  //   const callStack = callStackSelectors.getCallStackForIdx(state, idx);
  //   expect(callStack.length).toBe(1);
  //   expect(callStack[0]).toBe("Main");
  // })
  //
  // it('get current call stack based on the file run idx and file runs state - continuing', () => {
  //
  //   const idx = 4;
  //   const callStack = callStackSelectors.getCallStackForIdx(state, idx);
  //   expect(callStack.length).toBe(1);
  //   expect(callStack[0]).toBe("Main");
  // })

})
