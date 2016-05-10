import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slide-button', 'Integration | Component | slide button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slide-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#slide-button}}
      template block text
    {{/slide-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it is not receiving an image', function(assert) {
  this.render(hbs`{{slide-button }}`);

  assert.equal(this.get('imgUrl'), undefined);
});

test('it is receiving an image', function(assert) {

  this.set('imgUrl', 'link_to_procede');
  this.render(hbs`{{image-button-component}}`);

  assert.equal(this.get('imgUrl'), 'link_to_procede');
});
