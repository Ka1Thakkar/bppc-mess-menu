const data = [{
    Day : "Monday",
    Date: "19 FEB 2023",
    // B: ["POHA","SEV","CUT ONION LEMON", "KINU",],
    B: ["PURI","ALOO BHAJI","ONION + LEMON", "guava",],
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "HONEY DEW",],
    L: ["GREEN SALAD", "cabbage mutter", "rajma masala", "DAL TADKA", "CHAPATI", "PLAIN RICE", "SAMBAR", "sweet lassi"],
    // D: ["GREEN SALAD", "VADA", "SAMBHAR", "MASALA DOSA", "TAMRIND RICE", "COCONUT CHUTNEY", "VEG MANCHOW SOUP"],
    // D: ["MIRCH KE TAPOREY/ LAHSUN CHUTNEY", "ALOO RASSA", "DAL FRY", "BATI/ CHAPATI", "PLAIN RICE", "RASAM", "CHOORMA"]
    D: ["corn SALAD", "punjabi dum aloo", "DAL panchratan", "CHAPATI", "PLAIN RICE","RASAM", ""]
},
{
    Day : "Tuesday",
    Date : "20 FEB 2023",
    // B: ["ALOO PARATHA","CURD","PICKLE", "KINO",],
    B: ["aloo PARATHA","CURD","PICKLE", "grapes",],
    // B: ["MASALA SANDWICH","TOMATO KETCHUP","SWEET DALIYA", "BANANA",],
    L: ["green SALAD", "kathal MASALA", "VEG KORMA", "moong DAL tadka", "CHAPATI", "PLAIN RICE", "sambar", "masala chhach"],
    D: ["LEMON + ONION", "KHATTA MEETHA PUMPKIN", "CHHOLE MASALA", "AJWAINI PURI / CHAPATI", "plain RICE","jeera raita", "gulab jamun"]
},
{
    Day : "Wednesday",
    Date : "21 FEB 2023",
    B: ["POHA","SEV","CUT ONION LEMON", "kinu",],
    // B: ["VADA PAV","SWEET DALIYA","GREEN CHUTNEY", "PAPAYA",],
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "APPLE",],
    // B: ["BREAD PAKORA","TOMATO KETCHUP","SWEET DALIYA", "BANANA",],
    // B: ["METHI PARATHA","CURD + PICKLE","", "HONEYDEW",],
    // B: ["MUTTER","KULCHA","CUT LEMON ONION", "PAPAYA",],
    L: ["onion salad", "mutter PANEER", "dal makhani", "veg pulao", "CHAPATI", "onion mint raita", "", ""],
    // L: ['GRUB', 'MENU WILL BE ANNOUNCE SOON'],
    D: ["green SALAD", "lobiya masala", "DAL fry", "CHAPATI", "PLAIN RICE", "RASAM","rice phirni"],
    // D: ["GREEN SALAD", "VADA", "SAMBHAR", "MASALA DOSA", "LEMON RICE", "COCONUT CHUTNEY", ""],
    // D: ["LEMON + ONION", "BHAJI", "RED MASOOR DAL", "PAV/ CHAPATI", "PLAIN RICE", "RASAM", ""]
},
{
    Day : "Thursday",
    Date : "22 FEB 2023",
    // B: ["MISSAL","PAO","ONION + LEMON", "HONEYDEW",],
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "PAPAYA",],
    // B: ["MUTTER","KULCHA","CUT LEMON ONION", "PAPAYA",],
    // B: ["mysore bonda","ADRAK CHUTNEY","sweet daliya", "pineapple",],
    B: ["suji UPMA","ADRAK CHUTNEY","", "banana",],
    // B: ["BREAD ROLL","TOMATO KETCHUP","SWEET DALIYA", "HONEYDEW",],
    // B: ["ALOO BHAJI","PALAK PURI","ONION + LEMON", "PAPAYA",],
    // L: ["GREEN SALAD", "GAJAR MUTTER", "GATTA CURRY", "DAL LAHSUNI", "CHAPATI", "PLAIN RICE", "SAMBAR",'RASNA'],
    L: ["fryms", "jeera ALOO", "KADI PAKODA", "VEG KHICHDI", "CHAPATI", "PLAIN RICE", "SAMBAR",'shikanji'],
    // L: ["ALOO CHIPS", "KADHI PAKODA", "JEERA ALOO", "VEG KHICHDI", "CHAPATI", "PLAIN RICE", "SAMBAR",'SHIKANJI'],
    // L: ["ONION SALAD", "MIX VEG DRY", "RAJMA MASALA", "DAL FRY", "CHAPATI", "PLAIN RICE", "SAMBAR",''],
    // D: ["MIRCH KE TAPOREY/ LAHSUN CHUTNEY", "ALOO RASSA", "DAL FRY", "BATI/ CHAPATI", "PLAIN RICE", "", "CHURMA"]
    // D: ["LEMON + ONION", "BHAJI", "DAL TADKA", "PAV/ CHAPATI", "PLAIN RICE", "TOMATO SOUP"]
    // D: ["onion salad", "palak PANEER", "", "butter chicken", "CHAPATI", "onion pulao", "pineaplle raita", ""],
    D: ["aloo chana chaat", "aloo mutter tamatar", "arhar DAL TADKA", "CHAPATI", "PLAIN RICE", "burani raita", "jalebi"]
},
{
    Day : "Friday",
    Date : "23 FEB 2023",
    B: ["BREAD pakoda","tomato ketchup","SWEET DALIYA", "papaya",],
    // B: ["MUTTER","KULCHA","CUT ONION + LEMON", "BANANA",],
    // B: ["POHA","SEV","CUT ONION LEMON", "APPLE",],
    // B: ["MASALA SANDWICH","TOMATO KETCHUP","SWEET DALIYA", "PAPAYA",],
    // B: ["VADA PAV","GREEN CHUTNEY","SWEET DALIYA", "HONEYDEW",],
    // B: ["BREAD PAKORA","TOMATO KETCHUP","SWEET DALIYA", "APPLE",],
    L: ["MONTHLY GRUB: WILL BE UPDATED SOON"],
    // L: ["BHEL Poori", "BAINGAN BHARTHA", "veg kofta curry", "DAL lahsuni", "CHAPATI", "PLAIN RICE", "sambar", "SHIKANJI"],
    D: ["MIX SALAD", "VEG MANCHURIAN", "BLACK MASOOR DAL", "EGG FRIED RICE/ VEG FRIED RICE", "CHAPATI", "veg noodles",""]
    // D: ["CUT ONION + LEMON", "PAO BHAJI", "DAL TAKDA", "CHAPATI", "PLAIN RICE", "rasam", "seviya kheer"],
    // D: [""]
},
{
    Day : "Saturday",
    Date : "24 FEB 2023",
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "kinu",],
    // B: ["ALOO BHAJI","PALAK PURI","ONION + LEMON", "APPLE",],
    // B: ["MASALA SANDWICH","TOMATO KETCHUP","SWEET DALIYA", "APPLE",],
    B: ["moong dal chilla","ADRAK CHUTNEY","", "apple",],
    L: ["GREEN CHUTNEY","", "ragda mutter", "CURD/ BUTTER", "MIX VEG PARATHA PARATHA", "PLAIN RICE", "SAMBAR", "shikanji"],
    D: ["GREEN SALAD", "mix veg (no karela)", "butter dal tadka", "chapati", "PLAIN RICE", "besan barfi","RASAM"]
},
{
    Day : "Sunday",
    Date : "25 FEB 2023",
    B: ["MASALA DOSA","SAMBHAR","COCONUT CHUTNEY", "guava",],
    // B: ["MUTTER","KULCHA","CUT LEMON ONION", "apple",],
    // B: ["VADA PAV","GREEN CHUTNEY","SWEET DALIYA", "APPLE",],
    // B: ["METHI PARATHA","CURD","PICKLE", "HONEYDEW",],
    // L: ["DAHI WADA", "PANEER LABABDAR", "DHABA CHICKEN", "", "NAAN/ CHAPATI", "BIRYANI RICE", "BOONDI RAITA", "CHOCOCHIP I/C"],
    L: ["green SALAD", "kadhai PANEER", "butter CHICKEN", "", "VEG BIRYANI", "NAAN/ CHAPATI", "boondi raita RAITA", 'butterscotch icecream'],
    D: ["pasta SALAD", "gutta curry", "red masoor DAL tadka", "CHAPATI", "PLAIN RICE", "RASAM", ""]
    // D: ["LEMON + ONION", "BHAJI", "DAL TADKA", "PAV", "PLAIN RICE", "CHAPATI LIMITED", "HOT BADAM MILK"]
    // D: ["HAPPY DIWALI"]
}]

export default data;