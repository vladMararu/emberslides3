import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['toolbar-button'],
  classNameBindings: ['selected:selected-align-button'],
  selected: false,
});
