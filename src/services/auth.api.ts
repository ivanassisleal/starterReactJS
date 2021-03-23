import api from './api';

class Auth {
    signIn() {
        return api.get('/sessions/auth');
    }
}

export default Auth;