import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { User } from "../Interfaces/user.interface";

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(private http: HttpClient) { }
    private url: string = 'https://band-project-864cf-default-rtdb.firebaseio.com/users.json';
    loggedInUser!: User;

    fetchItems() {
        return this.http.get<User[]>(this.url)
            .pipe(map(response => {
                const tempArr: User[] = [];
                for (let key in response) {
                    if (response.hasOwnProperty(key)) {
                        tempArr.push({ ...response[key] });
                    }
                }
                return tempArr;
            }));
    }

    addUser(user: User) {
        return this.http.post<User[]>(this.url, user);
    }

    addLoginUser(user: User) {
        this.fetchItems().subscribe(users => {
            let index: number = users.findIndex(e => e.email === user.email);
            this.loggedInUser = users[index];
        });
    }

    getLastId(): number {
        let num!: number;
        this.fetchItems().subscribe(users => {users.reduce((res, curr) => { return res = curr.id }, 0)})
        return num;
    }
}