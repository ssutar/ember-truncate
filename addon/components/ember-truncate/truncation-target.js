import Ember from 'ember';
import layout from 'ember-truncate/templates/just-yield';

export default Ember.Component.extend({
  layout,
  classNames: [
    'truncate-multiline--truncation-target',
  ],
});
