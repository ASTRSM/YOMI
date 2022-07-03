import user from '../data/userAPI'

export const cycleLevel = () => {
  const localLevel = JSON.parse(localStorage.getItem('level'))
  const sessionLevel = JSON.parse(sessionStorage.getItem('level'))

  if (!localLevel && !sessionLevel) {
    localStorage.setItem('level', JSON.stringify({
      highestLevelUnlocked: 1
    }))
  }

  if (sessionLevel) {
    if (localLevel.highestLevelUnlocked > sessionLevel.highestLevelUnlocked) {
      sessionStorage.setItem('level', JSON.stringify(localLevel))
      insertData(localLevel.highestLevelUnlocked)
    } else {
      localStorage.setItem('level', JSON.stringify(sessionLevel))
      insertData(sessionLevel.highestLevelUnlocked)
    }
  }
}

const insertData = (level) => {
  if (sessionStorage.getItem('user')) {
    const data = {
      highestLevelUnlocked: level
    }

    if (JSON.parse(sessionStorage.getItem('admin'))) {
      data['admin'] = true
    }

    user.setUserById(JSON.parse(sessionStorage.getItem('user')).uid, data)
  }
}