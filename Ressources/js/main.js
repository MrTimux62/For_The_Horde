let Bois, Or, Nourriture, Unites;
let caserneProgress = 0;
let caserneTime = 100;
let archerieProgress = 0;
let archerieTime = 100;
let mineProgress = 0;
let mineTime = 100;
let bucheronProgress = 0;
let bucheronTime = 100;
let fermeProgress = 0;
let fermeTime = 100;
let ecurieProgress = 0;
let ecurieTime = 100;
let timerSecondes = 0;
let timerMinutes = 30;
let audioplay = 0;
let audioplay2 = 0;
let ennemyUnitsBase = 10

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

$(document).ready(function () {
    updateRessources();
    startTimer();
    Ressources();
    unitsRessources();
    saveBuildProgress();
    setTimeout(() => {
        ennemyAttack();
    }, 5000);
});

if (localStorage.getItem("Bois") == null) {
    localStorage.setItem("Bois", 50);
    localStorage.setItem("Or", 100);
    localStorage.setItem("Nourriture", 100);
    localStorage.setItem("Unites", 1);
    updateNav();
}

// PARTIE UPDATE

function updateRessources() {
    if (localStorage.getItem("Bois") != null) {
        Bois = localStorage.getItem("Bois");
    }
    if (localStorage.getItem("Or") != null) {
        Or = localStorage.getItem("Or");
    }
    if (localStorage.getItem("Nourriture") != null) {
        Nourriture = localStorage.getItem("Nourriture");
    }
    if (localStorage.getItem("Unites") != null) {
        Unites = localStorage.getItem("Unites");
    }
    updateNav();
}

function saveBuildProgress() {
    if (localStorage.getItem("caserneProgress") == null || localStorage.getItem("caserneProgress") == 0) {
        localStorage.setItem("caserneProgress", 0);
    } else {
        caserneProgress = localStorage.getItem("caserneProgress");
        caserneBuild();
    }
    if (localStorage.getItem("archerieProgress") == null || localStorage.getItem("archerieProgress") == 0) {
        localStorage.setItem("archerieProgress", 0);
    } else {
        archerieProgress = localStorage.getItem("archerieProgress");
        archerieBuild();
    }
    if (localStorage.getItem("bucheronProgress") == null || localStorage.getItem("bucheronProgress") == 0) {
        localStorage.setItem("bucheronProgress", 0);
    } else {
        bucheronProgress = localStorage.getItem("bucheronProgress");
        bucheronBuild();
    }
    if (localStorage.getItem("mineProgress") == null || localStorage.getItem("mineProgress") == 0) {
        localStorage.setItem("mineProgress", 0);
    } else {
        mineProgress = localStorage.getItem("mineProgress");
        mineBuild();
    }
    if (localStorage.getItem("fermeProgress") == null || localStorage.getItem("fermeProgress") == 0) {
        localStorage.setItem("fermeProgress", 0);
    } else {
        fermeProgress = localStorage.getItem("fermeProgress");
        fermeBuild();
    }
    if (localStorage.getItem("ecurieProgress") == null || localStorage.getItem("ecurieProgress") == 0) {
        localStorage.setItem("ecurieProgress", 0);
    } else {
        ecurieProgress = localStorage.getItem("ecurieProgress");
        ecurieBuild();
    }
    setInterval(() => {
        localStorage.setItem("caserneProgress", caserneProgress);
        localStorage.setItem("archerieProgress", archerieProgress);
        localStorage.setItem("bucheronProgress", bucheronProgress);
        localStorage.setItem("mineProgress", mineProgress);
        localStorage.setItem("fermeProgress", fermeProgress);
        localStorage.setItem("ecurieProgress", ecurieProgress);
    }, 1000);
}

function setRessources() {
    if (localStorage.getItem("Bois") != null) {
        localStorage.setItem("Bois", Bois)
    }
    if (localStorage.getItem("Or") != null) {
        localStorage.setItem("Or", Or)
    }
    if (localStorage.getItem("Nourriture") != null) {
        localStorage.setItem("Nourriture", Nourriture)
    }
    if (localStorage.getItem("Unites") != null) {
        localStorage.setItem("Unites", Unites)
    }
    updateNav();
}

function updateNav() {
    $("#WoodNav").val(parseInt(Bois) + "/300");
    $("#GoldNav").val(parseInt(Or) + "/300");
    $("#FoodNav").val(parseInt(Nourriture) + "/300");
    $("#UnitsNav").text("Unités " + parseInt(Unites) + "/200");
    //$("#TimeNav").val(Bois);
}

// PARTIE MODAL

$('#Caserne').click(function (e) {
    if (caserneProgress == 0) {
        $("#BuyTitle").text("Caserne")
        $("#BuildButton").attr("name", "Caserne")
        $("#BuyDescription").text("Augmente la production de troupes et permet leurs achats")
        $("#NeedWood").val(25)
        $("#NeedGold").val(100)
        $("#NeedFood").val(0)
        $("#NeedTime").val("01:40")
        $("#BuyModal").modal("show");
    }
    modalUpdate();
});
$('#Archerie').click(function (e) {
    if (archerieProgress == 0) {
        $("#BuyTitle").text("Archerie")
        $("#BuildButton").attr("name", "Archerie")
        $("#BuyDescription").text("Permet la production d'archer et donc de + d'unités")
        $("#NeedWood").val(75)
        $("#NeedGold").val(50)
        $("#NeedFood").val(75)
        $("#NeedTime").val("01:40")
        $("#BuyModal").modal("show");
    }
    modalUpdate();
});
$('#Or').click(function (e) {
    if (mineProgress == 0) {
        $("#BuyTitle").text("Mine d'or")
        $("#BuildButton").attr("name", "Mine")
        $("#BuyDescription").text("Augmente la production d'or")
        $("#NeedWood").val(75)
        $("#NeedGold").val(0)
        $("#NeedFood").val(75)
        $("#NeedTime").val("01:40")
        $("#BuyModal").modal("show");
    }
    modalUpdate();
});
$('#Ecurie').click(function (e) {
    if (ecurieProgress == 0) {
        $("#BuyTitle").text("Ecurie")
        $("#BuildButton").attr("name", "Ecurie")
        $("#BuyDescription").text("Permet la production de chevaux et donc de + d'unités")
        $("#NeedWood").val(25)
        $("#NeedGold").val(50)
        $("#NeedFood").val(75)
        $("#NeedTime").val("01:40")
        $("#BuyModal").modal("show");
    }
    modalUpdate();
});
$('#Bucheron').click(function (e) {
    if (bucheronProgress == 0) {
        $("#BuyTitle").text("Bucheron")
        $("#BuildButton").attr("name", "Bucheron")
        $("#BuyDescription").text("Augmente la production de bois")
        $("#NeedWood").val(0)
        $("#NeedGold").val(100)
        $("#NeedFood").val(50)
        $("#NeedTime").val("01:40")
        $("#BuyModal").modal("show");
    }
    modalUpdate();
});
$('#Ferme').click(function (e) {
    if (fermeProgress == 0) {
        $("#BuyTitle").text("Ferme")
        $("#BuildButton").attr("name", "Ferme")
        $("#BuyDescription").text("Augmente la production de nourritures")
        $("#NeedWood").val(50)
        $("#NeedGold").val(100)
        $("#NeedFood").val(0)
        $("#NeedTime").val("01:40")
        $("#BuyModal").modal("show");
    }
    modalUpdate();
});

function modalUpdate() {
    if ($("#NeedWood").val() == 0) {
        $("#NeedWood").css("color", "white");
    } else {
        $("#NeedWood").val() > Bois ? $("#NeedWood").css("color", "red") : $("#NeedWood").css("color", "green");
    }
    if ($("#NeedGold").val() == 0) {
        $("#NeedGold").css("color", "white");
    } else {
        $("#NeedGold").val() > Or ? $("#NeedGold").css("color", "red") : $("#NeedGold").css("color", "green");
    }
    if ($("#NeedFood").val() == 0) {
        $("#NeedFood").css("color", "white");
    } else {
        $("#NeedFood").val() > Nourriture ? $("#NeedFood").css("color", "red") : $("#NeedFood").css("color", "green");
    }
}

/**
 * Acheter un batiment
 * @param {*} batiment 
 */
function buyBuilding(batiment) {
    if (parseInt($("#NeedWood").val()) <= parseInt($("#WoodNav").val()) && parseInt($("#NeedGold").val()) <= parseInt($("#GoldNav").val()) && parseInt($("#NeedFood").val()) <= parseInt($("#FoodNav").val())) {
        Bois = parseInt(Bois) - $("#NeedWood").val();
        Or = parseInt(Or) - $("#NeedGold").val();
        Nourriture = parseInt(Nourriture) - $("#NeedFood").val();
        setRessources();
        console.log("Batiment : " + batiment);
        switch (batiment) {
            case "Caserne":
                caserneBuild();
                break;
            case "Bucheron":
                bucheronBuild();
                break;
            case "Archerie":
                archerieBuild();
                break;
            case "Ferme":
                fermeBuild();
                break;
            case "Mine":
                mineBuild();
                break;
            case "Ecurie":
                ecurieBuild();
                break;
            default:
                break;
        }
        $("#BuyModal").modal("hide");
    } else {
        alert("Ressources Insuffisantes");
        console.log($("#NeedWood").val());
        console.log($("#WoodNav").val());
        console.log($("#NeedGold").val());
        console.log($("#GoldNav").val());
        console.log($("#NeedFood").val());
        console.log($("#FoodNav").val());
    }
}

// PARTIE CONSTRUCTION

function caserneBuild() {
    $(".ProgressBarracks").css("display", "block");
    $("#caserneBuild").css("display", "block");
    var caserneBuilding = setInterval(() => {
        $("#CaserneProgressText").text("Caserne " + parseInt(caserneProgress / caserneTime * 100) + "%")
        $("#CaserneProgressBar").css("width", parseInt(caserneProgress / caserneTime * 100) + "%")
        console.log("Progress : " + caserneProgress);
        console.log(caserneProgress / caserneTime);
        caserneProgress++;
        $("#caserneBuild").css("opacity", caserneProgress / caserneTime)
        if (caserneProgress >= caserneTime) {
            console.log("Caserne Finish");
            $(".ProgressBarracks").css("display", "none");
            clearInterval(caserneBuilding);
        }
    }, 1000);
}
function archerieBuild() {
    $(".ProgressArchery").css("display", "block");
    $("#archerieBuild").css("display", "block");
    var archerieBuilding = setInterval(() => {
        $("#ArcherieProgressText").text("Archerie " + parseInt(archerieProgress / archerieTime * 100) + "%")
        $("#ArcherieProgressBar").css("width", parseInt(archerieProgress / archerieTime * 100) + "%")
        console.log("Progress : " + archerieProgress);
        console.log(archerieProgress / archerieTime);
        archerieProgress++;
        $("#archerieBuild").css("opacity", archerieProgress / archerieTime)
        if (archerieProgress >= archerieTime) {
            console.log("archerie Finish");
            $(".ProgressArchery").css("display", "none");
            clearInterval(archerieBuilding);
        }
    }, 1000);
}
function fermeBuild() {
    $(".ProgressMill").css("display", "block");
    $("#fermeBuild").css("display", "block");
    var fermeBuilding = setInterval(() => {
        $("#FermeProgressText").text("Ferme " + parseInt(fermeProgress / fermeTime * 100) + "%")
        $("#FermeProgressBar").css("width", parseInt(fermeProgress / fermeTime * 100) + "%")
        console.log("Progress : " + fermeProgress);
        console.log(fermeProgress / fermeTime);
        fermeProgress++;
        $("#fermeBuild").css("opacity", fermeProgress / fermeTime)
        if (fermeProgress >= fermeTime) {
            console.log("ferme Finish");
            $(".ProgressMill").css("display", "none");
            clearInterval(fermeBuilding);
        }
    }, 1000);
}
function ecurieBuild() {
    $(".ProgressStable").css("display", "block");
    $("#ecurieBuild").css("display", "block");
    var ecurieBuilding = setInterval(() => {
        $("#EcurieProgressText").text("Ecurie " + parseInt(ecurieProgress / ecurieTime * 100) + "%")
        $("#EcurieProgressBar").css("width", parseInt(ecurieProgress / ecurieTime * 100) + "%")
        console.log("Progress : " + ecurieProgress);
        console.log(ecurieProgress / ecurieTime);
        ecurieProgress++;
        $("#ecurieBuild").css("opacity", ecurieProgress / ecurieTime)
        if (ecurieProgress >= ecurieTime) {
            $(".ProgressStable").css("display", "none");
            console.log("ecurie Finish");
            clearInterval(ecurieBuilding);
        }
    }, 1000);
}
function mineBuild() {
    $(".ProgressGold_mine").css("display", "block");
    $("#mineBuild").css("display", "block");
    var mineBuilding = setInterval(() => {
        $("#MineProgressText").text("Mine " + parseInt(mineProgress / mineTime * 100) + "%")
        $("#MineProgressBar").css("width", parseInt(mineProgress / mineTime * 100) + "%")
        console.log("Progress : " + mineProgress);
        console.log(mineProgress / mineTime);
        mineProgress++;
        $("#mineBuild").css("opacity", mineProgress / mineTime)
        if (mineProgress >= mineTime) {
            $(".ProgressGold_mine").css("display", "none");
            console.log("mine Finish");
            clearInterval(mineBuilding);
        }
    }, 1000);
}
function bucheronBuild() {
    $(".ProgressLumberjack").css("display", "block");
    $("#bucheronBuild").css("display", "block");
    var bucheronBuilding = setInterval(() => {
        $("#BucheronProgressText").text("Bucheron " + parseInt(bucheronProgress / bucheronTime * 100) + "%")
        $("#BucheronProgressBar").css("width", parseInt(bucheronProgress / bucheronTime * 100) + "%")
        console.log("Progress : " + bucheronProgress);
        console.log(bucheronProgress / bucheronTime);
        bucheronProgress++;
        $("#bucheronBuild").css("opacity", bucheronProgress / bucheronTime)
        if (bucheronProgress >= bucheronTime) {
            $(".ProgressLumberjack").css("display", "none");
            console.log("bucheron Finish");
            clearInterval(bucheronBuilding);
        }
    }, 1000);
}

// PARTIE TEST

function giveWood() {
    Bois = parseInt(Bois) + 50;
    setRessources()
    updateNav()
}

function giveGold() {
    Or = parseInt(Or) + 50;
    setRessources()
    updateNav()
}

function giveFood() {
    Nourriture = parseInt(Nourriture) + 50;
    setRessources()
    updateNav()
}

function cleardata() {
    localStorage.clear()
    timerSecondes = 0;
    timerMinutes = 30;
    document.location.reload();
}

// PARTIE GENERATION

/**
 * Compte à rebours
 */
function startTimer() {
    if (localStorage.getItem("timerSecondes") != null) {
        timerSecondes = localStorage.getItem("timerSecondes");
        timerMinutes = localStorage.getItem("timerMinutes");
        $("#TimeNav").val(timerMinutes + ":" + timerSecondes);
    }
    var CompteaRebour = setInterval(() => {
        if (timerSecondes <= 0) {
            timerMinutes--;
            timerSecondes = 59;
        } else {
            timerSecondes--;
        }
        if (timerSecondes < 10) {
            $("#TimeNav").val(timerMinutes + ":0" + timerSecondes);
        } else {
            $("#TimeNav").val(timerMinutes + ":" + timerSecondes);
        }
        localStorage.setItem("timerMinutes", parseInt(timerMinutes));
        localStorage.setItem("timerSecondes", parseInt(timerSecondes));
        if (timerMinutes <= 0 && timerSecondes <= 0) {
            clearInterval(CompteaRebour);
        }
    }, 1000);
}

/**
 * Génération des ressources
 */
function Ressources() {
    setInterval(() => {
        if (Bois < 300) {
            (bucheronProgress >= bucheronTime) ? Bois = parseInt(Bois) + 2 : Bois = parseInt(Bois) + 1;
            setRessources();
            updateNav();
        }
        if (Or < 300) {
            (mineProgress >= mineTime) ? Or = parseInt(Or) + 2 : Or = parseInt(Or) + 1;
            setRessources();
            updateNav();
        }
        if (Nourriture < 300) {
            (fermeProgress >= fermeTime) ? Nourriture = parseInt(Nourriture) + 2 : Nourriture = parseInt(Nourriture) + 1;
            setRessources();
            updateNav();
        }
        modalUpdate();
    }, 3000);
}
function unitsRessources() {
    setInterval(() => {
        if (Unites < 200) {
            (caserneProgress >= caserneTime) ? Unites = parseInt(Unites) + 2 : Unites = parseInt(Unites) + 1;
            $("#SoldatsRange").attr("max", Unites);
            setRessources();
            updateNav();
        }
    }, 8000);
}

$(".Base1").click(function (e) {
    e.preventDefault();
    var audio = new Audio('Pack Sons/base.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Chateau Bleu.png");
});

$("#caserneBuild").click(function (e) {
    e.preventDefault();
    var audio = new Audio('Pack Sons/caserne.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Barracks.png");
});
$("#archerieBuild").click(function (e) {
    e.preventDefault();
    var audio = new Audio('Pack Sons/archerie.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Archery.png");
});
$("#mineBuild").click(function (e) {
    e.preventDefault();
    var audio = new Audio('Pack Sons/mine.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Gold_mine.png");
});
$("#ecurieBuild").click(function (e) {
    e.preventDefault();
    var audio = new Audio('Pack Sons/ecurie.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Stable.png");
});
$("#fermeBuild").click(function (e) {
    e.preventDefault();
    var audio = new Audio('Pack Sons/ferme.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Mill.png");
});
$("#bucheronBuild").click(function (e) {
    e.preventDefault();
    var audio = new Audio('Pack Sons/bucheron.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Lumberjack.png");
});


$("#btn2").click(function (e) {
    e.preventDefault();
    $("#AbandonModal").modal("show");
});

function redirectIndex() {
    window.location.href = "index.html";
}


// PARTIE MUSIQUE AMBIANCE

$("#htmlmain").click(function (e) {
    if (audioplay == 0) {
        var audio = new Audio('Pack Sons/ambiant.mp3');
        audio.loop = true
        audio.play();
        audioplay = 1
    }
});

$("#btn1").click(function (e) {
    e.preventDefault();
    $("#SoldatsRange").attr("max", Unites);
    $("#AttackModal").modal("show");
});

function nbSoldats(nb) {
    $("#nbSoldats").text(nb + " Soldats")
}

$("#LancementAttaque").click(function (e) {
    if ($("#SoldatsRange").val() > 0 && $('#allySwordMan').css('left') == null) {
        Unites = Unites - $("#SoldatsRange").val();
        allySwordMan($("#SoldatsRange").val());
        setRessources();
        updateNav();
    }
    $("#AttackModal").modal("hide");
});

function ennemyAttack() {
    setInterval(() => {
        if ($('#ennemiSwordMan').css('left') == null) {
            ennemiSwordMan(parseInt(ennemyUnitsBase) + getRandomInt(15))
            ennemyUnitsBase = ennemyUnitsBase + 10;
        }
    }, 90000);
}