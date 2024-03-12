import { Injectable } from "@angular/core";

Injectable();
export class AuthService {
    isLoggedIn!: boolean;

    login(){
        this.isLoggedIn = true;
        console.log('login', this.isLoggedIn)
        this.isAuthenticated()
    }

    logout(){
        this.isLoggedIn = false;
        console.log('logout', this.isLoggedIn)
    }

    isAuthenticated(){
        return this.isLoggedIn;
    }
}