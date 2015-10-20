import Ember from "ember";

export default Ember.Controller.extend({
  name: "",
  dm: false,

  actions: {
    createUser() {
      var self = this,
          name = this.get("name"),
          dm = this.get("dm");
      if (!name.trim()) {
        return;
      }

      var user = this.store.createRecord("user", {
        name: name,
        dm: dm
      });

      this.set("name", "");
      this.set("dm", false);

      user.save().then(function () {
        self.transitionToRoute("users.edit", user.id);
      });
    }
  }
});
