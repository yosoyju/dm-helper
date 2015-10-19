import DS from "ember-data";

export default DS.Model.extend({
  characters: DS.hasMany("player-character"),
  monsters: DS.hasMany("monster"),
  NPCs: DS.hasMany("non-player-character"),
  round: DS.attr("number"),
  location: DS.attr("string")
});
