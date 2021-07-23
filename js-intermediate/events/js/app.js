/* Events are at the core of the language, JS is event-driven.

    - events add interactivity (dynamic behaviour) to web pages
    - events trigger scripts of js instructions
    - not part of the JS spec, included by browsers as an API

    Events signify some action occuring, these are handled by an event handler/listener.

    Events can be signified as having three steps:
    - User triggers event
    - Event is raised within browser
    - Event handler in JS (function) handles the event

    Three event models:
    - Inline subscription (bad practice, inline HTML element attributes)
    - Simple event registration (event handler object property in JS)
    - Event listener registration

    Event phases:
    - `Captured` events will trigger when either the element with the event or its
      parent is clicked on a click event for example:
        - browser checks elements outer-most ancestor <html> for onclick handler, runs
          if it does
        - continues to the next element within <html> and repeats this process
    - `Target` phase will:
        - check if the `target` property has event handlers for click events, runs 
          if it does
        - if `event.bubbles == true`, the event will propagate to the parent of the
          selected element, and then that ones parent, and so on until it reaches
          the <html> element
    - Bubbled phase will:
        - Check for onclick handlers on the parent element for the bubbling phase,
          runs them if it does
        - Moves on to next nearest ancestor and repeats the process until it reaches
          <html>
        - Event handlers are registered in the bubble phase by default

    Event object:
    - Auto passed to event handler functions to provide extra features and info
    - use `event.target` to access the element that triggered the event, 
      can then access `event.target.style` for example
    - Prevent default behaviour of an element with `event.preventDefault()`, this
      would stop a button from submitting a form for example
    - Prevent event bubbling with `event.stopPropagation()`
*/
let clickMeBtn = document.querySelector("#clickMe");
let list = document.querySelector("#list");
let willRemovePTagEvent = document.querySelector("#willRemove");

// Adding an event listener
// - click event trigger
clickMeBtn.addEventListener("click", () => {
    alert("Hello");
}, false); // false = bubbling phase, true = capturing phase


// Event bubbles up from the element we click (li) onto the ul
// - if we used event capturing, the ul element would trigger first instead
list.addEventListener("click", (event) => {
    console.log(event.target.innerText);
}, false);

// Removing an event listener
// - parameters must be exactly the same
function alertHello(event) { console.log(event.target); }
willRemovePTagEvent.addEventListener("click", alertHello, false);
willRemovePTagEvent.removeEventListener("click", alertHello, false);

// Timed Events
// - use setTimeout()
// - setTimeout() adds a callback to the message queue, it indicates a minimum amount
//   of time that the function could take to run - not the actual as messages could
//   still be being processed
let add = (num1, num2) => num1 + num2;
setTimeout((num1, num2) => {
    console.log(add(num1, num2));
}, 5000, 10, 10); // 10 and 10 are arguments passed to the callback