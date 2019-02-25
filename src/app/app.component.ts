import { Component } from '@angular/core';
import  * as firebase from'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(){
        let config = {
            apiKey: "AIzaSyDymtVUAnLkZ0FqvGi_f3JxFrNeAraiEnw",
            authDomain: "posts-38a24.firebaseapp.com",
            databaseURL: "https://posts-38a24.firebaseio.com",
            projectId: "posts-38a24",
            storageBucket: "posts-38a24.appspot.com",
            messagingSenderId: "357117808639"
        };
        firebase.initializeApp(config);
    }
}
