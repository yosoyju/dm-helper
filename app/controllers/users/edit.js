import Ember from "ember";

export default Ember.Controller.extend({

  actions: {
    saveUser() {
      if (!this.get("model.name").trim()) {
        return;
      }

      this.get("model").save();
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
