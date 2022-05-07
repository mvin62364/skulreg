import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AppService {

    private url = 'http://localhost:1337/api/';
    constructor(private http: HttpClient) { }

    getCours() {
        return this.http.get(this.url + 'cours1');
    }

}