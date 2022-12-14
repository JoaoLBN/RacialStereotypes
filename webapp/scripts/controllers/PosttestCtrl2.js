angular.module('tutor').controller("PosttestCtrl2", function($scope, $location, User) {

    $scope.questions = [
    "Estou Preocupado(a)",
    "Estou descontraído(a)",
    "Sinto-me nervoso(a)",
    "Sinto-me à vontade", 
    "Estou tenso(a)",
    "Sinto-me calmo(a)"];
    $scope.answers = [];

    $scope.processAnswers = function() {

        if ($scope.answers.length < 6) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {

          

            var ans = $scope.answers;
            console.log(ans);

            //invert positive answers
            // ans[0] = 5 - ans[0];
            // ans[1] = 5 - ans[1];
            // ans[4] = 5 - ans[4];
            // ans[7] = 5 - ans[7];
            // ans[9] = 5 - ans[9];
            // ans[10] = 5 - ans[10];
            // ans[14] = 5 - ans[14];
            // ans[15] = 5 - ans[15];
            // ans[18] = 5 - ans[18];
            // ans[19] = 5 - ans[19];

            var sum = ans.reduce(add, 0);

            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }

            User.setPosttest2Points(sum);
            User.setPost2(ans);

            $location.path("/flow");

        };
    }

});
