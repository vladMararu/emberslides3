import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('layouts-panel-list', 'Unit | Component | layouts panel list', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders all layouts', function(assert) {

  const component = this.subject();
  this.render();
  assert.equal(this.$('button').length, component.get('layouts').length);
});

test('trigger external action when layout button is clicked', function(assert) {

  const component = this.subject();
  this.render();

  const targetObject = {
    externalAction: function() {
      assert.ok(true);
    }
  };
  component.set('targetObject', targetObject);
  component.set('layoutClick', 'externalAction');
  this.$('button').click();
});
