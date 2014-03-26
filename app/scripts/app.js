define(function(require, exports, module) {

  var RootView = require('views/RootView');

  return {
    start: function() {

      this.rootView = new RootView({
        el: '#root'
      });
      this.rootView.processRender();

    }
  };

});