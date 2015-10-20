import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return this.get("store").findAll("user");
  },

  actions: {
    delete: function() {
      var self = this,
          user = this.get("model");
      user.deleteRecord();
      user.save().then(function () {
        self.transitionToRoute("users");
      });
    }
  }
});
