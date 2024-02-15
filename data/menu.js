const data = [{
    Day : "Monday",
    Date: "12 FEB 2023",
    B: ["POHA","SEV","CUT ONION LEMON", "KINU",],
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "HONEY DEW",],
    L: ["GREEN SALAD", "SOYA CHILLI", "PALAK CORN", "MOONG DAL TADKA", "CHAPATI", "PLAIN RICE", "SAMBAR", "MASALA CHHAAS"],
    // D: ["GREEN SALAD", "VADA", "SAMBHAR", "MASALA DOSA", "TAMRIND RICE", "COCONUT CHUTNEY", "VEG MANCHOW SOUP"],
    D: ["MIRCH KE TAPOREY/ LAHSUN CHUTNEY", "ALOO RASSA", "DAL FRY", "BATI/ CHAPATI", "PLAIN RICE", "RASAM", "CHOORMA"]
    // D: ["GREEN SALAD", "METHI MUTTER", "DAL LAHSUNI", "CHAPATI", "PLAIN RICE","RASAM", "VEG MANCHOW"]
},
{
    Day : "Tuesday",
    Date : "13 FEB 2023",
    // B: ["ALOO PARATHA","CURD","PICKLE", "KINO",],
    B: ["METHI PARATHA","CURD","PICKLE", "BANANA",],
    // B: ["MASALA SANDWICH","TOMATO KETCHUP","SWEET DALIYA", "BANANA",],
    L: ["MACRONI SALAD", "TINDA MASALA", "VEG KORMA", "DHABA DAL", "CHAPATI", "PLAIN RICE", "BOONDI RAITA", ""],
    D: ["LEMON + ONION", "KHATTA MEETHA PUMPKIN", "CHHOLE MASALA", "AJWAINI PURI / CHAPATI", "JEERA RICE","", "HOT BADAM MILK"]
},
{
    Day : "Wednesday",
    Date : "14 FEB 2023",
    // B: ["BEDMI PURI","ALOO BHAJI","ONION + LEMON", "BANANA",],
    B: ["SEVIYYA UPMA","ADRAK CHUTNEY","", "APPLE",],
    // B: ["POHA","SEV","CUT ONION LEMON", "BANANA",],
    // B: ["VADA PAV","SWEET DALIYA","GREEN CHUTNEY", "PAPAYA",],
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "APPLE",],
    // B: ["BREAD PAKORA","TOMATO KETCHUP","SWEET DALIYA", "BANANA",],
    // B: ["METHI PARATHA","CURD + PICKLE","", "HONEYDEW",],
    // B: ["MUTTER","KULCHA","CUT LEMON ONION", "PAPAYA",],
    L: ["VEG Croquettes", "PANEER TIKKA MASALA", "butter dal tadka", "veg pulao", "naan/ CHAPATI", "onion mint raita", "boondi ladoo", ""],
    // L: ['GRUB', 'MENU WILL BE ANNOUNCE SOON'],
    D: ["CORN SALAD", "VEG 65", "DAL TADKA", "CHAPATI", "PLAIN RICE", "RASAM",""],
    // D: ["GREEN SALAD", "VADA", "SAMBHAR", "MASALA DOSA", "LEMON RICE", "COCONUT CHUTNEY", ""],
    // D: ["LEMON + ONION", "BHAJI", "RED MASOOR DAL", "PAV/ CHAPATI", "PLAIN RICE", "RASAM", ""]
},
{
    Day : "Thursday",
    Date : "15 FEB 2023",
    // B: ["MISSAL","PAO","ONION + LEMON", "HONEYDEW",],
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "PAPAYA",],
    // B: ["MUTTER","KULCHA","CUT LEMON ONION", "PAPAYA",],
    B: ["mysore bonda","ADRAK CHUTNEY","sweet daliya", "pineapple",],
    // B: ["BREAD ROLL","TOMATO KETCHUP","SWEET DALIYA", "HONEYDEW",],
    // B: ["ALOO BHAJI","PALAK PURI","ONION + LEMON", "PAPAYA",],
    // L: ["GREEN SALAD", "GAJAR MUTTER", "GATTA CURRY", "DAL LAHSUNI", "CHAPATI", "PLAIN RICE", "SAMBAR",'RASNA'],
    L: ["fryms", "MADRASI ALOO", "KADI PAKODA", "VEG KHICHDI", "CHAPATI", "PLAIN RICE", "SAMBAR",'mango lassi'],
    // L: ["ALOO CHIPS", "KADHI PAKODA", "JEERA ALOO", "VEG KHICHDI", "CHAPATI", "PLAIN RICE", "SAMBAR",'SHIKANJI'],
    // L: ["ONION SALAD", "MIX VEG DRY", "RAJMA MASALA", "DAL FRY", "CHAPATI", "PLAIN RICE", "SAMBAR",''],
    // D: ["MONTHLY GRUB: WILL BE UPDATED SOON"],
    // D: ["MIRCH KE TAPOREY/ LAHSUN CHUTNEY", "ALOO RASSA", "DAL FRY", "BATI/ CHAPATI", "PLAIN RICE", "", "CHURMA"]
    // D: ["LEMON + ONION", "BHAJI", "DAL TADKA", "PAV/ CHAPATI", "PLAIN RICE", "TOMATO SOUP"]
    D: ["onion salad", "palak PANEER", "", "butter chicken", "CHAPATI", "onion pulao", "pineaplle raita", ""],
    // D: ["GREEN SALAD", "VEG KORMA", "BUTTER DAL TADKA", "CHAPATI", "PLAIN RICE", "", "GULAB JAMUN"]
},
{
    Day : "Friday",
    Date : "16 FEB 2023",
    // B: ["BREAD ROLL","GREEN CHUTNEY","SWEET DALIYA", "KINO",],
    // B: ["MUTTER","KULCHA","CUT ONION + LEMON", "BANANA",],
    // B: ["POHA","SEV","CUT ONION LEMON", "APPLE",],
    B: ["MASALA SANDWICH","TOMATO KETCHUP","SWEET DALIYA", "PAPAYA",],
    // B: ["VADA PAV","GREEN CHUTNEY","SWEET DALIYA", "HONEYDEW",],
    // B: ["BREAD PAKORA","TOMATO KETCHUP","SWEET DALIYA", "APPLE",],
    L: ["BHEL Poori", "BAINGAN BHARTHA", "veg kofta curry", "DAL lahsuni", "CHAPATI", "PLAIN RICE", "sambar", "SHIKANJI"],
    // D: ["MIX SALAD", "VEG MANCHURIAN", "BLACK MASOOR DAL", "EGG FRIED RICE/ VEG FRIED RICE", "CHAPATI", "","BALUSHAHI"]
    D: ["CUT ONION + LEMON", "PAO BHAJI", "DAL TAKDA", "CHAPATI", "PLAIN RICE", "rasam", "seviya kheer"]
    // D: [""]
},
{
    Day : "Saturday",
    Date : "17 FEB 2023",
    B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "kinu",],
    // B: ["ALOO BHAJI","PALAK PURI","ONION + LEMON", "APPLE",],
    // B: ["MASALA SANDWICH","TOMATO KETCHUP","SWEET DALIYA", "APPLE",],
    // B: ["SUJI UPMA","ADRAK CHUTNEY","", "GUAVA",],
    L: ["GREEN CHUTNEY","hara bhara kebab", "kala chana masala", "CURD/ BUTTER", "MIX VEG PARATHA PARATHA", "PLAIN RICE", "SAMBAR", "litchi sherbet"],
    D: ["GREEN SALAD", "tawa veg (no karela)", "dhaba dal", "chapati", "PLAIN RICE", "hot badam milk ","RASAM"]
},
{
    Day : "Sunday",
    Date : "18 FEB 2023",
    // B: ["MASALA DOSA","SAMBHAR","COCONUT CHUTNEY", "GRAPES",],
    B: ["MUTTER","KULCHA","CUT LEMON ONION", "apple",],
    // B: ["VADA PAV","GREEN CHUTNEY","SWEET DALIYA", "APPLE",],
    // B: ["METHI PARATHA","CURD","PICKLE", "HONEYDEW",],
    // L: ["DAHI WADA", "PANEER LABABDAR", "DHABA CHICKEN", "", "NAAN/ CHAPATI", "BIRYANI RICE", "BOONDI RAITA", "CHOCOCHIP I/C"],
    L: ["ONION SALAD", "dhaba PANEER", "CHICKEN curry", "", "VEG BIRYANI", "NAAN/ CHAPATI", "mix veg raita RAITA", ''],
    D: ["green SALAD", "lauki kofta curry", "DAL LAHSOONI", "CHAPATI", "PLAIN RICE", "RASAM", "tomato SOUP"]
    // D: ["LEMON + ONION", "BHAJI", "DAL TADKA", "PAV", "PLAIN RICE", "CHAPATI LIMITED", "HOT BADAM MILK"]
    // D: ["HAPPY DIWALI"]
}]

export default data;