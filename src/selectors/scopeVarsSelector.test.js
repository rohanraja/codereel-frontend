import * as scopeSelector from './scopeVarsSelector';

describe('Simple Var State slector', () => {
  const state = {

        scopeVars: {
          1 : {
                "this": 1,
                "locals": [2,3, 99]
              },
          3 : {
                "this": 3,
                "locals": [2,3]
              },
          5 : {
                "this": 30,
                "locals": [2,3]
              },
        },

        frameVarsDataDict: {
          1: {
            "classes": {
              3: {
                "testField" : 99
              },
              1: {
                "testField" : 9
              }
            },
            "localvars": {
              2: {
                "name" : "var1",
                "value" : 25
              },
              3: {
                "name" : "var2",
                "value" : 50
              },

            }
          }
        }
    };

  it('gets scope vars for a particular mrid and timestamp', () => {

    const mrid = 3;
    const time = 1;
    const dataFrame = scopeSelector.getScopeStateOfMridAndTime(state, mrid, time);
    expect(dataFrame.this.testField).toBe(99);
    expect(dataFrame.locals.var1).toBe(25);
    expect(dataFrame.locals.var2).toBe(50);
  })
  it('gets scope vars for invalid mrid', () => {

    const mrid = 30;
    const time = 1;
    const dataFrame = scopeSelector.getScopeStateOfMridAndTime(state, mrid, time);
    expect(Object.keys(dataFrame).length).toBe(0);
  })

  it('gets scope vars for an invalid localid', () => {
    const mrid = 1;
    const time = 1;
    const dataFrame = scopeSelector.getScopeStateOfMridAndTime(state, mrid, time);
    expect(dataFrame.this.testField).toBe(9);
    expect(dataFrame.locals.var1).toBe(25);
    expect(dataFrame.locals.var2).toBe(50);
  })

  it('gets scope vars for an invalid this', () => {
    const mrid = 5;
    const time = 1;
    const dataFrame = scopeSelector.getScopeStateOfMridAndTime(state, mrid, time);
    expect(dataFrame.this).toBe(undefined);
    expect(dataFrame.locals.var1).toBe(25);
    expect(dataFrame.locals.var2).toBe(50);
  })
})

