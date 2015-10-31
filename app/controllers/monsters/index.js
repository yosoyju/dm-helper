import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    delete(id) {
      var user = this.get("model").find(function (v, i) {
        return v.id === id;
      });
      user.deleteRecord();
      user.save();
    },
    edit(id) {
      this.transitionToRoute("monsters.edit", id);
    }
  }
});
