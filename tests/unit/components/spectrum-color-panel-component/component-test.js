import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('spectrum-color-panel-component', 'Unit | Component | spectrum color panel component', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true,
});

test('if pallete has specific attributes set true', function(assert) {

 const component = this.subject();

 assert.equal(component.get('showPaletteOnly'), true);
 assert.equal(component.get('showPalette'), true);
 assert.equal(component.get('clickoutFiresChange'), true);
 assert.equal(component.get('preferredFormat'), 'hex');
});

test('if pallete has selected color type to hex', function(assert) {

 const component = this.subject();

 assert.equal(component.get('preferredFormat'), 'hex');
});
