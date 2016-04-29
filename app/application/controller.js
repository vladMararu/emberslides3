import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
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
