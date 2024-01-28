const data = [{
    Day : "Monday",
    Date: "29 JAN 2023",
    B: ["POHA","SEV","CUT ONION LEMON", "PAPAYA",],
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "HONEY DEW",],
    L: ["GREEN SALAD", "ALOO GOBHI", "RAJMA MASALA", "MOONG DAL TADKA", "CHAPATI", "PLAIN RICE", "SAMBAR", "ROOH AFZA"],
    // L: ["GREEN SALAD", "CABBAGE MUTTER", "RAJMA MASALA", "DAL LAHSUNI", "CHAPATI", "PLAIN RICE", "",''],
    // L: ["ROASTED PAPAD", "MADRASI ALOO", "KADI PAKODA", "VEG KHICHDI", "CHAPATI", "PLAIN RICE", "SAMBAR",''],
    // D: ["GREEN SALAD", "VADA", "SAMBHAR", "MASALA DOSA", "TAMRIND RICE", "COCONUT CHUTNEY", "VEG MANCHOW SOUP"],
    D: ["MIRCH KE TAPOREY/ LAHSUN CHUTNEY", "ALOO RASSA", "DAL FRY", "BATI/ CHAPATI", "PLAIN RICE", "", "CHOORMA"]
    // D: ["GREEN SALAD", "METHI MUTTER", "DAL LAHSUNI", "CHAPATI", "PLAIN RICE","RASAM", "VEG MANCHOW"]
},
{
    Day : "Tuesday",
    Date : "30 JAN 2023",
    // B: ["ALOO PARATHA","CURD","PICKLE", "KINO",],
    // B: ["MUTTER","KULCHA","CUT LEMON ONION", "PAPAYA",],
    B: ["METHI PARATHA","CURD","PICKLE", "BANANA",],
    // B: ["MASALA SANDWICH","TOMATO KETCHUP","SWEET DALIYA", "BANANA",],
    L: ["MACRONI SALAD", "BAINGAN BHARTA", "VEG KROMA", "DHABA DAL", "CHAPATI", "PLAIN RICE", "SAMBAR", "BALU SHAHI"],
    D: ["LEMON + ONION", "KHATTA MEETHA PUMPKIN", "CHHOLE MASALA", "BHATURE / CHAPATI", "JEERA RICE","", "MINISTRONI SOUP"]
},
{
    Day : "Wednesday",
    Date : "31 JAN 2023",
    // B: ["BEDMI PURI","ALOO BHAJI","ONION + LEMON", "BANANA",],
    // B: ["POHA","SEV","CUT ONION LEMON", "BANANA",],
    // B: ["VADA PAV","SWEET DALIYA","GREEN CHUTNEY", "PAPAYA",],
    B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "APPLE",],
    // B: ["BREAD PAKORA","TOMATO KETCHUP","SWEET DALIYA", "BANANA",],
    // B: ["METHI PARATHA","CURD + PICKLE","", "HONEYDEW",],
    // B: ["MUTTER","KULCHA","CUT LEMON ONION", "PAPAYA",],
    L: ["ONION SALAD", "PALAK PANEER", "", "BUTTER CHICKEN", "CHAPATI", "PULAO RICE", "PINEAPPLE RAITA", ""],
    D: ["CORN SALAD", "VEG 69", "DAL TADKA", "CHAPATI", "PLAIN RICE", "TOMATO SOUP","HOT BADAM MILK"]
    // D: ["GREEN SALAD", "VADA", "SAMBHAR", "MASALA DOSA", "LEMON RICE", "COCONUT CHUTNEY", ""],
    // D: ["LEMON + ONION", "BHAJI", "RED MASOOR DAL", "PAV/ CHAPATI", "PLAIN RICE", "RASAM", ""]
},
{
    Day : "Thursday",
    Date : "25 JAN 2023",
    // B: ["MISSAL","PAO","ONION + LEMON", "HONEYDEW",],
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "ORANGE",],
    // B: ["BREAD ROLL","TOMATO KETCHUP","SWEET DALIYA", "HONEYDEW",],
    B: ["ALOO BHAJI","PALAK PURI","ONION + LEMON", "PAPAYA",],
    // L: ["ALOO CHIPS", "KADHI PAKODA", "JEERA ALOO", "VEG KHICHDI", "CHAPATI", "PLAIN RICE", "SAMBAR",'SHIKANJI'],
    L: ["ROASTED PAPAD", "ADRAKI GOBHI", "KPALAK CORN", "DAL TRIVENI", "CHAPATI", "PLAIN RICE", "SAMBAR",''],
    // D: ["MONTHLY GRUB: WILL BE UPDATED SOON"],
    // D: ["MIRCH KE TAPOREY/ LAHSUN CHUTNEY", "ALOO RASSA", "DAL FRY", "BATI/ CHAPATI", "PLAIN RICE", "", "CHURMA"]
    D: ["LEMON + ONION", "BHAJI", "DAL TADKA", "PAV/ CHAPATI", "PLAIN RICE", "TOMATO SOUP"]
    // D: ["GREEN SALAD", "ALOO GOBHI", "MIX DAL", "CHAPATI", "PLAIN RICE", "RASAM", "SUJI PINEAPPLE"]
},
{
    Day : "Friday",
    Date : "26 JAN 2023",
    // B: ["BREAD ROLL","GREEN CHUTNEY","SWEET DALIYA", "KINO",],
    // B: ["SAUTEE IDLI/ IDLI","SAMBHAR","COCONUT CHUTNEY", "APPLE",],
    // B: ["MUTTER","KULCHA","CUT ONION + LEMON", "BANANA",],
    B: ["POHA","SEV","CUT ONION LEMON", "APPLE",],
    // B: ["VADA PAV","GREEN CHUTNEY","SWEET DALIYA", "HONEYDEW",],
    // B: ["BREAD PAKORA","TOMATO KETCHUP","SWEET DALIYA", "APPLE",],
    L: ["ALOO CHANNA CHAT", "BAINGAN KA BARTHA", "ALOO GOBHI PUNJABI", "DAL PANCHRATAN", "CHAPATI", "PLAIN RICE", "SAMBHAR", "MIX BLAST"],
    D: ["DISCO PAPAD", "PANEER TIKKA MASALA", "DAL MAKHANI", "TAWA NAAN", "TIRANGA RICE", "DAHI WADA","BOONDI LADOO"]
    // D: [""]
},
{
    Day : "Saturday",
    Date : "20 JAN 2023",
    // B: ["ALOO BHAJI","PALAK PURI","ONION + LEMON", "APPLE",],
    B: ["MASALA SANDWICH","TOMATO KETCHUP","SWEET DALIYA", "APPLE",],
    // B: ["SUJI UPMA","ADRAK CHUTNEY","", "PINEAPPLE",],
    L: ["GREEN CHUTNEY","HARA BHARA KEBAB", "BLACK CHANA MASALA", "CURD/ BUTTER", "ALOO PARATHA", "PLAIN RICE", "SAMBAR", ""],
    D: ["GREEN SALAD", "SARSOON KA SAAG", "AARHAR DAL TADKA", "MAKKI KI ROTI / GUD", "PLAIN RICE", "AATEE KA HALWA ",""]
    // D: ["CUT ONION + LEMON", "PAO BHAJI", "DAL TAKDA", "CHAPATI LIMITED", "PLAIN RICE", "VEG MANCHOW SOUP", "SWEET BOONDI"]
},
{
    Day : "Sunday",
    Date : "21 JAN 2023",
    // B: ["MASALA DOSA","SAMBHAR","COCONUT CHUTNEY", "PAPAYA",],
    B: ["MUTTER","KULCHA","CUT LEMON ONION", "GUAVA",],
    // B: ["VADA PAV","GREEN CHUTNEY","SWEET DALIYA", "APPLE",],
    // B: ["METHI PARATHA","CURD","PICKLE", "HONEYDEW",],
    // L: ["DAHI WADA", "PANEER LABABDAR", "DHABA CHICKEN", "", "NAAN/ CHAPATI", "BIRYANI RICE", "BOONDI RAITA", "CHOCOCHIP I/C"],
    L: ["ONION SALAD", "MUTTER PANEER", "DHABA CHICKEN", "", "NAAN/ CHAPATI", "BIRYANI RICE", "BOONDI RAITA", ""],
    D: ["GREEN SALAD", "ACHARI GOBHI", "DAL PANCHRATAN", "CHAPATI", "PLAIN RICE", "RASAM", "VEG  MANCHOW SOUP"]
    // D: ["LEMON + ONION", "BHAJI", "DAL TADKA", "PAV", "PLAIN RICE", "CHAPATI LIMITED", "HOT BADAM MILK"]
    // D: ["HAPPY DIWALI"]
}]

export default data;