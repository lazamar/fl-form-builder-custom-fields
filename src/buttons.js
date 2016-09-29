/* globals data, FormBuilder*/

/**
 * Add stuff to a FormBuilder state
 * @method addToState
 * @param  {Object} stuff
 * @param  {Array<Object>} state
 */
function addToState(stuff, formBuilder) {
  const state = formBuilder.exportState();
  const newState = state.concat([stuff]);
  formBuilder.importState(newState);
}


// Create Form builder
const container = document.querySelector('.form-builder-container');
const fb = new FormBuilder(container);

// Add a countries dropdown field when clicking it's button
const countriesBtn = document.querySelector('#countries');
countriesBtn.addEventListener('click', () => addToState(data.countriesDropdown, fb));

// Add a puppies dropdown field when clicking it's button
const puppiesBtn = document.querySelector('#puppies');
puppiesBtn.addEventListener('click', () => addToState(data.puppiesDropdown, fb));
