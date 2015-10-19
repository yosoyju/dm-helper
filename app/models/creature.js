import DS from "ember-data";

export default DS.Model.extend({
  hitPoints: DS.attr("number"),
  race: DS.attr("string"),
  subRace: DS.attr("string"),
  class: DS.attr("string"),
  abilities: DS.attr("array"),
  affects: DS.attr("array"),
  skills: DS.attr("array")
});
