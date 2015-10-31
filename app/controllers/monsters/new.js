import Ember from "ember";

export default Ember.Controller.extend({
  name: "",
  equipment: [],
  hitDice: [],
  spells: [],
  secrets: [],
  challengeRating: 0,
  treasure: [],
  type: "",
  actions: [],
  attributes: [],

  actions: {
    createMonster() {
      var name = this.get("name"),
          type = this.get("type"),
          challengeRating = this.get("challengeRating");

      if (!name.trim()) {
        return;
      }

      var monster = this.store.createRecord("monster", {
        name: name,
        type: type,
        challengeRating: challengeRating
      });

      this.set("name", "");
      this.set("type", "");
      this.set("CR", 0);

      monster.save().then(() => {
        this.transitionToRoute("monsters");
      });
    }
  }
});
