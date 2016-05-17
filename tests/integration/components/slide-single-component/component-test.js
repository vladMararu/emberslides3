import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slide-single-component', 'Integration | Component | slide single component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('actions', { handleSelectedSlide() { }, handleRemoveSlide() { } });

  this.render(hbs`{{slide-single-component
  handleSlideClick =(action 'handleSelectedSlide')
  handleSlideRemoveClick =(action 'handleRemoveSlide')}}`);
  assert.equal(this.$().text().trim(), '1');

});

test('it renders 2 image-button-component', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('actions', { handleSelectedSlide() { }, handleRemoveSlide() { } });

  this.render(hbs`{{slide-single-component
  handleSlideClick =(action 'handleSelectedSlide')
  handleSlideRemoveClick =(action 'handleRemoveSlide')}}`);
  assert.equal(this.$('.image-button').length, 2);

});

test('it renders 1 span tag for id of component', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('actions', { handleSelectedSlide() { }, handleRemoveSlide() { } });

  this.render(hbs`{{slide-single-component
  handleSlideClick =(action 'handleSelectedSlide')
  handleSlideRemoveClick =(action 'handleRemoveSlide')}}`);
  assert.equal(this.$('.id-slide').length, 1);

});
