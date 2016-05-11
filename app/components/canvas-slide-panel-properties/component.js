import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas-slide-panel',
  classNames: 'canvas-slide-panel',
  isPanelActive: true,
  actions: {
    changePanel(b) {
      if (b === 'layouts') {
        this.set('isPanelActive', true);
      } else {
        this.set('isPanelActive', false);
      }
    },
  },
});
