import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';

export const getAllAction = async (dispath) => {
  try {
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    await onValue(
      ref(db, '/users/' + userId),
      (snapshot) => {
        const date = Object.entries(snapshot.val()).length
          ? Object.entries(snapshot.val())
              .map((el) => ({
                id: el[0],
                ...el[1],
              }))
              .reduce((acc, el, index) => {
                if (index === 0) {
                  const day = new Date(el.date).getDate();
                  const month = new Date(el.date).getMonth();
                  const year = new Date(el.date).getFullYear();
                  acc.push({
                    day,
                    month,
                    year,
                  });
                  return acc;
                } else {
                  console.log(el.date);
                  const day = new Date(el.date).getDate();
                  const month = new Date(el.date).getMonth();
                  const year = new Date(el.date).getFullYear();
                  if (
                    !acc.find(
                      (el) =>
                        el.day === day && el.month === month && el.year === year
                    )
                  ) {
                    acc.push({
                      day,
                      month,
                      year,
                    });

                    return acc;
                  }
                  return acc;
                }
              }, [])
          : [];

        const mas = Object.entries(snapshot.val()).map((el) => ({
          id: el[0],
          ...el[1],
        })).length
          ? date.map((elem) => {
              elem['elems'] = Object.entries(snapshot.val())
                .map((el) => ({
                  id: el[0],
                  ...el[1],
                }))
                .filter((el) => {
                  const day = new Date(el.date).getDate();
                  const month = new Date(el.date).getMonth();
                  const year = new Date(el.date).getFullYear();
                  if (
                    elem.day === day &&
                    elem.month === month &&
                    elem.year === year
                  ) {
                    return el;
                  }
                });

              return elem;
            })
          : [];

        dispath(mas);
      },
      {
        onlyOnce: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// .map(el)=> ({

// })
