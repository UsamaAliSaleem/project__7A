import * as firebase from 'firebase/app';
import 'firebase/messaging';
const config = {
    apiKey: "AIzaSyBCvYkt0QDTvbpNI9xRnTczU6tdSWHE9_s",
    authDomain: "pppp-cd171.firebaseapp.com",
    databaseURL: "https://pppp-cd171.firebaseio.com",
    projectId: "pppp-cd171",
    storageBucket: "pppp-cd171.appspot.com",
    messagingSenderId: "229993412522",
    appId: "1:229993412522:web:c69896781d72831a095dd3"
}

firebase.initializeApp(config);

export default firebase