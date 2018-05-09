import {JsonPatcher} from './jsonPatcher'

describe('JSON DIFF PATCHER', () => {
  it('should create json by applying simple patch on an existing json', () => {

    const baseState = {
      "local": {
        "i" : 4
      },
      "global" : {
        "j" : 99
      }
    };

    const diffPatch = {
      "op": "replace", 
      "path": "/local/i", 
      "value": 155
    };


    const derivedState = JsonPatcher(baseState, diffPatch);


    expect(derivedState.local.i).toBe(155);
    expect(derivedState.global.j).toBe(99);

  })

  it('should return not modify base in case of blank diff input', () => {

    const baseState = {
      "local": {
        "i" : 4
      },
      "global" : {
        "j" : 99
      }
    };

    const diffPatch = {};
    const derivedState = JsonPatcher(baseState, diffPatch);

    expect(derivedState.local.i).toBe(4);
    expect(derivedState.global.j).toBe(99);
  })

  it('should be able to add new key from diff', () => {

    const baseState = {
      "local": {
        "i" : 4
      },
      "global" : {
        "j" : 99
      }
    };

    const diffPatch = {
      "op": "add", 
      "path": "/local/newKey", 
      "value": 200
    };
    const derivedState = JsonPatcher(baseState, diffPatch);

    expect(derivedState.local.newKey).toBe(200);
    expect(derivedState.global.j).toBe(99);
  })

  it('should be able to delete key from diff', () => {

    const baseState = {
      "local": {
        "i" : 4
      },
      "global" : {
        "j" : 99
      }
    };

    const diffPatch = {
      "op": "remove", 
      "path": "/global" 
    };
    const derivedState = JsonPatcher(baseState, diffPatch);

    expect(derivedState.global).toBeUndefined();
    expect(derivedState.local.i).toBe(4);
  })
})
