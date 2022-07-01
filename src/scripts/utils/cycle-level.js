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
    } else {
      localStorage.setItem('level', JSON.stringify(sessionLevel))
    }
  }
}