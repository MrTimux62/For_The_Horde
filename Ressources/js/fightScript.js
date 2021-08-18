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
    $("body").append('<p class="allySwordMan text-center fw-bold" id="nballySwordMan" style="position: absolute; width: 100px; bottom: 32%; left: ' + moveAllySwordMan + '%">' + nb + ' Soldats</p>');
    $("body").append('<img src="Pack Images/allySword_Man.png" id="allySwordMan" class="allySwordMan" style="position: absolute; width: 100px; bottom: 18%; left: ' + moveAllySwordMan + '%">');
    let timerAllySwordMan = setInterval(function () {
        $('.allySwordMan').css('left', + moveAllySwordMan + '%');
        moveAllySwordMan = moveAllySwordMan + 0.02;
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
    }, 10);
}
function ennemiSwordMan(nb) {
    $("body").append('<p class="ennemiSwordMan text-center fw-bold" id="nbennemiSwordMan" style="position: absolute; width: 100px; bottom: 32%; left: ' + moveEnnemiSwordMan + '%">' + nb + ' Soldats</p>');
    $("body").append('<img src="Pack Images/ennemiSword_Man.png" id="ennemiSwordMan" class="ennemiSwordMan" style="position: absolute; width: 100px; bottom: 18%; left: ' + moveEnnemiSwordMan + '%">');
    let timerEnnemiSwordMan = setInterval(function () {
        $('.ennemiSwordMan').css('left', + moveEnnemiSwordMan + '%');
        moveEnnemiSwordMan = moveEnnemiSwordMan - 0.02;
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
    }, 10);
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
    var audiofight = new Audio('Pack Sons/startfight.mp3');
    audiofight.loop = true;
    audiofight.play();
    fightinprogress = 1;
    console.log("fight");
    let ennemylife = parseInt($("#nbennemiSwordMan").text());
    let allylife = parseInt($("#nballySwordMan").text())
    console.log(allylife);
    var fight = setInterval(() => {
        setTimeout(() => {
            if (allylife > 0) {
                if (getRandomInt(2) == 0) {
                    var audio = new Audio('Pack Sons/sword1.wav');
                    audio.play();
                } else {
                    var audio = new Audio('Pack Sons/sword2.wav');
                    audio.play();
                }
                ennemylife = ennemylife - (getRandomInt(5) + 5)
                console.log(ennemylife);
            }
            if (ennemylife <= 0) {
                var audio = new Audio('Pack Sons/swordhit.wav');
                audio.play();
                audiofight.pause();
                audiofight.currentTime = 0;
                fightinprogress = 0;
                $("#nbennemiSwordMan").remove();
                $("#ennemiSwordMan").remove();
                moveEnnemiSwordMan = 294;
                let timerAllySwordMan = setInterval(function () {
                    $('.allySwordMan').css('left', + moveAllySwordMan + '%');
                    moveAllySwordMan = moveAllySwordMan + 0.02;
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
                }, 10);
                clearInterval(fight);
            }
            $("#nbennemiSwordMan").text(ennemylife + " Soldats")
        }, 1500);
        setTimeout(() => {
            if (ennemylife > 0) {
                if (getRandomInt(2) == 0) {
                    var audio = new Audio('Pack Sons/sword1.wav');
                    audio.play();
                } else {
                    var audio = new Audio('Pack Sons/sword2.wav');
                    audio.play();
                }
                allylife = allylife - (getRandomInt(5) + 5)
                console.log(allylife);
            }
            if (allylife <= 0) {
                var audio = new Audio('Pack Sons/swordhit.wav');
                audio.play();
                audiofight.pause();
                audiofight.currentTime = 0;
                fightinprogress = 0;
                $("#nballySwordMan").remove();
                $("#allySwordMan").remove();
                moveAllySwordMan = 1;
                let timerEnnemiSwordMan = setInterval(function () {
                    $('.ennemiSwordMan').css('left', + moveEnnemiSwordMan + '%');
                    moveEnnemiSwordMan = moveEnnemiSwordMan - 0.02;
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
                }, 10);
                clearInterval(fight);
            }
            $("#nballySwordMan").text(allylife + " Soldats")
        }, 3000);
    }, 4000);
}

function startFightEnnemyBase() {
    var audiofight2 = new Audio('Pack Sons/startfight.mp3');
    audiofight2.loop = true;
    audiofight2.play();
    let ennemybaselife = $(".EnnemyLifejs").text();
    ennemybasefight = setInterval(() => {
        if ($(".EnnemyLifejs").text() <= 0) {
            $("#Win").modal("show");
            clearInterval(ennemybasefight);
        }
        if (parseInt($("#nballySwordMan").text()) <= 0 || parseInt($("#nballySwordMan").text()) == null || fightinprogress == 1) {
            audiofight2.pause();
            audiofight2.currentTime = 0;
            clearInterval(ennemybasefight);
        } else {
            ennemybaselife = ennemybaselife - (getRandomInt(20) + 10);
            $(".EnnemyLifejs").text(ennemybaselife);
            $(".EnnemyLifejs").css("width", ennemybaselife / 10 + "%");
        }

    }, 3000);
}

function startFightAllyBase() {
    var audiofight2 = new Audio('Pack Sons/startfight.mp3');
    audiofight2.loop = true;
    audiofight2.play();
    let allybaselife = $(".AllyLifejs").text();
    allybasefight = setInterval(() => {
        if ($(".AllyLifejs").text() <= 0) {
            $("#Lose").modal("show");
            clearInterval(allybasefight);
        }
        if (parseInt($("#nbennemiSwordMan").text()) <= 0 || parseInt($("#nbennemiSwordMan").text()) == null || fightinprogress == 1) {
            audiofight2.pause();
            audiofight2.currentTime = 0;
            clearInterval(allybasefight);
        } else {
            allybaselife = allybaselife - (getRandomInt(20) + 10);
            $(".AllyLifejs").text(allybaselife);
            $(".AllyLifejs").css("width", allybaselife / 10 + "%");
        }

    }, 3000);
}