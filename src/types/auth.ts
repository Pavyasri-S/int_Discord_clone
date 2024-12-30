export interface User {
    username: string;
    email: string;
    password: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    currentUser: string | null;
}