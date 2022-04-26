## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
## https://miro.com/welcomeonboard/ZjE3VkltT1pLZW8xbnlUck5MZVk1ZDhtNHpGZWdIS2FtNU9idHBHbzlNZDBVZEx5NnhSbGkxNFZUem5LeWZnUnwzNDU4NzY0NTIzOTgzNTQ0MzM5?share_link_id=550960829155
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
## HTML elements 1) shell image x3 2) ball 3) button 4) span for win, loss and total counts. 
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
## we will need to track which button is clicked and wether it is the button with the randomized ball. we will need to track if the user won or lost, as well as overall combinations of wins and losses for our total count. 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
## we need the shell and ball so we can display the game and the results when the user plays the game. we need the butons for the user to make their guesses. We will need the divs/ span to keep tract of how many times the user won or lost. 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
## const button1 = document.getElementByID () button. addEventListener('click')
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
## button click, random number between 1 and 3 to pick which shell the ball is under. grab that shell with the number chosen and reveal class to it. 
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)** 
## console log each element gotten, to be sure it is the correct element (spelling errors etc) 
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
## we need the button click to come first, and then the random number is selected (Math variable) if user selects the shell with the ball the user is the winner and win will be calculated, or loss if shell is not the one with the ball. 

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
