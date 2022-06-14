import { get, ref, set } from 'firebase/database'
import { db } from '../globals/firebase-config';


const user = {
  async getUserById (id) {
    const user = ref(db, 'user/' + id);
    const snapshot = await get(user)
    if (snapshot.exists()) {
      return snapshot.val()
    }
    return false
  },

  setUserById (id, data) {
    set(ref(db, 'user/' + id), data)
  }
}

export default user
