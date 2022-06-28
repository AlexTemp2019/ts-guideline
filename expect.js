'use strict';

class App {
  static from(name) {
    return new App(name);
  }

  #root;
  #children;
  constructor(name) {
    this.name = name;
    this.#root = this;
    this.#children = [];
  }

  set root(value) {
    this.#root = value;
  }

  addChild(child) {
    child.root = this;
    this.#children.push(child);
  }
}

module.exports = { App };
