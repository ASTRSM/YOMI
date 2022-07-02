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
      user.setUserById(JSON.parse(sessionStorage.getItem('user')).uid, {
        highestLevelUnlocked: localLevel.highestLevelUnlocked
      })
    } else {
      localStorage.setItem('level', JSON.stringify(sessionLevel))
      user.setUserById(JSON.parse(sessionStorage.getItem('user')).uid, {
        highestLevelUnlocked: sessionLevel.highestLevelUnlocked
      })
    }
  }
}