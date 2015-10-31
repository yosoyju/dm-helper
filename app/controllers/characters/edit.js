import Ember from "ember";

export default Ember.Controller.extend({

  actions: {
    saveNpc() {
      var self = this,
          npc = this.get("model");
      if (!npc.get("name").trim()) {
        return;
      }

      npc.save().then( function () {
        self.transitionToRoute("npcs");
      });
    },
    deleteNpc() {
      var self = this,
          npc = this.get("model");
      npc.deleteRecord();
      npc.save().then(function () {
        self.transitionToRoute("npcs");
      });
    }
  }
});
