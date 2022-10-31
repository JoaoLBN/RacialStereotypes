angular.module("tutor", ["ngRoute", "ngResource", "ngAnimate", "ngMaterial", "ngCanvasGauge","tutor.services"]).config(function($routeProvider) {

    $routeProvider.
    when("/pretest", {
        templateUrl: "views/pretest.html",
        controller: "PretestCtrl"
    }).
    when("/home", {
        templateUrl: "views/home.html",
        controller: "HomeCtrl"
    }).
    when("/posttest", {
        templateUrl: "views/posttest.html",
        controller: "PosttestCtrl"
    }).
    when("/questionary", {
        templateUrl: "views/questionary.html",
        controller: "QuestionaryCtrl"
    }).  
    when("/finish", {
        templateUrl: "views/finish.html",
        controller: "FinishCtrl"
    }).
    when("/flow", {
        templateUrl: "views/flow.html",
        controller: "FlowCtrl"
    }).
    when("/posttest2", {
        templateUrl: "views/posttest2.html",
        controller: "PosttestCtrl2"
    }).
    otherwise({
        redirectTo: "/pretest"
    });

}).config(function($mdThemingProvider) {

    $mdThemingProvider.alwaysWatchTheme(true);

//*********************************//
    var newBlueMap = $mdThemingProvider.extendPalette('blue', {
        '500': '#aced9d',
        'contrastDefaultColor': 'light'
      });

      // Register the new color palette map with the name <code>neonRed</code>
      $mdThemingProvider.definePalette('newBlue', newBlueMap);

//*********************************//

    // Neutral Theme
    $mdThemingProvider.theme("default")
        .primaryPalette("newBlue")
        .accentPalette("blue")
        .warnPalette("blue");

    // ST-F 
    $mdThemingProvider.theme("stFemale")
        .primaryPalette("newBlue")
        .accentPalette("blue")
        .warnPalette("blue");

    // ST-M 
    $mdThemingProvider.theme("stMale")
        .primaryPalette("newBlue")
        .accentPalette("blue")
        .warnPalette("blue");

});

//GLOBAL - FACEBOOK API
window.fbAsyncInit = function() {
    FB.init({
        appId: '259201801144935',
        xfbml: true,
        version: 'v2.8'
    });
};
