# ASSESSMENT 3: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What is object destructuring?

  Your answer: Object destructuring is a technique that dries up code by allowing the developer to quickly access key value pairs inside objects that are nested deeply in objects. It allowds you to assign the value of the key value pair to its address, similar to a variable call, so that you can call upon the specified value multiple times without having to type the whole dot notation addess of the value every time. 

  Researched answer: I fount out that you can also do destructuring for arrays when assigning variables to different elements to the array. 



2. What is a DOM event?

  Your answer: A DOM event is anything that can happen from the user's perspective on the webpage, such as clicking on or hover the mouse over an element of the DOM.

  Researched answer: I forgot to say that DOM events are usually tied to JavaScript functions so that the function is run once the DOM event occurs.



3. What is the difference between a class and an object?

  Your answer: The analogy is that a class is like a blueprint, while an object is an instance of that blueprint. A class lays out what key value pairs and methods an object could have, while an object is is an actual entity with real key value pairs and methods to use.

  Researched answer: I found out that JS is a prototypal-based language, unlike class based languages like Java and C++. This means that classes are different between the two types of languages. For languages like Java and C++, classes define all the properties of the potential instances. In JS thought, the instances have more room to change the values of their elements defined in the class. So in JS, the class is more of a default guide.



4. What is the difference between a HTML div and a span?

  Your answer: I don't really know formally what the difference is. To my understading, a div is a container that can hold many elements, while a span is a container that is meant to only differentiate a piece of text that is in a larger block of text.

  Researched answer: A div is what is called a block level element, while a span is an inline element



5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer: A React.Fragment is similar to a div in that it can hold multiple html elemets inside of it. It is different from a <div> in that it doesn't show nesting such that if you were to pull up the code on the broswer, the individual elements would show as if there was no container. It saves time from having to parse through a bunch of div tags.

  Researched answer: I found out that only if you use the long-hand syntax of a React.Fragment can you assign keys as an attribute to the fragment



6. What are three options for creating responsive design?

  Your answer: Okay, I'm not quite sure what this means, but I think this question is referring to DOM events. You can have code react to an onClick, when your cursor is hovering over an element, or when the element is in frame of the screen.

  Researched answer: Okay, so I was wrong. Responsive desnign has to do with the web page adjesting to the device and preferences the user has, such as viewing the web page on an iPhone vs a desktop.
  - One option of responsive design is having flexible images that change size with the browser. this can be done in CSS by not specifying the height and width, but instead giving only a max width, and allowing the browser to adjust the size.
  - A second option is having multiple style sheets, so that the web page can switch between depending on the size of the screen. This would allowd for content re-orginization,. 
  - A third option is designing with touchscreens in mind (like rememebering that hover DOm events wouldn't work) 



## Looking Ahead: Terms for Next Week
- Object oriented programming: There are four pillars to OOP: encapsulation, abstraction, inheritance and polymorphism. Encapsulation is basically created classes and objects that are self functioning; they have constructors and values that are unique to them and cannot be accessed by other classes or methods. Abstraction is the idea of making code more user friendly and putting large pieces of code into separate functions to make it more usable. Inheritance is the idea that there can be classes realted to a parent class; they will have similar attributes. Polymorphism is the idea that different classes can share a function even though the classes have major differences.  
- irb: IRB stands for interactive Ruby. It is a terminal shell that allows you to run Ruby code and see the output, similar ot a terminal.
- Instance variable: A variable that belongs to an object but not the class iteself.
- Ruby: An object oriented programming language used to develop web apps. 
- Class relationships: The four main relationships in object oriented programming are inheritance, association, composition, and aggregation. These are based on a "has-a" , "is-a", or "part-of" relationship.
- Getter and Setter methods in Ruby: In Ruby, getter and setter methods use "@" to speificy variabels. There are build in methods in Ruby: attr_reader, attr_writer, and attr_accessor to help crate getter and stter methods for you.
