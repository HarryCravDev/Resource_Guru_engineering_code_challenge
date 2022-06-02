import Node from './expression-tree';

test('Return the correct expression string', () => {
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

    expect(tree.toString()).toBe("((7 + ((3 - 2) x 5)) ÷ 6)");
    expect(tree.result()).toStrictEqual(2);
});

test('Return the correct expression string', () => {
    const tree = new Node(
        "x",
        null,
        new Node(
            "+", 
            null,
            new Node("", 1, null, null),
            new Node("", 2, null, null),
        ),
        new Node("", 6, null, null),
    );

    expect(tree.toString()).toBe("((1 + 2) x 6)");
    expect(tree.result()).toStrictEqual(18);
});

test('Error if wrong Node configuration (provide no operator and value)', () => {
    const tree = new Node(
        "x",
        null,
        new Node(
            "", 
            null,
            new Node("", 1, null, null),
            new Node("", 2, null, null),
        ),
        new Node("", 6, null, null),
    );

    expect(() => {
        tree.toString()
    }).toThrow();
});

test('Add only one left or right Node on an operator Node.', () => {
    const treeMissingRightNode = new Node(
        "x",
        null,
        new Node(
            "+", 
            null,
            new Node("", 1, null, null),
            null,
        ),
        new Node("", 6, null, null),
    );

    const treeMissingLeftNode = new Node(
        "x",
        null,
        new Node(
            "+", 
            null,
            null,
            new Node("", 1, null, null),
        ),
        new Node("", 6, null, null),
    );

    expect(() => {
        treeMissingRightNode.toString();
        treeMissingLeftNode.toString();
    }).toThrow();
});
