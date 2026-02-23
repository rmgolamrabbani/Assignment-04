1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll .

getElementById()
-Selects a single element by its unique ID.
-Always returns one element (or null). 

getElementsByClassName() 
-Selects elements by class name. 
-It selects multiple elements using a specific class name.


querySelector()
-Selects the first matching element using CSS selector.

querySelectorAll()
-Selects all matching elements using CSS selector.
-Returns NodeList 

2. How do you create and insert a new element into the DOM? 

To create a new element: 
-Use document.createElement()
-Add content or attributes
-Insert it using appendChild() or append()


3. What is Event Bubbling? And how does it work? 

Event Bubbling is a process where an event starts from the target element and bubbles up to its parent elements.
Example:

If you click a button inside a div:
First → Button event runs
Then → Div event runs
Then → Body event runs

4. What is Event Delegation in JavaScript? Why is it useful? 

Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to multiple child elements.
 
It useful because,
-Better performance
-Less memory usage
-Works for dynamically added elements

5. Difference between preventDefault() and stopPropagation().

 preventDefault()
-Prevents the default behavior of an element.
-Stops default browser behavior 

stopPropagation()
-Stops the event from bubbling up to parent elements.


