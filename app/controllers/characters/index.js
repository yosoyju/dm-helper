import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    delete(id) {
      var character = this.get("model").find(function (v, i) {
        return v.id === id;
      });
      character.deleteRecord();
      character.save();
    },
    edit(id) {
      this.transitionToRoute("characters.edit", id);
    }
  }
});
