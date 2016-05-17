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
      direction: 'vertical',
      copy: false,
      revertOnSpill: false,
      removeOnSpill: false,
        // Other options from the dragula source page.
    },
    enabledEvents: ['drag', 'drop'],
  },
  deselectSlidesWithout(slideSelected) {
    this.get('slides').forEach(function(slide) {
      if (slide !== slideSelected) {
        slide.set('setSelection', false);
      } else {
        slide.set('setSelection', true);
      }
    });
  },
  returnIndex(htmlData) {
    if (htmlData !== null) {
      return Number(htmlData.innerText) - 1;
    }
    return Number(this.get('slides').length) - 2;
  },
  returnModifyedSlides(draggedElementIndex, bottomSiblingIndex) {
    return this.get('slides').map(function(slide, index, slides) {
      if (index === draggedElementIndex) {
        return slides.objectAt(bottomSiblingIndex);
      } else if (index === bottomSiblingIndex) {
        return slides.objectAt(draggedElementIndex);
      }
      return slide;
    })
  },
  actions: {
    addEmptySlide() {
      this.deselectSlidesWithout();
      const d = new Date();
      const emptySlide = Ember.Object.extend().create({
        id: d.valueOf(), shapes: [], setSelection: true,
      });
      console.log("push slide : ", this.get('slides'));
      this.get('slides').pushObject(emptySlide);

      this.handleSlideClick(emptySlide);
    },
    removeSlide(obj) {
      this.set('slides', this.get('slides').without(obj));
    },
    handleSlideClick(slideSelected) {
      this.deselectSlidesWithout(slideSelected);
      this.attrs.handleSlideClick(slideSelected);
    },
    onDrop(el, target, source, sibling) {
      const draggedElementIndex = this.returnIndex(el);
      const bottomSiblingIndex = this.returnIndex(sibling);

      console.log("initial slides : ", this.get('slides'));
      console.log("INDEX drag/slibling : ", draggedElementIndex, bottomSiblingIndex);
      // this.$('.slide-unit').render();
      this.set('slides', this.returnModifyedSlides(draggedElementIndex, bottomSiblingIndex));

      console.log("second slides : ", this.get('slides'));
    },
  },
});
