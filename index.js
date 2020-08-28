const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"},
  {year: "2015", result: "W"}
]

function superbowlWin(record) {
  const game = record.find(r => r.result === "W");
  if (!!game) {
    return game.year;} else {
      return undefined;
    }
}
