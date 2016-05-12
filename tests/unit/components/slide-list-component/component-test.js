import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('slide-list-component', 'Unit | Component | slide list component', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  needs: ['component:image-button-component'],
  unit: true,
});

test('check if the slide-list-component is rendered', function(assert) {

  const component = this.subject();

  component.set('onClickSlide', () => {});
  component.set('onClickRemove', () => {});
  component.set('onClickAdd', () => {});

  this.render();
  assert.equal(this.$().text().trim(), '');
});
