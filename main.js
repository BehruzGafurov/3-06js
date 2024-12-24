// Start Edabir Question

// Masala 1: Funksiya 2ta argument qabul qilib, ularning yig‘indisini qaytaradi.
function yigindi(x, y) {
    return x + y;
}

// Masala 2: Minutlarni sekundlarga o‘girish.
function sekundgaAylantir(minut) {
    return minut * 60;
}

// Masala 3: Funksiya butun sondan keyingi sonni qaytaradi.
function keyingiSon(butunSon) {
    return butunSon + 1;
}

// Masala 4: Uchburchakning yuzini hisoblash.
function uchburchakYuzi(asos, balandlik) {
    return (asos * balandlik) / 2;
}

// Masala 5: Yillarni kunlarga aylantirish.
function yillarniKunlarga(yosh) {
    return yosh * 365;
}

// Masala 6: Sonning kubini hisoblash.
function kub(son) {
    return son * son * son;
}

// Masala 7: Massivning birinchi elementini qaytaradi.
//-----

// Masala 8: Birinchi qiymatni ikkinchi qiymatga ko‘paytiradi.
function kopaytir(birinchi, ikkinchi) {
    return birinchi * ikkinchi;
}

// Masala 9: Soatni sekundlarga aylantirish.
function soatniSekundga(soat) {
    return soat * 3600;
}

// Masala 10: Uchburchakning uchinchi tomonining eng uzun qiymatini topish.
function uchinchiTomon(tomon1, tomon2) {
    return tomon1 + tomon2 - 1;
}

// Masala 11: Bo‘lishdagi qoldiqni hisoblash.
function bolishQoldigi(son1, son2) {
    return son1 % son2;
}

// Masala 12: To‘rtburchakning yuzini hisoblash.
function tortburchakYuzi(boyi, eni) {
    return boyi * eni;
}

// Masala 13: String birlashtirish.
function qoshish(matn) {
    return "smth " + matn;
}

// Masala 14: Sonning kvadratini hisoblash.
function kvadrat(son) {
    return son * son;
}

// Masala 15: 0 dan kichik yoki teng qiymatni tekshirish.
function noldanKichikmi(son) {
    if (son <= 0) {
        return "tori";
    } else {
        return "notori";
    }
}

// Masala 16: Ichki burchaklar yig‘indisini hisoblash.
function ichkiBurchaklar(poligon) {
    return (poligon - 2) * 180;
}

// Masala 17: Basketbol ochkolarini hisoblash.
function basketbolOchko(ikkiOchko, uchOchko) {
    return ikkiOchko * 2 + uchOchko * 3;
}

// Masala 18: Stringni birlashtirish.
function nomQoshish(nom) {
    return nom + "Edabit";
}

// Masala 19: Sonlarning yig‘indisi 100 dan kichikmi?
function yigindi100danKichikmi(son1, son2) {
    if (son1 + son2 < 100) {
        return "rost";
    } else {
        return "yolg‘on";
    }
}

// Masala 20: Berilgan songacha massiv yaratish.
//----


// Masala 21: Fermadagi hayvonlar oyoqlari sonini hisoblash.
function fermadagiOyoqlar(tovuq, qoy, sigir) {
    return tovuq * 2 + qoy * 4 + sigir * 4;
}

// Masala 22: && operatoridan foydalanish.
function vaOperatori(a, b) {
    return a && b;
}

// Masala 23: Ikkita qiymatning tengligini tekshirish.
function tenglikniTekshirish(son1, son2) {
    if (son1 === son2) {
        return "rost";
    } else {
        return "yolg‘on";
    }
}

// Masala 24: Futbol ochkolarini hisoblash.
function futbolOchko(yutuq, durang, maglubiyat) {
    return yutuq * 3 + durang;
}

// Masala 25: Soat va minutlarni sekundlarga aylantirish.
function sekundlargaAylantir(soat, minut) {
    return soat * 3600 + minut * 60;
}

// Masala 26: Toq sonlarni tekshirish.
function toqmi(son) {
    if (son % 2 !== 0) {
        return "rost";
    } else {
        return "yolg‘on";
    }
}

// Masala 27: Ikkita qiymatning tengligini tekshirish.
function tenglikniQaytaTekshirish(son1, son2) {
    if (son1 === son2) {
        return "rost";
    } else {
        return "yolg‘on";
    }
}

// Masala 28: Boolean qiymatni stringga o‘girish.
function booleanniStringga(boolean) {
    return boolean.toString();
}

// Masala 29: Arrow funksiya qiymatni qaytaradi.
const qiyMatniQaytar = (son) => son;

// Masala 30: Frame sonini hisoblash.
function frameSoni(minut, frame) {
    return minut * frame * 60;
}

//ENd 28 Ebadit Questions

// Masala 31: Funksiya ikkita sonni taqqoslaydi va katta bo‘lganini qaytaradi.
function kattaSonniQaytar(son1, son2) {
    return son1 > son2 ? son1 : son2;
}

// Masala 32: Sonlardan biri 10ga teng yoki ularning yig‘indisi 10 bo‘lsa, rost qaytarish.
function teng10(son1, son2) {
    if (son1 === 10 || son2 === 10 || son1 + son2 === 10) {
        return "rost";
    } else {
        return "yolg‘on";
    }
}

// Masala 33: Masofa uchun kerakli benzin miqdorini hisoblash.
function litrMasofa(km) {
    let kerakliBenzin = km * 10;
    return kerakliBenzin < 100 ? 100 : kerakliBenzin;
}

// Masala 34: Ikki sonning kattasini qaytarish.
function kattaSon(son1, son2) {
    return son1 > son2 ? son1 : son2;
}

// Masala 35: 



// Masala 36:


// Masala 37: Bo‘sh stringni tekshirish.
function boshStr(str) {
    if (str === "") {
        return "rost";
    } else {
        return "yolg‘on";
    }
}

// Masala 38: Son 5ga bo‘linishini tekshirish.
function bolinsin5(son) {
    if (son % 5 === 0) {
        return "rost";
    } else {
        return "yolg‘on";
    }
}

// Masala 39: Son 100ga bo‘linishini tekshirish.
function bolinsin100(son) {
    if (son % 100 === 0) {
        return "rost";
    } else {
        return "yolg‘on";
    }
}

// Masala 40: -


