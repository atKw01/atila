var armazem = localStorage;

function salvarDados() {
    const valorAluno = document.getElementById("alunos").value;
    const valorFalta = document.getElementById("faltas").value;
    const valorTurma = document.querySelector("input[name='turma']:checked").value;
    const valorClasse = document.querySelector("input[name='classe']:checked").value;

    turmaDados.turma.forEach((item) => {
        if (item.nome === valorTurma) {
            item.alunos = Number(valorAluno);
            item.faltas = Number(valorFalta);
            item.classe = valorClasse;
        }
    });
    armazem.setItem("turmaDados", JSON.stringify(turmaDados));
};
function salvarData() {


    turmaDados.dataPeroido.forEach((item) => {
        item.dataInicio = valorDataInicio;
        item.dataFim = valorDataFim;
    });
    armazem.setItem("turmaDados", JSON.stringify(turmaDados));
};
var turmaDados = {
    "turma": [
        {
            "nome": "sq3",
            "alunos": 0,
            "faltas": 0,
            "classe": "",
        },
        {
            "nome": "qs3",
            "alunos": 0,
            "faltas": 0,
            "classe": "",
        },
        {
            "nome": "tq3",
            "alunos": 0,
            "faltas": 0,
            "classe": "",
        },
        {
            "nome": "sat2",
            "alunos": 0,
            "faltas": 0,
            "classe": "",
        },
        {
            "nome": "sat3",
            "alunos": 0,
            "faltas": 0,
            "classe": "",
        },
        {
            "nome": "sat5",
            "alunos": 0,
            "faltas": 0,
            "classe": "",
        },
        {
            "nome": "pjeQuarta",
            "alunos": 0,
            "faltas": 0,
            "classe": "",
        },
        {
            "nome": "pjeSabado",
            "alunos": 0,
            "faltas": 0,
            "classe": "",
        },
        {
            "nome": "geral",
            "alunos": 0,
            "faltas": 0,
        },
    ],
    "dataPeroido": [
        {
            "dataInicio": "",
            "dataFim": "",
        },
    ]
};

document.getElementById("inputTurma").addEventListener("submit", function(event) {
    event.preventDefault();
    salvarDados();
    console.log(turmaDados);
});


