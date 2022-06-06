import { levelAPI } from '../data/level-list_API'
import UrlParser from '../routes/url-parser'
import wrongNotification from '../utils/level-notification-initiator'

let correctAnswer = null
let totalAnswered = null
let previousAnswer = null
let previousQuestion = null
let levelPicked = null

const level = {
  render() {
    return `
    <div id='level-container'>
      <section class="quiz">
          <h3 id="question"></h3>
          <section id="answer-buttons"></section>
      </section>
      <section id='wrong-notif-container'></section>
      <section class="score-container">
          <h3>Progress to Continue</h3>
          <div id="stats">
              <div id="progress">
              </div>
          </div>
      </section>
    </div>
    `
  },
  

  afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    initiateLevel(url.id)
  }
}

const initiateLevel = async (levelPick) => {
  const levelList = await levelAPI.getLevelList()
  levelPicked = levelList[levelPick]

  let pickedQuestion = pickQuestion()
  renderLevel(pickedQuestion)

  $('#answer-buttons').each(function () {
    $(this).on('click', (event) => {
      const id = event.target.id
      checkAnswer(pickedQuestion, id)
      pickedQuestion = pickQuestion()
      renderLevel(pickedQuestion)
    })
  })
}

const pickQuestion = () => {
  return randomException(previousQuestion, levelPicked.length)
}

const renderLevel = (pickedQuestion) => {
  previousQuestion = pickedQuestion
  renderLevelQuestion(pickedQuestion)
  renderLevelAnswers(pickedQuestion)
}

// percentage score = #correctAnswer / #total
function checkAnswer(index, userAnswer) {
  totalAnswered++
  if (levelPicked[index].answer === userAnswer) {
    correctAnswer++
    $('#wrong-notif-container').html(``)
    renderPercentage(correctAnswer, totalAnswered)
  } else {
    if (correctAnswer > 0) {
      correctAnswer--
    }
    console.log('wrong')
    wrongNotification(levelPicked[index].question, levelPicked[index].answer)
    renderPercentage(correctAnswer, totalAnswered)
  }
}

const renderPercentage = (correctAnswer, totalAnswered) => {
  if (totalAnswered > levelPicked.length) {
    const percentageScore = (correctAnswer / totalAnswered) * 100
    $('#progress').css('width', `${percentageScore}%`)
  }
}

function randomException(previousIndex, arrayLength) {
  let pickedIndex = randomize(arrayLength)
  if (pickedIndex === previousIndex) {
    if (pickedIndex >= arrayLength - 1) {
      pickedIndex--
    } else if (pickedIndex < 0) {
      pickedIndex++
    } else {
      pickedIndex++
    }
  }
  return pickedIndex
}

function renderLevelQuestion(pickedQuestion) {
  $('#question').html(levelPicked[pickedQuestion].question)
}

function renderLevelAnswers(pickedQuestion) {
  $('#answer-buttons').html('')
  const randomAnswer = []

  let answerException = levelPicked.filter((element) => {
    return element.answer !== levelPicked[pickedQuestion].answer
  })

  for (let i = 0; i < 3; i++) {
    const result = randomException(previousAnswer, answerException.length)

    previousAnswer = result

    const currentIndex = answerException[result]
    randomAnswer.push(currentIndex)
    answerException.splice(result, 1)
    if (i === 2) {
      randomAnswer.push(levelPicked[pickedQuestion])
    }
  }

  const shuffledAnswers = shuffle(randomAnswer)
  for (let i = 0; i < shuffledAnswers.length; i++) {
    const answers = `<button id="${shuffledAnswers[i].answer}">${shuffledAnswers[i].answer}</button>`
    $('#answer-buttons').append(answers)
  }
}

function shuffle(array) {
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = randomize(currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }
  return array
}

function randomize(indexLength) {
  const randomIndex = Math.floor(Math.random() * indexLength)
  return randomIndex
}

export default level
