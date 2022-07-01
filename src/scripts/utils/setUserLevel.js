import user from '../data/userAPI'
import { cycleLevel } from './cycle-level'
import { dashboardInit } from './dashboard-init'

const setUserLevel = async (id) => {
  const data = await user.getUserById(id)
  sessionStorage.setItem('level', JSON.stringify({highestLevelUnlocked: data.highestLevelUnlocked}))
  sessionStorage.setItem('admin', JSON.stringify({admin: data.admin}))

  if (!data) {
    user.setUserById(id, {
      highestLevelUnlocked: 1
    })
    sessionStorage.setItem('level', JSON.stringify({
      highestLevelUnlocked: 1
    }));
  }
  cycleLevel()
  const admin = JSON.parse(sessionStorage.getItem('admin')).admin
  if (admin && !$('#help').length && !$('#add-button').length) {
    dashboardInit()
  }
}

export default setUserLevel
