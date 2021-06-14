import { firebaseDatabase } from './firebase.js';

class CocktailRepo {
  readCocktails(userId, updateCocktailList) {
    const ref = firebaseDatabase.ref(`${userId}/cocktails`);
    ref.on('value', snapshot => {
      const data = snapshot.val();
      data && updateCocktailList(data);
    });

    return () => {
      ref.off();
    };
  }

  saveCocktail(userId, cocktail) {
    firebaseDatabase.ref(`${userId}/cocktails/${cocktail.id}`).set(cocktail);
  }

  removeCocktail(userId, cocktail) {
    firebaseDatabase.ref(`${userId}/cocktails/${cocktail.id}`).remove();
  }
}

// function writeUserData(userId, name, email, imageUrl) {
//   firebase
//     .database()
//     .ref('users/' + userId)
//     .set({
//       username: name,
//       email: email,
//       profile_picture: imageUrl,
//     });
// }

export default CocktailRepo;
