define([
    'wand/lib/BaseView',
    'templates'
  ], function (
    BaseView,
    templates
  ) {
    return BaseView.extend({

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
  
    
  }
);