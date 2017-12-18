/*
Synchronous code
In synchronous programs, if you have two lines of code (L1 followed by L2), then L2 cannot begin running until L1 has finished executing. One line at a time and in order they appear -- in JS, only one thing is happening at a time

You can imagine this as if you are in a line of people waiting to buy train tickets. You can't begin to buy a train ticket until all the people in front of you have finished buying theirs. Similarly, the people behind you can't start buying their tickets until you have bought yours.


Read more at https://www.pluralsight.com/guides/front-end-javascript/introduction-to-asynchronous-javascript#o46hyWH3tU7v4wiJ.99
*/
------------------------------------------------------------------------------------------------------------------------
/*
Asynchronous code
In asynchronous programs, you can have two lines of code (L1 followed by L2), where L1 schedules some task to be run in the future, but L2 runs before that task completes.

You can imagine as if you are eating at a sit-down restaurant. Other people order their food. You can also order your food. You don't have to wait for them to receive their food and finish eating before you order. Similarly, other people don't have to wait for you to get your food and finish eating before they can order. Everybody will get their food as soon as it is finished cooking.

The sequence in which people receive their food is often correlated with the sequence in which they ordered food, but these sequences do not always have to be identical. For example, if you order a steak, and then I order a glass of water, I will likely receive my order first, since it typically doesn't take as much time to serve a glass of water as it does to prepare and serve a steak.

Note that asynchronous does not mean the same thing as concurrent or multi-threaded. JavaScript can have asynchronous code, but it is generally single-threaded. This is like a restaurant with a single worker who does all of the waiting and cooking. But if this worker works quickly enough and can switch between tasks efficiently enough, then the restaurant seemingly has multiple workers.

JavaScript is Single Threaded, only doing one command at a time


Read more at https://www.pluralsight.com/guides/front-end-javascript/introduction-to-asynchronous-javascript#o46hyWH3tU7v4wiJ.99
*/

/*
Asynchronous means more than one at a time -- several pieces of code are exectuing at the same time -- JS is synchronous though, how is it handling asynchronous events?

The JavaScript Engine doesnt exist by itself inside a browser -- Rendering Engine and HTTP Requests also exist in the Browser

JavaScript Engine engine has hooks that allow it to talk to the Rendering Engine and HTTP Request to change things on the DOM or go out and request data -- all of this may be running asynchronously meaning the JS Engine, the Rendering Engine and Requests all happen simultaneously but whats happening just inside the JS Engine is synchronous

Event Queue -- list inside JS Engine which is full of notifications of events that might be happening. When the browser has an event that inside the JS Engine we want tobe notified of, the event gets placed on the queue

Click event: when someone clicks on the screen, what if theres a function that needs to respond to a click event? The event queue gets looked at by JS when the execution stack is empty

If something is in the event queue, JS looks to see if there is a particular function that needs to be run when that even was triggered

It sees a click event and knows there is a function that needs to be run for that event and creates an exectuion context for whatever function when that event happened.

That event is processed and next item in queue moves up. The event queue wont be processed until the execution stack is empty until JS is finished running all that other code line by line

So JS isnt really asynchronous -- the browser is asynchronously putting events into the event queue but the JS code is still running line by line. Once the exectuion context is empty, then the events are processed. If a function is called, JS creates an exectuion context for it and it runs like normal
*/

// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

/*
Example code above: if you let the page run without doing anything, it will invoke the waitThreeSeconds function set up its execution context then print its content once its comlete. Then, it will finish running whatever is in the global context in this case, the last console.log

If we click anywhere on the page while the initial waitThreeSeconds function is still running, it will print 'click event' once every other line has been ran. Why? JS doesnt look at the event queue until the execution stack is complete

Long running functions can actually interrupt events that are being handled but this is how JS synchronously deals with other asychronous events happening elsewhere in the browser that at some point complete and JS needs to know about

Event loop -- JS will continuously watch for event in the queue and respond if needed -- if theres supposed to be a function or event, it will run it

How JS handles asynchronous events: Any events that happen outside of the engine get placed in the queue and if the execution stack is empty, it will process those events in the order they happened
*/
