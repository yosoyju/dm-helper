import Ember from "ember";

export default Ember.Controller.extend({
  name: "",
  equipment: [],
  level: 1,
  hitDice: [],
  spells: [],
  secrets: [],
  location: "",
  actions: {
    createNpc() {
      var name = this.get("name"),
          level = this.get("level"),
          location = this.get("location");

      var npc = this.store.createRecord("non-player-character", {
        name: name,
        level: level,
        location: location
      });

      this.set("name", "");
      this.set("level", 1);
      this.set("location", "");

      npc.save().then(() => {
        this.transitionToRoute("npcs");
      });
    }
  }
});
