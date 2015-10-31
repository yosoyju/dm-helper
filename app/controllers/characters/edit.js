import Ember from "ember";

export default Ember.Controller.extend({

  actions: {
    saveCharacter() {
      var self = this,
          character = this.get("model");
      if (!character.get("name").trim()) {
        return;
      }

      character.save().then( function () {
        self.transitionToRoute("characters");
      });
    },
    deleteCharacter() {
      var self = this,
          character = this.get("model");
      character.deleteRecord();
      character.save().then(function () {
        self.transitionToRoute("characters");
      });
    }
  }
});
