import DS from "ember-data";
import Creature from "dm-helper/models/creature";

export default Creature.extend({
  player: DS.belongsTo("user", {async: true}),
  name: DS.attr("string"),
  equipment: DS.attr("array"),
  level: DS.attr("number"),
  hitDice: DS.attr("array"),
  spells: DS.attr("array")
});
