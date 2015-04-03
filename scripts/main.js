require.config({
    paths: {
        underscore: 'underscore'
    },
    shim: {
        underscore: {
          exports: '_'
        },
      }
});

require(['underscore'], function (_, $) {

});

require(["underscore"]);

define(['underscore'], function(_) {
    console.log("HERE");
});

var test = ["value1", "value2", "value3"];

console.log(_.without(test, "value2") );

var GameEngine = {

}