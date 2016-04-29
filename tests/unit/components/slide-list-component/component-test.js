import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('slide-list-component', 'Unit | Component | slide list component', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('check if the slide-list-component is rendered', function(assert) {

  // Creates the component instance
  /*let component =*/ this.subject();
  // Renders the component to the page
  this.render();
  assert.equal(this.$().text().trim(), '');
});
