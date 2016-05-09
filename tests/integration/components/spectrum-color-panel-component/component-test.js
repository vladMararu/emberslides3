import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('spectrum-color-panel-component', 'Integration | Component | spectrum color panel component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{spectrum-color-panel-component}}`);

  assert.equal(this.$().text().trim(), '▼');
});
