import Ember from 'ember';

let slidesHolder = [];

export default Ember.Component.extend({
  classNames: ['slide-list'],
  slides: null,
  init() {
    this._super(...arguments);
    this.set('slides', slidesHolder);
  },
  dragulaconfig: {
    options: {
      copy: false,
      revertOnSpill: false,
      removeOnSpill: false,
        // Other options from the dragula source page.
    },
    enabledEvents: ['drag', 'drop'],
  },
  actions: {
    addEmptySlide() {
      const d = new Date();
      const emptySlide = Ember.Object.extend().create({ id: d.valueOf(), shapes: [] });
      this.get('slides').pushObject(emptySlide);
      console.log(this.get('slides'));
    },
    onClickRemove(obj) {
      this.set('slides', this.get('slides').without(obj));
    },
    onDrag() {
    },
    onDrop(el, target, source, sibling) {
    },
  },
});
