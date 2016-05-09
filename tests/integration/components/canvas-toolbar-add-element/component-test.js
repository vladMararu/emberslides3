import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-toolbar-add-element', 'Integration | Component | canvas toolbar add element', {
  integration: true,
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('onClick', () => {
  });
  this.render(hbs`{{canvas-toolbar-add-element onClick = (action onClick)}}`);

  assert.equal(this.$().text().trim(), 'add element');

  // Template block usage:
  this.render(hbs`
    {{#canvas-toolbar-add-element onClick = (action onClick)}}

    {{/canvas-toolbar-add-element}}
  `);

  assert.equal(this.$().text().trim(), 'add element');
});
