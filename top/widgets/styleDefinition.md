## meanings of falsy things ##
### The Rule: ###
- undefined should be kept to mean that a value hasn't been initialized,
- when returned from a function (or as a callback)
- null should be used to say "yes, this variable 'exists' but I dont have a value for it at this time"
- "", 0 should be used instead of "false" when you are working with a string or number variable
- false should be used when dealing with a boolean variable
- false should be used when "", 0 could have potentially dual meaning, and you need an alternative.
- for instance, array subscript 0 ... is a valid array subscript. so, a function that finds a value in an array cant return 0 to say it didn't find anything.  so use null.
- generally, when returning something from a function, a falsy value should mean failure, unless a falsy value makes sense as a legitimate return value.  In which case, false or null could be returned to mean failure.

### The Reasons: ###
- the real goal is to make testing truthy/falsy be the default way to check stuff.  when a function returns you should not need to test it against a special version of false in order to know if you got a useful value from it.  falsiness should be good enough.  Dont be picky.  single variable if statements are very simple and readable.
- the only reason to check against specific falsy values is if they somehow mean something different or special.
- we need them to mean something consistent so when we see them in code we know why we compared against something specific.

### Examples: ###
	// good	
	if (item) ...
	if (requestParams["name"]) ...

	// bad.  this implies that if item were undefined, or something else falsy, you'd be happy to try to use it.  Just because it SHOULD be null, doesn't always mean you have to test for null specifically.   NOTE: if that really is what you meant, you can use this form.  but it better imply that not using it would give different results
	if (item === null) ... 

	// bad,  this implies but ONLY IF undefined really is diffrent from say ... null or "" in some important way
	if (typeof item === "undefined") 
	if (typeof requestParams["name"] === "undefined") // name WAS not even included in the post

	// if I saw this, I would expect that you wanted to be sure the field was submitted, but had an empty value.
	if (requestParams["name"] === "")




## == and !=  vs  === and !=== ##
### The Rule: ###
- use === and !==
- don't use == and !=

### The Reasons: ###
- less ambiguity
- theoretically should be a faster comparison, since it can be determined with less comparison
- makes jslint happier, which means its easier to verify code using automated tools

### Examples: ###
	// good
	if (x === 5) ...

	// bad
	while (x != false) ...


## variable names and function names ##
### The Rule: ###
- use **camelCase**, not ProperCase, not underscore\_seperate\_words
- use whole words, not abbreviations

### The Reasons: ###
- seems to be the standard in javascript, so keep it consistent
- whole words are easier to read, and easier to understand
- don't add words that aren't needed
- use variable names that imply their type
	- for objects, use singular nouns
	- for lists and collections, use plural nouns
	- for booleans, use adjectives, adverbs that are "yes/no", past tense verbs, or short phrases that start with a question word like "is" or "has"
	- for numbers, use words like "count" or "length" instead of plurals like "items"
	- for strings, use words sound like they talk about text
	- for loop variables, i, j, k are perfectly ok.  and len is ok if you are using it as a control var in a for loop, outside of loop control variables, use an actual word.
	- for short 1-liner anonymous, inline functions, using 1 letter variables to keep it short and sweet is ok, so long as the function itself tells the story about what the variable is used for.
	- in mathematical formulas, using standard math variables for their accepted math purpose is ok. (x, y, r)
 	- for dates ... start with the word date
 	- for times, start with the word when
 	- for functions, start with a verb
 
### Examples: ###
	// bad
	accountInfo // info is a garbage word, its taking up space.  use account.  or, if thats taken, use a modifier that tells us something about what makes this variable special 
	cfg // I assume you mean "config" ... so say that
	
	// good booleans
	empty, ready, enabled, hasMoney, shouldBeRecalculated, needy, waiting, enabled, visible, replied

	// bad booleans
	cat, item, items, reply

	// good numbers
	length, count, amount, balance, width, height, depth, area

	// bad (unless part of a resonably short for loop)
	len, i, j, k
	
	// bad (unless in 1-liner inline function, or math computation which implies specific meaning)
	x, y, z, r, a, b, c

	// good strings
	name, description, title, caption, text, reply, firstName, lastName, abreviation

	// good dates
	dateOfBirth, dateAdded, date

	// good timestamps
	whenBorn, whenStarted, whenUpdated, whenOpened


## Constructor names ##
### The Rule: ###
- use **ProperCase**, not camelCase, not underscore\_seperate\_words
- use nouns instead of verbs
- use plural nouns if it creates an object that is a collection of things

### The Reasons: ###
- seems to be the standard in javascript, so keep it consistent
- helps keep track of what kind of function it is

### Examples: ###
	// good
	Item, User, Account

	// bad
	item, createUser, load


## "Constants" ##
### The Rule: ###
- use ALL\_CAPS\_WITH\_UNDERSCORE\_SEPERATION

### The Reasons: ###
- even though you cant actually have constants, at least you can follow conventions used in other languages that tell people how you expect them to be used.

### Examples: ###
	// good
	var MAX_COUNT = 10;
	var PI = 3.14159;

	// bad
	var MAX_COUNT;  // define it when you declare it
	var maxCount = 10;  // if its meant to be constant ... say it loud and clear
	

## variable declaration ##
### The Rule: ###
	* variables are declared at the beginning of their scope
	* a blank line should be left between variables declarations and the rest of a function
	* variables may be initialized in a declaration, but dont need to be.
	* variables should generally be declared on their own lines
		* with exceptions for variables that are more easily understood together
	* each variable declaration line should start with "var" and end with ";"
		* that means no multi-line var declarations.
### The Reasoning: ###

### Examples: ###
	// good
	function doStuff() {
		var list = [ "one", 2, 3 ];
		var i, j, k, len;
		var x, y;
		var enabled = false;
		var tools = null;

		... // rest of function
	}

	// bad
	function doStuff() {
		...
		...

		// since the variable scope is not limited to the loop, it belongs up at the top of the function
		for (var i = 0, len=items.length; i < len; i++) {
			...
		}
		for (key in person) {
			var property = person[key];
		}

		// put the declaration at the top of the function.
		var item = new Item();

		...
	}

## Code blocks and Squiglies ##
### The Rule: ###
- The open squiggly goes at the end of the starting line (not the beginning of the next line)
- the close squiggly goes on a line all by itself.
- the close squiggly should line up with the beginning of the line that opened it
- everything inside the block of code should be indented one level.
- this style applies to object literal "blocks" as well.
- always use the squigglies (even when they aren't strictly required)
	
### The Exception: ###
- at the very top of a function, a series of 1 liners can be used to validate params and stuff like that.
- the series of 1 liners should be separated from the rest of the function by a blank line.
The Reasoning:
- javascript has issues that stem from auto-semi-colin assumption
- the libraries we use to "lint" the code support this layout

### Examples: ###
	// bad - squigly should be on first line
	if (isBad)
	{
		doStuff();
	}

	// bad - should have squiglies, even though its a one liner.
	if (isBad)
		doStuff();

	// good
	if (isBad) {
		doStuff();
	}

	while (working) {
		keepWorking();
	}

	// note, based on other rules, i and item should already be declared at top of function
	for (i = 0; i < list.length; i++) {
		item = list[i]
	}

	// examples of exception - one liner param validations at top of functions
	function plot(x, y, err) {
		if (typeof y === "undefined") throw new Error("y not?");
		if (x <= 0) throw new Error("x must be positive");
		if (err) console.log(err);

		...
	}


## code blocks and spaces ## 
### The Rule: ###
- put a space after the control word (if, while, for) before the open paren
- put a space after the close paren, before the open squiggly
- don't add spaces inside of the parens around its contents
- special exception ... ! at the beginning of a conditional should be surrounded by spaces

### The reasoning: ###
- space after control word is more readable, and makes them feel different from functions
- spaces inside just add space.


## Indentation ##
### The Rule: ###
- Indent 1 tab for each level of indentation, use tabs, not spaces.

### The Reasoning: ###
- tabs can be adjusted to whatever size the reader prefers.
- tabs use fewer characters, so files are smaller

## Line length ##
### The Rule: ###
- a line should not exceed 80 characters in width
- if it would, find a readable place to split it, and do.
- if a line would break into 2 lines, consider using many instead.

### The Reasoning: ###
- 80 prints nicely.
- long lines get cumbersome to read
- long lines and make it harder to do side by side code compares.

### Examples: ###
	// HMM.  I need to put better descriptison in the rules about how this should work
	// bad
	function thisFunctionHasWayTooManyCharacters(x, y, z, length, uglyStuff, moreStuff) {

	// good - go ahead and break it into many lines
	function this_function_has_lots_of_params(
		x
		, y
		, z
		, length
		, uglyStuff
		, moreStuff
	) {



