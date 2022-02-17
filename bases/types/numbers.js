"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villains = 20;
    if (avengers < villains) {
        console.log('We have a winner');
    }
    else {
        console.log('We have a loser');
    }
    avengers = Number('123');
    console.log({ avengers: avengers });
})();
