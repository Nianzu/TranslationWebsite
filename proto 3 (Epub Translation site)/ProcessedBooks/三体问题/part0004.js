var spans = document.querySelectorAll("span");
var textToUpdate = document.getElementById("blownupText");
var translation = document.getElementById("translationText");

var dic = {"时刻":
{"simp":"时刻",
"trad":"時刻",
"pinyin":"shi2 ke4",
"def": ["time","juncture","moment","period of time","CL:個|个[ge4],段[duan4]","constantly","always"]
},
"以前":
{"simp":"以前",
"trad":"以前",
"pinyin":"yi3 qian2",
"def": ["before","formerly","previous","ago"]
},
"再也":
{"simp":"再也",
"trad":"再也",
"pinyin":"zai4 ye3",
"def": ["(not) any more"]
},
"哦":
{"simp":"哦",
"trad":"哦",
"pinyin":"o5",
"def": ["sentence-final particle that conveys informality, warmth, friendliness or intimacy","may also indicate that one is stating a fact that the other person is not aware of"]
},
"应该":
{"simp":"应该",
"trad":"應該",
"pinyin":"ying1 gai1",
"def": ["ought to","should","must"]
},
"之":
{"simp":"之",
"trad":"之",
"pinyin":"zhi1",
"def": ["(possessive particle, literary equivalent of 的[de5])","him","her","it"]
},
"夜":
{"simp":"夜",
"trad":"夜",
"pinyin":"ye4",
"def": ["night"]
},
"就是":
{"simp":"就是",
"trad":"就是",
"pinyin":"jiu4 shi4",
"def": ["(emphasizes that sth is precisely or exactly as stated)","precisely","exactly","even","if","just like","in the same way as"]
},
"基本":
{"simp":"基本",
"trad":"基本",
"pinyin":"ji1 ben3",
"def": ["basic","fundamental","main","elementary"]
},
"精神":
{"simp":"精神",
"trad":"精神",
"pinyin":"jing1 shen5",
"def": ["vigor","vitality","drive","spiritual"]
},
"星期":
{"simp":"星期",
"trad":"星期",
"pinyin":"xing1 qi1",
"def": ["week","CL:個|个[ge4]","day of the week","Sunday"]
},
"好奇":
{"simp":"好奇",
"trad":"好奇",
"pinyin":"hao4 qi2",
"def": ["inquisitive","curious","inquisitiveness","curiosity"]
},
"的确":
{"simp":"的确",
"trad":"的確",
"pinyin":"di2 que4",
"def": ["really","indeed"]
},
"塑料":
{"simp":"塑料",
"trad":"塑料",
"pinyin":"su4 liao4",
"def": ["plastics","CL:種|种[zhong3]"]
},
"熔化":
{"simp":"熔化",
"trad":"熔化",
"pinyin":"rong2 hua4",
"def": ["to melt (of ice, metals etc)"]
},
"装":
{"simp":"装",
"trad":"裝",
"pinyin":"zhuang1",
"def": ["adornment","to adorn","dress","clothing","costume (of an actor in a play)","to play a role","to pretend","to install","to fix","to wrap (sth in a bag)","to load","to pack"]
},
"一下":
{"simp":"一下",
"trad":"一下",
"pinyin":"yi1 xia4",
"def": ["(used after a verb) give it a go","to do (sth for a bit to give it a try)","one time","once","in a while","all of a sudden","all at once"]
},
"翻":
{"simp":"翻",
"trad":"飜",
"pinyin":"fan1",
"def": ["variant of 翻[fan1]"]
},
"好好":
{"simp":"好好",
"trad":"好好",
"pinyin":"hao3 hao3",
"def": ["well","carefully","nicely","properly"]
},
"外面":
{"simp":"外面",
"trad":"外面",
"pinyin":"wai4 mian4",
"def": ["outside (also pr. [wai4 mian5] for this sense)","surface","exterior","external appearance"]
},
"成了":
{"simp":"成了",
"trad":"成了",
"pinyin":"cheng2 le5",
"def": ["to be done","to be ready","that's enough!","that will do!"]
},
"有些":
{"simp":"有些",
"trad":"有些",
"pinyin":"you3 xie1",
"def": ["some","somewhat"]
},
"感觉到":
{"simp":"感觉到",
"trad":"感覺到",
"pinyin":"gan3 jue2 dao4",
"def": ["to feel","to sense","to detect","to perceive","to become aware"]
},
"梦":
{"simp":"梦",
"trad":"夢",
"pinyin":"meng4",
"def": ["dream","CL:場|场[chang2],個|个[ge4]","(bound form) to dream"]
},
"烧":
{"simp":"烧",
"trad":"燒",
"pinyin":"shao1",
"def": ["to burn","to cook","to stew","to bake","to roast","to heat","to boil (tea, water etc)","fever","to run a temperature","(coll.) to let things go to one's head"]
},
"痕迹":
{"simp":"痕迹",
"trad":"痕跡",
"pinyin":"hen2 ji4",
"def": ["vestige","mark","trace"]
},
"任何":
{"simp":"任何",
"trad":"任何",
"pinyin":"ren4 he2",
"def": ["any","whatever","whichever","whatsoever"]
},
"架":
{"simp":"架",
"trad":"架",
"pinyin":"jia4",
"def": ["to support","frame","rack","framework","classifier for planes, large vehicles, radios etc"]
},
"但书":
{"simp":"但书",
"trad":"但書",
"pinyin":"dan4 shu1",
"def": ["proviso","qualifying clause"]
},
"灰烬":
{"simp":"灰烬",
"trad":"灰燼",
"pinyin":"hui1 jin4",
"def": ["ashes"]
},
"书约":
{"simp":"书约",
"trad":"書約",
"pinyin":"shu1 yue1",
"def": ["book contract"]
},
"走过":
{"simp":"走过",
"trad":"走過",
"pinyin":"zou3 guo4",
"def": ["to walk past","to pass by"]
},
"充满":
{"simp":"充满",
"trad":"充滿",
"pinyin":"chong1 man3",
"def": ["full of","brimming with","very full","permeated"]
},
"书架":
{"simp":"书架",
"trad":"書架",
"pinyin":"shu1 jia4",
"def": ["bookshelf","CL:個|个[ge4]"]
},
"四顾":
{"simp":"四顾",
"trad":"四顧",
"pinyin":"si4 gu4",
"def": ["to look around"]
},
"正常":
{"simp":"正常",
"trad":"正常",
"pinyin":"zheng4 chang2",
"def": ["regular","normal","ordinary"]
},
"冒出来":
{"simp":"冒出来",
"trad":"冒出來",
"pinyin":"mao4 chu1 lai2",
"def": ["to emerge; to pop up; to spring forth; to appear from nowhere"]
},
"地毯":
{"simp":"地毯",
"trad":"地毯",
"pinyin":"di4 tan3",
"def": ["carpet","rug"]
},
"爸":
{"simp":"爸",
"trad":"爸",
"pinyin":"ba4",
"def": ["father","dad","pa","papa"]
},
"尊":
{"simp":"尊",
"trad":"尊",
"pinyin":"zun1",
"def": ["senior","of a senior generation","to honor","to respect","honorific","classifier for cannons and statues","ancient wine vessel"]
},
"手臂":
{"simp":"手臂",
"trad":"手臂",
"pinyin":"shou3 bi4",
"def": ["arm","helper"]
},
"身":
{"simp":"身",
"trad":"身",
"pinyin":"shen1",
"def": ["body","life","oneself","personally","one's morality and conduct","the main part of a structure or body","pregnant","classifier for sets of clothes: suit, twinset","Kangxi radical 158"]
},
"仍旧":
{"simp":"仍旧",
"trad":"仍舊",
"pinyin":"reng2 jiu4",
"def": ["still (remaining)","to remain (the same)","yet"]
},
"身上":
{"simp":"身上",
"trad":"身上",
"pinyin":"shen1 shang5",
"def": ["on the body","at hand","among"]
},
"茫然":
{"simp":"茫然",
"trad":"茫然",
"pinyin":"mang2 ran2",
"def": ["blankly","vacantly","at a loss"]
},
"那是":
{"simp":"那是",
"trad":"那是",
"pinyin":"na4 shi5",
"def": ["(coll.) of course","naturally","indeed"]
},
"皱折":
{"simp":"皱折",
"trad":"皺折",
"pinyin":"zhou4 zhe2",
"def": ["crease","fold","ripple","lap"]
},
"没有":
{"simp":"没有",
"trad":"沒有",
"pinyin":"mei2 you3",
"def": ["haven't","hasn't","doesn't exist","to not have","to not be"]
},
"黑色":
{"simp":"黑色",
"trad":"黑色",
"pinyin":"hei1 se4",
"def": ["black"]
},
"大理石":
{"simp":"大理石",
"trad":"大理石",
"pinyin":"da4 li3 shi2",
"def": ["marble"]
},
"更":
{"simp":"更",
"trad":"更",
"pinyin":"geng4",
"def": ["more","even more","further","still","still more"]
},
"色":
{"simp":"色",
"trad":"色",
"pinyin":"shai3",
"def": ["(coll.) color","used in 色子[shai3 zi5]"]
},
"确切":
{"simp":"确切",
"trad":"確切",
"pinyin":"que4 qie4",
"def": ["definite","exact","precise"]
},
"瞬间":
{"simp":"瞬间",
"trad":"瞬間",
"pinyin":"shun4 jian1",
"def": ["in an instant","in a flash"]
},
"中选":
{"simp":"中选",
"trad":"中選",
"pinyin":"zhong4 xuan3",
"def": ["to win an election","to get a position by passing the imperial exam"]
},
"色彩":
{"simp":"色彩",
"trad":"色彩",
"pinyin":"se4 cai3",
"def": ["tint","coloring","coloration","(fig.) flavor","character"]
},
"灰白色":
{"simp":"灰白色",
"trad":"灰白色",
"pinyin":"hui1 bai2 se4",
"def": ["ash gray"]
},
"强":
{"simp":"强",
"trad":"彊",
"pinyin":"qiang3",
"def": ["variant of 強|强[qiang3]"]
},
"造成":
{"simp":"造成",
"trad":"造成",
"pinyin":"zao4 cheng2",
"def": ["to bring about","to create","to cause"]
},
"团":
{"simp":"团",
"trad":"糰",
"pinyin":"tuan2",
"def": ["dumpling"]
},
"滴":
{"simp":"滴",
"trad":"滴",
"pinyin":"di1",
"def": ["a drop","to drip"]
},
"门":
{"simp":"门",
"trad":"門",
"pinyin":"men2",
"def": ["gate","door","CL:扇[shan4]","gateway","doorway","CL:個|个[ge4]","opening","valve","switch","way to do something","knack","family","house","(religious) sect","school (of thought)","class","category","phylum or division (taxonomy)","classifier for large guns","classifier for lessons, subjects, branches of technology","(suffix) -gate (i.e. scandal; derived from Watergate)"]
},
"尖":
{"simp":"尖",
"trad":"尖",
"pinyin":"jian1",
"def": ["point (of needle)","sharp","shrewd","pointed"]
},
"露珠":
{"simp":"露珠",
"trad":"露珠",
"pinyin":"lu4 zhu1",
"def": ["dewdrop"]
},
"片":
{"simp":"片",
"trad":"片",
"pinyin":"pian4",
"def": ["thin piece","flake","a slice","film","TV play","to slice","to carve thin","partial","incomplete","one-sided","classifier for slices, tablets, tract of land, area of water","classifier for CDs, movies, DVDs etc","used with numeral 一[yi1]: classifier for scenario, scene, feeling, atmosphere, sound etc","Kangxi radical 91"]
},
"把":
{"simp":"把",
"trad":"把",
"pinyin":"ba4",
"def": ["handle"]
},
"伸":
{"simp":"伸",
"trad":"伸",
"pinyin":"shen1",
"def": ["to stretch","to extend"]
},
"当":
{"simp":"当",
"trad":"當",
"pinyin":"dang4",
"def": ["at or in the very same...","suitable","adequate","fitting","proper","to replace","to regard as","to think","to pawn","(coll.) to fail (a student)"]
},
"栩栩如生":
{"simp":"栩栩如生",
"trad":"栩栩如生",
"pinyin":"xu3 xu3 ru2 sheng1",
"def": ["vivid and lifelike (idiom); true to life","realistic"]
},
"因":
{"simp":"因",
"trad":"因",
"pinyin":"yin1",
"def": ["cause","reason","because"]
},
"产生":
{"simp":"产生",
"trad":"產生",
"pinyin":"chan3 sheng1",
"def": ["to arise; to come into being; to come about","to give rise to; to bring into being; to bring about; to produce; to engender; to generate"]
},
"头部":
{"simp":"头部",
"trad":"頭部",
"pinyin":"tou2 bu4",
"def": ["head"]
},
"护":
{"simp":"护",
"trad":"護",
"pinyin":"hu4",
"def": ["to protect"]
},
"摸":
{"simp":"摸",
"trad":"摸",
"pinyin":"mo2",
"def": ["variant of 摹[mo2]"]
},
"狠狠":
{"simp":"狠狠",
"trad":"狠狠",
"pinyin":"hen3 hen3",
"def": ["resolutely","firmly","ferociously","ruthlessly"]
},
"而是":
{"simp":"而是",
"trad":"而是",
"pinyin":"er2 shi4",
"def": ["rather"]
},
"显然":
{"simp":"显然",
"trad":"顯然",
"pinyin":"xian3 ran2",
"def": ["clearly; evidently; obviously"]
},
"向上":
{"simp":"向上",
"trad":"向上",
"pinyin":"xiang4 shang4",
"def": ["upward","up","to advance","to try to improve oneself","to make progress"]
},
"却是":
{"simp":"却是",
"trad":"卻是",
"pinyin":"que4 shi4",
"def": ["nevertheless","actually","the fact is ..."]
},
"多":
{"simp":"多",
"trad":"多",
"pinyin":"duo1",
"def": ["many","much","often","a lot of","numerous","more","in excess","how (to what extent)","multi-","Taiwan pr. [duo2] when it means \"how\""]
},
"表面":
{"simp":"表面",
"trad":"表面",
"pinyin":"biao3 mian4",
"def": ["surface","face","outside","appearance"]
},
"堆":
{"simp":"堆",
"trad":"堆",
"pinyin":"dui1",
"def": ["to pile up","to heap up","a mass","pile","heap","stack","large amount"]
},
"抓":
{"simp":"抓",
"trad":"抓",
"pinyin":"zhua1",
"def": ["to grab","to catch","to arrest","to snatch","to scratch"]
},
"耳":
{"simp":"耳",
"trad":"耳",
"pinyin":"er3",
"def": ["ear","handle (archaeology)","and that is all (Classical Chinese)"]
},
"千焦":
{"simp":"千焦",
"trad":"千焦",
"pinyin":"qian1 jiao1",
"def": ["kilojoule"]
},
"也":
{"simp":"也",
"trad":"也",
"pinyin":"ye3",
"def": ["also","too","(in Classical Chinese) final particle implying affirmation"]
},
"不过":
{"simp":"不过",
"trad":"不過",
"pinyin":"bu4 guo4",
"def": ["only","merely","no more than","but","however","anyway (to get back to a previous topic)","cannot be more (after adjectival)"]
},
"炸药":
{"simp":"炸药",
"trad":"炸藥",
"pinyin":"zha4 yao4",
"def": ["explosive (material)"]
},
"吸":
{"simp":"吸",
"trad":"吸",
"pinyin":"xi1",
"def": ["to breathe","to suck in","to absorb","to inhale"]
},
"至":
{"simp":"至",
"trad":"至",
"pinyin":"zhi4",
"def": ["to arrive","most","to","until"]
},
"一生":
{"simp":"一生",
"trad":"一生",
"pinyin":"yi1 sheng1",
"def": ["all one's life","throughout one's life"]
},
"万":
{"simp":"万",
"trad":"萬",
"pinyin":"wan4",
"def": ["ten thousand","a great number"]
},
"两":
{"simp":"两",
"trad":"兩",
"pinyin":"liang3",
"def": ["two","both","some","a few","tael, unit of weight equal to 50 grams (modern) or 1⁄16 of a catty 斤[jin1] (old)"]
},
"焦耳":
{"simp":"焦耳",
"trad":"焦耳",
"pinyin":"jiao1 er3",
"def": ["joule (loanword)"]
},
"高达":
{"simp":"高达",
"trad":"高達",
"pinyin":"gao1 da2",
"def": ["to attain","to reach up to"]
},
"密度":
{"simp":"密度",
"trad":"密度",
"pinyin":"mi4 du4",
"def": ["density","thickness"]
},
"要":
{"simp":"要",
"trad":"要",
"pinyin":"yao4",
"def": ["important","vital","to want","to ask for","will","going to (as future auxiliary)","may","must","(used in a comparison) must be","probably","if"]
},
"记起":
{"simp":"记起",
"trad":"記起",
"pinyin":"ji4 qi3",
"def": ["to recall","to recollect"]
},
"能量":
{"simp":"能量",
"trad":"能量",
"pinyin":"neng2 liang4",
"def": ["energy","capabilities"]
},
"后来":
{"simp":"后来",
"trad":"後來",
"pinyin":"hou4 lai2",
"def": ["afterwards","later"]
},
"立方厘米":
{"simp":"立方厘米",
"trad":"立方釐米",
"pinyin":"li4 fang1 li2 mi3",
"def": ["cubic centimeter"]
},
"星空":
{"simp":"星空",
"trad":"星空",
"pinyin":"xing1 kong1",
"def": ["starry sky","the heavens"]
},
"面容":
{"simp":"面容",
"trad":"面容",
"pinyin":"mian4 rong2",
"def": ["appearance","facial features"]
},
"所":
{"simp":"所",
"trad":"所",
"pinyin":"suo3",
"def": ["actually","place","classifier for houses, small buildings, institutions etc","that which","particle introducing a relative clause or passive","CL:個|个[ge4]"]
},
"被":
{"simp":"被",
"trad":"被",
"pinyin":"bei4",
"def": ["quilt","by","(indicates passive-voice clauses)","(literary) to cover","to meet with","(coll.) (since c. 2009) used before a verb that does not accurately represent what actually happened, to describe with black humor how sb or sth was dealt with by the authorities (as in 被自殺|被自杀[bei4 zi4 sha1])"]
},
"灵魂":
{"simp":"灵魂",
"trad":"靈魂",
"pinyin":"ling2 hun2",
"def": ["soul","spirit"]
},
"超":
{"simp":"超",
"trad":"超",
"pinyin":"chao1",
"def": ["to exceed","to overtake","to surpass","to transcend","to pass","to cross","ultra-","super-"]
},
"飞出":
{"simp":"飞出",
"trad":"飛出",
"pinyin":"fei1 chu1",
"def": ["to fly out"]
},
"群":
{"simp":"群",
"trad":"群",
"pinyin":"qun2",
"def": ["group","crowd","flock, herd, pack etc"]
},
"除此之外":
{"simp":"除此之外",
"trad":"除此之外",
"pinyin":"chu2 ci3 zhi1 wai4",
"def": ["apart from this","in addition to this"]
},
"蓝色":
{"simp":"蓝色",
"trad":"藍色",
"pinyin":"lan2 se4",
"def": ["blue (color)"]
},
"不断":
{"simp":"不断",
"trad":"不斷",
"pinyin":"bu4 duan4",
"def": ["unceasing","uninterrupted","continuous","constant"]
},
"雾":
{"simp":"雾",
"trad":"霧",
"pinyin":"wu4",
"def": ["fog","mist","CL:場|场[chang2],陣|阵[zhen4]"]
},
"底":
{"simp":"底",
"trad":"底",
"pinyin":"di3",
"def": ["background","bottom","base","end (of the month, year etc)","remnants","(math.) radix","base"]
},
"深":
{"simp":"深",
"trad":"深",
"pinyin":"shen1",
"def": ["deep","depth","deeply","(of a color) dark","deep","rich"]
},
"限":
{"simp":"限",
"trad":"限",
"pinyin":"xian4",
"def": ["to limit","to restrict","(bound form) limit","bound"]
},
"有无":
{"simp":"有无",
"trad":"有無",
"pinyin":"you3 wu2",
"def": ["to have or have not","surplus and shortfall","tangible and intangible","corporeal and incorporeal"]
},
"辉":
{"simp":"辉",
"trad":"輝",
"pinyin":"hui1",
"def": ["splendor","to shine upon"]
},
"似乎":
{"simp":"似乎",
"trad":"似乎",
"pinyin":"si4 hu1",
"def": ["apparently","to seem","to appear","as if","seemingly"]
},
"冷笑":
{"simp":"冷笑",
"trad":"冷笑",
"pinyin":"leng3 xiao4",
"def": ["to sneer","to laugh grimly","grin of dissatisfaction (bitterness, helplessness, indignation etc)","bitter, grim, sarcastic or angry smile"]
},
"处":
{"simp":"处",
"trad":"處",
"pinyin":"chu4",
"def": ["place","location","spot","point","office","department","bureau","respect","classifier for locations or items of damage: spot, point"]
},
"米":
{"simp":"米",
"trad":"米",
"pinyin":"mi3",
"def": ["rice","CL:粒[li4]","meter (classifier)"]
},
"叫声":
{"simp":"叫声",
"trad":"叫聲",
"pinyin":"jiao4 sheng1",
"def": ["yelling (sound made by person)","barking","braying","roaring (sound made by animals)"]
},
"美妙":
{"simp":"美妙",
"trad":"美妙",
"pinyin":"mei3 miao4",
"def": ["beautiful","wonderful","splendid"]
},
"上半":
{"simp":"上半",
"trad":"上半",
"pinyin":"shang4 ban4",
"def": ["first half"]
},
"找到":
{"simp":"找到",
"trad":"找到",
"pinyin":"zhao3 dao4",
"def": ["to find"]
},
"飘":
{"simp":"飘",
"trad":"飄",
"pinyin":"piao1",
"def": ["to float"]
},
"烟":
{"simp":"烟",
"trad":"煙",
"pinyin":"yan1",
"def": ["cigarette or pipe tobacco","CL:根[gen1]","smoke","mist","vapour","CL:縷|缕[lu:3]","tobacco plant","(of the eyes) to be irritated by smoke"]
},
"模式":
{"simp":"模式",
"trad":"模式",
"pinyin":"mo2 shi4",
"def": ["mode","method","pattern"]
},
"继续":
{"simp":"继续",
"trad":"繼續",
"pinyin":"ji4 xu4",
"def": ["to continue","to proceed with","to go on with"]
},
"亲人":
{"simp":"亲人",
"trad":"親人",
"pinyin":"qin1 ren2",
"def": ["one's close relatives"]
},
"还有":
{"simp":"还有",
"trad":"還有",
"pinyin":"hai2 you3",
"def": ["furthermore","in addition","still","also"]
},
"可能":
{"simp":"可能",
"trad":"可能",
"pinyin":"ke3 neng2",
"def": ["might (happen)","possible","probable","possibility","probability","maybe","perhaps","CL:個|个[ge4]"]
},
"如果":
{"simp":"如果",
"trad":"如果",
"pinyin":"ru2 guo3",
"def": ["if","in case","in the event that"]
},
"动作":
{"simp":"动作",
"trad":"動作",
"pinyin":"dong4 zuo4",
"def": ["movement","motion","action","CL:個|个[ge4]"]
},
"灰":
{"simp":"灰",
"trad":"灰",
"pinyin":"hui1",
"def": ["ash","dust","lime","gray","discouraged; dejected"]
},
"抓住":
{"simp":"抓住",
"trad":"抓住",
"pinyin":"zhua1 zhu4",
"def": ["to grab hold of; to capture"]
},
"一辈子":
{"simp":"一辈子",
"trad":"一輩子",
"pinyin":"yi1 bei4 zi5",
"def": ["(for) a lifetime"]
},
"吹":
{"simp":"吹",
"trad":"吹",
"pinyin":"chui1",
"def": ["to blow","to play a wind instrument","to blast","to puff","to boast","to brag","to end in failure","to fall through"]
},
"荒原":
{"simp":"荒原",
"trad":"荒原",
"pinyin":"huang1 yuan2",
"def": ["wasteland"]
},
"太古":
{"simp":"太古",
"trad":"太古",
"pinyin":"tai4 gu3",
"def": ["immemorial"]
},
"寻找":
{"simp":"寻找",
"trad":"尋找",
"pinyin":"xun2 zhao3",
"def": ["to seek","to look for"]
},
"想到":
{"simp":"想到",
"trad":"想到",
"pinyin":"xiang3 dao4",
"def": ["to think of","to call to mind","to anticipate"]
},
"透":
{"simp":"透",
"trad":"透",
"pinyin":"tou4",
"def": ["to penetrate","to pass through","thoroughly","completely","transparent","to appear","to show"]
},
"尖利":
{"simp":"尖利",
"trad":"尖利",
"pinyin":"jian1 li4",
"def": ["sharp","keen","cutting","shrill","piercing"]
},
"叫":
{"simp":"叫",
"trad":"呌",
"pinyin":"jiao4",
"def": ["variant of 叫[jiao4]"]
},
"啸":
{"simp":"啸",
"trad":"嘯",
"pinyin":"xiao4",
"def": ["to hiss","to whistle"]
},
"低沉":
{"simp":"低沉",
"trad":"低沉",
"pinyin":"di1 chen2",
"def": ["overcast","gloomy","downcast","deep and low (of sound)","muffled"]
},
"上方":
{"simp":"上方",
"trad":"上方",
"pinyin":"shang4 fang1",
"def": ["place above (it)","upper part (of it)"]
},
"深渊":
{"simp":"深渊",
"trad":"深淵",
"pinyin":"shen1 yuan1",
"def": ["abyss"]
},
"嘲讽":
{"simp":"嘲讽",
"trad":"嘲諷",
"pinyin":"chao2 feng3",
"def": ["to sneer at","to ridicule","to taunt"]
},
"半透明":
{"simp":"半透明",
"trad":"半透明",
"pinyin":"ban4 tou4 ming2",
"def": ["translucent","semitransparent"]
},
"好像":
{"simp":"好像",
"trad":"好像",
"pinyin":"hao3 xiang4",
"def": ["as if","to seem like"]
},
"太空":
{"simp":"太空",
"trad":"太空",
"pinyin":"tai4 kong1",
"def": ["outer space"]
},
"到":
{"simp":"到",
"trad":"到",
"pinyin":"dao4",
"def": ["to (a place)","until (a time)","up to","to go","to arrive","(verb complement denoting completion or result of an action)"]
},
"伴随":
{"simp":"伴随",
"trad":"伴隨",
"pinyin":"ban4 sui2",
"def": ["to accompany","to follow","to occur together with","concomitant"]
},
"也许":
{"simp":"也许",
"trad":"也許",
"pinyin":"ye3 xu3",
"def": ["perhaps","maybe"]
},
"玩世不恭":
{"simp":"玩世不恭",
"trad":"玩世不恭",
"pinyin":"wan2 shi4 bu4 gong1",
"def": ["to trifle without respect (idiom); to despise worldly conventions","frivolous"]
},
"或":
{"simp":"或",
"trad":"或",
"pinyin":"huo4",
"def": ["maybe","perhaps","might","possibly","or"]
},
"个":
{"simp":"个",
"trad":"箇",
"pinyin":"ge4",
"def": ["variant of 個|个[ge4]"]
},
"头顶":
{"simp":"头顶",
"trad":"頭頂",
"pinyin":"tou2 ding3",
"def": ["top of the head"]
},
"散落":
{"simp":"散落",
"trad":"散落",
"pinyin":"san4 luo4",
"def": ["to disperse","to fall scattered","to sprinkle"]
},
"吸力":
{"simp":"吸力",
"trad":"吸力",
"pinyin":"xi1 li4",
"def": ["attraction (in gravitation or electrostatics)","attractive force"]
},
"到了":
{"simp":"到了",
"trad":"到了",
"pinyin":"dao4 liao3",
"def": ["at last","finally","in the end"]
},
"越来越":
{"simp":"越来越",
"trad":"越來越",
"pinyin":"yue4 lai2 yue4",
"def": ["more and more"]
},
"每":
{"simp":"每",
"trad":"每",
"pinyin":"mei3",
"def": ["each","every"]
},
"绊住":
{"simp":"绊住",
"trad":"絆住",
"pinyin":"ban4 zhu4",
"def": ["to entangle","to hinder","to impede movement"]
},
"让":
{"simp":"让",
"trad":"讓",
"pinyin":"rang4",
"def": ["to yield","to permit","to let sb do sth","to have sb do sth","to make sb (feel sad etc)","by (indicates the agent in a passive clause, like 被[bei4])"]
},
"将":
{"simp":"将",
"trad":"將",
"pinyin":"qiang1",
"def": ["to desire","to invite","to request"]
},
"画":
{"simp":"画",
"trad":"畫",
"pinyin":"hua4",
"def": ["to draw","picture","painting","CL:幅[fu2],張|张[zhang1]","classifier for paintings etc","variant of 劃|划[hua4]"]
},
"一块":
{"simp":"一块",
"trad":"一塊",
"pinyin":"yi1 kuai4",
"def": ["one block","one piece","one (unit of money)","together","in the same place","in company"]
},
"知道":
{"simp":"知道",
"trad":"知道",
"pinyin":"zhi1 dao4",
"def": ["to know","to become aware of","also pr. [zhi1 dao5]"]
},
"机":
{"simp":"机",
"trad":"機",
"pinyin":"ji1",
"def": ["machine","engine","opportunity","intention","aircraft","pivot","crucial point","flexible (quick-witted)","organic","CL:臺|台[tai2]"]
},
"条":
{"simp":"条",
"trad":"條",
"pinyin":"tiao2",
"def": ["strip","item","article","clause (of law or treaty)","classifier for long thin things (ribbon, river, road, trousers etc)"]
},
"浓密":
{"simp":"浓密",
"trad":"濃密",
"pinyin":"nong2 mi4",
"def": ["thick","murky"]
},
"最后":
{"simp":"最后",
"trad":"最後",
"pinyin":"zui4 hou4",
"def": ["final","last","finally","ultimate"]
},
"在":
{"simp":"在",
"trad":"在",
"pinyin":"zai4",
"def": ["(located) at","(to be) in","to exist","in the middle of doing sth","(indicating an action in progress)"]
},
"最高":
{"simp":"最高",
"trad":"最高",
"pinyin":"zui4 gao1",
"def": ["tallest","highest","supreme (court etc)"]
},
"机遇":
{"simp":"机遇",
"trad":"機遇",
"pinyin":"ji1 yu4",
"def": ["opportunity","favorable circumstance","stroke of luck"]
},
"星星":
{"simp":"星星",
"trad":"星星",
"pinyin":"xing1 xing5",
"def": ["star in the sky"]
},
"概率":
{"simp":"概率",
"trad":"概率",
"pinyin":"gai4 lu:4",
"def": ["probability (math.)"]
},
"簇":
{"simp":"簇",
"trad":"簇",
"pinyin":"cu4",
"def": ["crowded","framework for silkworms","gather foliage","bunch","classifier for bunched objects"]
},
"根":
{"simp":"根",
"trad":"根",
"pinyin":"gen1",
"def": ["root","basis","classifier for long slender objects, e.g. cigarettes, guitar strings","CL:條|条[tiao2]","radical (chemistry)"]
},
"属于":
{"simp":"属于",
"trad":"屬於",
"pinyin":"shu3 yu2",
"def": ["to be classified as","to belong to","to be part of"]
},
"小":
{"simp":"小",
"trad":"小",
"pinyin":"xiao3",
"def": ["small","tiny","few","young"]
},
"虽然":
{"simp":"虽然",
"trad":"雖然",
"pinyin":"sui1 ran2",
"def": ["although","even though","even if"]
},
"干":
{"simp":"干",
"trad":"幹",
"pinyin":"gan4",
"def": ["tree trunk","main part of sth","to manage","to work","to do","capable","cadre","to kill (slang)","to fuck (vulgar)","(coll.) pissed off","annoyed"]
},
"度":
{"simp":"度",
"trad":"度",
"pinyin":"duo2",
"def": ["to estimate","Taiwan pr. [duo4]"]
},
"还是":
{"simp":"还是",
"trad":"還是",
"pinyin":"hai2 shi5",
"def": ["or","still","nevertheless","had better"]
},
"经历":
{"simp":"经历",
"trad":"經歷",
"pinyin":"jing1 li4",
"def": ["experience","CL:個|个[ge4],次[ci4]","to experience","to go through"]
},
"眼睛":
{"simp":"眼睛",
"trad":"眼睛",
"pinyin":"yan3 jing5",
"def": ["eye","CL:隻|只[zhi1],雙|双[shuang1]"]
},
"点":
{"simp":"点",
"trad":"點",
"pinyin":"dian3",
"def": ["point","dot","drop","speck","o'clock","point (in space or time)","to draw a dot","to check on a list","to choose","to order (food in a restaurant)","to touch briefly","to hint","to light","to ignite","to pour a liquid drop by drop","(old) one fifth of a two-hour watch 更[geng1]","dot stroke in Chinese characters","classifier for items"]
},
"一口气":
{"simp":"一口气",
"trad":"一口氣",
"pinyin":"yi1 kou3 qi4",
"def": ["one breath","in one breath","at a stretch"]
},
"拿出":
{"simp":"拿出",
"trad":"拿出",
"pinyin":"na2 chu1",
"def": ["to take out","to put out","to provide","to put forward (a proposal)","to come up with (evidence)"]
},
"闪电":
{"simp":"闪电",
"trad":"閃電",
"pinyin":"shan3 dian4",
"def": ["lightning","CL:道[dao4]"]
},
"幽灵":
{"simp":"幽灵",
"trad":"幽靈",
"pinyin":"you1 ling2",
"def": ["specter","apparition","ghost"]
},
"像":
{"simp":"像",
"trad":"像",
"pinyin":"xiang4",
"def": ["to resemble","to be like","to look as if","such as","appearance","image","portrait","image under a mapping (math.)"]
},
"图像处理":
{"simp":"图像处理",
"trad":"圖像處理",
"pinyin":"tu2 xiang4 chu3 li3",
"def": ["image processing"]
},
"迷惑":
{"simp":"迷惑",
"trad":"迷惑",
"pinyin":"mi2 huo5",
"def": ["to puzzle","to confuse","to baffle"]
},
"啊":
{"simp":"啊",
"trad":"啊",
"pinyin":"a5",
"def": ["modal particle ending sentence, showing affirmation, approval, or consent"]
},
"过后":
{"simp":"过后",
"trad":"過後",
"pinyin":"guo4 hou4",
"def": ["after the event"]
},
"一样":
{"simp":"一样",
"trad":"一樣",
"pinyin":"yi1 yang4",
"def": ["same","like","equal to","the same as","just like"]
},
"一阵":
{"simp":"一阵",
"trad":"一陣",
"pinyin":"yi1 zhen4",
"def": ["a burst","a fit","a peal","a spell (period of time)"]
},
"回答":
{"simp":"回答",
"trad":"回答",
"pinyin":"hui2 da2",
"def": ["to reply; to answer","reply; answer"]
},
"一边":
{"simp":"一边",
"trad":"一邊",
"pinyin":"yi1 bian1",
"def": ["one side","either side","on the one hand","on the other hand","doing while"]
},
"路线":
{"simp":"路线",
"trad":"路線",
"pinyin":"lu4 xian4",
"def": ["itinerary","route","political line (e.g. right revisionist road)","CL:條|条[tiao2]"]
},
"内部":
{"simp":"内部",
"trad":"內部",
"pinyin":"nei4 bu4",
"def": ["interior","inside (part, section)","internal"]
},
"分":
{"simp":"分",
"trad":"分",
"pinyin":"fen4",
"def": ["part","share","ingredient","component"]
},
"后":
{"simp":"后",
"trad":"後",
"pinyin":"hou4",
"def": ["back","behind","rear","afterwards","after","later","post-"]
},
"穿":
{"simp":"穿",
"trad":"穿",
"pinyin":"chuan1",
"def": ["to wear","to put on","to dress","to bore through","to pierce","to perforate","to penetrate","to pass through","to thread"]
},
"同":
{"simp":"同",
"trad":"衕",
"pinyin":"tong4",
"def": ["see 衚衕|胡同[hu2 tong4]"]
},
"T":
{"simp":"T",
"trad":"T",
"pinyin":"T",
"def": ["(slang) butch (lesbian stereotype)"]
},
"那样":
{"simp":"那样",
"trad":"那樣",
"pinyin":"na4 yang4",
"def": ["that kind","that sort"]
},
"放":
{"simp":"放",
"trad":"放",
"pinyin":"fang4",
"def": ["to put","to place","to release","to free","to let go","to let out","to set off (fireworks)"]
},
"地":
{"simp":"地",
"trad":"地",
"pinyin":"di4",
"def": ["earth","ground","field","place","land","CL:片[pian4]"]
},
"可":
{"simp":"可",
"trad":"可",
"pinyin":"ke4",
"def": ["used in 可汗[ke4 han2]"]
},
"飘动":
{"simp":"飘动",
"trad":"飄動",
"pinyin":"piao1 dong4",
"def": ["to float","to drift"]
},
"断断续续":
{"simp":"断断续续",
"trad":"斷斷續續",
"pinyin":"duan4 duan4 xu4 xu4",
"def": ["intermittent","off and on","discontinuous","stop-go","stammering","disjointed","inarticulate"]
},
"和":
{"simp":"和",
"trad":"龢",
"pinyin":"he2",
"def": ["old variant of 和[he2]","harmonious"]
},
"喝":
{"simp":"喝",
"trad":"喝",
"pinyin":"he4",
"def": ["to shout"]
},
"散尽":
{"simp":"散尽",
"trad":"散盡",
"pinyin":"san4 jin4",
"def": ["to be totally dispersed (crowd)"]
},
"伸出":
{"simp":"伸出",
"trad":"伸出",
"pinyin":"shen1 chu1",
"def": ["to extend"]
},
"现在":
{"simp":"现在",
"trad":"現在",
"pinyin":"xian4 zai4",
"def": ["now","at present","at the moment","modern","current","nowadays"]
},
"石头":
{"simp":"石头",
"trad":"石頭",
"pinyin":"shi2 tou5",
"def": ["stone","CL:塊|块[kuai4]"]
},
"一切":
{"simp":"一切",
"trad":"一切",
"pinyin":"yi1 qie4",
"def": ["everything","every","all"]
},
"插":
{"simp":"插",
"trad":"揷",
"pinyin":"cha1",
"def": ["old variant of 插[cha1]"]
},
"枝":
{"simp":"枝",
"trad":"枝",
"pinyin":"zhi1",
"def": ["branch","classifier for sticks, rods, pencils etc"]
},
"恢复":
{"simp":"恢复",
"trad":"恢復",
"pinyin":"hui1 fu4",
"def": ["to reinstate","to resume","to restore","to recover","to regain","to rehabilitate"]
},
"漂":
{"simp":"漂",
"trad":"漂",
"pinyin":"piao4",
"def": ["elegant","polished"]
},
"傍晚":
{"simp":"傍晚",
"trad":"傍晚",
"pinyin":"bang4 wan3",
"def": ["in the evening","when night falls","towards evening","at night fall","at dusk"]
},
"事":
{"simp":"事",
"trad":"事",
"pinyin":"shi4",
"def": ["matter","thing","item","work","affair","CL:件[jian4],樁|桩[zhuang1],回[hui2]"]
},
"但":
{"simp":"但",
"trad":"但",
"pinyin":"dan4",
"def": ["but","yet","however","only","merely","still"]
},
"来":
{"simp":"来",
"trad":"來",
"pinyin":"lai2",
"def": ["to come","to arrive","to come round","ever since","next"]
},
"密":
{"simp":"密",
"trad":"密",
"pinyin":"mi4",
"def": ["secret","confidential","close","thick","dense"]
},
"火苗":
{"simp":"火苗",
"trad":"火苗",
"pinyin":"huo3 miao2",
"def": ["flame"]
},
"看":
{"simp":"看",
"trad":"看",
"pinyin":"kan4",
"def": ["to see","to look at","to read","to watch","to visit","to call on","to consider","to regard as","to look after","to treat (an illness)","to depend on","to feel (that)","(after verb) to give it a try","Watch out! (for a danger)"]
},
"去":
{"simp":"去",
"trad":"去",
"pinyin":"qu4",
"def": ["to go","to go to (a place)","(of a time etc) last","just passed","to send","to remove","to get rid of","to reduce","to be apart from in space or time","to die (euphemism)","to play (a part)","(when used either before or after a verb) to go in order to do sth","(after a verb of motion indicates movement away from the speaker)","(used after certain verbs to indicate detachment or separation)"]
},
"水晶":
{"simp":"水晶",
"trad":"水晶",
"pinyin":"shui3 jing1",
"def": ["crystal"]
},
"不":
{"simp":"不",
"trad":"不",
"pinyin":"bu4",
"def": ["(negative prefix)","not","no"]
},
"终于":
{"simp":"终于",
"trad":"終於",
"pinyin":"zhong1 yu2",
"def": ["at last","in the end","finally","eventually"]
},
"围":
{"simp":"围",
"trad":"圍",
"pinyin":"wei2",
"def": ["to encircle","to surround","all around","to wear by wrapping around (scarf, shawl)"]
},
"灯丝":
{"simp":"灯丝",
"trad":"燈絲",
"pinyin":"deng1 si1",
"def": ["filament (in a lightbulb)"]
},
"我":
{"simp":"我",
"trad":"我",
"pinyin":"wo3",
"def": ["I","me","my"]
},
"夹克":
{"simp":"夹克",
"trad":"夾克",
"pinyin":"jia1 ke4",
"def": ["jacket (loanword)","also pr. [jia2 ke4]"]
},
"喊":
{"simp":"喊",
"trad":"喊",
"pinyin":"han3",
"def": ["to yell","to shout","to call out for (a person)"]
},
"十四":
{"simp":"十四",
"trad":"十四",
"pinyin":"shi2 si4",
"def": ["fourteen","14"]
},
"雷":
{"simp":"雷",
"trad":"雷",
"pinyin":"lei2",
"def": ["thunder","mine (weapon)","(Internet slang) terrifying","terrific"]
},
"雕像":
{"simp":"雕像",
"trad":"雕像",
"pinyin":"diao1 xiang4",
"def": ["sculpture","(carved) statue","CL:尊[zun1]"]
},
"就":
{"simp":"就",
"trad":"就",
"pinyin":"jiu4",
"def": ["at once","right away","only","just (emphasis)","as early as","already","as soon as","then","in that case","as many as","even if","to approach","to move towards","to undertake","to engage in","to suffer","subjected to","to accomplish","to take advantage of","to go with (of foods)","with regard to","concerning"]
},
"微风":
{"simp":"微风",
"trad":"微風",
"pinyin":"wei1 feng1",
"def": ["breeze","light wind"]
},
"举":
{"simp":"举",
"trad":"舉",
"pinyin":"ju3",
"def": ["to lift","to hold up","to cite","to enumerate","to act","to raise","to choose","to elect","act","move","deed"]
},
"蛋糕":
{"simp":"蛋糕",
"trad":"蛋糕",
"pinyin":"dan4 gao1",
"def": ["cake","CL:塊|块[kuai4],個|个[ge4]"]
},
"一声":
{"simp":"一声",
"trad":"一聲",
"pinyin":"yi1 sheng1",
"def": ["first tone in Mandarin (high, level tone)"]
},
"东西":
{"simp":"东西",
"trad":"東西",
"pinyin":"dong1 xi5",
"def": ["thing","stuff","person","CL:個|个[ge4],件[jian4]"]
},
"是":
{"simp":"是",
"trad":"昰",
"pinyin":"shi4",
"def": ["variant of 是[shi4]","(used in given names)"]
},
"恨":
{"simp":"恨",
"trad":"恨",
"pinyin":"hen4",
"def": ["to hate","to regret"]
},
"说":
{"simp":"说",
"trad":"説",
"pinyin":"shuo1",
"def": ["variant of 說|说[shuo1]"]
},
"妈妈":
{"simp":"妈妈",
"trad":"媽媽",
"pinyin":"ma1 ma5",
"def": ["mama","mommy","mother","CL:個|个[ge4],位[wei4]"]
},
"做":
{"simp":"做",
"trad":"做",
"pinyin":"zuo4",
"def": ["to make; to produce","to write; to compose","to do; to engage in; to hold (a party etc)","(of a person) to be (an intermediary, a good student etc); to become (husband and wife, friends etc)","(of a thing) to serve as; to be used for","to assume (an air or manner)"]
},
"哪个":
{"simp":"哪个",
"trad":"哪個",
"pinyin":"na3 ge5",
"def": ["which","who"]
},
"发出":
{"simp":"发出",
"trad":"發出",
"pinyin":"fa1 chu1",
"def": ["to issue (an order, decree etc)","to send out","to dispatch","to produce (a sound)","to let out (a laugh)"]
},
"都":
{"simp":"都",
"trad":"都",
"pinyin":"du1",
"def": ["capital city","metropolis"]
},
"声":
{"simp":"声",
"trad":"聲",
"pinyin":"sheng1",
"def": ["sound","voice","tone","noise","reputation","classifier for sounds"]
},
"人生":
{"simp":"人生",
"trad":"人生",
"pinyin":"ren2 sheng1",
"def": ["life (one's time on earth)"]
},
"小树":
{"simp":"小树",
"trad":"小樹",
"pinyin":"xiao3 shu4",
"def": ["shrub","small tree","sapling","CL:棵[ke1]"]
},
"人":
{"simp":"人",
"trad":"人",
"pinyin":"ren2",
"def": ["person","people","CL:個|个[ge4],位[wei4]"]
},
"三":
{"simp":"三",
"trad":"三",
"pinyin":"san1",
"def": ["three","3"]
},
"那个":
{"simp":"那个",
"trad":"那個",
"pinyin":"na4 ge5",
"def": ["that one","that thing","that (as opposed to this)","(used before a verb or adjective for emphasis)","(used to humorously or indirectly refer to sth embarrassing, funny etc, or when one can't think of the right word)","(used in speech as a filler, similar to \"umm\", \"you know\" etc)","(euph.) menstruation","sex","also pr. [nei4 ge5]"]
},
"指":
{"simp":"指",
"trad":"指",
"pinyin":"zhi3",
"def": ["finger","to point at or to","to indicate or refer to","to depend on","to count on","(of hair) to stand on end"]
},
"刚才":
{"simp":"刚才",
"trad":"剛纔",
"pinyin":"gang1 cai2",
"def": ["just now (variant of 剛才|刚才[gang1 cai2])"]
},
"什么":
{"simp":"什么",
"trad":"什麼",
"pinyin":"shen2 me5",
"def": ["what?","something","anything"]
},
"才":
{"simp":"才",
"trad":"纔",
"pinyin":"cai2",
"def": ["(variant of 才[cai2]) just now","(before an expression of quantity) only"]
},
"颜色":
{"simp":"颜色",
"trad":"顏色",
"pinyin":"yan2 se4",
"def": ["color","countenance","appearance","facial expression","pigment","dyestuff"]
},
"鬼魂":
{"simp":"鬼魂",
"trad":"鬼魂",
"pinyin":"gui3 hun2",
"def": ["ghost"]
},
"密集":
{"simp":"密集",
"trad":"密集",
"pinyin":"mi4 ji2",
"def": ["concentrated","crowded together","intensive","compressed"]
},
"有":
{"simp":"有",
"trad":"有",
"pinyin":"you3",
"def": ["to have","there is","there are","to exist","to be"]
},
"并不":
{"simp":"并不",
"trad":"並不",
"pinyin":"bing4 bu4",
"def": ["not at all","emphatically not"]
},
"这":
{"simp":"这",
"trad":"這",
"pinyin":"zhe4",
"def": ["this","these","(commonly pr. [zhei4] before a classifier, esp. in Beijing)"]
},
"大小":
{"simp":"大小",
"trad":"大小",
"pinyin":"da4 xiao3",
"def": ["dimension","magnitude","size","measurement","large and small","at any rate","adults and children","consideration of seniority"]
},
"窝":
{"simp":"窝",
"trad":"窩",
"pinyin":"wo1",
"def": ["nest","pit or hollow on the human body","lair","den","place","to harbor or shelter","to hold in check","to bend","classifier for litters and broods"]
},
"上":
{"simp":"上",
"trad":"上",
"pinyin":"shang4",
"def": ["on top","upon","above","upper","previous","first (of multiple parts)","to climb","to get onto","to go up","to attend (class or university)"]
},
"暴雨":
{"simp":"暴雨",
"trad":"暴雨",
"pinyin":"bao4 yu3",
"def": ["torrential rain","rainstorm","CL:場|场[chang2],陣|阵[zhen4]"]
},
"从":
{"simp":"从",
"trad":"從",
"pinyin":"cong2",
"def": ["from","through","via","to follow","to obey","to engage in (an activity)","never (in negative sentence)","(Taiwan pr. [zong4]) retainer","assistant","auxiliary","subordinate","related by common paternal grandfather or earlier ancestor"]
},
"唉":
{"simp":"唉",
"trad":"唉",
"pinyin":"ai4",
"def": ["alas","oh dear"]
},
"冷":
{"simp":"冷",
"trad":"冷",
"pinyin":"leng3",
"def": ["cold"]
},
"不见":
{"simp":"不见",
"trad":"不見",
"pinyin":"bu4 jian4",
"def": ["not to see","not to meet","to have disappeared","to be missing"]
},
"旁":
{"simp":"旁",
"trad":"旁",
"pinyin":"pang2",
"def": ["one side","other","different","lateral component of a Chinese character (such as 刂[dao1], 亻[ren2] etc)"]
},
"拖":
{"simp":"拖",
"trad":"拖",
"pinyin":"tuo1",
"def": ["to drag","to tow","to trail","to hang down","to mop (the floor)","to delay","to drag on"]
},
"异样":
{"simp":"异样",
"trad":"異樣",
"pinyin":"yi4 yang4",
"def": ["difference","peculiar"]
},
"看到":
{"simp":"看到",
"trad":"看到",
"pinyin":"kan4 dao4",
"def": ["to see"]
},
"孩子":
{"simp":"孩子",
"trad":"孩子",
"pinyin":"hai2 zi5",
"def": ["child"]
},
"黑白":
{"simp":"黑白",
"trad":"黑白",
"pinyin":"hei1 bai2",
"def": ["black and white","right and wrong","monochrome"]
},
"叶子":
{"simp":"叶子",
"trad":"葉子",
"pinyin":"ye4 zi5",
"def": ["foliage","leaf","CL:片[pian4]","(slang) marijuana","weed"]
},
"笑":
{"simp":"笑",
"trad":"笑",
"pinyin":"xiao4",
"def": ["laugh","smile","CL:個|个[ge4]"]
},
"以":
{"simp":"以",
"trad":"以",
"pinyin":"yi3",
"def": ["to use","by means of","according to","in order to","because of","at (a certain date or place)"]
},
"的":
{"simp":"的",
"trad":"的",
"pinyin":"di4",
"def": ["aim","clear"]
},
"回忆":
{"simp":"回忆",
"trad":"回憶",
"pinyin":"hui2 yi4",
"def": ["to recall","memories","CL:個|个[ge4]"]
},
"直勾勾":
{"simp":"直勾勾",
"trad":"直勾勾",
"pinyin":"zhi2 gou1 gou1",
"def": ["(of one's gaze) fixed","staring"]
},
"变幻莫测":
{"simp":"变幻莫测",
"trad":"變幻莫測",
"pinyin":"bian4 huan4 mo4 ce4",
"def": ["to change unpredictably","unpredictable","erratic","treacherous"]
},
"那":
{"simp":"那",
"trad":"那",
"pinyin":"nuo2",
"def": ["(archaic) many","beautiful","how","old variant of 挪[nuo2]"]
},
"这个":
{"simp":"这个",
"trad":"這個",
"pinyin":"zhe4 ge5",
"def": ["this","this one"]
},
"着":
{"simp":"着",
"trad":"著",
"pinyin":"zhuo2",
"def": ["to wear (clothes)","to contact","to use","to apply"]
},
"爸爸":
{"simp":"爸爸",
"trad":"爸爸",
"pinyin":"ba4 ba5",
"def": ["(informal) father","CL:個|个[ge4],位[wei4]"]
},
"雷声":
{"simp":"雷声",
"trad":"雷聲",
"pinyin":"lei2 sheng1",
"def": ["thunder"]
},
"灯":
{"simp":"灯",
"trad":"燈",
"pinyin":"deng1",
"def": ["lamp","light","lantern","CL:盞|盏[zhan3]"]
},
"今天":
{"simp":"今天",
"trad":"今天",
"pinyin":"jin1 tian1",
"def": ["today","at the present","now"]
},
"颤抖":
{"simp":"颤抖",
"trad":"顫抖",
"pinyin":"chan4 dou3",
"def": ["to shudder","to shiver","to shake","to tremble"]
},
"剧烈":
{"simp":"剧烈",
"trad":"劇烈",
"pinyin":"ju4 lie4",
"def": ["violent","acute","severe","fierce"]
},
"小溪":
{"simp":"小溪",
"trad":"小溪",
"pinyin":"xiao3 xi1",
"def": ["brook","streamlet"]
},
"出":
{"simp":"出",
"trad":"齣",
"pinyin":"chu1",
"def": ["variant of 出[chu1] (classifier for plays or chapters of classical novels)"]
},
"一道":
{"simp":"一道",
"trad":"一道",
"pinyin":"yi1 dao4",
"def": ["together"]
},
"惊恐":
{"simp":"惊恐",
"trad":"驚恐",
"pinyin":"jing1 kong3",
"def": ["to be alarmed","to be frightened"]
},
"黑":
{"simp":"黑",
"trad":"黑",
"pinyin":"hei1",
"def": ["black","dark","sinister","secret","shady","illegal","to hide (sth) away","to vilify","(loanword) to hack (computing)"]
},
"用":
{"simp":"用",
"trad":"用",
"pinyin":"yong4",
"def": ["to use","to employ","to have to","to eat or drink","expense or outlay","usefulness","hence","therefore"]
},
"开始":
{"simp":"开始",
"trad":"開始",
"pinyin":"kai1 shi3",
"def": ["to begin","beginning","to start","initial","CL:個|个[ge4]"]
},
"第一次":
{"simp":"第一次",
"trad":"第一次",
"pinyin":"di4 yi1 ci4",
"def": ["the first time","first","number one"]
},
"他":
{"simp":"他",
"trad":"他",
"pinyin":"ta1",
"def": ["he or him","(used for either sex when the sex is unknown or unimportant)","(used before sb's name for emphasis)","(used as a meaningless mock object)","other","another"]
},
"即":
{"simp":"即",
"trad":"即",
"pinyin":"ji2",
"def": ["namely","that is","i.e.","prompt","at once","at present","even if","prompted (by the occasion)","to approach","to come into contact","to assume (office)","to draw near"]
},
"照":
{"simp":"照",
"trad":"照",
"pinyin":"zhao4",
"def": ["according to","in accordance with","to shine","to illuminate","to reflect","to look at (one's reflection)","to take (a photo)","photo","as requested","as before"]
},
"变得":
{"simp":"变得",
"trad":"變得",
"pinyin":"bian4 de5",
"def": ["to become"]
},
"双手":
{"simp":"双手",
"trad":"雙手",
"pinyin":"shuang1 shou3",
"def": ["both hands"]
},
"你妈":
{"simp":"你妈",
"trad":"你媽",
"pinyin":"ni3 ma1",
"def": ["(interjection) fuck you","(intensifier) fucking"]
},
"别":
{"simp":"别",
"trad":"彆",
"pinyin":"bie4",
"def": ["to make sb change their ways, opinions etc"]
},
"长出":
{"simp":"长出",
"trad":"長出",
"pinyin":"zhang3 chu1",
"def": ["to sprout (leaves, buds, a beard etc)"]
},
"电光":
{"simp":"电光",
"trad":"電光",
"pinyin":"dian4 guang1",
"def": ["electric light","lightning","electro-optical"]
},
"至少":
{"simp":"至少",
"trad":"至少",
"pinyin":"zhi4 shao3",
"def": ["at least","(to say the) least"]
},
"蜡烛":
{"simp":"蜡烛",
"trad":"蠟燭",
"pinyin":"la4 zhu2",
"def": ["candle","CL:根[gen1],支[zhi1]"]
},
"发现":
{"simp":"发现",
"trad":"發現",
"pinyin":"fa1 xian4",
"def": ["to find","to discover"]
},
"外":
{"simp":"外",
"trad":"外",
"pinyin":"wai4",
"def": ["outside","in addition","foreign","external"]
},
"实际":
{"simp":"实际",
"trad":"實際",
"pinyin":"shi2 ji4",
"def": ["reality","practice","practical","realistic","real","actual"]
},
"你":
{"simp":"你",
"trad":"你",
"pinyin":"ni3",
"def": ["you (informal, as opposed to courteous 您[nin2])"]
},
"理想主义":
{"simp":"理想主义",
"trad":"理想主義",
"pinyin":"li3 xiang3 zhu3 yi4",
"def": ["idealism"]
},
"灯光":
{"simp":"灯光",
"trad":"燈光",
"pinyin":"deng1 guang1",
"def": ["(stage) lighting","light"]
},
"世界":
{"simp":"世界",
"trad":"世界",
"pinyin":"shi4 jie4",
"def": ["world","CL:個|个[ge4]"]
},
"我们":
{"simp":"我们",
"trad":"我們",
"pinyin":"wo3 men5",
"def": ["we","us","ourselves","our"]
},
"直到":
{"simp":"直到",
"trad":"直到",
"pinyin":"zhi2 dao4",
"def": ["until"]
},
"无语":
{"simp":"无语",
"trad":"無語",
"pinyin":"wu2 yu3",
"def": ["to remain silent","to have nothing to say","(coll.) speechless","dumbfounded"]
},
"培育":
{"simp":"培育",
"trad":"培育",
"pinyin":"pei2 yu4",
"def": ["to train","to breed"]
},
"众":
{"simp":"众",
"trad":"衆",
"pinyin":"zhong4",
"def": ["variant of 眾|众[zhong4]"]
},
"每当":
{"simp":"每当",
"trad":"每當",
"pinyin":"mei3 dang1",
"def": ["whenever","every time","on every"]
},
"只":
{"simp":"只",
"trad":"隻",
"pinyin":"zhi1",
"def": ["classifier for birds and certain animals, one of a pair, some utensils, vessels etc"]
},
"拉开":
{"simp":"拉开",
"trad":"拉開",
"pinyin":"la1 kai1",
"def": ["to pull open","to pull apart","to space out","to increase"]
},
"绷紧":
{"simp":"绷紧",
"trad":"繃緊",
"pinyin":"beng1 jin3",
"def": ["to stretch taut"]
},
"温度":
{"simp":"温度",
"trad":"溫度",
"pinyin":"wen1 du4",
"def": ["temperature","CL:個|个[ge4]"]
},
"脑海":
{"simp":"脑海",
"trad":"腦海",
"pinyin":"nao3 hai3",
"def": ["the mind","the brain"]
},
"一":
{"simp":"一",
"trad":"一",
"pinyin":"yi1",
"def": ["one","single","a (article)","as soon as","entire; whole; all; throughout","\"one\" radical in Chinese characters (Kangxi radical 1)","also pr. [yao1] for greater clarity when spelling out numbers digit by digit"]
},
"头发":
{"simp":"头发",
"trad":"頭髮",
"pinyin":"tou2 fa5",
"def": ["hair (on the head)"]
},
"双":
{"simp":"双",
"trad":"雙",
"pinyin":"shuang1",
"def": ["two","double","pair","both","even (number)"]
},
"等待":
{"simp":"等待",
"trad":"等待",
"pinyin":"deng3 dai4",
"def": ["to wait","to wait for"]
},
"酒":
{"simp":"酒",
"trad":"酒",
"pinyin":"jiu3",
"def": ["wine (esp. rice wine)","liquor","spirits","alcoholic beverage","CL:杯[bei1],瓶[ping2],罐[guan4],桶[tong3],缸[gang1]"]
},
"变幻":
{"simp":"变幻",
"trad":"變幻",
"pinyin":"bian4 huan4",
"def": ["to change irregularly","to fluctuate"]
},
"若有所思":
{"simp":"若有所思",
"trad":"若有所思",
"pinyin":"ruo4 you3 suo3 si1",
"def": ["looking pensive","thoughtfully"]
},
"觉得":
{"simp":"觉得",
"trad":"覺得",
"pinyin":"jue2 de5",
"def": ["to think","to feel"]
},
"手":
{"simp":"手",
"trad":"手",
"pinyin":"shou3",
"def": ["hand","(formal) to hold","person engaged in certain types of work","person skilled in certain types of work","personal(ly)","convenient","classifier for skill","CL:雙|双[shuang1],隻|只[zhi1]"]
},
"光速":
{"simp":"光速",
"trad":"光速",
"pinyin":"guang1 su4",
"def": ["the speed of light"]
},
"似的":
{"simp":"似的",
"trad":"似的",
"pinyin":"shi4 de5",
"def": ["seems as if","rather like","Taiwan pr. [si4 de5]"]
},
"以后":
{"simp":"以后",
"trad":"以後",
"pinyin":"yi3 hou4",
"def": ["after","later","afterwards","following","later on","in the future"]
},
"很":
{"simp":"很",
"trad":"很",
"pinyin":"hen3",
"def": ["(adverb of degree)","quite","very","awfully"]
},
"带":
{"simp":"带",
"trad":"帶",
"pinyin":"dai4",
"def": ["band","belt","girdle","ribbon","tire","area","zone","region","CL:條|条[tiao2]","to wear","to carry","to take along","to bear (i.e. to have)","to lead","to bring","to look after","to raise"]
},
"对方":
{"simp":"对方",
"trad":"對方",
"pinyin":"dui4 fang1",
"def": ["counterpart","other person involved","opposite side","other side","receiving party"]
},
"朦胧":
{"simp":"朦胧",
"trad":"朦朧",
"pinyin":"meng2 long2",
"def": ["hazy"]
},
"真":
{"simp":"真",
"trad":"真",
"pinyin":"zhen1",
"def": ["really","truly","indeed","real","true","genuine"]
},
"它":
{"simp":"它",
"trad":"它",
"pinyin":"ta1",
"def": ["it"]
},
"哪":
{"simp":"哪",
"trad":"哪",
"pinyin":"nei3",
"def": ["which? (interrogative, followed by classifier or numeral-classifier)"]
},
"生日":
{"simp":"生日",
"trad":"生日",
"pinyin":"sheng1 ri4",
"def": ["birthday","CL:個|个[ge4]"]
},
"看上去":
{"simp":"看上去",
"trad":"看上去",
"pinyin":"kan4 shang5 qu5",
"def": ["it would appear","it seems (that)"]
},
"晚上":
{"simp":"晚上",
"trad":"晚上",
"pinyin":"wan3 shang5",
"def": ["evening","night","CL:個|个[ge4]","in the evening"]
},
"妈":
{"simp":"妈",
"trad":"媽",
"pinyin":"ma1",
"def": ["ma","mom","mother"]
},
"掌":
{"simp":"掌",
"trad":"掌",
"pinyin":"zhang3",
"def": ["palm of the hand","sole of the foot","paw","horseshoe","to slap","to hold in one's hand","to wield"]
},
"变成":
{"simp":"变成",
"trad":"變成",
"pinyin":"bian4 cheng2",
"def": ["to change into","to turn into","to become"]
},
"转瞬":
{"simp":"转瞬",
"trad":"轉瞬",
"pinyin":"zhuan3 shun4",
"def": ["in the twinkling of an eye","in a flash","to turn one's eyes"]
},
"另一半":
{"simp":"另一半",
"trad":"另一半",
"pinyin":"ling4 yi1 ban4",
"def": ["other half","(fig.) spouse","one's better half"]
},
"口袋":
{"simp":"口袋",
"trad":"口袋",
"pinyin":"kou3 dai4",
"def": ["pocket","bag","sack","CL:個|个[ge4]"]
},
"乌黑":
{"simp":"乌黑",
"trad":"烏黑",
"pinyin":"wu1 hei1",
"def": ["jet-black","dark"]
},
"飞行":
{"simp":"飞行",
"trad":"飛行",
"pinyin":"fei1 xing2",
"def": ["(of planes etc) to fly","flying","flight","aviation"]
},
"太":
{"simp":"太",
"trad":"太",
"pinyin":"tai4",
"def": ["highest","greatest","too (much)","very","extremely"]
},
"仿佛":
{"simp":"仿佛",
"trad":"彷彿",
"pinyin":"fang3 fu2",
"def": ["to seem","as if","alike","similar"]
},
"炸雷":
{"simp":"炸雷",
"trad":"炸雷",
"pinyin":"zha4 lei2",
"def": ["thunderclap"]
},
"逝":
{"simp":"逝",
"trad":"逝",
"pinyin":"shi4",
"def": ["(of time) to pass","to die"]
},
"拔":
{"simp":"拔",
"trad":"拔",
"pinyin":"ba2",
"def": ["to pull up","to pull out","to draw out by suction","to select","to pick","to stand out (above level)","to surpass","to seize"]
},
"坐下":
{"simp":"坐下",
"trad":"坐下",
"pinyin":"zuo4 xia5",
"def": ["to sit down"]
},
"他们":
{"simp":"他们",
"trad":"他們",
"pinyin":"ta1 men5",
"def": ["they"]
},
"一半":
{"simp":"一半",
"trad":"一半",
"pinyin":"yi1 ban4",
"def": ["half"]
},
"散":
{"simp":"散",
"trad":"散",
"pinyin":"san4",
"def": ["to scatter","to break up (a meeting etc)","to disperse","to disseminate","to dispel","(coll.) to sack"]
},
"红色":
{"simp":"红色",
"trad":"紅色",
"pinyin":"hong2 se4",
"def": ["red (color)","revolutionary"]
},
"发":
{"simp":"发",
"trad":"髮",
"pinyin":"fa4",
"def": ["hair","Taiwan pr. [fa3]"]
},
"拿":
{"simp":"拿",
"trad":"拿",
"pinyin":"na2",
"def": ["to hold","to seize","to catch","to apprehend","to take","(used in the same way as 把[ba3]: to mark the following noun as a direct object)"]
},
"白":
{"simp":"白",
"trad":"白",
"pinyin":"bai2",
"def": ["white","snowy","pure","bright","empty","blank","plain","clear","to make clear","in vain","gratuitous","free of charge","reactionary","anti-communist","funeral","to stare coldly","to write wrong character","to state","to explain","vernacular","spoken lines in opera"]
},
"据我所知":
{"simp":"据我所知",
"trad":"據我所知",
"pinyin":"ju4 wo3 suo3 zhi1",
"def": ["as far as I know","to the best of my knowledge"]
},
"对":
{"simp":"对",
"trad":"對",
"pinyin":"dui4",
"def": ["right","correct","couple","pair","towards","at","for","to face","opposite","to treat (sb a certain way)","to match together","to adjust","to fit","to suit","to answer","to reply","classifier: couple"]
},
"另一":
{"simp":"另一",
"trad":"另一",
"pinyin":"ling4 yi1",
"def": ["another","the other"]
},
"了":
{"simp":"了",
"trad":"瞭",
"pinyin":"liao4",
"def": ["unofficial variant of 瞭[liao4]"]
},
"光":
{"simp":"光",
"trad":"光",
"pinyin":"guang1",
"def": ["light","ray","CL:道[dao4]","bright","only","merely","to use up"]
},
"倾":
{"simp":"倾",
"trad":"傾",
"pinyin":"qing1",
"def": ["to overturn","to collapse","to lean","to tend","to incline","to pour out"]
},
"经不起":
{"simp":"经不起",
"trad":"經不起",
"pinyin":"jing1 bu5 qi3",
"def": ["can't stand it","to be unable to bear","to be unable to resist"]
},
"妙":
{"simp":"妙",
"trad":"玅",
"pinyin":"miao4",
"def": ["variant of 妙[miao4]"]
},
"出现":
{"simp":"出现",
"trad":"出現",
"pinyin":"chu1 xian4",
"def": ["to appear","to arise","to emerge","to show up"]
},
"细":
{"simp":"细",
"trad":"細",
"pinyin":"xi4",
"def": ["thin or slender","finely particulate","thin and soft","fine","delicate","trifling","(of a sound) quiet","frugal"]
},
"有生以来":
{"simp":"有生以来",
"trad":"有生以來",
"pinyin":"you3 sheng1 yi3 lai2",
"def": ["since birth","for one's whole life"]
},
"窗":
{"simp":"窗",
"trad":"窻",
"pinyin":"chuang1",
"def": ["variant of 窗[chuang1]"]
},
"第一":
{"simp":"第一",
"trad":"第一",
"pinyin":"di4 yi1",
"def": ["first","number one","primary"]
},
"新生":
{"simp":"新生",
"trad":"新生",
"pinyin":"xin1 sheng1",
"def": ["new","newborn","emerging","nascent","rebirth","regeneration","new life","new student"]
},
"白发":
{"simp":"白发",
"trad":"白髮",
"pinyin":"bai2 fa4",
"def": ["white or gray hair","CL:根[gen1]"]
},
"想起":
{"simp":"想起",
"trad":"想起",
"pinyin":"xiang3 qi3",
"def": ["to recall","to think of","to call to mind"]
},
"飘忽不定":
{"simp":"飘忽不定",
"trad":"飄忽不定",
"pinyin":"piao1 hu1 bu4 ding4",
"def": ["to drift without a resting place (idiom)","roving","errant","vagrant","erratic"]
},
"住":
{"simp":"住",
"trad":"住",
"pinyin":"zhu4",
"def": ["to live","to dwell","to stay","to reside","to stop","(suffix indicating firmness, steadiness, or coming to a halt)"]
},
"点燃":
{"simp":"点燃",
"trad":"點燃",
"pinyin":"dian3 ran2",
"def": ["to ignite","to set on fire","aflame"]
},
"者":
{"simp":"者",
"trad":"者",
"pinyin":"zhe3",
"def": ["(after a verb or adjective) one who (is) ...","(after a noun) person involved in ...","-er","-ist","(used after a number or 後|后[hou4] or 前[qian2] to refer to sth mentioned previously)","(used after a term, to mark a pause before defining the term)","(old) (used at the end of a command)","(old) this"]
},
"不定":
{"simp":"不定",
"trad":"不定",
"pinyin":"bu4 ding4",
"def": ["indefinite","indeterminate","(botany) adventitious"]
},
"戈壁滩":
{"simp":"戈壁滩",
"trad":"戈壁灘",
"pinyin":"Ge1 bi4 tan1",
"def": ["Gobi desert"]
},
"里面":
{"simp":"里面",
"trad":"裡面",
"pinyin":"li3 mian4",
"def": ["inside","interior","also pr. [li3 mian5]"]
},
"这就":
{"simp":"这就",
"trad":"這就",
"pinyin":"zhe4 jiu4",
"def": ["immediately","at once"]
},
"到手":
{"simp":"到手",
"trad":"到手",
"pinyin":"dao4 shou3",
"def": ["to take possession of","to get hold of"]
},
"自己":
{"simp":"自己",
"trad":"自己",
"pinyin":"zi4 ji3",
"def": ["oneself","one's own"]
},
"中":
{"simp":"中",
"trad":"中",
"pinyin":"zhong4",
"def": ["to hit (the mark)","to be hit by","to suffer","to win (a prize, a lottery)"]
},
"这么":
{"simp":"这么",
"trad":"這麼",
"pinyin":"zhe4 me5",
"def": ["so much","this much","how much?","this way","like this"]
},
"幸运":
{"simp":"幸运",
"trad":"幸運",
"pinyin":"xing4 yun4",
"def": ["fortunate","lucky","fortune","luck"]
},
"可怜":
{"simp":"可怜",
"trad":"可憐",
"pinyin":"ke3 lian2",
"def": ["pitiful","pathetic","to have pity on"]
},
"然后":
{"simp":"然后",
"trad":"然後",
"pinyin":"ran2 hou4",
"def": ["after","then (afterwards)","after that","afterwards"]
},
"自":
{"simp":"自",
"trad":"自",
"pinyin":"zi4",
"def": ["self","oneself","from","since","naturally","surely"]
},
"光芒":
{"simp":"光芒",
"trad":"光芒",
"pinyin":"guang1 mang2",
"def": ["rays of light","brilliant rays","radiance"]
},
"上去":
{"simp":"上去",
"trad":"上去",
"pinyin":"shang4 qu4",
"def": ["to go up"]
},
"当时":
{"simp":"当时",
"trad":"當時",
"pinyin":"dang4 shi2",
"def": ["at once","right away"]
},
"复杂":
{"simp":"复杂",
"trad":"複雜",
"pinyin":"fu4 za2",
"def": ["complicated","complex"]
},
"不是":
{"simp":"不是",
"trad":"不是",
"pinyin":"bu4 shi4",
"def": ["no","is not","not"]
},
"点着":
{"simp":"点着",
"trad":"點著",
"pinyin":"dian3 zhao2",
"def": ["to light (a candle, cigarette etc)"]
},
"没":
{"simp":"没",
"trad":"沒",
"pinyin":"mo4",
"def": ["drowned","to end","to die","to inundate"]
},
"过":
{"simp":"过",
"trad":"過",
"pinyin":"guo5",
"def": ["(experienced action marker)"]
},
"大":
{"simp":"大",
"trad":"大",
"pinyin":"dai4",
"def": ["see 大夫[dai4 fu5]"]
},
"风":
{"simp":"风",
"trad":"風",
"pinyin":"feng1",
"def": ["wind","news","style","custom","manner","CL:陣|阵[zhen4],絲|丝[si1]"]
},
"景象":
{"simp":"景象",
"trad":"景象",
"pinyin":"jing3 xiang4",
"def": ["scene","sight (to behold)"]
},
"离开":
{"simp":"离开",
"trad":"離開",
"pinyin":"li2 kai1",
"def": ["to depart","to leave"]
},
"凉":
{"simp":"凉",
"trad":"涼",
"pinyin":"liang4",
"def": ["to let sth cool down"]
},
"感觉":
{"simp":"感觉",
"trad":"感覺",
"pinyin":"gan3 jue2",
"def": ["to feel","to become aware of","feeling","sense","perception","CL:個|个[ge4]"]
},
"远远":
{"simp":"远远",
"trad":"遠遠",
"pinyin":"yuan3 yuan3",
"def": ["distant","by far"]
},
"已":
{"simp":"已",
"trad":"已",
"pinyin":"yi3",
"def": ["already","to stop","then","afterwards"]
},
"生命":
{"simp":"生命",
"trad":"生命",
"pinyin":"sheng1 ming4",
"def": ["life (as the characteristic of living beings)","living being","creature","CL:個|个[ge4],條|条[tiao2]"]
},
"脆弱":
{"simp":"脆弱",
"trad":"脆弱",
"pinyin":"cui4 ruo4",
"def": ["weak","frail"]
},
"而":
{"simp":"而",
"trad":"而",
"pinyin":"er2",
"def": ["and","as well as","and so","but (not)","yet (not)","(indicates causal relation)","(indicates change of state)","(indicates contrast)"]
},
"丝":
{"simp":"丝",
"trad":"絲",
"pinyin":"si1",
"def": ["silk","thread","trace","(cuisine) shreds or julienne strips","CL:條|条[tiao2]","classifier: a thread (of cloud, smoke etc), a bit, an iota, a hint (of sth) etc"]
},
"默默":
{"simp":"默默",
"trad":"默默",
"pinyin":"mo4 mo4",
"def": ["in silence","not speaking"]
},
"它们":
{"simp":"它们",
"trad":"它們",
"pinyin":"ta1 men5",
"def": ["they (for inanimate objects)"]
},
"石化":
{"simp":"石化",
"trad":"石化",
"pinyin":"shi2 hua4",
"def": ["to petrify","petrochemical industry"]
},
"埙":
{"simp":"埙",
"trad":"塤",
"pinyin":"xun1",
"def": ["ocarina","wind instrument consisting of an egg-shaped chamber with holes"]
},
"冰冷":
{"simp":"冰冷",
"trad":"冰冷",
"pinyin":"bing1 leng3",
"def": ["ice-cold"]
},
"射":
{"simp":"射",
"trad":"射",
"pinyin":"she4",
"def": ["to shoot","to launch","to allude to","radio- (chemistry)"]
},
"烫":
{"simp":"烫",
"trad":"燙",
"pinyin":"tang4",
"def": ["to scald","to burn (by scalding)","to blanch (cooking)","to heat (sth) up in hot water","to perm","to iron","scalding hot"]
},
"令人":
{"simp":"令人",
"trad":"令人",
"pinyin":"ling4 ren2",
"def": ["to cause one (to do sth)","to make one (angry, delighted etc)"]
},
"下来":
{"simp":"下来",
"trad":"下來",
"pinyin":"xia4 lai5",
"def": ["to come down","(completed action marker)","(after verb of motion, indicates motion down and towards us, also fig.)","(indicates continuation from the past towards us)","to be harvested (of crops)","to be over (of a period of time)","to go among the masses (said of leaders)"]
},
"阴影":
{"simp":"阴影",
"trad":"陰影",
"pinyin":"yin1 ying3",
"def": ["(lit. and fig.) shadow"]
},
"想":
{"simp":"想",
"trad":"想",
"pinyin":"xiang3",
"def": ["to think","to believe","to suppose","to wish","to want","to miss (feel wistful about the absence of sb or sth)"]
},
"入":
{"simp":"入",
"trad":"入",
"pinyin":"ru4",
"def": ["to enter","to go into","to join","to become a member of","to confirm or agree with","abbr. for 入聲|入声[ru4 sheng1]"]
},
"这时":
{"simp":"这时",
"trad":"這時",
"pinyin":"zhe4 shi2",
"def": ["at this time","at this moment"]
},
"身体":
{"simp":"身体",
"trad":"身體",
"pinyin":"shen1 ti3",
"def": ["the body","one's health","CL:具[ju4],個|个[ge4]","in person"]
},
"神":
{"simp":"神",
"trad":"神",
"pinyin":"shen2",
"def": ["deity","soul","spirit","unusual","mysterious","lively","expressive","expression","look","CL:個|个[ge4]","(slang) awesome","amazing"]
},
"真相":
{"simp":"真相",
"trad":"真相",
"pinyin":"zhen1 xiang4",
"def": ["the truth about sth","the actual facts"]
},
"精心":
{"simp":"精心",
"trad":"精心",
"pinyin":"jing1 xin1",
"def": ["with utmost care","fine","meticulous","detailed"]
},
"下":
{"simp":"下",
"trad":"下",
"pinyin":"xia4",
"def": ["down","downwards","below","lower","later","next (week etc)","second (of two parts)","to decline","to go down","to arrive at (a decision, conclusion etc)","measure word to show the frequency of an action"]
},
"即使":
{"simp":"即使",
"trad":"即使",
"pinyin":"ji2 shi3",
"def": ["even if","even though"]
},
"头皮":
{"simp":"头皮",
"trad":"頭皮",
"pinyin":"tou2 pi2",
"def": ["scalp"]
},
"又":
{"simp":"又",
"trad":"又",
"pinyin":"you4",
"def": ["(once) again","also","both... and...","and yet","(used for emphasis) anyway"]
},
"悬停":
{"simp":"悬停",
"trad":"懸停",
"pinyin":"xuan2 ting2",
"def": ["to hover (helicopter, computer mouse etc)"]
},
"旋涡":
{"simp":"旋涡",
"trad":"旋渦",
"pinyin":"xuan2 wo1",
"def": ["spiral","whirlpool","eddy","vortex"]
},
"进来":
{"simp":"进来",
"trad":"進來",
"pinyin":"jin4 lai2",
"def": ["to come in"]
},
"轻盈":
{"simp":"轻盈",
"trad":"輕盈",
"pinyin":"qing1 ying2",
"def": ["graceful","lithe","light and graceful","lighthearted","relaxed"]
},
"墙":
{"simp":"墙",
"trad":"牆",
"pinyin":"qiang2",
"def": ["wall","CL:面[mian4],堵[du3]"]
},
"青色":
{"simp":"青色",
"trad":"青色",
"pinyin":"qing1 se4",
"def": ["cyan","blue-green"]
},
"希腊":
{"simp":"希腊",
"trad":"希臘",
"pinyin":"Xi1 la4",
"def": ["Greece"]
},
"杯":
{"simp":"杯",
"trad":"盃",
"pinyin":"bei1",
"def": ["variant of 杯[bei1]","trophy cup","classifier for certain containers of liquids: glass, cup"]
},
"狂欢":
{"simp":"狂欢",
"trad":"狂歡",
"pinyin":"kuang2 huan1",
"def": ["party","carousal","hilarity","merriment","whoopee","to carouse"]
},
"油画":
{"simp":"油画",
"trad":"油畫",
"pinyin":"you2 hua4",
"def": ["oil painting"]
},
"可以":
{"simp":"可以",
"trad":"可以",
"pinyin":"ke3 yi3",
"def": ["can","may","possible","able to","not bad","pretty good"]
},
"来自":
{"simp":"来自",
"trad":"來自",
"pinyin":"lai2 zi4",
"def": ["to come from (a place)","From: (in email header)"]
},
"中的":
{"simp":"中的",
"trad":"中的",
"pinyin":"zhong4 di4",
"def": ["to hit the target","to hit the nail on the head"]
},
"曲线":
{"simp":"曲线",
"trad":"曲線",
"pinyin":"qu1 xian4",
"def": ["curve","curved line","indirect","in a roundabout way"]
},
"篮球":
{"simp":"篮球",
"trad":"籃球",
"pinyin":"lan2 qiu2",
"def": ["basketball","CL:個|个[ge4],隻|只[zhi1]"]
},
"圈":
{"simp":"圈",
"trad":"圈",
"pinyin":"quan1",
"def": ["circle","ring","loop","classifier for loops, orbits, laps of race etc","CL:個|个[ge4]","to surround","to circle"]
},
"红":
{"simp":"红",
"trad":"紅",
"pinyin":"hong2",
"def": ["red","popular","revolutionary","bonus"]
},
"暗":
{"simp":"暗",
"trad":"闇",
"pinyin":"an4",
"def": ["to close (a door)","to eclipse","muddled","stupid","ignorant","variant of 暗[an4]"]
},
"白头":
{"simp":"白头",
"trad":"白頭",
"pinyin":"bai2 tou2",
"def": ["hoary head","old age"]
},
"幅":
{"simp":"幅",
"trad":"幅",
"pinyin":"fu2",
"def": ["width","roll","classifier for textiles or pictures"]
},
"身后":
{"simp":"身后",
"trad":"身後",
"pinyin":"shen1 hou4",
"def": ["posthumous","one's social background","behind the body"]
},
"软件":
{"simp":"软件",
"trad":"軟件",
"pinyin":"ruan3 jian4",
"def": ["(computer) software"]
},
"尾":
{"simp":"尾",
"trad":"尾",
"pinyin":"yi3",
"def": ["horse's tail","pointed posterior section of a locust etc"]
},
"件":
{"simp":"件",
"trad":"件",
"pinyin":"jian4",
"def": ["item","component","classifier for events, things, clothes etc"]
},
"她":
{"simp":"她",
"trad":"她",
"pinyin":"ta1",
"def": ["she"]
},
"迹":
{"simp":"迹",
"trad":"迹",
"pinyin":"ji4",
"def": ["variant of 跡|迹[ji4]"]
},
"迷上":
{"simp":"迷上",
"trad":"迷上",
"pinyin":"mi2 shang4",
"def": ["to become excited with","to be enchanted by"]
},
"动":
{"simp":"动",
"trad":"動",
"pinyin":"dong4",
"def": ["(of sth) to move","to set in movement","to displace","to touch","to make use of","to stir (emotions)","to alter","abbr. for 動詞|动词[dong4 ci2], verb"]
},
"划":
{"simp":"划",
"trad":"劃",
"pinyin":"hua4",
"def": ["to delimit","to transfer","to assign","to plan","to draw (a line)","stroke of a Chinese character"]
},
"背心":
{"simp":"背心",
"trad":"背心",
"pinyin":"bei4 xin1",
"def": ["sleeveless garment (vest, waistcoat, singlet, tank top etc)","CL:件[jian4]"]
},
"三分之一":
{"simp":"三分之一",
"trad":"三分之一",
"pinyin":"san1 fen1 zhi1 yi1",
"def": ["one third"]
},
"时":
{"simp":"时",
"trad":"時",
"pinyin":"shi2",
"def": ["o'clock","time","when","hour","season","period"]
},
"玻璃":
{"simp":"玻璃",
"trad":"玻璃",
"pinyin":"bo1 li5",
"def": ["glass","CL:張|张[zhang1],塊|块[kuai4]","(slang) male homosexual"]
},
"时候":
{"simp":"时候",
"trad":"時候",
"pinyin":"shi2 hou5",
"def": ["time","length of time","moment","period"]
},
"一种":
{"simp":"一种",
"trad":"一種",
"pinyin":"yi1 zhong3",
"def": ["one kind of","one type of"]
}
}

// Set up an event handler. Notice that we don't use "on" in front
// of the event name when doing it this way.
spans.forEach(element => {
    element.addEventListener("mouseover", changeDef);
});

function changeDef(event){
  textToUpdate.innerText=event.target.innerText
    try
    {
        translation.innerText=dic[event.target.innerText]["def"][0]
    }
    catch(error)
    {
        translation.innerText="UNKNOWN"
    }
}