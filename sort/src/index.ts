
import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"


// sort numbers
const numbersCollection = new NumbersCollection([10,2,-5,0,1, 100])
numbersCollection.sort()
console.log(numbersCollection.data)


// sort characters
const charactersCollection = new CharactersCollection('EsWaQPJd')
charactersCollection.sort()
console.log(charactersCollection.data)


// sort linked list
const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(12)
linkedList.add(3)
linkedList.add(11)
linkedList.sort()
linkedList.print()
