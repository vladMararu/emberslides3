import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['canvas-toolbar'],
  actions: {
    onTextAlign(param) {
      this.alignTextChilds.forEach((item) => {
        item.set('selected', param === item.get('id'));
      });
      this.sendAction('onTextAlign', param);
    },
  },
  alignTextChilds:
    [Ember.Object.create({
      id: 'left',
      selected: false,
    }),
    Ember.Object.create({
      id: 'center',
      selected: false,
    }),
    Ember.Object.create({
      id: 'right',
      selected: false,
    }),
    ],
});
