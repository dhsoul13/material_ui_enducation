import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { addData } from '../../../store/slice/dataslice';
import showAllAction from '../../../store/slice/showAllAction';

export const getAllAction = async (dispath) => {
  try {
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    await onValue(
      ref(db, '/users/' + userId),
      (snapshot) => {
        const values = Object.entries(snapshot.val()).map((el) => {
          return {
            id: el[0],
            ...el[1],
          };
        });

        const dates = Object.values(snapshot.val()).reduce((acc, el, index) => {
          if (index === 0) {
            acc.push(el.date);
            return acc;
          }

          if (
            !acc.find(
              (elem) => new Date(elem).getDate() === new Date(el.date).getDate()
            )
          ) {
            acc.push(el.date);
            return acc;
          }
          return acc;
        }, []);

        dispath(dates, values);
      },
      {
        onlyOnce: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// {
//   const date = Object.entries(snapshot.val()).length
//     ? Object.entries(snapshot.val())
//         .map((el) => ({
//           id: el[0],
//           ...el[1],
//         }))
//         .reduce((acc, el, index) => {
//           if (index === 0) {
//             const day = new Date(el.date).getDate();
//             const month = new Date(el.date).getMonth();
//             const year = new Date(el.date).getFullYear();
//             acc.push({
//               day,
//               month,
//               year,
//               dateFull: el.date,
//             });
//             return acc;
//           } else {
//             const day = new Date(el.date).getDate();
//             const month = new Date(el.date).getMonth();
//             const year = new Date(el.date).getFullYear();
//             if (
//               !acc.find(
//                 (el) =>
//                   el.day === day && el.month === month && el.year === year
//               )
//             ) {
//               acc.push({
//                 day,
//                 month,
//                 year,
//                 dateFull: el.date,
//               });

//               return acc;
//             }
//             return acc;
//           }
//         }, [])
//     : [];

//   const mas = Object.entries(snapshot.val()).map((el) => ({
//     id: el[0],
//     ...el[1],
//   })).length
//     ? date.map((elem) => {
//         elem['elems'] = Object.entries(snapshot.val())
//           .map((el) => ({
//             id: el[0],
//             ...el[1],
//           }))
//           .filter((el) => {
//             const day = new Date(el.date).getDate();
//             const month = new Date(el.date).getMonth();
//             const year = new Date(el.date).getFullYear();
//             if (
//               elem.day === day &&
//               elem.month === month &&
//               elem.year === year
//             ) {
//               return el;
//             }
//           });

//         return elem;
//       })
//     : [];

//   dispath(mas);
// },
