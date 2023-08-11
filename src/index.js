module.exports = function toReadable(number) {

    function units(n) {
        switch (n) {
            case "0":
                return ("zero");
                break;
            case "1":
                return ("one");
                break;
            case "2":
                return ("two");
                break;
            case "3":
                return ("three");
                break;
            case "4":
                return ("four");
                break;
            case "5":
                return ("five");
                break;
            case "6":
                return ("six");
                break;
            case "7":
                return ("seven");
                break;
            case "8":
                return ("eight");
                break;
            case "9":
                return ("nine");
                break;
        }
    };

    function dozens(n) {
        switch (n) {
            case "10":
                return ("ten");
                break;
            case "11":
                return ("eleven");
                break;
            case "12":
                return ("twelve");
                break;
            case "13":
                return ("thirteen");
                break;
            case "14":
                return ("fourteen");
                break;
            case "15":
                return ("fifteen");
                break;
            case "16":
                return ("sixteen");
                break;
            case "17":
                return ("seventeen");
                break;
            case "18":
                return ("eighteen");
                break;
            case "19":
                return ("nineteen");
                break;
            case "20":
                return ("twenty");
                break;
            case "30":
                return ("thirty");
                break;
            case "40":
                return ("forty");
                break;
            case "50":
                return ("fifty");
                break;
            case "60":
                return ("sixty");
                break;
            case "70":
                return ("seventy");
                break;
            case "80":
                return ("eighty");
                break;
            case "90":
                return ("ninety");
                break;
        }
    };

    function hundreds(n) {
        return units(n) + " hundred";
    };

    let str = String(number);

    function oneSign(n) {
        return units(n);
    };

    function twoCharacters(str) {
        if (str[0] === "1") {
            return dozens(str);
        };

        if ((str[0] === "0") && (str[1] === "0")) {
            return "";
        }

        if ((str[0] === "0") && (str[1] !== "0")) {
            return units(str[1]);
        }

        if ((str[0] !== "1") && (str[1] === "0")) {
            return dozens(str);
        };

        if ((str[0] !== "1") && (str[1] !== "0")) {
            return dozens(str[0] + "0") + " " + units(str[1]);
        }


    };

    if (str.length === 1) {
        return oneSign(str);
    };
    if (str.length === 2) {
        return twoCharacters(str);
    };

    if (str.length === 3) {
        let newStr = "";
        newStr = hundreds(str[0]) + " " + twoCharacters(str.slice(1));
        return newStr.trim();
    };
}
