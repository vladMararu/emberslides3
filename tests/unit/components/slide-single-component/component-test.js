import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slide-single-component', 'Unit | Component | slide single component', {
  // Specify the other units that are required for this test
  needs: ['component:image-button-component', 'helper:plus-one'],
  unit: true
});

test('it trigger click event for each image-button-component', function(assert) {

  // Creates the component instance
  let component = this.subject();
  component.set('actions', { handleSlideRemoveClick() { assert.ok(true); } });
  component.set('handleSlideClick', function() { assert.ok(true); });
  component.set('setIndex', 4);

  // Renders the component to the page
  this.render(hbs`{{slide-single-component}}`);
  this.$('.image-button').click();
  assert.equal(this.$('.id-slide').text(), 5);
});

test('it will update the HTML value to value +1', function(assert) {

  // Creates the component instance
  let component = this.subject();
  component.set('actions', { handleSlideRemoveClick() {} });
  component.set('handleSlideClick', function() {});
  component.set('setIndex', 4);

  // Renders the component to the page
  this.render(hbs`{{slide-single-component}}`);
  assert.equal(this.$('.id-slide').text(), 5);
});
