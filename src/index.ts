// Imports
import { flatten } from "./flattern-array/flattern-array";
import Node from "./expression-tree/expression-tree";
import assert = require("assert");

/* 
**
** @desc - Part 1 – Flattening an array
** @variables - Three different inputs to use for testing flattern's output
*/
const data = [ 1, [ 2, [ 3 ] ], 4 ];
const data1 = [[1, [2, [2.5, 2.6]]], 3, 4, [5, [6, 7]]];
const data2 = [["1", ["2", ["2.5", "2.6"]]], "3", "4", ["5", ["6", "7"]]];

const solution1 = flatten(data);

console.log({ solution1 });

/* 
**
** @desc - Part 2 – Refactoring an expression tree
** @solution note - Please refer to src/expression-tree/expression-tree-answer.ts to inspect class
*/
const tree = new Node(
    "÷",
    null,
  
    new Node(
      "+",
      null,
  
      new Node("", 7, null, null),
  
      new Node(
        "x",
        null,
  
        new Node(
          "-",
          null,
          new Node("", 3, null, null),
          new Node("", 2, null, null)
        ),
  
        new Node("", 5, null, null)
      )
    ),
  
    new Node("", 6, null, null)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());

const solution2 = {
  toStringOutput: tree.toString(),
  resultOutput: tree.result()
};

console.log({solution2});