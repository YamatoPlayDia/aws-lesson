function u(e){console.error("Error:",e)}const a=["きもの","ねこ","いぬ","まつり","やま","たいやき","へび","やすみ","けいたい","あめ","ひまわり","りんご","わさび","てらす","はつか","さくら","ゆき","こーら","おやつ","ほんや","おんがく","えいが","ことば","せかい","こころ","しんせつ","あい","こい","ひみつ","うちゅう","あめんぼ","いちご","さかな","たけのこ","なつ","あおはる","びーる","ふね","ひこうき","へいわ","ほし","むかし","みらい","いま","めがね","らいねん","わらう","ふるさと","せいめい","どきどき","わくわく","ちず","うた","しんゆう","おに","まんが","ひつじ","ゆめ","ほん","へんてこ","きせつ","ともだち","すし","はな","とけい","あそび","つる","おかね","せんせい","ももいろ","くろ","あおいろ","きいろ","しろ","あかいろ","むらさき","みどり","だいだい","つき","しんぶん","かえる","くも","たいよう","びんせん","がらす","おとな"],c=["うみ","みずうみ","かわ","ほとり","すいろ","すいげん","こはん","いけ","たき","さわ","せせらぎ","おんせん","すなはま","はまべ","うみべ","かいがん","みなと","みずべ"];function o(e){return e[Math.floor(Math.random()*e.length)]}function s(){return`${o(a)}と${o(a)}の${o(c)}`}function i(e){return new Promise(r=>setTimeout(r,e))}function f(e,r){let t=0,n;for(n=0;n<e.length&&(t+=e.charCodeAt(n)<256?.5:1,!(t>r));n++);return t>r?e.slice(0,n)+"…":e}export{u as h,s as n,i as s,f as t};
