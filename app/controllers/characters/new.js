import Ember from "ember";

export default Ember.Controller.extend({
  player: null,
  name: "",
  equipment: [],
  level: 1,
  hitDice: [],
  spells: [],

  actions: {
    createCharacter() {
      var player = this.get("player"),
          name = this.get("name"),
          level = this.get("level");
      if (!name.trim()) {
        return;
      }

      var character = this.store.createRecord("player-character", {
        player: player,
        name: name,
        level: level
      });

      this.set("player", "");
      this.set("name", "");
      this.set("level", 1);

      character.save().then(() => {
        this.transitionToRoute("characters");
      });
    }
  }
});
