let Bois, Or, Nourriture;
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

if (localStorage.getItem("Bois") == null) {
    localStorage.setItem("Bois", 50);
    localStorage.setItem("Or", 100);
    localStorage.setItem("Nourriture", 100);
    updateNav();
}

updateRessources();

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
    updateNav();
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
    updateNav();
}

function updateNav() {
    $("#WoodNav").val(parseInt(Bois));
    $("#GoldNav").val(parseInt(Or));
    $("#FoodNav").val(parseInt(Nourriture));
    //$("#TimeNav").val(Bois);
}

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
});

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

function caserneBuild() {
    var caserneBuilding = setInterval(() => {
        console.log("Progress : " + caserneProgress);
        console.log(caserneProgress / caserneTime);
        caserneProgress++;
        $("#caserneBuild").css("opacity", caserneProgress / caserneTime)
        if (caserneProgress >= caserneTime) {
            console.log("Caserne Finish");
            clearInterval(caserneBuilding);
        }
    }, 1000);
}
function archerieBuild() {
    var archerieBuilding = setInterval(() => {
        console.log("Progress : " + archerieProgress);
        console.log(archerieProgress / archerieTime);
        archerieProgress++;
        $("#archerieBuild").css("opacity", archerieProgress / archerieTime)
        if (archerieProgress >= archerieTime) {
            console.log("archerie Finish");
            clearInterval(archerieBuilding);
        }
    }, 1000);
}
function fermeBuild() {
    var fermeBuilding = setInterval(() => {
        console.log("Progress : " + fermeProgress);
        console.log(fermeProgress / fermeTime);
        fermeProgress++;
        $("#fermeBuild").css("opacity", fermeProgress / fermeTime)
        if (fermeProgress >= fermeTime) {
            console.log("ferme Finish");
            clearInterval(fermeBuilding);
        }
    }, 1000);
}
function ecurieBuild() {
    var ecurieBuilding = setInterval(() => {
        console.log("Progress : " + ecurieProgress);
        console.log(ecurieProgress / ecurieTime);
        ecurieProgress++;
        $("#ecurieBuild").css("opacity", ecurieProgress / ecurieTime)
        if (ecurieProgress >= ecurieTime) {
            console.log("ecurie Finish");
            clearInterval(ecurieBuilding);
        }
    }, 1000);
}
function mineBuild() {
    var mineBuilding = setInterval(() => {
        console.log("Progress : " + mineProgress);
        console.log(mineProgress / mineTime);
        mineProgress++;
        $("#mineBuild").css("opacity", mineProgress / mineTime)
        if (mineProgress >= mineTime) {
            console.log("mine Finish");
            clearInterval(mineBuilding);
        }
    }, 1000);
}
function bucheronBuild() {
    var bucheronBuilding = setInterval(() => {
        console.log("Progress : " + bucheronProgress);
        console.log(bucheronProgress / bucheronTime);
        bucheronProgress++;
        $("#bucheronBuild").css("opacity", bucheronProgress / bucheronTime)
        if (bucheronProgress >= bucheronTime) {
            console.log("bucheron Finish");
            clearInterval(bucheronBuilding);
        }
    }, 1000);
}

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
}