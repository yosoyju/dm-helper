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
      var self = this,
          user = this.get("users").find(function (v, i) {
           return v.id === Ember.$(".user-select").val();
          }),
          name = this.get("name"),
          level = this.get("level");
      if (!name.trim()) {
        return;
      }

      var character = this.store.createRecord("player-character", {
        player: user,
        name: name,
        level: level
      });

      this.set("player", "");
      this.set("name", "");
      this.set("level", 1);

      character.save().then( function (data) {
        var obj = user.get("characters").map(function (v, i) {
          return v.get("id") === data.id;
        });
        if (!obj) {
          user.get("characters").pushObject(data);
        }
        user.save().then(function () {
          self.transitionToRoute("characters");
        });
      });
      // character.save().then(() => {
      //   this.transitionToRoute("characters");
      // });
    }
  }
});
