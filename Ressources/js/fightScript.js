let moveAllySwordMan = 1;
let moveEnnemiSwordMan = 294;
let moveAllyHorse = 0;
let moveEnnemiHorse = 0;
let moveAllyBow = 0;
let moveEnnemiBow = 0;
let allybase = 15;
let ennemybase = 285;
let fightinprogress = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Soldat
function allySwordMan(nb) {
    $("body").append('<p class="allySwordMan text-center fw-bold" id="nballySwordMan" style="position: absolute; width: 100px; bottom: 32%; left: ' + moveAllySwordMan + '%">' + nb + '</p>');
    $("body").append('<img src="Pack Images/allySword_Man.png" id="allySwordMan" class="allySwordMan" style="position: absolute; width: 100px; bottom: 18%; left: ' + moveAllySwordMan + '%">');
    let timerAllySwordMan = setInterval(function () {
        console.log("moveally");
        $('.allySwordMan').css('left', + moveAllySwordMan + '%');
        moveAllySwordMan++
        if (ennemybase - moveAllySwordMan <= 10) {
            startFightEnnemyBase();
            clearInterval(timerAllySwordMan);
        }
        if (moveEnnemiSwordMan - moveAllySwordMan <= 10) {
            if (fightinprogress == 0) {
                startFight();
            }
            clearInterval(timerAllySwordMan);
        }
    }, 200);
}
function ennemiSwordMan(nb) {
    $("body").append('<p class="ennemiSwordMan text-center fw-bold" id="nbennemiSwordMan" style="position: absolute; width: 100px; bottom: 32%; left: ' + moveEnnemiSwordMan + '%">' + nb + '</p>');
    $("body").append('<img src="Pack Images/ennemiSword_Man.png" id="ennemiSwordMan" class="ennemiSwordMan" style="position: absolute; width: 100px; bottom: 18%; left: ' + moveEnnemiSwordMan + '%">');
    let timerEnnemiSwordMan = setInterval(function () {
        console.log("moveennemy");
        $('.ennemiSwordMan').css('left', + moveEnnemiSwordMan + '%');
        moveEnnemiSwordMan--;
        if (moveEnnemiSwordMan - allybase <= 10) {
            startFightAllyBase();
            clearInterval(timerEnnemiSwordMan);
        }
        if (moveEnnemiSwordMan - moveAllySwordMan <= 10) {
            if (fightinprogress == 0) {
                startFight();
            }
            clearInterval(timerEnnemiSwordMan);
        }
    }, 200);
}
/*
//Cavalier
function allyHorse() {
    $("body").append('<img src="Pack Images/allyHorse.png" id="allyHorse" style="position: absolute; width: 100px; bottom: 0; left: ' + moveAllyHorse + '%">');
    let timerAllyHorse = setInterval(function () {
        $('#allyHorse').css('left', + moveAllyHorse + '%');
        moveAllyHorse++
        if (
            moveAllyHorse + moveEnnemiSwordMan >= 86 ||
            moveAllyHorse + moveEnnemiHorse >= 80 ||
            moveAllyHorse + moveEnnemiBow >= 70
        ) {
            clearInterval(timerAllyHorse);
        }
    }, 1000);
}

function ennemiHorse() {
    $("body").append('<img src="Pack Images/ennemiHorse.png" id="ennemiHorse" style="position: absolute; width: 100px; bottom: 0; right: ' + moveEnnemiHorse + '%">');
    let timerEnnemiHorse = setInterval(function () {
        $('#ennemiHorse').css('right', + moveEnnemiHorse + '%');
        moveEnnemiHorse++
        if (
            moveEnnemiHorse + moveAllySwordMan >= 86 ||
            moveEnnemiHorse + moveAllyHorse >= 80 ||
            moveEnnemiHorse + moveAllyBow >= 70
        ) {
            clearInterval(timerEnnemiHorse);
        }
    }, 1000);
}

//Archer
function allyBow() {
    $("body").append('<img src="Pack Images/allyBow.png" id="allyBow" style="position: absolute; width: 100px; bottom: 0; left: ' + moveAllyBow + '%">');
    let timerAllyBow = setInterval(function () {
        $('#allyBow').css('left', + moveAllyBow + '%');
        moveAllyBow++
        if (
            moveAllyBow + moveEnnemiSwordMan >= 86 ||
            moveAllyBow + moveEnnemiHorse >= 80 ||
            moveAllyBow + moveEnnemiBow >= 70
        ) {
            clearInterval(timerAllyBow);
        }
    }, 1000);
}

function ennemiBow() {
    $("body").append('<img src="Pack Images/ennemiBow.png" id="ennemiBow" style="position: absolute; width: 100px; bottom: 0; right: ' + moveEnnemiBow + '%">');
    let timerEnnemiBow = setInterval(function () {
        $('#ennemiBow').css('right', + moveEnnemiBow + '%');
        moveEnnemiBow++
        if (
            moveEnnemiBow + moveAllySwordMan >= 86 ||
            moveEnnemiBow + moveAllyHorse >= 80 ||
            moveEnnemiBow + moveAllyBow >= 70
        ) {
            clearInterval(timerEnnemiBow);
        }
    }, 1000);
}
*/
function startFight() {
    fightinprogress = 1;
    console.log("fight");
    let ennemylife = $("#nbennemiSwordMan").text();
    let allylife = $("#nballySwordMan").text()
    var fight = setInterval(() => {
        setTimeout(() => {
            if (allylife > 0) {
                ennemylife = ennemylife - (getRandomInt(5) + 5)
                console.log(ennemylife);
            }
            if (ennemylife <= 0) {
                fightinprogress = 0;
                $("#nbennemiSwordMan").remove();
                $("#ennemiSwordMan").remove();
                moveEnnemiSwordMan = 294;
                let timerAllySwordMan = setInterval(function () {
                    $('.allySwordMan').css('left', + moveAllySwordMan + '%');
                    moveAllySwordMan++
                    if (ennemybase - moveAllySwordMan <= 10) {
                        startFightEnnemyBase();
                        clearInterval(timerAllySwordMan);
                    }
                    if (moveEnnemiSwordMan - moveAllySwordMan <= 10) {
                        if (fightinprogress == 0) {
                            startFight();
                        }
                        clearInterval(timerAllySwordMan);
                    }
                }, 200);
                clearInterval(fight);
            }
            $("#nbennemiSwordMan").text(ennemylife)
        }, 1500);
        setTimeout(() => {
            if (ennemylife > 0) {
                allylife = allylife - (getRandomInt(5) + 5)
                console.log(allylife);
            }
            if (allylife <= 0) {
                fightinprogress = 0;
                $("#nballySwordMan").remove();
                $("#allySwordMan").remove();
                moveAllySwordMan = 1;
                let timerEnnemiSwordMan = setInterval(function () {
                    $('.ennemiSwordMan').css('left', + moveEnnemiSwordMan + '%');
                    moveEnnemiSwordMan--;
                    if (moveEnnemiSwordMan - allybase <= 10) {
                        startFightAllyBase();
                        clearInterval(timerEnnemiSwordMan);
                    }
                    if (moveEnnemiSwordMan - moveAllySwordMan <= 10) {
                        if (fightinprogress == 0) {
                            startFight();
                        }
                        clearInterval(timerEnnemiSwordMan);
                    }
                }, 200);
                clearInterval(fight);
            }
            $("#nballySwordMan").text(allylife)
        }, 3000);
    }, 4000);
}

function startFightEnnemyBase() {
    let ennemybaselife = $(".EnnemyLifejs").text();
    ennemybasefight = setInterval(() => {
        if ($("#nballySwordMan").text() <= 0 || $("#nballySwordMan").text() == null) {
            clearInterval(ennemybasefight);
        }
        if (fightinprogress == 0) {
            ennemybaselife = ennemybaselife - (getRandomInt(20) + 20);
            $(".EnnemyLifejs").text(ennemybaselife);
            $(".EnnemyLifejs").css("width", ennemybaselife / 10 + "%");
        }
        
    }, 3000);
}

function startFightAllyBase() {
    let allybaselife = $(".AllyLifejs").text();
    allybasefight = setInterval(() => {
        if ($("#nbennemiSwordMan").text() <= 0 || $("#nbennemiSwordMan").text() == null) {
            clearInterval(allybasefight);
        }
        if (fightinprogress == 0) {
            allybaselife = allybaselife - (getRandomInt(20) + 20);
            $(".AllyLifejs").text(allybaselife);
            $(".AllyLifejs").css("width", allybaselife / 10 + "%");
        }
        
    }, 3000);
}