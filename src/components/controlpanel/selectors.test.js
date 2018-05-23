import * as selectors from './selectors';

describe('VarData Frame Selectors', () => {
  it('gets active dataframe ID given current lineSeqId and fileRunIdx', () => {

    const state = {
      activeFrame: {
        fileRunIdx: 0,
        lineSeqIdx: 1,
      },

      fileRuns: [
        {
          frameVarsData: [99,10,2],
        },]

        };

    const expectedVarDataIdx = 10;

    const calcIdx = selectors.getActiveFrameVarsDataId(state);
    expect(calcIdx).toBe(expectedVarDataIdx);

  })

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
