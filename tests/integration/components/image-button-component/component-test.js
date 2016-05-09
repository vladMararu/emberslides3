import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('image-button-component', 'Integration | Component | image button component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{image-button-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#image-button-component}}
      template block text
    {{/image-button-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it not receiving an image', function(assert) {
  this.render(hbs`{{image-button-component }}`);

  assert.equal(this.get('imgUrl'), undefined);
});

test('it receiving an image', function(assert) {

  this.set('imgUrl', 'link_to_procede');
  this.render(hbs`{{image-button-component}}`);

  assert.equal(this.get('imgUrl'), 'link_to_procede');
});
