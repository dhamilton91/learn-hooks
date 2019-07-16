## Hooks:

https://reactjs.org/docs/hooks-intro.html

"Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."

## Purpose

The purpose of this repo is to provide examples of class components that can be refactored into function components with hooks.

- The examples range from Button as the easiest to Network as the hardest.

- Fetch is an example of how to use hooks with data fetching. Although, this is not currently recommended as the React team are working on a way to use Suspense for handling loading.

- Exercise shows a real example that I solved. I needed to store and update state within a child component but retrieve it at a later point in the parent. It uses the hooks useRef and useImperativeRef to achieve this.

- SlideShow is another real world example. It answers the question: how do you have conditional hooks? when the React team explicitly state: `Don’t call Hooks inside loops, conditions, or nested functions.` Hooks are created when component they live in mounts and destroyed when it unmounts, so it is necessary to add a wrapping component.

### Solutions can be found in `solutions` branch
