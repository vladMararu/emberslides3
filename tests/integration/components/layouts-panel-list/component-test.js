import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('layouts-panel-list', 'Integration | Component | layouts panel list', {
  integration: true,
  beforeEach: function(){
    this.set('handleLayoutClick', () => {});
    this.set('actions', {
      handleSelectedLayout() {
      },
    });
  },
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{layouts-panel-list handleLayoutClick = (action 'handleSelectedLayout')}}`);

  assert.equal(this.$().text().trim(), '');

});

test('it renders with template block test', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Template block usage:
  this.render(hbs`
    {{#layouts-panel-list handleLayoutClick = (action 'handleSelectedLayout')}}
      template block text
    {{/layouts-panel-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
