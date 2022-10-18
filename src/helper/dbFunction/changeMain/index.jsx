import { getAuth } from 'firebase/auth';
import { getDatabase, ref, update } from 'firebase/database';

const deleteisMain = (elem) => {
  const newObj = { ...elem };
  delete newObj.isMain;
  return newObj;
};

export const changeMain = async (elem) => {
  try {
    const auth = getAuth();
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    const updates = {};

    if (!elem.isMain) {
      updates[`users/${userId}/${elem.id}`] = {
        ...elem,
        isMain: true,
      };
    } else {
      updates[`users/${userId}/${elem.id}`] = {
        ...deleteisMain(elem),
      };
    }

    await update(ref(db), updates);
  } catch (error) {
    console.log(error);
  }
};
