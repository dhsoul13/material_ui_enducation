import { getAuth } from 'firebase/auth';
import { getDatabase, onValue, ref, update } from 'firebase/database';

export const redactActive = async (elem, text, exitPopUp) => {
  try {
    const auth = getAuth();
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    const updates = {};
    await onValue(
      ref(db, `/users/${userId}/${elem}`),
      async (snapshot) => {
        updates[`users/${userId}/${elem}`] = {
          ...snapshot.val(),
          text: text,
        };
        await update(ref(db), updates);
        exitPopUp();
      },
      {
        onlyOnce: true,
      }
    );
  } catch (error) {
    console.log(error);
    exitPopUp();
  }
};
