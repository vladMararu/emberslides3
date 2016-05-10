import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('layouts-panel-list', 'Unit | Component | layouts panel list', {
  // Specify the other units that are required for this test
  needs: ['component:image-button-component'],
  unit: true,
});

test('it renders all layouts', function(assert) {

  const component = this.subject();
  component.set('handleLayoutClick', () => {});
  this.render();
  assert.equal(this.$('button').length, component.get('layouts').length);
});

test('trigger external action when layout button is clicked', function(assert) {

  const component = this.subject();
  component.set('handleLayoutClick', () => {
  assert.ok(true);
  });
  this.render(hbs`{{layouts-panel-list click =(action handleLayoutClick)}}`);
  this.$('button').click();
});
