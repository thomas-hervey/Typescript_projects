"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// sort numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 2, -5, 0, 1, 100]);
numbersCollection.sort();
console.log(numbersCollection.data);
// sort characters
const charactersCollection = new CharactersCollection_1.CharactersCollection('EsWaQPJd');
charactersCollection.sort();
console.log(charactersCollection.data);
// sort linked list
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(12);
linkedList.add(3);
linkedList.add(11);
linkedList.sort();
linkedList.print();
