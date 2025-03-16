import conf from '../conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint
    }
}

const authService = new AuthService();


export default AuthService;