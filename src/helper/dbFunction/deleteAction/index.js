import { getAuth } from 'firebase/auth';
import { getDatabase, ref, update } from 'firebase/database';

export const deleteFromBd = async (elem) => {
  try {
    const auth = getAuth();
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    const updates = {};
    updates[`users/${userId}/${elem.id}`] = null;
    await update(ref(db), updates);
  } catch (e) {
    console.log(e);
  }
};
