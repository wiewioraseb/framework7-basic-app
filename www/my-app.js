var myApp = new Framework7();
var $$ = Dom7;
// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// first time the application starts, as onPageInit does not fire for index page
initIndexInfo();

map = new GMaps({
    div: '#gmap',
    lat: -12.043333,
    lng: -77.028333
});

myApp.onPageInit('indexPage', function (page) {
    initIndexInfo();
});

myApp.onPageInit('agendaPage', function (page) {
    initAgenda();
});

myApp.onPageInit('contactPage', function (page) {
    initContact();
});
