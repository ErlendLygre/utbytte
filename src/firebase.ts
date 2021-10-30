// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyB2E8mgNBaFz8OsX2i609j4fBsrnwgLalQ',
    authDomain: 'utbytte-c1fe9.firebaseapp.com',
    projectId: 'utbytte-c1fe9',
    storageBucket: 'utbytte-c1fe9.appspot.com',
    messagingSenderId: '190161457929',
    appId: '1:190161457929:web:0483b143ea2e9ce3f4b9d8',
    measurementId: 'G-3BWT80ZX9Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
