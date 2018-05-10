import * as selectors from './selectors';

describe('VarDataFrame Selectors', () => {
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
})
