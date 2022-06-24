import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
providedIn:'root'
})

export class AuthService {
    constructor(private http:HttpClient){

    }

    login(email:string,password:string) {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
        {email,password,returnSecureToken:true})
    }

}