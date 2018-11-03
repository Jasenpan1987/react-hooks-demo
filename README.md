# React-Hooks Demo

## 1. `Todo`:

In this example you will see the basic usage of `useState`.

## 2. `Fetch`:

In this example you will see how the `useEffect` handles the side effect such as API calls.

`useEffect` takes a function, that will be called every time the component is rendered, and if you pass an addtional empty array, the function will only get called when the component is rendered first time, the behavior is like `componentDidMount`

1. work like `componentDidUpdate`

```jsx
useEffect(() => {
  document.title = "hello " + count;
});
```

2. work like `componentDidMount`

```jsx
useEffect(() => {
  document.title = "hello " + count;
}, []);
```

2. work like `componentDidUpdate` with the addtional check on the values in the array

```jsx
useEffect(
  () => {
    // will only fire when "count" is updated
    document.title = "hello " + count;
  },
  [count]
);
```
