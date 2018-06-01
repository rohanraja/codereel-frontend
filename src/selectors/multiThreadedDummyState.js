//Todo - Move all test files to a new tests folder
export const state = (activeTh = "tid_0", thPos = 0) => {
  return {
  activeFrame: {
    threadId: activeTh,
    threadPosition: thPos,
    timeStamp: 0,
  },

  codeStory : {
    "tid_0": [
      ["File1", 10, "RUNNING", "NONE", 10],
      ["File2", 20, "RUNNING", "NONE", 20],
    ],
    "tid_1": [
      ["CSFile1", 50, "RUNNING", "NONE", 15],
      ["CSFile2", 60, "RUNNING", "NONE", 25],
    ]
  },
};
}
