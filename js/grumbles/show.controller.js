"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleShowController", [
    "$stateParams",
    GrumbleShowControllerFunction
  ]);

  function GrumbleShowControllerFunction($stateParams){
    this.grumble = grumbles[$stateParams.id];
    // this.delete = function(index){
    //   grumbles.splice(index, 1)
    // }
  }
}());
