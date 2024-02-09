const data = [{
    Day : "Monday",
    Date: "12 FEB 2023",
    B: ["POHA","SEV","CUT ONION LEMON", "KINU",],
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "HONEY DEW",],
    L: ["GREEN SALAD", "SOYA CHILLI", "PALAK CORN", "MOONG DAL TADKA", "CHAPATI", "PLAIN RICE", "SAMBAR", "MASALA CHHAAS"],
    // L: ["DISCO PAPAD", "MADRASI ALOO", "KADI PAKODA", "VEG KHICHDI", "CHAPATI", "PLAIN RICE", "SAMBAR",'SHIKANJI'],
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
    // L: ["ONION SALAD", "PANEER KADHAI", "", "DAL MAKHANI", "CHAPATI", "PULAO RICE", "PINEAPPLE RAITA", "CHOCO BARFI"],
    L: ['GRUB', 'MENU WILL BE ANNOUNCE SOON'],
    D: ["CORN SALAD", "VEG 65", "DAL TADKA", "CHAPATI", "PLAIN RICE", "RASAM",""],
    // D: ["GREEN SALAD", "VADA", "SAMBHAR", "MASALA DOSA", "LEMON RICE", "COCONUT CHUTNEY", ""],
    // D: ["LEMON + ONION", "BHAJI", "RED MASOOR DAL", "PAV/ CHAPATI", "PLAIN RICE", "RASAM", ""]
},
{
    Day : "Thursday",
    Date : "08 FEB 2023",
    // B: ["MISSAL","PAO","ONION + LEMON", "HONEYDEW",],
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "PAPAYA",],
    B: ["MUTTER","KULCHA","CUT LEMON ONION", "PAPAYA",],
    // B: ["BREAD ROLL","TOMATO KETCHUP","SWEET DALIYA", "HONEYDEW",],
    // B: ["ALOO BHAJI","PALAK PURI","ONION + LEMON", "PAPAYA",],
    L: ["GREEN SALAD", "GAJAR MUTTER", "GATTA CURRY", "DAL LAHSUNI", "CHAPATI", "PLAIN RICE", "SAMBAR",'RASNA'],
    // L: ["ALOO CHIPS", "KADHI PAKODA", "JEERA ALOO", "VEG KHICHDI", "CHAPATI", "PLAIN RICE", "SAMBAR",'SHIKANJI'],
    // L: ["ONION SALAD", "MIX VEG DRY", "RAJMA MASALA", "DAL FRY", "CHAPATI", "PLAIN RICE", "SAMBAR",''],
    // D: ["MONTHLY GRUB: WILL BE UPDATED SOON"],
    // D: ["MIRCH KE TAPOREY/ LAHSUN CHUTNEY", "ALOO RASSA", "DAL FRY", "BATI/ CHAPATI", "PLAIN RICE", "", "CHURMA"]
    // D: ["LEMON + ONION", "BHAJI", "DAL TADKA", "PAV/ CHAPATI", "PLAIN RICE", "TOMATO SOUP"]
    D: ["GREEN SALAD", "VEG KORMA", "BUTTER DAL TADKA", "CHAPATI", "PLAIN RICE", "", "GULAB JAMUN"]
},
{
    Day : "Friday",
    Date : "09 FEB 2023",
    // B: ["BREAD ROLL","GREEN CHUTNEY","SWEET DALIYA", "KINO",],
    // B: ["MUTTER","KULCHA","CUT ONION + LEMON", "BANANA",],
    // B: ["POHA","SEV","CUT ONION LEMON", "APPLE",],
    B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "APPLE",],
    // B: ["MASALA SANDWICH","TOMATO KETCHUP","SWEET DALIYA", "KINU",],
    // B: ["VADA PAV","GREEN CHUTNEY","SWEET DALIYA", "HONEYDEW",],
    // B: ["BREAD PAKORA","TOMATO KETCHUP","SWEET DALIYA", "APPLE",],
    L: ["ONION SALAD", "BAINGAN BHARTHA", "RAJMA MASALA", "DAL FRY", "CHAPATI", "PLAIN RICE", "BATHUA RAITA", "SHIKANJI"],
    D: ["MIX SALAD", "VEG MANCHURIAN", "BLACK MASOOR DAL", "EGG FRIED RICE/ VEG FRIED RICE", "CHAPATI", "","BALUSHAHI"]
    // D: [""]
},
{
    Day : "Saturday",
    Date : "10 FEB 2023",
    // B: ["ALOO BHAJI","PALAK PURI","ONION + LEMON", "APPLE",],
    // B: ["MASALA SANDWICH","TOMATO KETCHUP","SWEET DALIYA", "APPLE",],
    B: ["SUJI UPMA","ADRAK CHUTNEY","", "GUAVA",],
    L: ["GREEN CHUTNEY","FRENCH FRIES", "RAGDA MUTTER", "CURD/ BUTTER", "MIX VEG PARATHA PARATHA", "PLAIN RICE", "SAMBAR", ""],
    D: ["GREEN SALAD", "SARSOON KA SAAG", "AARHAR DAL TADKA", "MAKKI KI ROTI / GUD", "PLAIN RICE", "MOONG DAL HALWA ","RASAM"]
    // D: ["CUT ONION + LEMON", "PAO BHAJI", "DAL TAKDA", "CHAPATI LIMITED", "PLAIN RICE", "VEG MANCHOW SOUP", "SWEET BOONDI"]
},
{
    Day : "Sunday",
    Date : "11 FEB 2023",
    B: ["MASALA DOSA","SAMBHAR","COCONUT CHUTNEY", "GRAPES",],
    // B: ["MUTTER","KULCHA","CUT LEMON ONION", "GUAVA",],
    // B: ["VADA PAV","GREEN CHUTNEY","SWEET DALIYA", "APPLE",],
    // B: ["METHI PARATHA","CURD","PICKLE", "HONEYDEW",],
    // L: ["DAHI WADA", "PANEER LABABDAR", "DHABA CHICKEN", "", "NAAN/ CHAPATI", "BIRYANI RICE", "BOONDI RAITA", "CHOCOCHIP I/C"],
    L: ["ONION SALAD", "PANEER LABABDAR", "DHABA CHICKEN", "", "NAAN/ CHAPATI", "VEG BIRYANI", "NAAN/ CHAPATI", "BOONDI RAITA"],
    D: ["PASTA SALAD", "METHI MALAI MUTTER", "DAL LAHSOONI", "CHAPATI", "PLAIN RICE", "RASAM", "HOT & SOUR SOUP"]
    // D: ["LEMON + ONION", "BHAJI", "DAL TADKA", "PAV", "PLAIN RICE", "CHAPATI LIMITED", "HOT BADAM MILK"]
    // D: ["HAPPY DIWALI"]
}]

export default data;