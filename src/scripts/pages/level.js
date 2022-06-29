import { levelAPI } from '../data/level-list_API'
import user from '../data/userAPI'
import UrlParser from '../routes/url-parser'
import { helpJourneyInit } from '../utils/help-init'
import { HumanizeLvlStr } from '../utils/humanize-level-str'
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
          <h3>Progress Above 80% Continue</h3>
          <div id="stats">
              <div id="progress">
              </div>
          </div>
      </section>
      <div id="hamburger"><a href="#/level-list" aria-label="hamburger">☰ LEVEL LIST</a></div>
      <section id='next-level-container'>
        <button id='next-level'>
          <P>NEXT LEVEL</P>
          <img src="./images/icons/arrow.svg" alt="next level">
        </button>
      </section>
      <section id='help'>?</section>
    </div>
    `
  },
  

  afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    initiateLevel(url.id)
    levelTitle(url.id)
    $('#next-level').hide()

    helpJourneyInit()
  }
}

const initiateLevel = async (levelPick) => {
  const levelList = await levelAPI.getLevelList()
  levelPicked = levelList[levelPick]
  const nextLevel = getNextLevel(levelList, levelPick)[0]
  const nextLevelIndex = getNextLevel(levelList, levelPick)[1]

  let pickedQuestion = pickQuestion()
  renderLevel(pickedQuestion)

  $('#answer-buttons').each(function () {
    $(this).on('click', (event) => {
      const id = event.target.id
      checkAnswer(pickedQuestion, id, nextLevel, nextLevelIndex)
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
function checkAnswer(index, userAnswer, nextLevel, nextLevelIndex) {
  totalAnswered++
  if (levelPicked[index].answer === userAnswer) {
    correctAnswer++
    $('#wrong-notif-container').html(``)
    renderPercentage(correctAnswer, totalAnswered, nextLevel, nextLevelIndex)
  } else {
    wrongNotification(levelPicked[index].question, levelPicked[index].answer)
    renderPercentage(correctAnswer, totalAnswered, nextLevel, nextLevelIndex)
  }
}

const renderPercentage = (correctAnswer, totalAnswered, nextLevel, nextLevelIndex) => {
  if (totalAnswered > levelPicked.length) {
    const percentageScore = Math.round((correctAnswer / totalAnswered) * 100)
    toNextLevel(percentageScore, nextLevel, nextLevelIndex)
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

const toNextLevel = (percentageScore, nextLevel, nextLevelIndex) => {
  if (percentageScore >= 80) {
    $('#next-level').show()
  } else {
    $('#next-level').hide()
  }

  $('#next-level').on('click', () => {
    emptyVariable()
    saveProgress(nextLevelIndex)
    window.location.href = `#/level/${nextLevel}`
  })
}

const getNextLevel = (levelList, levelPick) => {
  const currentLevel = levelPick
  const allkeys = Object.keys(levelList).map((key) => {
    return key
  })
  const nextLevel = allkeys[allkeys.indexOf(currentLevel) + 1]
  const nextLevelIndex = allkeys.indexOf(nextLevel) + 1
  return [nextLevel, nextLevelIndex]
}

const levelTitle = (id) => {
  const title = HumanizeLvlStr(id)
  window.document.title = `YOMI | ${title}`
}

const emptyVariable = () => {
  correctAnswer = null
  totalAnswered = null
  previousAnswer = null
  previousQuestion = null
}

const saveProgress = (nextLevelIndex) => {
  if (sessionStorage.getItem('user')) {
    const level = JSON.parse(sessionStorage.getItem('level'))
    const id = JSON.parse(sessionStorage.getItem('user')).uid

    if (nextLevelIndex > level.highestLevelUnlocked) {
      level.highestLevelUnlocked = nextLevelIndex
    user.setUserById(id, level)
    sessionStorage.setItem('level', JSON.stringify(level))
    return undefined
    }

    return undefined
  }

  const level = JSON.parse(localStorage.getItem('level'))
  if (nextLevelIndex > level.highestLevelUnlocked) {
    level.highestLevelUnlocked = nextLevelIndex
    localStorage.setItem('level', JSON.stringify(level))
  }
}

export default level
