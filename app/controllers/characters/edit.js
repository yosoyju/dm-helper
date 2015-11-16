import Ember from "ember";

export default Ember.Controller.extend({

  actions: {
    saveCharacter() {
      var self = this,
        character = this.get("model"),
        user = this.get("users").find(function (v, i) {
          return v.id === Ember.$(".user-select").val();
        });

      if (!character.get("name").trim()) {
        return;
      }
      character.set("player", user);
      character.save().then( function (data) {
        var obj = user.get("characters").find(function (v, i) {
          return v.get("id") === data.id;
        });
        if (!obj) {
          user.get("characters").pushObject(data);
        }
        user.save().then(function () {
          self.transitionToRoute("characters");
        });
      });
    },
    deleteCharacter() {
      var self = this,
        character = this.get("model"),
        user = character.get("player");
      if (user) {
        user.get("characters").removeObject(character);
        user.save();
      }
      character.deleteRecord();
      character.save().then(function () {
        self.transitionToRoute("characters");
      });
    }
  }
});
