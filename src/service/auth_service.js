import {
  firebaseAuth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from './firebase.js';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Facebook':
        return facebookProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
