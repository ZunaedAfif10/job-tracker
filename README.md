1. getElementById is used for selecting one single id..getElementsByClassName is used for selecting multiple elements by class name and it is a HTMLCollection and it is live.querySelector is used to select first matching element by css selector.querySelectorAll is used to select all matching element by css selector and it is a nodelist and it is static.


2.to create a dom we use document.createElement().and we insert new element into dom by appendChild(), append(), or insertBefore().


3.Event bubbling means when the event is started from the target element and it propagates upward through the parent elements and finally goes to the root.It works starting from target element and finishing by moving upward until reaching the root.


4.Event delegation in javascript is using event listener to the parent element to handle events of the child elements by bubbling.It is useful because it handles the added elements dynamically.


5.when preventDefault() is used it stops the default action of browser while stopPropagation() only stops the propagation of event from bubbling or capturing further.
