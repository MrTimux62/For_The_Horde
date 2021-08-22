let moveAllySwordMan = 0;
let moveEnnemiSwordMan = 294;
let moveAllyHorse = 0;
let moveEnnemiHorse = 0;
let moveAllyBow = 0;
let moveEnnemiBow = 0;
let allybase = 15;
let ennemybase = 285;
let fightinprogress = 0;
let ennemydistance = 0;
let allytype = "default";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Soldat
function allySwordMan(nb) { //Etape 6 soldat
    $("body").append('<p class="allySwordMan text-center fw-bold" id="nballySwordMan" style="position: absolute; width: 100px; bottom: 32%; left: ' + moveAllySwordMan + '%">' + nb + ' Soldats</p>');
    $("body").append('<img src="Pack Images/allySword_Man.png" id="allySwordMan" class="allySwordMan" style="position: absolute; width: 100px; bottom: 18%; left: ' + moveAllySwordMan + '%">');
    let timerAllySwordMan = setInterval(function () {
        $('.allySwordMan').css('left', + moveAllySwordMan + '%');
        if (ennemybase - moveAllySwordMan <= 10) {
            startFightEnnemyBase("sword");
            clearInterval(timerAllySwordMan);
        }
        if (moveEnnemiSwordMan - moveAllySwordMan <= 10) {
            if (fightinprogress == 0) {
                startFight("sword");
            }
            clearInterval(timerAllySwordMan);
        } else {
            moveAllySwordMan = moveAllySwordMan + 0.02;
        }
    }, 10);
}
function allyBowMan(nb) { //Etape 6 Archer
    $("body").append('<p class="allyBowMan text-center fw-bold" id="nballyBowMan" style="position: absolute; width: 100px; bottom: 32%; left: ' + moveAllyBow + '%">' + nb + ' Archers</p>');
    $("body").append('<img src="Pack Images/allyBowMan.png" id="allyBowMan" class="allyBowMan" style="position: absolute; width: 100px; bottom: 18%; left: ' + moveAllyBow + '%">');
    let timerAllyBow = setInterval(function () {
        $('.allyBowMan').css('left', + moveAllyBow + '%');
        if (ennemybase - moveAllyBow <= 30) {
            startFightEnnemyBase("bow");
            clearInterval(timerAllyBow);
        }
        if (moveEnnemiSwordMan - moveAllyBow <= 30) {
            if (fightinprogress == 0) {
                startFight("bow");
            }
            clearInterval(timerAllyBow);
        } else {
            moveAllyBow = moveAllyBow + 0.02;
        }
    }, 10);
}
function allyHorse(nb) { //Etape 6 Cavalier
    $("body").append('<p class="allyHorse text-center fw-bold" id="nballyHorse" style="position: absolute; width: 100px; bottom: 32%; left: ' + moveAllyHorse + '%">' + nb + ' Cavaliers</p>');
    $("body").append('<img src="Pack Images/allyHorse.png" id="allyHorse" class="allyHorse" style="position: absolute; width: 100px; bottom: 18%; left: ' + moveAllyHorse + '%">');
    let timerAllyHorse = setInterval(function () {
        $('.allyHorse').css('left', + moveAllyHorse + '%');
        if (ennemybase - moveAllyHorse <= 15) {
            startFightEnnemyBase("horse");
            clearInterval(timerAllyHorse);
        }
        if (moveEnnemiSwordMan - moveAllyHorse <= 15) {
            if (fightinprogress == 0) {
                startFight("horse");
            }
            clearInterval(timerAllyHorse);
        } else {
            moveAllyHorse = moveAllyHorse + 0.06;
        }
    }, 10);
}

function ennemiSwordMan(nb) {
    $("body").append('<p class="ennemiSwordMan text-center fw-bold" id="nbennemiSwordMan" style="position: absolute; width: 100px; bottom: 32%; left: ' + moveEnnemiSwordMan + '%">' + nb + ' Soldats</p>');
    $("body").append('<img src="Pack Images/ennemiSword_Man.png" id="ennemiSwordMan" class="ennemiSwordMan" style="position: absolute; width: 100px; bottom: 18%; left: ' + moveEnnemiSwordMan + '%">');
    let timerEnnemiSwordMan = setInterval(function () {
        ennemydistance = 0;
        $('.ennemiSwordMan').css('left', + moveEnnemiSwordMan + '%');
        if (moveEnnemiSwordMan - allybase <= 10) {
            startFightAllyBase("sword");
            clearInterval(timerEnnemiSwordMan);
        }
        if (moveEnnemiSwordMan - moveAllySwordMan <= 10) {
            allytype = "sword"
            ennemydistance = 1;
            if (fightinprogress == 0) {
                startFight("sword");
            }
            clearInterval(timerEnnemiSwordMan);
        }
        if (moveEnnemiSwordMan - moveAllyHorse <= 10) {
            allytype = "horse"
            ennemydistance = 1;
            if (fightinprogress == 0) {
                startFight("horse");
            }
            clearInterval(timerEnnemiSwordMan);
        }
        if (moveEnnemiSwordMan - moveAllyBow <= 10) {
            allytype = "bow"
            ennemydistance = 1;
            if (fightinprogress == 0) {
                startFight("bow");
            }
            clearInterval(timerEnnemiSwordMan);
        }
        moveEnnemiSwordMan = moveEnnemiSwordMan - 0.02;
    }, 10);
}
/*
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
*/
function startFight(type) {
    var audiofight = new Audio('Pack Sons/startfight.mp3');
    audiofight.loop = true;
    audiofight.play();
    fightinprogress = 1;
    console.log("fight");
    let ennemylife = parseInt($("#nbennemiSwordMan").text());
    let allylife;
    if (type == "horse") {
        allylife = parseInt($("#nballyHorse").text())
    } else if (type == "bow") {
        allylife = parseInt($("#nballyBowMan").text())
    } else {
        allylife = parseInt($("#nballySwordMan").text())
    }
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
                console.log("Type : " + type);
                if (parseInt($("#nballyHorse").text()) > 0 && moveAllyHorse > 0 && moveEnnemiSwordMan - moveAllyHorse <= 15) {
                    let timerAllyHorse = setInterval(function () {
                        $('.allyHorse').css('left', + moveAllyHorse + '%');
                        if (ennemybase - moveAllyHorse <= 15) {
                            startFightEnnemyBase("horse");
                            clearInterval(timerAllyHorse);
                        }
                        if (moveEnnemiSwordMan - moveAllyHorse <= 15) {
                            if (fightinprogress == 0) {
                                startFight("horse");
                            }
                            clearInterval(timerAllyHorse);
                        } else {
                            moveAllyHorse = moveAllyHorse + 0.06;
                        }
                    }, 10);
                }
                if (parseInt($("#nballyBowMan").text()) > 0 && moveAllyBow > 0 && moveEnnemiSwordMan - moveAllyBow <= 30) {
                    let timerAllyBow = setInterval(function () {
                        $('.allyBowMan').css('left', + moveAllyBow + '%');
                        if (ennemybase - moveAllyBow <= 30) {
                            startFightEnnemyBase("bow");
                            clearInterval(timerAllyBow);
                        }
                        if (moveEnnemiSwordMan - moveAllyBow <= 30) {
                            if (fightinprogress == 0) {
                                startFight("bow");
                            }
                            clearInterval(timerAllyBow);
                        } else {
                            moveAllyBow = moveAllyBow + 0.02;
                        }
                    }, 10);
                }
                if (parseInt($("#nballySwordMan").text()) > 0 && moveAllySwordMan > 0 && moveEnnemiSwordMan - moveAllySwordMan <= 10 ) {
                    let timerAllySwordMan = setInterval(function () {
                        $('.allySwordMan').css('left', + moveAllySwordMan + '%');
                        if (ennemybase - moveAllySwordMan <= 10) {
                            startFightEnnemyBase("sword");
                            clearInterval(timerAllySwordMan);
                        }
                        if (moveEnnemiSwordMan - moveAllySwordMan <= 10) {
                            if (fightinprogress == 0) {
                                startFight("sword");
                            }
                            clearInterval(timerAllySwordMan);
                        } else {
                            moveAllySwordMan = moveAllySwordMan + 0.02;
                        }
                    }, 10);
                }
                moveEnnemiSwordMan = 294;
                clearInterval(fight);
            }
            $("#nbennemiSwordMan").text(ennemylife + " Soldats")
        }, 1500);
        setTimeout(() => {
            if (ennemylife > 0 && ennemydistance == 1) {
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
                console.log(allylife);
                var audio = new Audio('Pack Sons/swordhit.wav');
                audio.play();
                audiofight.pause();
                audiofight.currentTime = 0;
                fightinprogress = 0;
                if (type == "horse") {
                    $("#nballyHorse").remove();
                    $("#allyHorse").remove();
                    moveAllyHorse = 0;
                } else if (type == "bow") {
                    $("#nballyBowMan").remove();
                    $("#allyBowMan").remove();
                    moveAllyBow = 0;
                } else {
                    $("#nballySwordMan").remove();
                    $("#allySwordMan").remove();
                    moveAllySwordMan = 0;
                }
                let timerEnnemiSwordMan = setInterval(function () {
                    ennemydistance = 0;
                    $('.ennemiSwordMan').css('left', + moveEnnemiSwordMan + '%');
                    moveEnnemiSwordMan = moveEnnemiSwordMan - 0.02;
                    if (moveEnnemiSwordMan - allybase <= 10) {
                        startFightAllyBase("sword");
                        clearInterval(timerEnnemiSwordMan);
                    }
                    if (moveEnnemiSwordMan - moveAllySwordMan <= 10) {
                        ennemydistance = 1;
                        if (fightinprogress == 0) {
                            startFight("sword");
                        }
                        clearInterval(timerEnnemiSwordMan);
                    }
                    if (moveEnnemiSwordMan - moveAllyHorse <= 10) {
                        ennemydistance = 1;
                        if (fightinprogress == 0) {
                            startFight("horse");
                        }
                        clearInterval(timerEnnemiSwordMan);
                    }
                    if (moveEnnemiSwordMan - moveAllyBow <= 10) {
                        ennemydistance = 1;
                        if (fightinprogress == 0) {
                            startFight("bow");
                        }
                        clearInterval(timerEnnemiSwordMan);
                    }
                }, 10);
                clearInterval(fight);
            }
            if (type == "horse") {
                $("#nballyHorse").text(allylife + " Cavaliers")
            } else if (type == "bow") {
                $("#nballyBowMan").text(allylife + " Archers")
            } else {
                $("#nballySwordMan").text(allylife + " Soldats")
            }
            
        }, 3000);
    }, 4000);
}

function startFightEnnemyBase(type) {
    var audiofight2 = new Audio('Pack Sons/startfight.mp3');
    audiofight2.loop = true;
    audiofight2.play();
    let ennemybaselife = $(".EnnemyLifejs").text();
    ennemybasefight = setInterval(() => {
        console.log("fightinprogress : " + fightinprogress);
        if ($(".EnnemyLifejs").text() <= 0) {
            $("#Win").modal("show");
            clearInterval(ennemybasefight);
        }
        if (type == "horse") {
            console.log("horse base");
            if (moveAllyHorse <= 0 || fightinprogress == 1) {
                console.log("horse base stop");
                audiofight2.pause();
                audiofight2.currentTime = 0;
                clearInterval(ennemybasefight);
            } else {
                ennemybaselife = parseInt($(".EnnemyLifejs").text()) - (getRandomInt(20) + 10);
                $(".EnnemyLifejs").text(ennemybaselife);
                $(".EnnemyLifejs").css("width", ennemybaselife / 10 + "%");
            }
        } else if (type == "bow") {
            console.log("bow base");
            if (moveAllyBow <= 0 || fightinprogress == 1) {
                console.log("bow base stop");
                audiofight2.pause();
                audiofight2.currentTime = 0;
                clearInterval(ennemybasefight);
            } else {
                ennemybaselife = parseInt($(".EnnemyLifejs").text()) - (getRandomInt(20) + 10);
                $(".EnnemyLifejs").text(ennemybaselife);
                $(".EnnemyLifejs").css("width", ennemybaselife / 10 + "%");
            }
        } else {
            console.log("sword base");
            if (moveAllySwordMan <= 0 || fightinprogress == 1) {
                console.log("sword base stop");
                audiofight2.pause();
                audiofight2.currentTime = 0;
                clearInterval(ennemybasefight);
            } else {
                ennemybaselife = parseInt($(".EnnemyLifejs").text()) - (getRandomInt(20) + 10);
                $(".EnnemyLifejs").text(ennemybaselife);
                $(".EnnemyLifejs").css("width", ennemybaselife / 10 + "%");
            }
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