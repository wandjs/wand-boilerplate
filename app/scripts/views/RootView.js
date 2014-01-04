if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function(require, exports, module) {

  var BaseView = require('wand/lib/BaseView');
  var templates = require('templates');

  module.exports = BaseView.extend({

    initialize:function(options){
      
    },

    elements: {
    },

    template: function() {
      return templates.root;
    },

    templateData: function() {
      return {};
    },

    afterRender: function() {
    }

  });

});