import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-slide-panel-properties', 'Integration | Component | canvas slide panel properties', {
  integration: true,
  beforeEach: function(){
    this.set('handleLayoutClick', () => {});
    this.set('selectColorPropery', () => {});
    this.set('actions', {
      handleSelectedLayout() {
      },
      handleColorPropery() {
      },
    });
  },
});

test('it renders main div tag from template', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{canvas-slide-panel-properties
    handleLayoutClick =(action 'handleSelectedLayout')
    selectColorPropery =(action 'handleColorPropery')}}`);

  assert.equal(this.$('div').length, 1);

});

test('it renders 2 p tags inside main div tag', function(assert) {

    this.render(hbs`
      {{#canvas-slide-panel-properties
        handleLayoutClick =(action 'handleSelectedLayout')
        selectColorPropery =(action 'handleColorPropery')}}
      {{/canvas-slide-panel-properties}}
    `);

    assert.equal(this.$('div p').length, 2);

});

test('it renders layouts-panel-list component', function(assert) {

    this.render(hbs`
      {{#canvas-slide-panel-properties
        handleLayoutClick =(action 'handleSelectedLayout')
        selectColorPropery =(action 'handleColorPropery')}}
      {{/canvas-slide-panel-properties}}
    `);

    assert.equal(this.$('layouts-panel').length, 1);

});
