import { Injectable } from "@angular/core";
import { User } from "../Interfaces/user.interface";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({ providedIn: 'root' })
export class UsersService {
    users!: User[];
    loggedInUser!: User;
    num!: number;

    constructor(private fireService: AngularFireDatabase) { 
        this.fetchItems().subscribe(items => {
            this.users = items;
        });
    }

    fetchItems() {
        return this.fireService.list<User>('users').valueChanges();
    }

    addUser(user: User) {
        this.fireService.list<User>('users').push(user);
    }

    addLoginUser(user: User) {
        this.fetchItems().subscribe(users => {
            let index: number = users.findIndex(e => e.email === user.email);
            this.loggedInUser = users[index];
        });
    }

    getLastId(): number {
        return this.users.length - 1;
    }
}