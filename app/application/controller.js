import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    handleAddLine() {
      console.log('controller Line');
    },
    handleAddText() {
      console.log('controller Text');
    },
    handleAddImg() {
      console.log('controller Img');
    },
    handleTextAlign(param) {
      console.log('controller' + param);
    },
    handleColorSelect(param) {
      console.log('controller' + param);
    },
    handleSlideSelect(model) {
      console.log('select slide ', model);
      this.transitionToRoute('slides.slide_id', model);
    },
    handleSlideRemove(model) {
      console.log('remove slide ', model);
    },
    handleSlideAdd() {
      console.log('add slide');
    },
    handleSelectedLayout(param) {
      console.log("layout selected : ", param);
    },
    handleColorPropery(color) {
      console.log("color property : ", color);
    },
    handleSelectedSlide(param) {
      // console.log("handle selected slide: ", param);
    },
    handleRemoveSlide() {
      console.log('APEL CONTROLLER');
    },
  },
});
