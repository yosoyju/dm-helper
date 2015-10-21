import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    delete(id) {
      var npc = this.get("model").find(function (v, i) {
        return v.id === id;
      });
      npc.deleteRecord();
      npc.save();
    },
    edit(id) {
      this.transitionToRoute("npcs.edit", id);
    }
  }
});
