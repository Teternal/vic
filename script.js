const wordSets = {
  animals: [
    { word: 'panda', translation: '熊猫', sentence: 'The panda munches on bamboo.', emoji: '🐼', hint: 'black and white bear' },
    { word: 'turtle', translation: '乌龟', sentence: 'The turtle swims slowly but surely.', emoji: '🐢', hint: 'carries a shell' },
    { word: 'parrot', translation: '鹦鹉', sentence: 'The parrot repeats funny words.', emoji: '🦜', hint: 'colorful bird' },
    { word: 'lion', translation: '狮子', sentence: 'The lion is the brave king of the savanna.', emoji: '🦁', hint: 'king of animals' },
    { word: 'rabbit', translation: '兔子', sentence: 'The rabbit hops across the grass.', emoji: '🐇', hint: 'long ears' },
    { word: 'whale', translation: '鲸鱼', sentence: 'The whale sings under the blue ocean.', emoji: '🐋', hint: 'giant of the sea' }
  ],
  food: [
    { word: 'pancake', translation: '煎饼', sentence: 'The pancake is fluffy and sweet.', emoji: '🥞', hint: 'breakfast stack' },
    { word: 'carrot', translation: '胡萝卜', sentence: 'The carrot is crunchy and orange.', emoji: '🥕', hint: 'orange vegetable' },
    { word: 'pizza', translation: '披萨', sentence: 'The pizza has cheese that stretches.', emoji: '🍕', hint: 'cheesy triangle' },
    { word: 'grapes', translation: '葡萄', sentence: 'Purple grapes hang in a juicy bunch.', emoji: '🍇', hint: 'fruit in a bunch' },
    { word: 'noodles', translation: '面条', sentence: 'The noodles wiggle like little strings.', emoji: '🍜', hint: 'long and slurpy' },
    { word: 'ice cream', translation: '冰淇淋', sentence: 'Ice cream melts if you stare at it.', emoji: '🍦', hint: 'cold treat' }
  ],
  school: [
    { word: 'pencil', translation: '铅笔', sentence: 'A sharp pencil helps neat writing.', emoji: '✏️', hint: 'writing friend' },
    { word: 'backpack', translation: '书包', sentence: 'The backpack carries books and snacks.', emoji: '🎒', hint: 'bag for class' },
    { word: 'teacher', translation: '老师', sentence: 'The teacher smiles when we try.', emoji: '👩‍🏫', hint: 'class helper' },
    { word: 'ruler', translation: '尺子', sentence: 'Use a ruler to draw a straight line.', emoji: '📏', hint: 'measures length' },
    { word: 'chalk', translation: '粉笔', sentence: 'The chalk squeaks on the board.', emoji: '🧽', hint: 'writes on board' },
    { word: 'library', translation: '图书馆', sentence: 'The library is a quiet adventure zone.', emoji: '📚', hint: 'room of books' }
  ],
  nature: [
    { word: 'rainbow', translation: '彩虹', sentence: 'A rainbow paints seven colors in the sky.', emoji: '🌈', hint: 'colors after rain' },
    { word: 'river', translation: '河流', sentence: 'The river flows past rocks and trees.', emoji: '🏞️', hint: 'moving water' },
    { word: 'cloud', translation: '云朵', sentence: 'That cloud looks like a giant bunny.', emoji: '☁️', hint: 'cotton in the sky' },
    { word: 'forest', translation: '森林', sentence: 'Birds sing songs inside the forest.', emoji: '🌳', hint: 'many trees' },
    { word: 'mountain', translation: '山', sentence: 'The mountain is tall and strong.', emoji: '⛰️', hint: 'high peak' },
    { word: 'breeze', translation: '微风', sentence: 'A soft breeze shakes the leaves.', emoji: '🍃', hint: 'gentle wind' }
  ],
  feelings: [
    { word: 'brave', translation: '勇敢', sentence: 'She felt brave and tried the tall slide.', emoji: '🛝', hint: 'not scared' },
    { word: 'curious', translation: '好奇', sentence: 'The curious cat peeked into the box.', emoji: '😺', hint: 'wants to know more' },
    { word: 'proud', translation: '自豪', sentence: 'He was proud of his colorful drawing.', emoji: '🌟', hint: 'happy about yourself' },
    { word: 'silly', translation: '滑稽', sentence: 'Their silly dance made everyone giggle.', emoji: '🤪', hint: 'goofy fun' },
    { word: 'calm', translation: '平静', sentence: 'Deep breaths made her calm before reading.', emoji: '🧘', hint: 'peaceful' },
    { word: 'grateful', translation: '感激', sentence: 'We feel grateful for friends who help.', emoji: '🤝', hint: 'thankful' }
  ]
};

const sentenceChallenges = [
  { sentence: 'The happy panda eats fresh bamboo every day.', hint: 'animals' },
  { sentence: 'Please pack the books inside your blue backpack.', hint: 'school life' },
  { sentence: 'A rainbow appears after the gentle rain.', hint: 'nature' },
  { sentence: 'The cheese pizza smells amazing and warm.', hint: 'food' },
  { sentence: 'She feels brave when she speaks on stage.', hint: 'feeling' }
];

let score = 0;
let streak = 0;
let currentTheme = 'animals';
let currentWords = [];
let matchAnswer = null;
let scrambleAnswer = null;
let sentenceOrder = [];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function chooseRandom(array, count) {
  return shuffle(array).slice(0, count);
}

function speak(text) {
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    window.speechSynthesis.speak(utter);
  }
}

function updateScore(delta) {
  score = Math.max(0, score + delta);
  if (delta > 0) {
    streak += 1;
  } else {
    streak = 0;
  }
  document.getElementById('score').textContent = score;
  document.getElementById('streak').textContent = streak;
}

function renderCards() {
  const cardList = document.getElementById('cardList');
  cardList.innerHTML = '';
  currentWords = chooseRandom(wordSets[currentTheme], 4);
  currentWords.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');

    const header = document.createElement('div');
    header.className = 'card__title';

    const word = document.createElement('p');
    word.className = 'card__word';
    word.textContent = item.word;

    const emoji = document.createElement('span');
    emoji.className = 'card__emoji';
    emoji.textContent = item.emoji;

    const badge = document.createElement('span');
    badge.className = 'badge-pill';
    badge.textContent = item.translation;

    header.append(word, emoji);

    const sentence = document.createElement('p');
    sentence.className = 'card__sentence';
    sentence.textContent = item.sentence;

    const hint = document.createElement('p');
    hint.className = 'card__sentence';
    hint.innerHTML = `<strong>Hint:</strong> ${item.hint}`;

    const speakBtn = document.createElement('button');
    speakBtn.className = 'icon-btn';
    speakBtn.textContent = '🔈 Hear it';
    speakBtn.addEventListener('click', () => speak(item.word));

    card.append(header, badge, sentence, hint, speakBtn);
    cardList.appendChild(card);
  });
}

function setupMatchGame() {
  const pool = wordSets[currentTheme];
  const options = chooseRandom(pool, 3);
  const answer = options[Math.floor(Math.random() * options.length)];
  matchAnswer = answer.word;
  document.getElementById('matchPrompt').textContent = `Clue: ${answer.hint} (${answer.translation})`;

  const optionContainer = document.getElementById('matchOptions');
  optionContainer.innerHTML = '';
  options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = `${opt.word} ${opt.emoji}`;
    btn.addEventListener('click', () => handleMatchGuess(opt.word, btn));
    optionContainer.appendChild(btn);
  });
  document.getElementById('matchFeedback').textContent = '';
}

function handleMatchGuess(word, btn) {
  const feedback = document.getElementById('matchFeedback');
  const buttons = [...document.querySelectorAll('#matchOptions .option')];
  if (word === matchAnswer) {
    btn.classList.add('correct');
    feedback.textContent = 'Great pick! +10 points';
    feedback.className = 'feedback success';
    updateScore(10 + streak * 2);
  } else {
    btn.classList.add('wrong');
    feedback.textContent = 'Oops, try a new round.';
    feedback.className = 'feedback error';
    updateScore(-5);
  }
  buttons.forEach((b) => (b.disabled = true));
  setTimeout(setupMatchGame, 1100);
}

function setupSentenceGame() {
  const challenge = sentenceChallenges[Math.floor(Math.random() * sentenceChallenges.length)];
  const words = challenge.sentence.split(' ');
  sentenceOrder = words;
  const scrambled = shuffle(words);
  document.getElementById('sentenceTarget').innerHTML = `Build: <strong>${challenge.hint}</strong>`;

  const pool = document.getElementById('sentencePool');
  pool.innerHTML = '';
  scrambled.forEach((word, index) => {
    const chip = document.createElement('div');
    chip.textContent = word;
    chip.className = 'chip';
    chip.draggable = true;
    chip.dataset.index = index;
    chip.addEventListener('dragstart', handleDragStart);
    chip.addEventListener('dragover', handleDragOver);
    chip.addEventListener('drop', handleDrop);
    pool.appendChild(chip);
  });
  document.getElementById('sentenceFeedback').textContent = '';
}

let dragSource = null;
function handleDragStart(event) {
  dragSource = event.target;
  event.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function handleDrop(event) {
  event.preventDefault();
  if (dragSource === event.target) return;
  const pool = document.getElementById('sentencePool');
  const children = [...pool.children];
  const sourceIndex = children.indexOf(dragSource);
  const targetIndex = children.indexOf(event.target);
  if (sourceIndex > -1 && targetIndex > -1) {
    if (sourceIndex < targetIndex) {
      pool.insertBefore(dragSource, event.target.nextSibling);
    } else {
      pool.insertBefore(dragSource, event.target);
    }
  }
  checkSentence();
}

function checkSentence() {
  const pool = document.getElementById('sentencePool');
  const attempt = [...pool.children].map((chip) => chip.textContent).join(' ');
  const feedback = document.getElementById('sentenceFeedback');
  if (attempt === sentenceOrder.join(' ')) {
    feedback.textContent = 'Smooth sentence! +12 points';
    feedback.className = 'feedback success';
    updateScore(12 + streak * 2);
    setTimeout(setupSentenceGame, 1200);
  } else {
    feedback.textContent = 'Keep arranging until it sounds right.';
    feedback.className = 'feedback';
  }
}

function setupScrambleGame() {
  const words = wordSets[currentTheme];
  const pick = words[Math.floor(Math.random() * words.length)];
  scrambleAnswer = pick.word.toLowerCase();
  const shuffled = shuffle(scrambleAnswer.split(''));
  document.getElementById('scramblePrompt').textContent = `Unscramble: ${shuffled.join(' ')}`;
  document.getElementById('scrambleAnswer').value = '';
  document.getElementById('scrambleFeedback').textContent = '';
}

function checkScramble() {
  const input = document.getElementById('scrambleAnswer').value.trim().toLowerCase();
  const feedback = document.getElementById('scrambleFeedback');
  if (!input) return;
  if (input === scrambleAnswer) {
    feedback.textContent = 'You solved it! +8 points';
    feedback.className = 'feedback success';
    updateScore(8 + streak * 2);
    setTimeout(setupScrambleGame, 1100);
  } else {
    feedback.textContent = 'Almost! Shuffle letters with your mouth and try again.';
    feedback.className = 'feedback error';
    updateScore(-3);
  }
}

function attachTabEvents() {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.add('hidden'));
      tab.classList.add('active');
      document.getElementById(tab.getAttribute('aria-controls')).classList.remove('hidden');
    });
  });
}

function wireActions() {
  document.getElementById('themeSelect').addEventListener('change', (event) => {
    currentTheme = event.target.value;
    renderCards();
    setupMatchGame();
    setupScrambleGame();
  });

  document.getElementById('newCards').addEventListener('click', () => {
    renderCards();
    setupMatchGame();
    setupScrambleGame();
  });

  document.getElementById('startPlay').addEventListener('click', () => {
    renderCards();
    setupMatchGame();
    setupSentenceGame();
    setupScrambleGame();
    document.getElementById('tab-match').click();
  });

  document.getElementById('shuffleTheme').addEventListener('click', () => {
    const themes = Object.keys(wordSets);
    const next = themes.filter((t) => t !== currentTheme);
    const randomTheme = next[Math.floor(Math.random() * next.length)];
    currentTheme = randomTheme;
    document.getElementById('themeSelect').value = randomTheme;
    renderCards();
    setupMatchGame();
    setupScrambleGame();
  });

  document.getElementById('scrambleSubmit').addEventListener('click', checkScramble);
  document.getElementById('scrambleAnswer').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      checkScramble();
    }
  });
}

function init() {
  attachTabEvents();
  renderCards();
  setupMatchGame();
  setupSentenceGame();
  setupScrambleGame();
  wireActions();
}

document.addEventListener('DOMContentLoaded', init);
