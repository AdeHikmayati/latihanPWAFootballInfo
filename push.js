var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BKc3BWKhqI0DzAOxC9p8sx_-ATeZ2ybVosi2uJGF2FaNX1wtlk7kKNRo5cFTVgaJwWEzNv3hsey9oSGfEh5-T7c",
    "privateKey": "pa4e0fOo1oXd4fBbj4o0nx-dVnArrKLPtMQP1t53wOA"
};

webPush.setVapidDetails(
    'mailto: example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey

)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fgDFcdCD0-w:APA91bFfOJG8DMTVAbAZsg8X9EYGHCNUdUsDc8anlZUm4GfJvwmJDIuakHMDcfnqgHsijxxaMkGWARu01ehn8qxrOBmzOsovmFoMW4AYNSJF0YP9TE3HNyky8XE2AIDfucR8_O73ZXYp",
    "keys": {
        "p256dh": "BMnkpVXAoyKIqsaYPspSB0UZ/ZCVB1Qf2SCSt1r/Go6lFp9r2oKVyJO640dmlcDYELpi5l+K5oFGBs4Avf4Ntog=",
        "auth": "oJ0jIVpEyr+XzPOC620znw=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi';

var options = {
    gcmAPIKey: '561111005014',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);