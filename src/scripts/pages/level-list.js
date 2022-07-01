import { levelAPI } from '../data/level-list_API'
import { HumanizeLvlStr } from '../utils/humanize-level-str'

const levelList = {
  render() {
    window.document.title = `YOMI | LEVEL LIST`
    return `
      <section id='level-list_container'>
        <h2>LEVEL LIST</h2>
        <div id='level-list'>
          <div class='middle-line'></div>
        </div>
      </section>
    `
  },

  async afterRender() {
    $('body, html, main').removeClass('level-custom')
    const levelListData = await levelAPI.getLevelList()
    let flag = 1
    let levelFlag = getProgress()

    Object.keys(levelListData).forEach((level) => {
      const levelButton = `
      <div class='level-container'>
        <div class='detail ${getDetailPlacement(flag)}'>
          <div class='detail-line'></div>
          <div class='detail-text'>${levelListData[level][0].question}</div>
        </div>
        <a href='#/level/${level}' id='${level}' class='level-item ${isCheckpoint(level)} ${isDone(levelFlag, flag)}''>${HumanizeLvlStr(level)}</a>
      </div>
      `
      flag++
      $('#level-list').append(levelButton)
    })
  }
}

const isDone = (highestLevelUnlocked, flag) => {
  if (flag > highestLevelUnlocked) {
    return 'disable'
  }
}

const getDetailPlacement = (flag) => {
  if (flag % 2 === 0) {
    return 'detail-left'
  } else {
    return 'detail-right'
  }
}

const isCheckpoint = (level) => {
  if (level.includes('checkpoint')) {
    return `checkpoint`
  }
    return 'level'
}

const getProgress = () => {
  if (sessionStorage.getItem('level')) {
    const level = JSON.parse(sessionStorage.getItem('level'))
    return level.highestLevelUnlocked
  }
  const level = JSON.parse(localStorage.getItem('level'))
  return level.highestLevelUnlocked
}

export default levelList
