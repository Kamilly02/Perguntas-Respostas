import React, { useState } from 'react';

const perguntas = [
  {
    pergunta: 'Qual é o do céu?',
    opcoes: ['Rosa', 'Verde', 'Preto', 'Azul'],
    resposta: 'Azul'
  },
  {
    pergunta: 'Quantos lados tem um Hexágono?',
    opcoes: ['8', '5', '6', '4'],
    resposta: '6'
  },
  {
    pergunta: 'Depois de Quinta-feira é qual dia?',
    opcoes: ['Sexta-feira', 'Segunda-feira', 'Quarta-feira', 'Sábado'],
    resposta: 'Sexta-feira'
  }
];

function Quiz() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState(null);

  const responder = (respostaSelecionada) => {
    setRespostas([...respostas, respostaSelecionada]);
    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      calcularResultado();
    }
  };

  const calcularResultado = () => {
    let pontuacao = 0;
    for (let i = 0; i < perguntas.length; i++) {
      if (respostas[i] === perguntas[i].resposta) {
        pontuacao++;
      }
    }
    setResultado(pontuacao);
  };

  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setRespostas([]);
    setResultado(null);
  };

  return (
    <div>
      {resultado !== null ? (
        <div>
          <h2>Resultado do Quiz</h2>
          <p>Você acertou {resultado} de {perguntas.length} perguntas!</p>
          <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Pergunta {indicePergunta + 1}</h2>
          <p>{perguntas[indicePergunta].pergunta}</p>
          <ul>
            {perguntas[indicePergunta].opcoes.map((opcao, index) => (
              <li key={index} onClick={() => responder(opcao)}>
                {opcao}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
