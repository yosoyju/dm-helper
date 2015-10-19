import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("users", function () {
    this.route("new");
  });

  this.route("characters", function () {
    this.route("new");
  });

  this.route("npcs", function () {
    this.route("new");
  });

  this.route("monsters", function () {
    this.route("new");
  });

  this.route("encounters", function () {
    this.route("new");
  });
});

export default Router;