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
    },
    handleSlideRemove(model) {
      console.log('remove slide ', model);
    },
    handleSlideAdd() {
      console.log('add slide');
    },
  },
});
