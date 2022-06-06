import {get, ref, set } from 'firebase/database'
import { db } from '../globals/firebase-config'

export const levelAPI = {
  async getLevelList () {
    const reference = ref(db, 'levelList')
    const snapshot = await get(reference)
    if (snapshot.exists()) {
      return snapshot.val()
    }
    return []
  }
}