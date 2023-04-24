---
title: "New React Documentation: An Overview of New Documentation and Design Patterns (2023)"
date: "2023-04-07"
description: "Learn about changes to the React 18 documentation and new education features."
---

React.js, the popular JavaScript library for building user interfaces, has recently launched a new website, [react.dev](http://react.dev "react.dev"), which provides updated documentation and resources for the latest version of React. The website has been designed to help developers learn modern React using [Function components](<https://react.dev/learn#:~:text=A%20component%20is%20a%20piece%20of%20the%20UI%20(user%20interface)%20that%20has%20its%20own%20logic%20and%20appearance.>) and [Hooks](https://react.dev/learn/thinking-in-react#:~:text=Hooks%20are%20special%20functions%20that%20let%20you%20%E2%80%9CHook%20into%E2%80%9D%20React), with over 600 interactive examples, diagrams, illustrations, and challenges. (The previous React documentation site has now been archived at [legacy.reactjs.org](http://legacy.reactjs.org "legacy.reactjs.org")). The changes are intended to provide a more engaging and effective learning experience for developers.

One of the key changes is that the new documentation now teaches React with Hooks _"from the beginning"_, rather than assuming readers are familiar with Class components. This approach aims to make it easier for developer new to the framework to learn React without having to learn it twice--first to gain context for recent changes and again to learn the latest design patterns. However, there are still some rare Class component use cases that do not have a Hook-based equivalent, and Class components remain supported and are documented in the Legacy API section of the new site.

The new site includes a self-paced course called [Learn React](https://react.dev/learn "Learn React") that teaches React from scratch, with chapters covering the fundamentals of React, adding interactivity, managing state, and using Hooks. There is also an [API Reference](https://react.dev/reference/react "API Reference") section that provides details and usage examples for every React API.

One of the standout features of the new site is the use of over 600 interactive examples throughout the site. The examples are provided in sandboxes, which can be edited, forked, and opened in a separate tab, allowing users to play with the React APIs and explore their own ideas.

The new React site has a modern look and feel and is designed to provide an engaging and participatory learning experience. However, some developers may find it challenging to adapt to the new approach, especially those who are accustomed to using Class components in React. Additionally, the transition to the new site and the separation of legacy content may cause confusion for new users googling for documentation without enough context about the version they are working with.

## React Class Components vs Function Components

In the earlier days of React, Class components were the primary way of building components. However, with the release of React 16.8 in 2019, React introduced a new feature called Hooks, which made it possible to use state and other React features in Function components. This led to a significant shift in how developers build React applications, and Function components have become the preferred way of building components in modern React applications.

Function components are simpler and easier to understand than Class components. They are just plain JavaScript functions that return a piece of JSX. Function components also make it easy to write reusable code since they are more modular than Class components. In addition, Function components are faster to execute than Class components since they don't carry the overhead of the React component lifecycle.

Another significant benefit of Function components over Class components is that they don't have their own `this` context. This means that they don't require the binding of `this` in the constructor or in event handlers. In Class components, `this` refers to the instance of the component, which can cause confusion and introduce bugs if not handled properly.

> - Function components are just plain JavaScript functions that return a piece of JSX.

### Benefits of Function Components

**Simplicity:** Function components are simpler to write and understand than Class components. They are just plain JavaScript functions that return JSX, and there is no need to worry about `this` or `bind`.

**Performance:** Function components are typically faster than Class components because they have a smaller overhead. This is because they don't have any state or lifecycle methods, and don't need to create an instance of the component class.

**Easier Testing:** Function components are easier to test than Class components because they don't have any state or lifecycle methods that need to be mocked up when considering unit test design.

### Functional Programming and React Function Components

#### Function components as Pure Functions

The use of Function components in React is also related to the functional programming paradigm. Functional programming is a programming paradigm that emphasizes the use of pure functions and immutable data structures. In React, Function components can be thought of as pure functions that take in props as input and return JSX as output, because for any prop value input will yield consistent JSX.

By using Function components, we can embrace the functional programming paradigm and write more declarative, composable, and testable code. We can also take advantage of React Hooks, which are functions that allow us to use state and other React features in Function components without needing to use classes. To some in the functional community, the change of state may be considered a side effect, but consise and consistent purity of Function components are still a welcome improvement to React design patterns.

Overall, the shift from Class components to Function components in React aligns with a broader trend towards functional programming in the JavaScript community, and can lead to simpler, more performant, and more testable code.

> - Function components can be thought of as pure functions that take in props as input and return JSX as output.

#### Is JavaScript a Functional Language?

Not quite--although JavaScript is definitely capable of providing some of the benefits of functional programming when written with functional design patterns in mind. It's possible to argue that JavaScript is **both** a functional language (FP) and an object-oriented language (OOP).

To illustrate the spectrum of how the label _"functional language"_ is applied, let's consider a _"purely functional"_ language, Haskell. Haskell is a language where functions are always pure by default, meaning they don't change external things like global variables or mutable data structures, and always return the same output for the same input. This makes it easier to understand how functions behave and can lead to fewer bugs.

On the other hand, Clojure, which is widely-recognized as a functional language, allows side effects and mutable data structures, but it also has a lot of tools that support functional programming concepts like using immutable data structures and higher-order functions. This makes it easier to write code that is modular and less likely to break.

A key difference between Haskell and Clojure is that Haskell is **statically-typed**, while Clojure is **dynamically-typed**. We will get into the nitty-gritty of **types** in a future blog post, but for now think about it like this:

> **Uncaught TypeError yourFunction is not a function**
>
> The error above tells you that there is a mismatch between what `yourFunction` is and how `yourFunction` is being used.
>
> `yourFunction` is being called as a function somewhere in your code, but the language does not recognize it as a function because it does not meet the language's set of guidelines for what a function is, or how a function's **"type"** is defined. (In this case, these guidelines are baked into the language as part of its implementation for `function`.)
>
> Languages that perform type checking at compile time are considered **statically-typed** and will error type mismatches before runtime. Languages that perform type checking at runtime are considered **dynamically-typed** and will error at runtime.

JavaScript is a **dynamically-typed** language. Specifically, the JavaScript interpreter assigns types at runtime and the error above would be seen after executing the program. This means that the program executed--_but with errors_. A **statically-typed** language errors during compilation and will not execute if there are type errors. The latter provides a safeguard by ensuring that a program that executes has met a certain threshold of analysis, the variables are being utilized in a way that is technically correct. If this sounds like an appealing feature, you may be interested in TypeScript, a superset of JavaScript that provides static-typing.

JavaScript may not be designed to be purely functional, but as a highly flexibly language it is possible to apply functional concepts in JavaScript with the goal of limiting side effects. Like the functional language Clojure, JavaScript is **dynamically-typed**, but unlike Clojure, JavaScript widely allows for mutability. TypeScript provides more tools that support functional paradigms with JavaScript syntax, including static-typing and options for read-only variables. Haskell is a languages that is built with static-typing and immutability as core features.

React is a JavaScript framework written in and for JavaScript (and compatible with TypeScript), but is not in and of itself "functional". Simply, recent changes and recommendations in the React documentation reflect functional programming design patterns that have become increasingly popular among JavaScript developers.

## Conclusion

In summary, React Class components and Function components are two different ways of defining React components, but Function components are the standard design pattern in React moving forward. Class components are defined using ES6 classes and provide a more traditional object-oriented programming (OOP) approach to building React components. Function components, on the other hand, are defined using JavaScript functions and are a more functional programming (FP) approach to building React components.

### To migrate from Class components to Function components, developers need to do the following:

#### Let's start with the following Class component:

```
class Album extends React.Component {
  constructor(title, artist, tracks) {
    super();
    this.state = {
      title: title,
      artist: artist,
      songs: songs
      };
  }
  render() {
    return <p>The album {this.title} by {this.artist} has been created!</p>;
  }
}
```

1. Convert the Class component to a Function component by changing the class declaration to a function declaration.

```
const Album = (title, artist, tracks) => {
...
```

2. Remove the render() method and move its return statement into the function body.

```
const Album = (title, artist, tracks) => {
...
  return {
   <p>The album {this.title} by {this.artist} has been created!</p>;
  }
}
```

3. Replace the instance variables (this.state and this.props) with regular function arguments.

```
const Album = (title, artist, tracks) => {
  const [albumTitle, setAlbumTitle] = useState(title);
  const [albumArtist, setAlbumArtist] = useState(artist);
  const [albumTracks, setAlbumTracks] = useState(tracks);

  return {
   <p>The album {albumTitle} by {albumArtist} has been created!</p>;
  }
}
```

If your component uses lifecycle methods (componentDidMount(), componentDidUpdate(), etc.), these will need to be replaced with the useEffect Hook. I will cover this in the next blog post.
