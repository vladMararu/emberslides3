import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-toolbar-align', 'Integration | Component | canvas toolbar align', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('onClick', () => {
  });
  this.render(hbs`{{canvas-toolbar-align onTextAlign = (action onClick)}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#canvas-toolbar-align onTextAlign = (action onClick)}}

    {{/canvas-toolbar-align}}
  `);

  assert.equal(this.$().text().trim(), '');
});
