angular.module('tutor').controller("PosttestCtrl", function($scope, $location, User) {

    $scope.questions = [
        "Minhas habilidades combinam com o desafio que estou experimentando",
        "Realizo a atividade automaticamente sem pensar muito",
        "Sei o que quero alcançar", 
        "É muito claro para mim como estou me saindo na atividade",
        "Estou completamente focado na tarefa em questão", 
        "Tenho um sentimento de total controle sobre o que estou fazendo",
        "Não estou preocupado com o que os outros podem estar pensando de mim", 
        "A forma como o tempo passa parece ser diferente da normal", 
        "A experiência é extremamente recompensadora"
    ];
    $scope.answers = [];

    $scope.processAnswers = function() {

        if ($scope.answers.length < 9) {
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

            User.setPosttestPoints(sum);
            User.setPost(ans);

            $location.path("/home");

        };
    }

});
