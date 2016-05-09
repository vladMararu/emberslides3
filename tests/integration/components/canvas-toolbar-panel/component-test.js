import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-toolbar-panel', 'Integration | Component | canvas toolbar panel', {
  integration: true
});

test('should have 6 button elements and one input', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('onClick', () => {
  });
  this.render(hbs`{{canvas-toolbar-panel
     onAddText = (action onClick)
     onAddImg = (action onClick)
     onAddLine = (action onClick)
   }}`);

  assert.equal(this.$().find('button').length, 6);
  assert.equal(this.$().find('input').length, 1);
});
