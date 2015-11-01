import DS from "ember-data";

export default DS.Model.extend({
  characters: DS.hasMany("player-character", {async: true}),
  monsters: DS.hasMany("monster", {async: true}),
  NPCs: DS.hasMany("non-player-character", {async: true}),
  round: DS.attr("number"),
  location: DS.attr("string")
});
