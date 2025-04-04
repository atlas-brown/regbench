/**
Put an element after another element.

@param source The element to search.
@param find The search key. Can be a specific part of the element or an index.
@param add The element to add.

@example
```
const putAfter = require("put-after")

putAfter("ac", "a", "b")
//=> 'abc'

putAfter(["a", "c"], "a", "b")
//=> ['a', 'b', 'c']
```
*/
declare function putAfter(source: string, find: string | number, add: string): string
declare function putAfter<ArrayValueType, NewValueType>(source: ArrayValueType[], find: ArrayValueType | number, add: NewValueType): Array<ArrayValueType | NewValueType>

export = putAfter
