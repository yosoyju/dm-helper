import Ember from "ember";

export default Ember.Controller.extend({

  actions: {
    saveMonster() {
      var self = this,
          mosnter = this.get("model");
      if (!mosnter.get("name").trim()) {
        return;
      }

      mosnter.save().then( function () {
        self.transitionToRoute("mosnters");
      });
    },
    deleteMonster() {
      var self = this,
          mosnter = this.get("model");
      mosnter.deleteRecord();
      mosnter.save().then(function () {
        self.transitionToRoute("mosnters");
      });
    }
  }
});
