/* eslint-disable no-unused-expressions */
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { concatObject } from '../../function';

export const changeComplit = async (elem) => {
  try {
    const db = getDatabase();
    const auth = getAuth();

    const userId = auth.currentUser.uid;

    const updates = {};
    updates[`/users/${userId}/${elem.id}`] = {
      ...concatObject(elem),
      completed: !elem.completed,
    };
    update(ref(db), updates);
  } catch (e) {
    console.error(e);
  }
};
