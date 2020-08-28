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
  let game = record.find(r => r.result === "W");
  if (typeof game !== undefined || game !== null) {
    return game.year;} else {
      return undefined;
    }
}
