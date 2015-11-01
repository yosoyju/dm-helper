import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  dm: DS.attr("boolean", {
    defaultValue: false
  }),
  characters: DS.hasMany("player-character", {async: true})
});
