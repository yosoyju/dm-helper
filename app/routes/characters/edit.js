import Ember from "ember";

export default Ember.Route.extend({
  setupController(controller, model) {
  	controller.set("users", this.store.findAll("user"));
  	this._super(controller, model);
  }
});
