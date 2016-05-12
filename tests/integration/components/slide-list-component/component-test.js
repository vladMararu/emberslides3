import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slide-list-component', 'Integration | Component | slide list component', {
  integration: true,
});

test('it renders slide-list-component', function(assert) {
  assert.expect(1);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('handleSlideSelect', () => {});
  this.set('handleSlideRemove', () => {});
  this.set('handleSlideAdd', () => {});

  this.render(hbs`{{slide-list-component onClickSlide = (action handleSlideSelect)
                                         onClickRemove = (action handleSlideRemove)
                                         onClickAdd = (action handleSlideAdd)}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders all slides', function(assert) {
  assert.expect(1);

  this.set('testSlides', [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ]);

  this.set('handleSlideSelect', () => {});
  this.set('handleSlideRemove', () => {});
  this.set('handleSlideAdd', () => {});

  this.render(hbs`{{slide-list-component
                    slides=testSlides
                    onClickSlide = (action handleSlideSelect)
                    onClickRemove = (action handleSlideRemove)
                    onClickAdd = (action handleSlideAdd) }}`);

  assert.equal(this.$('.slide-unit').length, 3);
});

test('it renders the add slide button', function(assert) {
  assert.expect(1);

  this.set('handleSlideSelect', () => {});
  this.set('handleSlideRemove', () => {});
  this.set('handleSlideAdd', () => {});
  this.render(hbs`{{slide-list-component onClickSlide = (action handleSlideSelect)
                                         onClickRemove = (action handleSlideRemove)
                                         onClickAdd = (action handleSlideAdd)}}`);

  assert.equal(this.$('.image-button').length, 1);
});

test('it renders first remove slide button and slide button', function(assert) {
  assert.expect(1);

  this.set('testSlides', [
    { id: 1 },
    { id: 2 },
  ]);

  this.set('handleSlideSelect', () => {});
  this.set('handleSlideRemove', () => {});
  this.set('handleSlideAdd', () => {});

  this.render(hbs`{{slide-list-component
                    slides=testSlides
                    onClickSlide = (action handleSlideSelect)
                    onClickRemove = (action handleSlideRemove)
                    onClickAdd = (action handleSlideAdd) }}`);

  assert.equal(this.$('.slide-list>:first-child button.image-button').length, 2);
});

test('should trigger external action on add slide', function(assert) {
  assert.expect(1);

  this.set('testSlides', [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ]);

  this.set('handleSlideSelect', () => {});
  this.set('handleSlideRemove', () => {});
  this.set('handleSlideAdd', () => {
    assert.ok(true);
  });

  this.render(hbs`{{slide-list-component
                    slides=testSlides
                    onClickSlide = (action handleSlideSelect)
                    onClickRemove = (action handleSlideRemove)
                    onClickAdd = (action handleSlideAdd) }}`);

  this.$('.wraper-add-button .image-button').click();
});

test('should trigger external action on remove slide', function(assert) {
  assert.expect(1);

  this.set('testSlides', [
    { id: 1 },
  ]);

  this.set('handleSlideSelect', () => {});
  this.set('handleSlideRemove', () => {
    assert.ok(true);
  });
  this.set('handleSlideAdd', () => {});

  this.render(hbs`{{slide-list-component
                    slides=testSlides
                    onClickSlide = (action handleSlideSelect)
                    onClickRemove = (action handleSlideRemove)
                    onClickAdd = (action handleSlideAdd) }}`);

  this.$('.slide-unit > button.image-button:last-of-type ').click();
});

test('should trigger external action on select slide', function(assert) {
  assert.expect(1);

  this.set('testSlides', [
    { id: 1 },
  ]);

  this.set('handleSlideSelect', () => {
    assert.ok(true);
  });
  this.set('handleSlideRemove', () => {});
  this.set('handleSlideAdd', () => {});

  this.render(hbs`{{slide-list-component
                    slides=testSlides
                    onClickSlide = (action handleSlideSelect)
                    onClickRemove = (action handleSlideRemove)
                    onClickAdd = (action handleSlideAdd) }}`);

  this.$('.slide-unit > button.image-button:first-of-type').click();
});
