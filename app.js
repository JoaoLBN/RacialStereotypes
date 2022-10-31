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

    // Neutral Theme
    $mdThemingProvider.theme("default")
        .primaryPalette("purple")
        .accentPalette("purple")
        .warnPalette("purple");

    // ST-F 
    $mdThemingProvider.theme("stFemale")
        .primaryPalette("purple")
        .accentPalette("purple")
        .warnPalette("purple");

    // ST-M 
    $mdThemingProvider.theme("stMale")
        .primaryPalette("purple")
        .accentPalette("purple")
        .warnPalette("purple");

});

//GLOBAL - FACEBOOK API
window.fbAsyncInit = function() {
    FB.init({
        appId: '259201801144935',
        xfbml: true,
        version: 'v2.8'
    });
};
