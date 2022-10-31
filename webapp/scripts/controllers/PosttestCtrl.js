angular.module('tutor').controller("PosttestCtrl", function($scope, $location, User) {

    $scope.questions = ["Deixo que as pessoas pensem que não durmo ou descanso o suficiente antes de realizar um exame ou tarefa importante. Neste caso, se não obtiver o desempenho que esperava, posso sempre dizer que essa é a razão do resultado que obtive.",
    "Quando um exame ou um trabalho importante se aproxima, digo aos outros que estou mais ansioso(a) do que na verdade estou, assim se não obtiver o desempenho que esperava, vão pensar que essa foi razão do resultado que obtive.",
    "Quando tento estudar deixo que os outros pensem que estou distraído(a) com mais do que uma tarefa. Assim, se não me sair tão bem quanto esperava, posso dizer que essa foi a razão.", 
    "Deixa que os outros pensem que os seus amigos me impedem de prestar atenção na aula ou durante o tempo de estudo, mais do que realmente acontece. Neste caso dizer que essa é a razão para a minha falta de atenção.", 
    "Quando um momento de avaliação se aproxima, normalmente digo às pessoas que estou mais deprimido(a) ou abatido(a) do que realmente estou. Assim se não obtiver a nota que esperava pensarão que foi essa a razão.",
    "Quando uma avaliação se aproxima, normalmente digo às pessoas que as coisas em casa estão pior do que efetivamente estão. Assim, se não obtiver os resultados que espera pensarão, pensarão que essa foi a razão.",
    "Quando um exame ou trabalho se aproxima, costuma dizer aos outros que me sinto mais irritado(a) do que realmente estou. Assim se não fizer o meu melhor pensarão que essa foi a razão.", 
    "Eu costuma dizer às pessoas que deixo os trabalhos de casa para a última hora mais do que realmente o faço. Neste caso se não os realizar na totalidade, posso dizer que essa foi a razão.", 
    "Quando tenho que realizar exames ou tarefas, costumo fazer às pessoas acreditarem que estou mais aborrecido(a) do que aparento, neste caso se não tiver bom desempenho, acreditarão que essa foi a razão.", 
    //"Deixo as pessoas pensarem que assisto a menos aulas neste semestre do que efetivamente assisto, neste caso tenho uma desculpa para apresentar se as coisas não correrem tão bem quanto esperava.", 
    "Deixo as pessoas pensarem que estou envolvido(a) em muitas atividades mais do que realmente estou quando tenho que realizar testes ou tarefas, assim se não fizer tão bem como esperado posso dizer que essa foi a razão.",
    //"Digo aos outros que perco o tempo à noite antes de um teste mais do que verdadeiramente o faço, assim se não obtiver o resultado que esperava posso dizer que essa é a razão.",
    //"Muitas vezes perco o tempo à noite antes de um teste ou exame. Neste caso tenho uma desculpa se não obtiver o resultado que esperava.", 
    "Habitualmente deixo os trabalhos de casa e o estudo para o último momento. Se não obtiver o desempenho que esperava, posso sempre dizer que essa foi a razão para os resultados obtidos.", 
    "Muitas vezes envolvo-me em muitas atividades diferentes quando os exames ou trabalhos se aproximam. Assim tenho uma desculpa se o resultado não for tão bom quanto esperava.", 
    "Tendo a não tentar fazer os trabalhos de casa, assim tenho uma desculpa para o caso de não fazer o melhor que esperava.", 
    "Normalmente penso noutras coisas, fica distraído(a) ou a sonhar acordado(a) quando tento estudar, neste caso tenho uma desculpa para o caso de não ter o resultado que esperado.", 
    //"Tendo a não estudar o suficiente (ou necessário) antes dos exames para ter uma desculpa se não fizer tão bem como esperado."
    "Muitas vezes ocupo-me com outras cousas à noite antes de um teste além de estudar, então tenho uma desculpa se não obtiver o resultado esperado."
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

            User.setPosttestPoints(sum);
            User.setPost(ans);

            $location.path("/home");

        };
    }

});
