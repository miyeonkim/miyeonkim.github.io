Ember.TEMPLATES["about"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'value': ("test")
  },"hashTypes":{'value': "STRING"},"hashContexts":{'value': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["stuff"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers.textarea || (depth0 && depth0.textarea) || helperMissing).call(depth0, {"name":"textarea","hash":{
    'rows': ("6"),
    'cols': ("80"),
    'value': ("testing")
  },"hashTypes":{'rows': "STRING",'cols': "STRING",'value': "STRING"},"hashContexts":{'rows': depth0,'cols': depth0,'value': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n");
  return buffer;
},"useData":true});