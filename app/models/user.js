import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  dm: DS.attr("boolean", {
    defaultValue: false
  })
});
