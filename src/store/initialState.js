import {state} from 'tests/multiThreadedRun/multiThreadedDummyState';
const oldJson = {
  activeFrame: {
    fileRunIdx: 0,
    threadId: "tid_0",
    threadPosition: 0,
    timeStamp: 0,
  },


  codeFiles: {
    "File1" : {code: "#None loaded"},
  },
  
  codeStory : {

    "tid_0": [
      ["None", 0, "RUNNING", "NONE", 1]
    ]

  },

  fileRuns: [
    ["None", 0, "RUNNING", "NONE"]
  ],

  frameVarsDataDict: {
  }
}
// export default Object.assign(oldJson, {})
export default Object.assign(oldJson, state())
