import DS from "ember-data";
import Creature from "dm-helper/models/creature";

export default Creature.extend({
  name: DS.attr("string"),
  equipment: DS.attr("array"),
  level: DS.attr("number"),
  hitDice: DS.attr("array"),
  spells: DS.attr("array"),
  secrets: DS.attr("array"),
  location: DS.attr("string")
});
