const categories = [
  {
    id: 'animals',
    name: '动物乐园',
    description: '认识常见的小动物，学会关爱它们。',
    words: [
      {
        character: '猫',
        pinyin: 'māo',
        meaning: 'cat，爱干净、喜欢呼噜的小动物',
        strokes: '左右结构，八画，可先写“犭”再写“苗”',
        example: '小猫喜欢在阳光下睡觉。'
      },
      {
        character: '狗',
        pinyin: 'gǒu',
        meaning: 'dog，会看家、喜欢摇尾巴',
        strokes: '左右结构，八画，先写“犭”再写“句”',
        example: '小狗看见主人会高兴地叫。'
      },
      {
        character: '熊',
        pinyin: 'xióng',
        meaning: 'bear，喜欢蜂蜜的大型动物',
        strokes: '上下结构，十四画，先写“能”再写“火”',
        example: '熊在冬天会冬眠。'
      },
      {
        character: '鸟',
        pinyin: 'niǎo',
        meaning: 'bird，会飞翔的动物',
        strokes: '独体字，五画，注意上面的小横',
        example: '清晨的鸟儿在枝头唱歌。'
      },
      {
        character: '马',
        pinyin: 'mǎ',
        meaning: 'horse，跑得快的家畜',
        strokes: '独体字，三画，注意最后一横要向上挑',
        example: '骑马需要掌握平衡。'
      }
    ]
  },
  {
    id: 'fruits',
    name: '水果派对',
    description: '五颜六色的水果既好吃又健康。',
    words: [
      {
        character: '苹',
        pinyin: 'píng',
        meaning: '苹果的一部分，香甜可口',
        strokes: '上下结构，八画，上“艹”下“平”',
        example: '苹果红彤彤的，营养丰富。'
      },
      {
        character: '梨',
        pinyin: 'lí',
        meaning: '梨子，汁多味甜',
        strokes: '左右结构，十一画，左“禾”右“利”',
        example: '秋天的梨成熟了。'
      },
      {
        character: '桃',
        pinyin: 'táo',
        meaning: '桃子，夏季常见水果',
        strokes: '左右结构，十画，左“木”右“兆”',
        example: '桃花盛开的季节也是桃子结果的时候。'
      },
      {
        character: '瓜',
        pinyin: 'guā',
        meaning: '瓜类的统称，如西瓜、南瓜',
        strokes: '独体字，五画，像挂着的瓜藤',
        example: '夏天吃冰镇西瓜很解暑。'
      },
      {
        character: '柚',
        pinyin: 'yòu',
        meaning: '柚子，皮厚果肉多',
        strokes: '左右结构，九画，左“木”右“由”',
        example: '中秋节吃柚子寓意团圆。'
      }
    ]
  },
  {
    id: 'nature',
    name: '大自然',
    description: '走进山川河流，感受自然之美。',
    words: [
      {
        character: '山',
        pinyin: 'shān',
        meaning: '山，高高的山峰',
        strokes: '独体字，三画，像山峰的轮廓',
        example: '爬山可以欣赏风景。'
      },
      {
        character: '水',
        pinyin: 'shuǐ',
        meaning: '水，万物生长需要的资源',
        strokes: '独体字，四画，形似流水',
        example: '河水静静地流淌。'
      },
      {
        character: '林',
        pinyin: 'lín',
        meaning: '树林，很多树在一起',
        strokes: '左右结构，八画，两棵树在一起',
        example: '森林里空气清新。'
      },
      {
        character: '云',
        pinyin: 'yún',
        meaning: '云，天空中的白绵绵',
        strokes: '独体字，四画，像飘动的云朵',
        example: '天空的白云像棉花糖。'
      },
      {
        character: '风',
        pinyin: 'fēng',
        meaning: '风，自然界的空气流动',
        strokes: '独体字，四画，里面像“凡”',
        example: '春风拂面很舒服。'
      }
    ]
  },
  {
    id: 'school',
    name: '校园生活',
    description: '校园里发生的事情既有趣又充满知识。',
    words: [
      {
        character: '书',
        pinyin: 'shū',
        meaning: '书本，装着知识的好伙伴',
        strokes: '上下结构，四画，上“聿”下“一”',
        example: '小朋友在教室里安静地看书。'
      },
      {
        character: '笔',
        pinyin: 'bǐ',
        meaning: '笔，写字的工具',
        strokes: '左右结构，十画，左“竹”右“毛”',
        example: '写字前要握好手中的笔。'
      },
      {
        character: '课',
        pinyin: 'kè',
        meaning: '课程，上课学习新知识',
        strokes: '左右结构，十画，左“讠”右“果”',
        example: '语文课上大家练习朗读。'
      },
      {
        character: '桌',
        pinyin: 'zhuō',
        meaning: '桌子，摆放书本的家具',
        strokes: '左右结构，十画，左“木”右“卓”',
        example: '课桌要保持整洁。'
      },
      {
        character: '操',
        pinyin: 'cāo',
        meaning: '做操，活动身体的动作',
        strokes: '左右结构，十六画，左“扌”右“喿”',
        example: '课间大家一起做广播体操。'
      }
    ]
  },
  {
    id: 'festivals',
    name: '传统节日',
    description: '了解传统节日的习俗和故事。',
    words: [
      {
        character: '春',
        pinyin: 'chūn',
        meaning: '春天，万物复苏的季节',
        strokes: '上下结构，九画，上“三”下“日”与“人”',
        example: '春节时家家户户贴春联。'
      },
      {
        character: '端',
        pinyin: 'duān',
        meaning: '端午节，用粽子纪念屈原',
        strokes: '上下结构，十四画，上“立”下“耑”',
        example: '端午节要赛龙舟。'
      },
      {
        character: '中',
        pinyin: 'zhōng',
        meaning: '中秋节，团圆的日子',
        strokes: '独体字，四画，像圆圈里的竖线',
        example: '中秋节吃月饼赏月。'
      },
      {
        character: '灯',
        pinyin: 'dēng',
        meaning: '灯笼，元宵节常见的装饰',
        strokes: '左右结构，六画，左“火”右“丁”',
        example: '元宵节挂着许多彩灯。'
      },
      {
        character: '粽',
        pinyin: 'zòng',
        meaning: '粽子，端午节的传统食物',
        strokes: '左右结构，十五画，左“米”右“宗”',
        example: '奶奶包的粽子香喷喷。'
      }
    ]
  }
];

const state = {
  categoryIndex: 0,
  cardIndex: 0,
  favorites: new Map(),
  quizActive: false,
  quizScore: { correct: 0, total: 0 },
  quizQuestion: null,
  quizAnswered: false
};

const flattenWords = () =>
  categories.flatMap((category) =>
    category.words.map((word) => ({ ...word, category: category.name, categoryId: category.id }))
  );

const $ = (selector) => document.querySelector(selector);
const categoryListEl = $('#category-list');
const cardCharacterEl = $('#card-character');
const cardPinyinEl = $('#card-pinyin');
const cardMeaningEl = $('#card-meaning');
const cardExampleEl = $('#card-example');
const cardStrokesEl = $('#card-strokes');
const progressTextEl = $('#progress-text');
const progressInnerEl = $('#progress-inner');
const favoritesListEl = $('#favorites-list');
const favoriteBtn = $('#favorite-btn');
const quizScoreEl = $('#quiz-score');
const quizQuestionEl = $('#quiz-question');
const quizOptionsEl = $('#quiz-options');
const quizFeedbackEl = $('#quiz-feedback');
const startQuizBtn = $('#start-quiz-btn');
const nextQuestionBtn = $('#next-question-btn');

function init() {
  renderCategoryButtons();
  updateCard();
  bindEvents();
  updateFavorites();
  updateQuizScore();
}

function renderCategoryButtons() {
  categoryListEl.innerHTML = '';
  categories.forEach((category, index) => {
    const button = document.createElement('button');
    button.className = 'category-btn';
    button.type = 'button';
    button.role = 'tab';
    button.dataset.index = String(index);
    button.innerHTML = `<strong>${category.name}</strong><span>${category.description}</span>`;
    if (index === state.categoryIndex) {
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
    }

    button.addEventListener('click', () => {
      setCategory(index);
    });

    categoryListEl.appendChild(button);
  });
}

function setCategory(index) {
  if (index === state.categoryIndex) return;
  state.categoryIndex = index;
  state.cardIndex = 0;
  document.querySelectorAll('.category-btn').forEach((btn, btnIndex) => {
    btn.classList.toggle('active', btnIndex === index);
    btn.setAttribute('aria-selected', btnIndex === index ? 'true' : 'false');
  });
  updateCard(true);
}

function getCurrentWord() {
  return categories[state.categoryIndex].words[state.cardIndex];
}

function updateCard(resetProgress = false) {
  const category = categories[state.categoryIndex];
  const word = getCurrentWord();

  cardCharacterEl.textContent = word.character;
  cardPinyinEl.textContent = word.pinyin;
  cardMeaningEl.textContent = word.meaning;
  cardExampleEl.textContent = word.example;
  cardStrokesEl.textContent = word.strokes;

  progressTextEl.textContent = `第 ${state.cardIndex + 1} / ${category.words.length} 个汉字`;
  const progress = ((state.cardIndex + 1) / category.words.length) * 100;
  progressInnerEl.style.width = `${progress}%`;

  const favoriteKey = buildFavoriteKey(category.id, word.character);
  const isFavorited = state.favorites.has(favoriteKey);
  favoriteBtn.textContent = isFavorited ? '已收藏' : '收藏到生字本';
  favoriteBtn.classList.toggle('accent', !isFavorited);
  favoriteBtn.disabled = isFavorited;

  if (resetProgress) {
    document.querySelector('.card-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function buildFavoriteKey(categoryId, character) {
  return `${categoryId}-${character}`;
}

function bindEvents() {
  $('#prev-btn').addEventListener('click', showPreviousWord);
  $('#next-btn').addEventListener('click', showNextWord);
  $('#random-btn').addEventListener('click', showRandomWord);
  favoriteBtn.addEventListener('click', addCurrentWordToFavorites);
  $('#speak-btn').addEventListener('click', speakCurrentWord);
  startQuizBtn.addEventListener('click', toggleQuizStart);
  nextQuestionBtn.addEventListener('click', generateQuizQuestion);
}

function showPreviousWord() {
  const category = categories[state.categoryIndex];
  state.cardIndex = (state.cardIndex - 1 + category.words.length) % category.words.length;
  updateCard();
}

function showNextWord() {
  const category = categories[state.categoryIndex];
  state.cardIndex = (state.cardIndex + 1) % category.words.length;
  updateCard();
}

function showRandomWord() {
  const category = categories[state.categoryIndex];
  state.cardIndex = Math.floor(Math.random() * category.words.length);
  updateCard();
}

function addCurrentWordToFavorites() {
  const category = categories[state.categoryIndex];
  const word = getCurrentWord();
  const key = buildFavoriteKey(category.id, word.character);
  if (!state.favorites.has(key)) {
    state.favorites.set(key, { ...word, category: category.name });
    updateFavorites();
    updateCard();
  }
}

function updateFavorites() {
  favoritesListEl.innerHTML = '';
  if (state.favorites.size === 0) {
    const empty = document.createElement('li');
    empty.textContent = '还没有收藏任何汉字，学习时可以随时加入哦！';
    empty.style.listStyle = 'none';
    favoritesListEl.appendChild(empty);
    return;
  }

  Array.from(state.favorites.entries()).forEach(([key, value]) => {
    const item = document.createElement('li');
    item.innerHTML = `
      <strong>${value.character}</strong>
      <span>${value.pinyin}</span>
      <span>${value.meaning}</span>
      <small>${value.category}</small>
    `;
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = '移除';
    removeBtn.addEventListener('click', () => {
      state.favorites.delete(key);
      updateFavorites();
      updateCard();
    });
    item.appendChild(removeBtn);
    favoritesListEl.appendChild(item);
  });
}

function speakCurrentWord() {
  const word = getCurrentWord();
  if (!('speechSynthesis' in window)) {
    quizFeedbackEl.textContent = '当前浏览器暂不支持语音播放，可以请家长读给你听哦～';
    quizFeedbackEl.classList.remove('correct', 'wrong');
    return;
  }
  const utterance = new SpeechSynthesisUtterance(word.character);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function toggleQuizStart() {
  state.quizActive = true;
  state.quizScore = { correct: 0, total: 0 };
  startQuizBtn.textContent = '重新开始';
  startQuizBtn.classList.add('ghost-btn');
  nextQuestionBtn.disabled = true;
  quizFeedbackEl.textContent = '';
  generateQuizQuestion();
  updateQuizScore();
}

function updateQuizScore() {
  const { correct, total } = state.quizScore;
  if (total === 0) {
    quizScoreEl.textContent = '准备开始测验吧！';
  } else {
    const percent = Math.round((correct / total) * 100);
    quizScoreEl.textContent = `已完成 ${total} 题，正确 ${correct} 题，正确率 ${percent}%`;
  }
}

function generateQuizQuestion() {
  const words = flattenWords();
  if (words.length === 0) return;

  state.quizQuestion = words[Math.floor(Math.random() * words.length)];
  state.quizAnswered = false;
  quizFeedbackEl.textContent = '';
  quizFeedbackEl.classList.remove('correct', 'wrong');
  quizQuestionEl.textContent = `请找出与“${state.quizQuestion.meaning}”相匹配的汉字：`;

  const options = new Map();
  options.set(state.quizQuestion.character, state.quizQuestion);

  while (options.size < 4 && options.size < words.length) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    options.set(randomWord.character, randomWord);
  }

  const shuffledOptions = Array.from(options.values()).sort(() => Math.random() - 0.5);
  quizOptionsEl.innerHTML = '';
  shuffledOptions.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.textContent = `${option.character} · ${option.pinyin}`;
    button.addEventListener('click', () => handleQuizAnswer(option.character, button));
    quizOptionsEl.appendChild(button);
  });

  nextQuestionBtn.disabled = true;
}

function handleQuizAnswer(answer, button) {
  if (!state.quizActive || state.quizAnswered || !state.quizQuestion) return;

  state.quizAnswered = true;
  const isCorrect = answer === state.quizQuestion.character;
  state.quizScore.total += 1;
  if (isCorrect) {
    state.quizScore.correct += 1;
    button.classList.add('correct');
    quizFeedbackEl.textContent = '太棒了！你选对啦～';
    quizFeedbackEl.classList.add('correct');
    quizFeedbackEl.classList.remove('wrong');
  } else {
    button.classList.add('wrong');
    const correctButton = Array.from(quizOptionsEl.children).find(
      (child) => child.textContent.startsWith(state.quizQuestion.character)
    );
    if (correctButton) {
      correctButton.classList.add('correct');
    }
    quizFeedbackEl.textContent = `可惜，这次应该选择“${state.quizQuestion.character}”。`; 
    quizFeedbackEl.classList.add('wrong');
    quizFeedbackEl.classList.remove('correct');
  }
  nextQuestionBtn.disabled = false;
  updateQuizScore();
}

init();
