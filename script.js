let textbox = document.getElementById("searchtext");
let iconbox = document.getElementById("icon-box");
let lastSeen;

// TEXTBOX FUNCTIONALITY
textbox.addEventListener("input", check);


const champions = [
    "aatrox", "ahri", "akali", "akshan", "alistar", "ambessa", "amumu", "anivia", "annie", "aphelios",
    "ashe", "aurelionsol", "aurora", "azir", "bard", "belveth", "blitzcrank", "brand", "braum", "briar",
    "caitlyn", "camille", "cassiopeia", "chogath", "corki", "darius", "diana", "drmundo", "draven",
    "ekko", "elise", "evelynn", "ezreal", "fiddlesticks", "fiora", "fizz", "galio", "gangplank",
    "garen", "gnar", "gragas", "graves", "gwen", "hecarim", "heimerdinger", "hwei", "illaoi", "irelia",
    "ivern", "janna", "jarvaniv", "jax", "jayce", "jhin", "jinx", "ksante", "kaisa", "kalista",
    "karma", "karthus", "kassadin", "katarina", "kayle", "kayn", "kennen", "khazix", "kindred",
    "kled", "kogmaw", "leblanc", "leesin", "leona", "lillia", "lissandra", "lucian", "lulu",
    "lux", "malphite", "malzahar", "maokai", "masteryi", "milio", "mel", "missfortune", "mordekaiser", "morgana",
    "naafiri", "nami", "nasus", "nautilus", "neeko", "nidalee", "nilah", "nocturne", "nunu",
    "olaf", "orianna", "ornn", "pantheon", "poppy", "pyke", "qiyana", "quinn", "rakan", "rammus",
    "reksai", "rell", "renataglasc", "renekton", "rengar", "riven", "rumble", "ryze", "samira",
    "sejuani", "senna", "seraphine", "sett", "shaco", "shen", "shyvana", "singed", "sion", "sivir",
    "skarner", "smolder", "sona", "soraka", "swain", "sylas", "syndra", "tahmkench", "taliyah", "talon",
    "taric", "teemo", "thresh", "tristana", "trundle", "tryndamere", "twistedfate", "twitch",
    "udyr", "urgot", "varus", "vayne", "veigar", "velkoz", "vex", "vi", "viego", "viktor", "vladimir",
    "volibear", "warwick", "wukong", "xerath", "xayah", "xinzhao", "yasuo", "yone", "yorick", "yunara", "yuumi",
    "zac", "zed", "zeri", "ziggs", "zilean", "zoe", "zyra"
  ];


function check() {
    let text = textbox.value.toLowerCase().replaceAll("'", "").replaceAll(" ","").replaceAll(".", "");

    if (textbox.value == "") {
        disappear(lastSeen);
    }

    if (text.includes("jarvan")) {
        text = "jarvaniv";
    }

    if (text.includes("nunu")) {
        text = "nunu";
    }

    if (text.includes("renata")) {
        text = "renataglasc";
    }
 
    if (champions.includes(text)) {
        let champion = document.getElementById(`${text}`);
        if (lastSeen) {
            disappear(lastSeen);
        }
        appear(champion);
        lastSeen = champion;
    }


}


function appear(champion) {
    champion.style.height = "1500px";
    champion.style.transition = "height 0.5s ease 0.2s";
    iconbox.style.borderBottomWidth = "1px";
    iconbox.style.transition = "border-bottom-width 0.5s ease 0.2s";
}


function disappear(champion) {
    champion.style.height = "0px";
    champion.style.transition = "height 0.2s";
    iconbox.style.borderBottomWidth = "0px";
    iconbox.style.transition = "border-bottom-width 0.1s";
}

// IMAGE FUNCTIONALITY

const images = document.querySelectorAll('.champ-icon');

images.forEach(image => {
    image.addEventListener("click", (e) => {
        textbox.value = e.target.alt;
        check();
    })
})



