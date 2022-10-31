angular.module('tutor').controller("DialogCtrl", function($scope, $mdDialog, title, textContent) {
    var ctrl = this;
    ctrl.title = title;
    ctrl.textContent = textContent;

    ctrl.closeDialog = function() {
        $mdDialog.hide();
    }
});
