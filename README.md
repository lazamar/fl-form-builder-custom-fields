Add pre-filled fields to the form-builder

Just open `demo/index.html` to see it in action.
The relevant code is at `src/buttons.js`.

## How does it work?
Basically, all of the form-builder's state is described in one array with objects. Each object describes one form field. We simply fill a field the way we want and then save the object to describe the field the way we want. Then, later we can add it to any form in the builder by just appending it to the state array.

All of the magic happens in these lines.


``` javascript
  const state = formBuilder.exportState();
  const newState = state.concat([myComponent]);
  formBuilder.importState(newState);
```
