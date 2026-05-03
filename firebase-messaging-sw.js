const firebaseConfig = {
    apiKey: "AIzaSyBowQFEXv4_1Pu9ssR1fLdgsvevdbIhN4M",
    authDomain: "ciau-5d2b2.firebaseapp.com",
    projectId: "ciau-5d2b2",
    storageBucket: "ciau-5d2b2.firebasestorage.app",
    messagingSenderId: "288289997943",
    appId: "1:288289997943:web:cdea93ad690620247c3272"
};

importScripts('https://www.gstatic.com/firebasejs/12.12.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.12.1/firebase-messaging-compat.js');

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification?.title || 'Nueva notificación';
    const options = {
        body: payload.notification?.body || 'Toca para ver',
        icon: '/icon-192.png',
        vibrate: [200, 100, 200]
    };
    self.registration.showNotification(title, options);
});
