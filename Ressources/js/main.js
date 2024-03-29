let Bois, Or, Nourriture, Unites;
let caserneProgress = 0;
let caserneTime = 60;
let archerieProgress = 0;
let archerieTime = 60;
let mineProgress = 0;
let mineTime = 60;
let bucheronProgress = 0;
let bucheronTime = 60;
let fermeProgress = 0;
let fermeTime = 60;
let ecurieProgress = 0;
let ecurieTime = 60;
let timerSecondes = 0;
let timerMinutes = 30;
let audioplay = 0;
let audioplay2 = 0;
let ennemyUnitsBase = 10
let MineBoost = 0;
let FermeBoost = 0;
let BucheronBoost = 0;

/**
 * Fonction génération nombres aléatoire
 * @param {*} max 
 * @returns 
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

$(document).ready(function () {
    $('#Bienvenue').modal({ backdrop: 'static', keyboard: false })
    $("#Bienvenue").modal("show");
});

/**
 * Lancement des compteurs et générations de ressources
 */
$("#startbutton").click(function (e) {
    updateRessources();
    startTimer();
    Ressources();
    unitsRessources();
    saveBuildProgress();
    setTimeout(() => {
        ennemyAttack();
    }, 5000);
});

/**
 * Si aucune valeur dans le stockage initialisé les valeurs
 */
if (localStorage.getItem("Bois") == null) {
    localStorage.setItem("Bois", 50);
    localStorage.setItem("Or", 50);
    localStorage.setItem("Nourriture", 50);
    localStorage.setItem("Unites", 1);
    updateNav();
}

// PARTIE UPDATE

/**
 * Si les ressources sont stocké les transposé dans le jeu
 */
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

/**
 * Sauvegarde du progrès des constructions
 */
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

/**
 * Permet sauvegardé les ressouces du jeu dans le stockage
 */
function setRessources() {
    if (Bois > 300) {
        Bois = 300
    }
    if (Or > 300) {
        Or = 300
    }
    if (Nourriture > 300) {
        Nourriture = 300
    }
    if (Unites > 200) {
        Unites = 200
    }
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

/**
 * Met à jour la navbar avec les ressources actuel
 */
function updateNav() {
    $("#WoodNav").val(parseInt(Bois) + "/300");
    $("#GoldNav").val(parseInt(Or) + "/300");
    $("#FoodNav").val(parseInt(Nourriture) + "/300");
    $("#UnitsNav").text("Unités " + parseInt(Unites) + "/200");
    //$("#TimeNav").val(Bois);
}

/**
 * Update des modals
 */
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
    if ($("#BoostNeedWood").val() == 0) {
        $("#BoostNeedWood").css("color", "white");
    } else {
        $("#BoostNeedWood").val() > Bois ? $("#BoostNeedWood").css("color", "red") : $("#BoostNeedWood").css("color", "green");
    }
    if ($("#BoostNeedGold").val() == 0) {
        $("#BoostNeedGold").css("color", "white");
    } else {
        $("#BoostNeedGold").val() > Or ? $("#BoostNeedGold").css("color", "red") : $("#BoostNeedGold").css("color", "green");
    }
    if ($("#BoostNeedFood").val() == 0) {
        $("#BoostNeedFood").css("color", "white");
    } else {
        $("#BoostNeedFood").val() > Nourriture ? $("#BoostNeedFood").css("color", "red") : $("#BoostNeedFood").css("color", "green");
    }
}

// PARTIE MODAL

$('#Caserne').click(function (e) {
    if (caserneProgress == 0) {
        $("#BuyTitle").text("Caserne")
        $("#BuildButton").attr("name", "Caserne")
        $("#BuyDescription").text("Augmente la production de troupes et permet leurs achats")
        $("#NeedWood").val(25)
        $("#NeedGold").val(25)
        $("#NeedFood").val(25)
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
        $("#NeedWood").val(25)
        $("#NeedGold").val(25)
        $("#NeedFood").val(25)
        $("#NeedTime").val("01:00")
        $("#BuyModal").modal("show");
    }
    modalUpdate();
});
$('#Or').click(function (e) {
    if (mineProgress == 0) {
        $("#BuyTitle").text("Mine d'or")
        $("#BuildButton").attr("name", "Mine")
        $("#BuyDescription").text("Augmente la production d'or")
        $("#NeedWood").val(25)
        $("#NeedGold").val(50)
        $("#NeedFood").val(25)
        $("#NeedTime").val("01:00")
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
        $("#NeedGold").val(25)
        $("#NeedFood").val(25)
        $("#NeedTime").val("01:00")
        $("#BuyModal").modal("show");
    }
    modalUpdate();
});
$('#Bucheron').click(function (e) {
    if (bucheronProgress == 0) {
        $("#BuyTitle").text("Bucheron")
        $("#BuildButton").attr("name", "Bucheron")
        $("#BuyDescription").text("Augmente la production de bois")
        $("#NeedWood").val(50)
        $("#NeedGold").val(25)
        $("#NeedFood").val(25)
        $("#NeedTime").val("01:00")
        $("#BuyModal").modal("show");
    }
    modalUpdate();
});
$('#Ferme').click(function (e) {
    if (fermeProgress == 0) {
        $("#BuyTitle").text("Ferme")
        $("#BuildButton").attr("name", "Ferme")
        $("#BuyDescription").text("Augmente la production de nourritures")
        $("#NeedWood").val(25)
        $("#NeedGold").val(25)
        $("#NeedFood").val(50)
        $("#NeedTime").val("01:00")
        $("#BuyModal").modal("show");
    }
    modalUpdate();
});

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

/**
 * Boost un batiment de production
 * @param {*} batiment 
 */
function BoostBuilding(batiment) {
    if (parseInt($("#BoostNeedWood").val()) <= parseInt($("#WoodNav").val()) && parseInt($("#BoostNeedGold").val()) <= parseInt($("#GoldNav").val()) && parseInt($("#BoostNeedFood").val()) <= parseInt($("#FoodNav").val())) {
        Bois = parseInt(Bois) - $("#BoostNeedWood").val();
        Or = parseInt(Or) - $("#BoostNeedGold").val();
        Nourriture = parseInt(Nourriture) - $("#BoostNeedFood").val();
        setRessources();
        console.log("Batiment : " + batiment);
        switch (batiment) {
            case "Bucheron":
                boostBucheron();
                break;
            case "Ferme":
                boostFerme();
                break;
            case "Mine":
                boostMine();
                break;
            default:
                break;
        }
        $("#BoostModal").modal("hide");
    } else {
        alert("Ressources Insuffisantes");
        console.log($("#BoostNeedWood").val());
        console.log($("#WoodNav").val());
        console.log($("#BoostNeedGold").val());
        console.log($("#GoldNav").val());
        console.log($("#BoostNeedFood").val());
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
            if (BucheronBoost == 1) {
                Bois = Bois + 1;
            }
            setRessources();
            updateNav();
        }
        if (Or < 300) {
            (mineProgress >= mineTime) ? Or = parseInt(Or) + 2 : Or = parseInt(Or) + 1;
            if (MineBoost == 1) {
                Or = Or + 1;
            }
            setRessources();
            updateNav();
        }
        if (Nourriture < 300) {
            (fermeProgress >= fermeTime) ? Nourriture = parseInt(Nourriture) + 2 : Nourriture = parseInt(Nourriture) + 1;
            if (FermeBoost == 1) {
                Nourriture = Nourriture + 1;
            }
            setRessources();
            updateNav();
        }
        modalUpdate();
    }, 8000);
}
function unitsRessources() {
    setInterval(() => {
        if (Unites < 200) {
            (caserneProgress >= caserneTime) ? Unites = parseInt(Unites) + 2 : Unites = parseInt(Unites) + 1;
            $("#SoldatsRange").attr("max", Unites);
            setRessources();
            updateNav();
        }
    }, 12000);
}

$(".Base1").click(function (e) {
    e.preventDefault();
    var audio = new Audio('Pack Sons/base.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Chateau Bleu.png");
    $("#btn1").css("display", "")
    $("#btn2").css("display", "")
    $("#btn1").attr("onclick", "recrutUnit()")
    $("#btn1text").text("Recruter des unités")
    $("#btn2").attr("onclick", "retourMenu()")
    $("#btn2text").text("Retour au menu")
});

$("#caserneBuild").click(function (e) { //Etape 1 soldat
    e.preventDefault();
    var audio = new Audio('Pack Sons/caserne.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Barracks.png");
    if (caserneProgress >= caserneTime) {
        $("#btn1").css("display", "")
        $("#btn2").css("display", "")
        $("#btn1").attr("onclick", "lancerAttackSoldat()")
        $("#btn1text").text("Lancer une attaque")
        $("#btn2").attr("onclick", "retourMenu()")
        $("#btn2text").text("Retour au menu")
    } else {
        $("#btn1").css("display", "none")
        $("#btn2").css("display", "none")
    }

});

$("#archerieBuild").click(function (e) { //Etape 1 Archer
    e.preventDefault();
    var audio = new Audio('Pack Sons/archerie.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Archery.png");
    if (archerieProgress >= archerieTime) {
        $("#btn1").css("display", "")
        $("#btn2").css("display", "")
        $("#btn1").attr("onclick", "lancerAttackArcher()")
        $("#btn1text").text("Lancer une attaque")
        $("#btn2").attr("onclick", "retourMenu()")
        $("#btn2text").text("Retour au menu")
    } else {
        $("#btn1").css("display", "none")
        $("#btn2").css("display", "none")
    }
});
$("#ecurieBuild").click(function (e) { //Etape 1 Cavalier
    e.preventDefault();
    var audio = new Audio('Pack Sons/ecurie.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Stable.png");
    if (ecurieProgress >= ecurieTime) {
        $("#btn1").css("display", "")
        $("#btn2").css("display", "")
        $("#btn1").attr("onclick", "lancerAttackCavalier()")
        $("#btn1text").text("Lancer une attaque")
        $("#btn2").attr("onclick", "retourMenu()")
        $("#btn2text").text("Retour au menu")
    } else {
        $("#btn1").css("display", "none")
        $("#btn2").css("display", "none")
    }
});

$("#mineBuild").click(function (e) {
    e.preventDefault();
    var audio = new Audio('Pack Sons/mine.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Gold_mine.png");
    if (mineProgress >= mineTime) {
        $("#btn1").css("display", "");
        $("#btn2").css("display", "");
        $("#BoostNeedGold").val(15);
        $("#BoostNeedFood").val(15);
        $("#BoostNeedWood").val(15);
        $("#BoostTitle").text("Production Mine d'or");
        $("#BoostDescription").text("Permet d'obtenir un boost de production d'or pendant le temps indiqué")
        $("#BoostButton").attr("name", "Mine")
        $("#BoostButton").attr("onclick", "BoostBuilding(this.name)")
        $("#btn1").attr("onclick", "boostModal()");
        $("#btn1text").text("Booster la production");
        $("#btn2").attr("onclick", "buyRessources()");
        $("#btn2text").text("Acheter");
    } else {
        $("#btn1").css("display", "none");
        $("#btn2").css("display", "none");
    }
});
$("#fermeBuild").click(function (e) {
    e.preventDefault();
    var audio = new Audio('Pack Sons/ferme.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Mill.png");
    if (fermeProgress >= fermeTime) {
        $("#btn1").css("display", "")
        $("#btn2").css("display", "")
        $("#BoostNeedGold").val(15);
        $("#BoostNeedFood").val(15);
        $("#BoostNeedWood").val(15);
        $("#BoostTitle").text("Production Ferme");
        $("#BoostDescription").text("Permet d'obtenir un boost de production de nourritures pendant le temps indiqué")
        $("#BoostButton").attr("name", "Ferme")
        $("#BoostButton").attr("onclick", "BoostBuilding(this.name)")
        $("#btn1").attr("onclick", "boostModal()");
        $("#btn1text").text("Booster la production");
        $("#btn2").attr("onclick", "sellFood()");
        $("#btn2text").text("Vendre");
    } else {
        $("#btn1").css("display", "none")
        $("#btn2").css("display", "none")
    }
});
$("#bucheronBuild").click(function (e) {
    e.preventDefault();
    var audio = new Audio('Pack Sons/bucheron.mp3');
    audio.play();
    $("#SelectImg").attr("src", "Pack Images/Lumberjack.png");
    if (bucheronProgress >= bucheronTime) {
        $("#btn1").css("display", "")
        $("#btn2").css("display", "")
        $("#BoostNeedGold").val(15);
        $("#BoostNeedFood").val(15);
        $("#BoostNeedWood").val(15);
        $("#BoostTitle").text("Production Bucheron");
        $("#BoostDescription").text("Permet d'obtenir un boost de production de bois pendant le temps indiqué")
        $("#BoostButton").attr("name", "Bucheron")
        $("#BoostButton").attr("onclick", "BoostBuilding(this.name)")
        $("#btn1").attr("onclick", "boostModal()");
        $("#btn1text").text("Booster la production");
        $("#btn2").attr("onclick", "sellWood()");
        $("#btn2text").text("Vendre");
    } else {
        $("#btn1").css("display", "none")
        $("#btn2").css("display", "none")
    }
});


function buyRessources() {
    $("#BuyRessourcesModal").modal("show");
}

function sellWood() {
    $("#SellWoodModal").modal("show");
}

function sellFood() {
    $("#SellFoodModal").modal("show");
}

function nbSellWood(nb) {
    $("#nbGoldWood").text(nb + " Or");
    $("#NeedWoodSell").val(nb);
    if (Bois >= nb) {
        $("#NeedWoodSell").css("color", "green");
    } else {
        $("#NeedWoodSell").css("color", "red");
    }
}

function nbSellFood(nb) {
    $("#nbGoldFood").text(nb + " Or");
    $("#NeedFoodSell").val(nb);
    if (Nourriture >= nb) {
        $("#NeedFoodSell").css("color", "green");
    } else {
        $("#NeedFoodSell").css("color", "red");
    }
}

$("#SellWood").click(function (e) { 
    e.preventDefault();
    if (Bois >= $("#NeedWoodSell").val()) {
        Bois = Bois - $("#NeedWoodSell").val();
        Or = Or + parseInt($("#nbGoldWood").text());
        setRessources();
        updateNav();
        $("#SellWoodModal").modal("hide");
    }
});

$("#SellFood").click(function (e) { 
    e.preventDefault();
    if (Nourriture >= $("#NeedFoodSell").val()) {
        Nourriture = Nourriture - $("#NeedFoodSell").val();
        Or = Or + parseInt($("#nbGoldFood").text());
        setRessources();
        updateNav();
        $("#SellFoodModal").modal("hide");
    }
});

$("#BuyRessources").click(function (e) { 
    e.preventDefault();
    if (Or >=  $("#BuyGoldNeed").val() ){
        Or = Or - $("#BuyGoldNeed").val();
        Bois = Bois + parseInt(WoodBuy);
        Nourriture = Nourriture + parseInt(FoodBuy);
        setRessources()
        updateNav()
        $("#BuyRessourcesModal").modal("hide");
    }
});

let WoodBuy = 0;
let FoodBuy = 0;

function nbWoodBuy(nb) {
    WoodBuy = nb;
    $("#nbWoodBuy").text(nb + " Bois");
    $("#BuyGoldNeed").val(parseInt(FoodBuy) + parseInt(WoodBuy));
    if (Or >= $("#BuyGoldNeed").val()) {
        $("#BuyGoldNeed").css("color", "green");
    } else {
        $("#BuyGoldNeed").css("color", "red");
    }
}

function nbFoodBuy(nb) {
    FoodBuy = nb;
    $("#nbFoodBuy").text(nb + " Nourritures");
    $("#BuyGoldNeed").val(parseInt(FoodBuy) + parseInt(WoodBuy));
    if (Or >= $("#BuyGoldNeed").val()) {
        $("#BuyGoldNeed").css("color", "green");
    } else {
        $("#BuyGoldNeed").css("color", "red");
    }
}

$("#SellWood").click(function (e) { 
    e.preventDefault();
    
});

function boostMine() {
    if (MineBoost == 0 ) {
        MineBoost = 1;
        setTimeout(() => {
            MineBoost = 0;
        }, 60000);
        $("#BoostModal").modal("hide");
    }
}
function boostFerme() {
    if (FermeBoost == 0) {
        FermeBoost = 1;
        setTimeout(() => {
            FermeBoost = 0;
        }, 60000);
        $("#BoostModal").modal("hide");
    }
}
function boostBucheron() {
    if (BucheronBoost == 0) {
        BucheronBoost = 1;
        setTimeout(() => {
            BucheronBoost = 0;
        }, 60000);
        $("#BoostModal").modal("hide");
    }
}

function boostModal() {
    modalUpdate();
    $("#BoostModal").modal("show");
}

function retourMenu() {
    $("#AbandonModal").modal("show");
}

$("#winbutton").click(function (e) {
    e.preventDefault();
    cleardata();
    redirectIndex();
});
$("#losebutton").click(function (e) {
    e.preventDefault();
    cleardata();
    redirectIndex();
});

function redirectIndex() {
    window.location.href = "index.html";
}

$("#htmlmain").click(function () {
    if (audioplay == 0) {
        var audio = new Audio('Pack Sons/ambiant.mp3');
        audio.loop = true
        audio.play();
        audioplay = 1
    }
});

function lancerAttackSoldat() { //Etape 2 soldat
    $("#SoldatsRange").attr("max", Unites);
    $("#nbSoldats").text("0 Soldats")
    $("#SoldatsRange").val(0);
    $("#AttackSoldat").modal("show");
}

function lancerAttackArcher() { //Etape 2 Archer
    $("#ArcherRange").attr("max", Unites);
    $("#nbArcher").text("0 Archer")
    $("#ArcherRange").val(0);
    $("#AttackArcher").modal("show");
}

function lancerAttackCavalier() { //Etape 2 Cavalier
    $("#CavalierRange").attr("max", Unites);
    $("#nbCavalier").text("0 Cavalier")
    $("#CavalierRange").val(0);
    $("#AttackCavalier").modal("show");
}

function recrutUnit() {
    $("#SoldatsRangeRecrut").attr("max", 200);
    $("#nbSoldatsRecrut").text("0 Soldats")
    $("#NeedGoldRecrut").val(0);
    $("#NeedFoodRecrut").val(0);
    $("#SoldatsRangeRecrut").val(0);
    $("#RecrutModal").modal("show");
}

function nbSoldats(nb) { //Etape 4 Soldat
    $("#nbSoldats").text(nb + " Soldats");
}
function nbSoldatsRecrut(nb) {
    $("#nbSoldatsRecrut").text(nb + " Soldats");
    $("#NeedGoldRecrut").val(nb);
    if (Or >= $("#NeedGoldRecrut").val()) {
        $("#NeedGoldRecrut").css("color", "green");
    } else {
        $("#NeedGoldRecrut").css("color", "red");
    }
    if (Nourriture >= $("#NeedFoodRecrut").val()) {
        $("#NeedFoodRecrut").css("color", "green");
    } else {
        $("#NeedFoodRecrut").css("color", "red");
    }
    $("#NeedFoodRecrut").val(nb);
}

function nbArcher(nb) { //Etape 4 Archer
    $("#nbArcher").text(nb + " Archer");
}
function nbArcherRecrut(nb) {
    $("#nbArcherRecrut").text(nb + " Archer");
    $("#NeedGoldRecrut").val(nb);
    if (Or >= $("#NeedGoldRecrut").val()) {
        $("#NeedGoldRecrut").css("color", "green");
    } else {
        $("#NeedGoldRecrut").css("color", "red");
    }
    if (Nourriture >= $("#NeedFoodRecrut").val()) {
        $("#NeedFoodRecrut").css("color", "green");
    } else {
        $("#NeedFoodRecrut").css("color", "red");
    }
    $("#NeedFoodRecrut").val(nb);
}

function nbCavalier(nb) { //Etape 4 Cavalier
    $("#nbCavalier").text(nb + " Cavalier");
}
function nbCavalierRecrut(nb) {
    $("#nbCavalierRecrut").text(nb + " Cavalier");
    $("#NeedGoldRecrut").val(nb);
    if (Or >= $("#NeedGoldRecrut").val()) {
        $("#NeedGoldRecrut").css("color", "green");
    } else {
        $("#NeedGoldRecrut").css("color", "red");
    }
    if (Nourriture >= $("#NeedFoodRecrut").val()) {
        $("#NeedFoodRecrut").css("color", "green");
    } else {
        $("#NeedFoodRecrut").css("color", "red");
    }
    $("#NeedFoodRecrut").val(nb);
}

$("#RecrutUnitbtn").click(function (e) {
    e.preventDefault();
    if (parseInt($("#nbSoldatsRecrut").text()) + Unites <= 200 && $("#NeedGoldRecrut").val() <= Or && $("#NeedFoodRecrut").val() <= Nourriture) {
        Unites = Unites + parseInt($("#nbSoldatsRecrut").text())
        Or = Or - $("#NeedGoldRecrut").val();
        Nourriture = Nourriture - $("#NeedFoodRecrut").val();
        $("#RecrutModal").modal("hide");
        setRessources();
        updateNav();
    }
});

$("#LancementAttaqueSoldat").click(function () { //Etape 5 soldat
    if ($("#SoldatsRange").val() > 0 && $('#allySwordMan').css('left') == null) {
        var audio = new Audio('Pack Sons/allyspawn.mp3');
        audio.play();
        Unites = Unites - $("#SoldatsRange").val();
        allySwordMan($("#SoldatsRange").val());
        setRessources();
        updateNav();
    }
    $("#AttackSoldat").modal("hide");
});

$("#LancementAttaqueArcher").click(function () { //Etape 5 Archer
    if ($("#ArcherRange").val() > 0 && $('#allyBowMan').css('left') == null) {
        var audio = new Audio('Pack Sons/allyspawn.mp3');
        audio.play();
        Unites = Unites - $("#ArcherRange").val();
        allyBowMan($("#ArcherRange").val());
        setRessources();
        updateNav();
    }
    $("#AttackArcher").modal("hide");
});

$("#LancementAttaqueCavalier").click(function () { //Etape 5 Cavalier
    if ($("#CavalierRange").val() > 0 && $('#allyHorse').css('left') == null) {
        var audio = new Audio('Pack Sons/allyspawn.mp3');
        audio.play();
        Unites = Unites - $("#CavalierRange").val();
        allyHorse($("#CavalierRange").val());
        setRessources();
        updateNav();
    }
    $("#AttackCavalier").modal("hide");
});

function ennemyAttack() {
    setInterval(() => {
        if ($('#ennemiSwordMan').css('left') == null) {
            var audio = new Audio('Pack Sons/ennemispawn.mp3');
            audio.play();
            ennemiSwordMan(parseInt(ennemyUnitsBase) + getRandomInt(15))
            ennemyUnitsBase = parseInt(ennemyUnitsBase) + 6;
        }
    }, 100000);
}
