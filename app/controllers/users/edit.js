import Ember from "ember";

export default Ember.Controller.extend({

  actions: {
    saveUser() {
      var self = this,
          user = this.get("model");
      if (!this.get("user.name").trim()) {
        return;
      }

      user.save().then( function () {
        self.transitionToRoute("users");
      });
    },
    deleteUser() {
      var self = this,
          user = this.get("model");
      user.deleteRecord();
      user.save().then(function () {
        self.transitionToRoute("users");
      });
    }
  }
});
