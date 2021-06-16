---
title: Using useContext with useReducer - a powerful and efficient way of managing global states
date: 16 June 2021
description: After reading this, you wont have to manually pass props in your react app again and again and question your existence!
---

In this read, you'll learn dealing with states in your large React app in a better way. You wont have to manually pass props in your again and again and question your existence!

[useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) hook when combined with the [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) hook, provides us a structured and efficient way of managing and passing state values around your app. Also, if you haven't heard of these hooks, I would advise you to go through them before reading further.

Lemme show you how to do it with a practical example. 

### Defining our useReducer

Let's suppose that we need two state variables in our highest level component in `App.js` - a `user` object with two properties, `name` and `email` and a `loginStatus`boolean variable. 

We'll use useReducer to store and manage them.

```jsx
//App .js

const [state, dispatch] = useReducer(reducer, initialState)
//initial state values 
const initialState = {
  user : {
	   username: "",
	   email: ""
	 },
  loginStatus : true
}
// Reducer function
const reducer = (state, action) => {
	if(action.type == 'changeUsername')
	   return { 
		     user : {
			      username:action.value,
			      email: state.user.email
			},
		     loginStatus : state.loginStatus
		}
	}
}

```

### Creating the contexts

Now we will probably need to access and maybe modify the `user`data in our deep nested components, so we will have to form Context Providers. Now , here's the catch, we will form two different Contexts, one having the value as `state` and other having the value as `dispatch`. This is done to ensure the nested components only consume what they need and this improves performance. So we'll create two files `StateContext.js`and `UpdateContext.js`in the same folder as `App.js`.

```jsx
//StateContext.js

import { createContext } from 'react'
const StateContext = createContext()
export default StateContext
```

and similarly for `UpdateContext`

Now we'll pass the values down the child components by juts wrapping them around *Context.Provider* tags in `App.js` .

```jsx
//App.js

//importing contexts
import StateContext from './StateContext'
import DispatchContext from './DispatchContext'

//in JSX
return (
    <div>
        <StateContext.Provider value={state}>
          <UpdateContext.Provider value={setState}>
                <Profile />
		<EditProfile />
          </UpdateContext.Provider>
        </StateContext.Provider>
    </div>
  )
```

### Consuming the contexts in child components

Now we'll use the `useContext` hook provided by React so child component `Profile` can access the `state` values and another child component `EditProfile` can access the  `dispatch` function. 

```jsx
//Profile.js

import StateContext from './StateContext'

//using useContext hook
const state = useContext(StateContext)
```

```jsx
//EditProfile.js

import DispatchContext from './DispatchContext'

//using useContext hook
const dispatch = useContext(DispatchContext)
```

Also, here, for illustration , we just one level deep as `Profile` and `EditProfile` are immediate children of the parent `App` component. But this method will work no matter how deep the child is nested inside the parent.