//CJS
// const EventEmitter = required("events");

//ESM
import EventEmitter from "events";

const myEvent = new EventEmitter();

// create event , subscribe
myEvent.on("eventName", (name) => {
  // your code
  console.log("the eventName is fired" + name);
});

// emit event, fire event

myEvent.emit("eventName", syam);
