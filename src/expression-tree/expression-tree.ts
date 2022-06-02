class Node {
  constructor(
    public operator: "+" | "-" | "÷" | "x" | "",
    public value: number | null,
    public left: Node | null,
    public right: Node | null
  ) {}

  result(): number {

    this.processInput();

    switch (this.operator) {
      case "+":
        return this.left!.result() + this.right!.result();
      case "-":
        return this.left!.result() - this.right!.result();
      case "x":
        return this.left!.result() * this.right!.result();
      case "÷":
        return this.left!.result() / this.right!.result();
      default:
        return this.value!;
    }
  }

  toString(): string {

    this.processInput();

    switch (this.operator) {
      case "+":
        return `(${this.left!.toString()} + ${this.right!.toString()})`;
      case "-":
        return `(${this.left!.toString()} - ${this.right!.toString()})`;
      case "x":
        return `(${this.left!.toString()} x ${this.right!.toString()})`;
      case "÷":
        return `(${this.left!.toString()} ÷ ${this.right!.toString()})`;
      default:
        return this.value!.toString();
    }
  }

  processInput(): void {

    if(!this.operator && !this.value){
      throw new TypeError("You must provide a number value when not using an operator");
    }

    if(this.operator && !this.value && (!this.left || !this.right)){
      const msg = `You must provide a ${ this.left === null ? "left" : "right" } Node.`;
      throw new TypeError(msg);
    }
  }
}

export default Node;
