const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')
/* 
first we create an event listener to the form, where we add a new todo
then:
create function to add the new todo to the list, 
we create this function seperately because it increase the reusibility of the code.

this function generate an html template with todo const injected in it.

then:
we inject the html template inside the ul list: create reference to the ul

*/

// store the todo in local storage:

const todosArray = [];

const addToArray = (todo)=>{
    todosArray.push(todo);
    localStorage.setItem('todosArray', JSON.stringify(todosArray));
};



const generateTemplate = todo =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
    `;
    list.innerHTML+=html

};

addForm.addEventListener('submit', e=>{
    e.preventDefault();
    // we get the value of what we type in the form, we grab the input class: add
    // trim() removes any white spaces at the beggining or at the end of the string
    const todo = addForm.add.value.trim();
    
    // store the todo in local storage:
    addToArray(todo)
    
    // check if the content has at least 1 character, not just empty.
    // if(todo.length = true)
    if(todo.length){
    generateTemplate(todo);
    // to delete the typed content inside the form, we use reset() method:
    addForm.reset()
    };
    

});

// delete todos, using event delegetaion:

list.addEventListener('click', event=>{
    
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    };
});


// filtering:
/*
we attach the eventlistener to the input, and we create a variable for the content typed in
then we create a function outside the call back function for reusibility.
*/

const filterTodos = (term)=>{
    Array.from(list.children)
        .filter(todo=>!todo.textContent.toLowerCase().includes(term))
        .forEach(todo=>todo.classList.add('filterOut'));

    Array.from(list.children)
        .filter(todo=>todo.textContent.toLowerCase().includes(term))
        .forEach(todo=>todo.classList.remove('filterOut'));
};

search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

//  retrieving the todos from local storage:

if(localStorage.getItem('todosArray')){
    storeTodos = JSON.parse(localStorage.getItem('todosArray'));
    storeTodos.forEach(todoItem=>{
        generateTemplate(todoItem)

    })
}

// filtering explanataion in depth:

/*
So if I'm typing in some kind of search term like Mario, then what I want to do is somehow filter
these to do so that only the to dos which contain that still show.
So when I talk about this, I'm talking about filtering these things.
I automatically think of the array method filter, which we used in the last chapter.

So we're going to use the filter method to accomplish this.

that is not the only way we can solve this problem.

So then the first thing we need to do is listen to a key event in this input field, 
So whenever a user type something, a new letter, we're going to perform some kind of function.

Now, that function is going to be responsible for looking at this term and then trying to match it
against whatever the content of these to DOS is.
Now, if we do get a match, we want to show that on the screen.

And we're going to do that by applying a class to the todo that don't match.
And then that class will have a rule which hides it in the success.

first of all,we need to get a reference on this input field.
Now we need to get a reference on the field directly and not the search because we're listening to 
event on the input and not a submmit event, this time on the search form.

The event we're listening for is the key events and inside we're going to file some kind of function.

So inside this function, what do we want to do?

Well, the first thing we want to do is get the term A user types in that moment in time.

So every time a user typed a letter, this callback function is going to fire.

And when it fires, I want to get whatever is currently in the input field at that moment in time.

So the way we do that is by saying CONSED and we'll call this term, you can call it what you want and

set that equal to search, which oops.

Which is the input field itself.

Then we get the value from that, the thing that the user has typed in by using the value property.

Then I'm going to use the trim method on it so that it trims off any whitespace.

OK, so now we have that term, what are user types in?

And we're getting that every time they type a new key.

So the next thing we want to do is write function, which is going to take this term and it's going

to try and match against the to dos and filter those.

So let's create a function above it.

Now I'm creating this function outside of this callback function right here because it makes our code,

again, more reusable.

And if I want to use this function from somewhere else in the code in the future, it's going to let

me do that.

If I write all the logic directly inside this callback function, then it doesn't really make it reusable

because then we can't call that from somewhere else.

So we're going to write a function here.

And this function is going to be called filter to DOS to create a constant call it filter to DOS and

set it equal to a function it's going to take in the term which are user types in which is ultimately

this thing.

And inside we're going to do something.

So let's call that function down here will say filter to DOS and in the term.

So we're calling this function every time a user presses a key.

So in here, all will do for now is log out this term so that long term.

All right.

So let's try this.

I'm going to type out a term and notice every time I type Nuki by firing that function and getting this

value log to the console.

And this matches up to whatever is in the in that moment in time.

So now we have that term.

The next step is to somehow filter through the to dos right here and apply classes to the ones that

we don't want to show.

And by that I mean apply classes to the ones which don't have a match with this because they're the

ones we want to hide.

So we're going to use the filter method to do this to filter through the to DOS.

But first of all, we need a list of the 2D.

We need a reference to that.

Now that up at the top, we already have a reference to the list container that is the ultimate that

surrounds all of the to DOS.

So this thing right here, so that there is the parents of each to do because each to do is in their

and we want a list of élite acts, a list of to dos so we can take the list and we can get the children

from that list, which will be a collection of ally acts, a collection of to DOS and we can use that.

So let's come down here and instead of log at the turn this time, let's take the list, which is the

youth out that we have a reference to dot children just to see what that is, save it.

We have to type a key to see this and we see this list of items.

Now, notice, this is an eight month collection.

So what does that mean?

Well, it means that we can't use array methods directly on this.

We've seen that in the past.

However, what we can do is convert this into an array and then we can use array methods on it, like

dot filter or dot foreach.

So let's do this, let's convert this into an array.

And we do that by saying array dots from we've seen this in the past and then putting in as a parameter

to this from method what we want to turn into an array.

So it takes this Estima collection and turns it into an array.

So now we're logging that to the console.

We should see an array when we type in a letter, which we do.

And now if we expand the Proteau property and don't worry too much what this is at the minute, but

essentially it shows all the different methods we can use.

And down here we can see we can now use the filter method and we can also use for each which is here.

OK, so there are two methods we do need to use.

So what I'm going to do now is take away the console log like so.

And now we have this array of to dos.

Now I'm going to use the filter method on this.

Now, I'm not going to do it directly here because we're going to change a few methods together.

And when we change methods together, it's more readable if we come underneath and then change them

underneath.

So I'm going to use a filter method right here.

Now, inside this filter method, we need a callback function.

So let me do that.

So this filter method is going to go through all of the items, all of the to dos in this list of lies,

and it's going to find this callback function for each one.

Now, remember, the filter method returns a new array and that new array is going to be whatever items

that we keep in it.

Now we keep an item in the array by returning.

True.

And we filter an item out by returning false.

Now, at this point, you might be thinking we want to filter out the ones which don't have a match

because we don't want to see those.

But that's not what I want to do.

I want to filter out the ones where we do have a match.

So why do I want to do that?

Well, ultimately, what I'm going to do when I type something in here is.

Look for the ones that don't have a match like these two, if I type in Mario and with those two, then

I can apply a class, each one of them, which is going to hide those to DOS.

So I want to filter out the one that does match because I don't want to do anything with the hope that

makes sense so that what I'm going to do here is return something.

This is going to either be true or false.

Now, before we return, anything we actually need to take in a parameter here, which refers to the

individual item in the array as we reiterate it.

So I'll call this a to do.

And that's going to mean each of the allied tags basically as we take them in.

And for each one, I want to return to do dot text contents.

And this text content is going to look at the actual text inside the sponsor.

It doesn't matter that we're using the property on the yellow tag because this text is still inside

the tag.

We don't have to do it directly on the spot.

We can do it on the allied tag.

And it still looks at any text inside that in here.

Now, this is the only text in there, so it's going to try and match it against that.

And in fact, what I'll do is instead of returning something for now, let me just log to the console.

So as a console dialogue and will log out to do dot text content, and I'm just going to return true

for now to keep everything in the array.

Now, if we save this and if I type out M, we can see this is the text content right here.

So what we're ultimately going to do is compare the term against the text content.

OK, so now we can get rid of these things, I'm going to return to do text content, then I'm going

to use a method called Includes, which we've seen before.

This search is a string to see if it includes a certain tone.

And we have that term, which we want to check.

So if I paste that in there now, then this is what we're returning.

This is going to be either true or false now that this is going to be true, if that particular to do

contains the term and so is going to keep that in the array.

Now, I want the opposite of this.

I only want items to be kept in the array if they don't include the term so I can negate what's returned

here, I can reverse it by putting the exclamation mark in front of it.

Remember, we've seen this this negates a boolean.

So if this is true, then it's going to turn into false.

If this is false, is going to turn to true.

So now this new array that we get back from the filter method is going to include only to DOS, which

don't include the term, because we've placed that there.

And that's what we want.

We want an array of to dos which don't contain the term, because then what we can do is we can cycle

through this array using a foreach and apply a class to each one of those in that array.

And that class in a sixth sheet is going to hide those to DOS.

I hope that makes sense.

So this is our fildes method done here now because this is one line we can shift it up to one line on

here.

So let's delete those things and delete those things as well.

And now we have that on one line.

So this is returning the array that we need and now we can cycle through that array using foreach.

So inside this, again, we need a callback function.

And this is where inside here we're going to apply a class to each one.

Let's spell for each correctly, first of all.

So we still take that to do like this and then we take that to do and we can say class list, then dot

art and the class we're going to add is filtered.

OK, now, again, if we want even though we're not returning anything here, we can still bring this

up to one line so we can bring this up to there and we can bring this up to there.

Now, it's going to return this value, but it doesn't matter.

It's still doing what we want.

So now we're getting all of the to dos inside the array that don't include that term.

Then for each one of them were applying a filter class to it.

So let's test this out.

And what I'm going to do is just inspect an element over here so that we can see all of these different

elai tags, these different to do.

Now, if I start to type something in, for example, m then notice this middle one gets a class of

filtered because what we're doing is cycling through these using the filter method and we're filtering

out anything which does include this term and we're only left with this and then we're applying a class

to that filtered.

So later in the success will make a rule for this access class to hide this one.

Now if I type and a nothing else happens because Emma is here and also here, but if I type and they

are, then we get a class of filtered at the bottom because NPR is not in this, but it is in this.

OK, so that works.

But there's one thing wrong.

If I then delete R then this at the bottom still has a class of filtered and it shouldn't do because

Emma and Emma they match.

So we need a way to do the opposite of what we've just done to remove classes when we get a match.

So what I'm going to do is actually copy all of this.

Let me just make a little more space so it's more readable then paste it in.

So we're still getting an array from list of children and we're still going to filter through each one.

This time I want to get a new filtered array which contains all of the elements that do much because

when they do much, I want to remove that filter class.

So I want the opposite of this so I can just remove that.

And now we get a filtered array of elements or to DOS which do contain that term.

So now we have those we can use foreach to cycle through them.

And for each one of those, we're going to remove the filter class because we no longer want to hide

those.

So when we get a match now we're taking that class back off.

So if we save this and preview, I'm going to type an A and notice currently this one is filtered and

a R and this one becomes filtered.

Now if I delete what we get rid of the filtered here because we get a much and if I delete two and three,

then we delete the filter here because now it matches all of them.

So now we have the JavaScript functionality done.

The only thing left to do is make this filtered class rule in the house.

So let's say filtered and when an element has this class.

We want to say the display is going to be known and that's important overrides any other class it might

have or any other style it might have.

So let's save that.

And now let's test this out.

I'm going to say play and we get that one.

If I take one of these away, anything with a pee in it, if I a defeat, we can see that one.

And this is also going to work if we add some more.

So let me say buy milk and buy bread and make the bed and buy flowers, etc. and a bit wrong.

But whatever, if we now start to say be you, why we get everything we buy and if we start to delete,

then we can see more.

We can also delete these ones and it's still going to work.

So a fellow for flowers, etc..

So now we have a fully functioning search form at the top of our To-Do list.

Now, like I said, this was just one way of accomplishing this task and there are other ways to do

it as well.

The reason I chose to use the filter method right here inside this function is because we've just been

looking at array methods in the last chapter.

And I wanted to do some practice with different array methods and array method chaining.

So that's why I chose this way guaranteed.

If you give this problem to 10 different developers, they'll all come back with a different solution.

So if you want to play around with this, try and come up with your own solutions, this is just one

of them.

But actually, there is one other problem with this, which I just remembered, and that is if we type

something up here, for example, in capitals play Mario Kart, then it doesn't come up with that to

do.

Now, that's because this is in capitals and the one on the to do list isn't.

And remember, when we compare those two things, capital string with a noncapital string using strict

equality, then it's not going to get a match.

They're not the same thing.

So what we could do is convert everything to lowercase, first of all, so that when we're comparing

them, we're comparing lowercase with lowercase.

So if they type something in capitals, we could get that value, then we could trim it.

Then we could say to lower case like this and then we have that term in lowercase.

But then also we want to get the text content from here just in case they enter it in uppercase over

here, for example, buy milk that's going to be stored in uppercase over here.

So what we could do is take this and convert it to lowercase as well over here.

So say to lower case like that.

And we'll do exactly the same thing for the text content down here like that.

And now we're comparing lowercase with lowercase.

We're converting everything first.

So if I now start to type play, then we still get a match, even though one is in capitals and one

is not in capitals.

And the same goes for this.

If I say buy milk that's in capitals and I search here in lowercase, then we still get a match because

we're converting everything, first of all.

So there we go, my friends.

That is the to do list completely done now.

And it's time to move on to the next chapter.



*/