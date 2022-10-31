angular.module('tutor').controller("PosttestCtrl2", function($scope, $location, User) {

    $scope.questions = ["Dormi ou descansei o suficiente antes de realizar a atividade.",
    "Estava ansioso(a) na realização da atividade.",
    "Estava distraído(a) na atividade com outra tarefa.",
    "Amigos me impediram de prestar atenção na atividade.",
    "Estava deprimido(a) ou abatido(a) para realizar a atividade.",
    "As coisas em casa estão piores.",
    "Estava irritado(a) na realização da atividade.",
    "Deixei a atividade para última hora.",
    "Estava aborrecido(a) na realização da atividade.",
    "Estava envolvido(a) em muitas outras tarefas para realizar a atividade.",
    "Deixei a atividade para o último momento.",
    "Estava envolvido(a) em muitos trabalhos diferentes durante a realização da atividade.",
    "Não fiz o melhor do que esperado na atividade.",
    "Estava distraído(a) sonhando acordado(a) durante a atividade.",
    "Estava ocupado(a) para realizar a atividade."
    ];
    $scope.answers = [];

    $scope.processAnswers = function() {

        if ($scope.answers.length < 15) {
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
