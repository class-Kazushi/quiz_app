const quiz = [
  {
    question: 'この中で一番素早さ種族値が高いのは？？',
    answers: [
      'カイリュー',
      'ガブリアス',
      'フライゴン',
      'ボーマンダ'
    ],
    correct: 'ガブリアス'
  }, {
    question: 'この中で一番攻撃種族値が低いのは？？',
    answers: [
      'カイリュー',
      'ガブリアス',
      'フライゴン',
      'ボーマンダ'
    ],
    correct: 'フライゴン'
  }, {
    question: 'この中で一番素早さ種族値が低いのは？？',
    answers: [
      'カイリュー',
      'ガブリアス',
      'フライゴン',
      'ボーマンダ'
    ],
    correct: 'カイリュー'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// idは1つのHTMLに1つまで！
// クイズの問題、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    window.alert('終了！！ あなたの正解数は' + score + '/' + quizLength + 'です！' );
  }
};

// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
