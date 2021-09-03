const AlphaBeta = require("./index");

test("call alphabets", () => {
  expect(new AlphaBeta().call().val).toEqual([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);
});

test("call from", () => {
  expect(new AlphaBeta().from("B", "E").val).toEqual(["B", "C", "D", "E"]);
});
