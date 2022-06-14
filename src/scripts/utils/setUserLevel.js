import user from '../data/userAPI'
import { dashboardInit } from './dashboard-init'

const setUserLevel = async (id) => {
  const data = await user.getUserById(id)
  sessionStorage.setItem('level', JSON.stringify(data))
  if (!data) {
    user.setUserById(id, {
      highestLevelUnlocked: 1
    })
    sessionStorage.setItem('level', JSON.stringify({
      highestLevelUnlocked: 1
    }));
  }
  
  const admin = JSON.parse(sessionStorage.getItem('level')).admin;
  if (admin) {
    dashboardInit()
  }
}

export default setUserLevel
