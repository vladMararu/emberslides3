import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-slide-panel-properties', 'Unit | Component | canvas slide panel properties', {
  // Specify the other units that are required for this test
  needs: ['component:layouts-panel-list','component:spectrum-color-panel-component'],
  unit: true
});

test('it renders layouts-panel if isPanelActive is true', function(assert) {

  // Creates the component instance
  const component = this.subject();
  component.set('isPanelActive', true);
  // Renders the component to the page
  this.render();
  assert.equal(this.$('layouts-panel').length, 1);
});

test('it renders properties-panel if isPanelActive is false', function(assert) {

  // Creates the component instance
  const component = this.subject();
  component.set('isPanelActive', false);
  // Renders the component to the page
  this.render();
  assert.equal(this.$('div').length, 6);
});

test('it NOT renders properties-panel if isPanelActive is true', function(assert) {

  // Creates the component instance
  const component = this.subject();
  component.set('isPanelActive', true);
  // Renders the component to the page
  this.render();
  assert.equal(this.$('div').length, 1);
});

test('it trigger action changePanel if p tag is clicked', function(assert) {
  const component = this.subject();
  component.set('actions', {
    changePanel() {
      assert.ok(true);
    },
  });

  this.render(hbs`<div class="header-panel">
    <p {{action 'changePanel' 'layouts'}} class={{if isPanelActive 'border-layouts'}}>
      Layouts
    </p>
    <p {{action 'changePanel' 'properties'}} class={{unless isPanelActive 'border-properties'}}>
      Properties
    </p>
  </div>`);
  assert.equal(this.$('div > p').length, 2);
  this.$('div > p').click();
});
