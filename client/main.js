import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.soup.events({
  'click button'(event, instance) {
	Meteor.call('soupReady');
  },
});
