function useState(initialValue) {
  let state = initialValue;

  const setState = (newValue) => {
    if (typeof newValue === 'function') {
      state = newValue(state); // If newValue is a function, call it with the current state (like React).
    } else {
      state = newValue;
    }
  };

  const getState = () => state;

  return [getState, setState];
}

export default useState;
