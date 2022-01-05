/*
                            FIREBASE API keys are visible to users but for security,
    AFTER DEPLOYING MY PROJECT I WILL RESTRICT FIREBASE API KEY USAGE REQUESTS TO A SPECIFIED WEBSITE

For more information: https://cloud.google.com/docs/authentication/api-keys?hl=en&visit_id=637618555730645022-772762286&rd=1
*/

// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCrwIauaTQ16Rox__5PYCeZnt0MJXMl8U",
  authDomain: "connect-us-a8d01.firebaseapp.com",
  projectId: "connect-us-a8d01",
  storageBucket: "connect-us-a8d01.appspot.com",
  messagingSenderId: "687612562097",
  appId: "1:687612562097:web:7099c887c812d37716f090"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()