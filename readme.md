# LocalStore
A small and simple free dependency to manage localstorage.
## Installation
```bash
npm install localstore
```

## Usage
#### Forget about JSON.parse and JSON.stringify
```javascript
const localStore = require('localstore')
localStore.set("color",{
    id    : 1
    name  : "red" 
});
let color = localStore.get("color"); 
console.log(color); // color object
```
#### Add a new property or update an existing one
```javascript
localStore.update("color",{
   id : 2
   description:"My favorite color"
});
```
#### Use has and hasProperty methods for validations
```javascript
if(localStore.has("color") && localStore.hasProperty("id")){
    console.log("valid color");
}
```
#### Listen for changes
```javascript
localStore.subscribe("color",(data)=>{
    console.log("color key has changed",data);
})
```

#### Remove a key
```javascript
localStore.remove("color")
```
#### for defaults data decleare the global variable schemas
```javascript
window.schemas = {
    "dog" : {id:1,name:"Poppy"}
};
let dog = localStore.get("dog");
console.log(dog);
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License [MIT]#   l o c a l S t o r e  
 