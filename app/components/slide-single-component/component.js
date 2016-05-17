import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['slide-unit'],
  classNameBindings: ['isSelected:slide-selected'],
  isSelected: false,
  init() {
    this._super(...arguments);
  },
  actions: {
    handleSlideRemoveClick() {
      const thisHTML = Ember.get(this, 'element');
      thisHTML.remove();
      this.attrs.handleSlideRemoveClick();
    },
    handleSlideClick() {
      this.attrs.handleSlideClick();
    },
  },
});
