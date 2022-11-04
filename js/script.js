function convertValue(){
    let fromValue = document.querySelector("#fromValue").value;
    let fromUnit = document.querySelector("#fromSelect").value;
    let toUnit = document.querySelector("#toSelect").value;
    
    if (fromUnit == "meter1" && toUnit == "meter2"){
        answer =  fromValue * 1; 
    } else if (fromUnit == "meter1" && toUnit == "kilometer2"){
        answer = fromValue * 0.001;
    } else if (fromUnit == "meter1" && toUnit == "kilometer2"){
        answer = fromValue * 1000;
    } else if (fromUnit == "meter1" && toUnit == "centimeter2"){
        answer = fromValue * 100;
    } else if (fromUnit == "meter1" && toUnit == "feet2"){
        answer = fromValue * 3.2808;
    } else if (fromUnit == "meter1" && toUnit == "inch2"){
        answer = fromValue * 39.37;
    } else if (fromUnit == "meter1" && toUnit == "mile2"){
        answer = fromValue / 1609.344;
    } else if (fromUnit == "meter1" && toUnit == "yard2"){
        answer = fromValue * 1.0936;
    } else if (fromUnit == "meter1" && toUnit == "furlong2"){
        answer = fromValue / 201.168;
    }
    
    if (fromUnit == "kilometer1" && toUnit == "meter2"){
        answer =  fromValue * 1000; 
    } else if (fromUnit == "kilometer1" && toUnit == "kilometer2"){
        answer = fromValue * 1;
    } else if (fromUnit == "kilometer1" && toUnit == "centimeter2"){
        answer = fromValue * 100000;
    } else if (fromUnit == "kilometer1" && toUnit == "feet2"){
        answer = fromValue * 3280.839;
    } else if (fromUnit == "kilometer1" && toUnit == "inch2"){
        answer = fromValue * 39370.078;
    } else if (fromUnit == "kilometer1" && toUnit == "mile2"){
        answer = fromValue / 1.6093;
    } else if (fromUnit == "kilometer1" && toUnit == "yard2"){
        answer = fromValue * 1093.613;
    } else if (fromUnit == "kilometer1" && toUnit == "furlong2"){
        answer = fromValue / 0.201168;
    }

    if (fromUnit == "centimeter1" && toUnit == "meter2"){
        answer =  fromValue * 0.01; 
    } else if (fromUnit == "centimeter1" && toUnit == "kilometer2"){
        answer = fromValue * 0.00001;
    } else if (fromUnit == "centimeter1" && toUnit == "centimeter2"){
        answer = fromValue * 1;
    } else if (fromUnit == "centimeter1" && toUnit == "feet2"){
        answer = fromValue / 30.48;
    } else if (fromUnit == "centimeter1" && toUnit == "inch2"){
        answer = fromValue / 2.54;
    } else if (fromUnit == "centimeter1" && toUnit == "mile2"){
        answer = fromValue / 160934.4;
    } else if (fromUnit == "centimeter1" && toUnit == "yard2"){
        answer = fromValue / 91.44;
    } else if (fromUnit == "centimeter1" && toUnit == "furlong2"){
        answer = fromValue / 20116.8;
    }

    if (fromUnit == "feet1" && toUnit == "meter2"){
        answer =  fromValue * 0.3048; 
    } else if (fromUnit == "feet1" && toUnit == "kilometer2"){
        answer = fromValue * 0.0003048;
    } else if (fromUnit == "feet1" && toUnit == "centimeter2"){
        answer = fromValue * 30.48;
    } else if (fromUnit == "feet1" && toUnit == "feet2"){
        answer = fromValue * 1;
    } else if (fromUnit == "feet1" && toUnit == "inch2"){
        answer = fromValue * 12;
    } else if (fromUnit == "feet1" && toUnit == "mile2"){
        answer = fromValue / 5280;
    } else if (fromUnit == "feet1" && toUnit == "yard2"){
        answer = fromValue / 3;
    } else if (fromUnit == "feet1" && toUnit == "furlong2"){
        answer = fromValue / 660;
    }

    if (fromUnit == "inch1" && toUnit == "meter2"){
        answer =  fromValue / 39.37; 
    } else if (fromUnit == "inch1" && toUnit == "kilometer2"){
        answer = fromValue / 39370.1;
    } else if (fromUnit == "inch1" && toUnit == "centimeter2"){
        answer = fromValue * 2.54;
    } else if (fromUnit == "inch1" && toUnit == "feet2"){
        answer = fromValue / 12;
    } else if (fromUnit == "inch1" && toUnit == "inch2"){
        answer = fromValue * 1;
    } else if (fromUnit == "inch1" && toUnit == "mile2"){
        answer = fromValue / 63360;
    } else if (fromUnit == "inch1" && toUnit == "yard2"){
        answer = fromValue / 36;
    } else if (fromUnit == "inch1" && toUnit == "furlong2"){
        answer = fromValue / 7920.02;
    }

    if (fromUnit == "mile1" && toUnit == "meter2"){
        answer =  fromValue * 1609.34; 
    } else if (fromUnit == "mile1" && toUnit == "kilometer2"){
        answer = fromValue * 1.60934;
    } else if (fromUnit == "mile1" && toUnit == "centimeter2"){
        answer = fromValue * 160934;
    } else if (fromUnit == "mile1" && toUnit == "feet2"){
        answer = fromValue * 5280;
    } else if (fromUnit == "mile1" && toUnit == "inch2"){
        answer = fromValue * 63360;
    } else if (fromUnit == "mile1" && toUnit == "mile2"){
        answer = fromValue / 1;
    } else if (fromUnit == "mile1" && toUnit == "yard2"){
        answer = fromValue * 1760;
    } else if (fromUnit == "mile1" && toUnit == "furlong2"){
        answer = fromValue / 0.125;
    }

    if (fromUnit == "yard1" && toUnit == "meter2"){
        answer =  fromValue * 0.9144; 
    } else if (fromUnit == "yard1" && toUnit == "kilometer2"){
        answer = fromValue / 1093.61;
    } else if (fromUnit == "yard1" && toUnit == "centimeter2"){
        answer = fromValue * 91.44;
    } else if (fromUnit == "yard1" && toUnit == "feet2"){
        answer = fromValue * 3;
    } else if (fromUnit == "yard1" && toUnit == "inch2"){
        answer = fromValue * 36;
    } else if (fromUnit == "yard1" && toUnit == "mile2"){
        answer = fromValue / 1760;
    } else if (fromUnit == "yard1" && toUnit == "yard2"){
        answer = fromValue * 1;
    } else if (fromUnit == "yard1" && toUnit == "furlong2"){
        answer = fromValue / 220;
    }

    if (fromUnit == "furlong1" && toUnit == "meter2"){
        answer =  fromValue * 201.168; 
    } else if (fromUnit == "furlong1" && toUnit == "kilometer2"){
        answer = fromValue * 0.201168;
    } else if (fromUnit == "furlong1" && toUnit == "centimeter2"){
        answer = fromValue * 20116.8;
    } else if (fromUnit == "furlong1" && toUnit == "feet2"){
        answer = fromValue * 660.001;
    } else if (fromUnit == "furlong1" && toUnit == "inch2"){
        answer = fromValue * 7920.02;
    } else if (fromUnit == "furlong1" && toUnit == "mile2"){
        answer = fromValue * 0.125;
    } else if (fromUnit == "furlong1" && toUnit == "yard2"){
        answer = fromValue * 220;
    } else if (fromUnit == "furlong1" && toUnit == "furlong2"){
        answer = fromValue * 1;
    }

    document.querySelector("#toValue").value = answer;
}