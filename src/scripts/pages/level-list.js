import { levelAPI } from '../data/level-list_API'
import user from '../data/user'

const levelList = {
  render() {
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
    const levelListData = await levelAPI.getLevelList()
    let flag = 1
    let levelFlag = user[0].highestLevelUnlocked

    Object.keys(levelListData).forEach((level) => {
      const levelButton = `
      <div class='level-container'>
        <div class='detail ${getDetailPlacement(flag)}'>
          <div class='detail-line'></div>
          <div class='detail-text'>${levelListData[level][0].question}</div>
        </div>
        <a href='#/level/${level}' id='${level}' class='level-item ${isCheckpoint(level)} ${isDone(levelFlag, flag)}''>${addSpace(level)}</a>
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

const addSpace = (str) => {
  if (str.includes('checkpoint')) {
    str = str.slice(7)
  }
  return str.replace(/.{1}$/,' $&').toUpperCase() ;
}

export default levelList
