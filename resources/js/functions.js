export function handleError(error) {
    console.error('Error:', error);
}

// 地名作成
const words = ["きもの","ねこ","いぬ","まつり","やま","たいやき","へび","やすみ","けいたい","あめ","ひまわり","りんご","わさび","てらす","はつか","さくら","ゆき","こーら","おやつ","ほんや","おんがく","えいが","ことば","せかい","こころ","しんせつ","あい","こい","ひみつ","うちゅう","あめんぼ","いちご","さかな","たけのこ","なつ","あおはる","びーる","ふね","ひこうき","へいわ","ほし","むかし","みらい","いま","めがね","らいねん","わらう","ふるさと","せいめい","どきどき","わくわく","ちず","うた","しんゆう","おに","まんが","ひつじ","ゆめ","ほん","へんてこ","きせつ","ともだち","すし","はな","とけい","あそび","つる","おかね","せんせい","ももいろ","くろ","あおいろ","きいろ","しろ","あかいろ","むらさき","みどり","だいだい","つき","しんぶん","かえる","くも","たいよう","びんせん","がらす","おとな"];
const water = ["うみ","みずうみ","かわ","ほとり","すいろ","すいげん","こはん","いけ","たき","さわ","せせらぎ","おんせん","すなはま","はまべ","うみべ","かいがん","みなと","みずべ"];
function getRandomWord(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length)];
}
export function newSpotName() {
    return `${getRandomWord(words)}と${getRandomWord(words)}の${getRandomWord(water)}`;
}

// sleep関数を定義します。msミリ秒後に解決するPromiseを返します。
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function truncate(str, len) {
    let strLen = 0;
    let i;
    for (i = 0; i < str.length; i++) {
        strLen += str.charCodeAt(i) < 256 ? 0.5 : 1;
        if (strLen > len) {
            break;
        }
    }
    return strLen > len ? str.slice(0, i) + '…' : str;
}