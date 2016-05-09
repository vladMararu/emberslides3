import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['toolbar-button'],
  actions: {
    onColorChange(event) {
      this.set('currentColor', event.target.value);
      this.sendAction('onColorSelect', this.currentColor);
    },
  },
});
