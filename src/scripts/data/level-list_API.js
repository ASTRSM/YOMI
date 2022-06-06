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
  },

  async setCheckpoint (target, index, _question, _answer) {
    set(ref(db, 'levelList/'+ target + '/' + index), {
      question: _question,
      answer: _answer
    })
  },

  async deleteCheckpoint (target, index) {
    set(ref(db, 'levelList/'+ target + '/' + index), null)
  }
}