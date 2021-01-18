# utility classes

### ds
##### intro
Utility class to help save/load data in between sessions.

##### How to use
Import in ds.js at top of module
```const DS = require('./helper/ds.js')
...
//To use, instantiate first
const ds = new DS('example.json')

//To read in data
var memory = ds.getData();

//To add data to memory
var id = 123456;

memory.name = 'llama'
memory[id] = 654321;
memory[id].secret = 'A secret key'

//To write in data
ds.writeData(memory);

