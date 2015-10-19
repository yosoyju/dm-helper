import DS from "ember-data";
import Creature from "dm-helper/models/creature";

export default Creature.extend({
  name: DS.attr("string"),
  equipment: DS.attr("array"),
  hitDice: DS.attr("array"),
  spells: DS.attr("array"),
  secrets: DS.attr("array"),
  challengeRating: DS.attr("number"),
  treasure: DS.attr("array"),
  type: DS.attr("string"),
  actions: DS.attr("array"),
  attributes: DS.attr("array")
});
