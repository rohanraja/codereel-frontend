import * as selectors from './varStateSelectors';
import * as simpleSelector from './simpleVarStateSelector';

describe('Simple Var State slector', () => {
  const state = {

        frameVarsDataDict: {
          1 : {
                "ClassA": {
                  "i" : 99
                },
                "ClassB": {
                  "userInfo" : "Original User Info"
                },
              },
          5 : {
                "ClassA": {
                  "i" : 50
                },
                "ClassB": {
                  "userInfo" : "A change"
                },
              },
          8 : {
                "ClassA": {
                  "i" : 40
                },
                "ClassB": {
                  "userInfo" : "Yet again changed"
                },
              },
        }
    };

  it('gets active vars when currTime matches a frame key', () => {

    const currTime = 1;
    const expectedIVal = 99;
    const dataFrame = simpleSelector.getVarsDataAtTime(state, currTime);
    expect(dataFrame.ClassA.i).toBe(expectedIVal);
  })

  it('gets active vars when currTime is in between two keys', () => {
    const currTime = 6;
    const expectedIVal = 50;
    const dataFrame = simpleSelector.getVarsDataAtTime(state, currTime);
    expect(dataFrame.ClassA.i).toBe(expectedIVal);
  })

  it('gets active vars when currTime is greator than maximum val', () => {
    const currTime = 33;
    const expectedIVal = 40;
    const dataFrame = simpleSelector.getVarsDataAtTime(state, currTime);
    expect(dataFrame.ClassA.i).toBe(expectedIVal);
  })
  it('gets active vars when currTime is less than minimum val', () => {
    const currTime = 0;
    const expectedIVal = 99;
    const dataFrame = simpleSelector.getVarsDataAtTime(state, currTime);
    expect(dataFrame.ClassA.i).toBe(expectedIVal);
  })
})

describe('VarData Frame Selectors with Optimized JSON patching', () => {

  it('gets active dataframe variables given current activeFrameVarDataId to FULL_STATE frame', () => {

    const dataFrameId = 4;
    const expectedIVal = 155;
    const state = {
  frameVarsDataDict: {

    1 : {
          type: "FULL_STATE",
          data: {
            "local": {
              "i" : 99
            },
            "attributes": {
              "userInfo" : "Changed User Info"
            },
            "global": {
            }
          }

        },
    2 : {
          type: "DIFF",
          patch: [{"op": "replace", "path": "/local/i","value": 155}],
          baseId: 1 
        },

    4 : {
          type: "DIFF",
          patch: [{"op": "add", "path": "/global/foo","value": "bar"}],
          baseId: 2 
        },
        
  }
    };

    const dataFrame = selectors.getVarsDataFrameFromId(state, dataFrameId);
    expect(dataFrame.local.i).toBe(expectedIVal);
    expect(dataFrame.global.foo).toBe("bar");

  })
})

describe('VarData Frame Selectors with Optimized JSON patching', () => {

  it('gets active dataframe variables given current activeFrameVarDataId to FULL_STATE frame', () => {

    const dataFrameId = 4;
    const expectedIVal = 155;
    const state = {
  frameVarsDataDict: {

    1 : {
          type: "FULL_STATE",
          data: {
            "local": {
              "i" : 99
            },
            "attributes": {
              "userInfo" : "Changed User Info"
            },
            "global": {
            }
          }

        },
    2 : {
          type: "DIFF",
          patch: [{"op": "replace", "path": "/local/i","value": 155}],
          baseId: 1 
        },

    4 : {
          type: "DIFF",
          patch: [{"op": "add", "path": "/global/foo","value": "bar"}],
          baseId: 2 
        },
        
  }
    };

    const dataFrame = selectors.getVarsDataFrameFromId(state, dataFrameId);
    expect(dataFrame.local.i).toBe(expectedIVal);
    expect(dataFrame.global.foo).toBe("bar");

  })

  it('gets active dataframe variables given current activeFrameVarDataId to DIFF frame', () => {

    const dataFrameId = 0;
    const state = {
  frameVarsDataDict: {

    0: {
          type: "FULL_STATE",
          data: {

            "local": {
              "i" : 4
            },
            "attributes": {
              "userInfo" : "Test User"
            },
            "global": {
            }
          }

        }

        }
    };

    const dataFrame = selectors.getVarsDataFrameFromId(state, dataFrameId);
    expect(dataFrame.local.i).toBe(4);

  })
})

