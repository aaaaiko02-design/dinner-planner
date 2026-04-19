// カテゴリ定数
const CAT = {
  MEAT: "肉・魚",
  VEG: "野菜・豆腐",
  EGG: "卵・乳製品",
  CAN: "缶詰・乾物",
  PASTA: "米・穀物",
  SEASONING: "調味料",
  OTHER: "その他",
};

const WEEKS = [
  {
    label: "第1週",
    days: [
      {
        day: "月", dish: "鶏の照り焼き丼",
        steps: ["鶏もも肉を一口大に切る", "フライパンに油を熱し、鶏肉を皮目から中火で焼く", "火が通ったら醤油・みりん・砂糖を混ぜたタレを加えて絡める", "ご飯の上に盛り付ける"],
        ingredients: [{ name: "鶏もも肉", amount: 150, unit: "g", cat: CAT.MEAT }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "みりん", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }],
      },
      {
        day: "火", dish: "豚キムチ炒め",
        steps: ["豚バラを食べやすく切る", "フライパンにごま油を熱し、豚肉を炒める", "肉に火が通ったらキムチを加えてさっと炒める", "醤油で味を整えてご飯と一緒に盛る"],
        ingredients: [{ name: "豚バラ薄切り", amount: 100, unit: "g", cat: CAT.MEAT }, { name: "キムチ", amount: 80, unit: "g", cat: CAT.OTHER }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "ごま油", amount: 1, unit: "小さじ", cat: CAT.SEASONING }, { name: "醤油", amount: 0.5, unit: "大さじ", cat: CAT.SEASONING }],
      },
      {
        day: "水", dish: "卵かけご飯＋味噌汁",
        steps: ["【味噌汁】鍋に水200mlを沸かし、豆腐を角切りにして入れる", "わかめを加えて火を止め、味噌を溶き入れる", "【卵かけご飯】温かいご飯に生卵を割り入れ、醤油をかける"],
        ingredients: [{ name: "卵", amount: 1, unit: "個", cat: CAT.EGG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "豆腐", amount: 50, unit: "g", cat: CAT.VEG }, { name: "わかめ（乾燥）", amount: 1, unit: "小さじ", cat: CAT.CAN }, { name: "味噌", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "醤油", amount: 0.5, unit: "大さじ", cat: CAT.SEASONING }],
      },
      {
        day: "木", dish: "サバ缶大根おろし",
        steps: ["大根をすりおろして軽く水気を切る", "サバ缶を器に盛り、大根おろしをのせる", "ポン酢をかけてご飯と一緒にいただく"],
        ingredients: [{ name: "サバ水煮缶", amount: 1, unit: "缶", cat: CAT.CAN }, { name: "大根", amount: 100, unit: "g", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "ポン酢", amount: 1, unit: "大さじ", cat: CAT.SEASONING }],
      },
      {
        day: "金", dish: "鶏そぼろ丼",
        steps: ["フライパンに鶏ひき肉・醤油・みりん・砂糖を入れ、菜箸で混ぜながら中火で火を通す", "別のフライパンで溶き卵を炒り卵にする", "ご飯の上にそぼろと炒り卵を盛り付ける"],
        ingredients: [{ name: "鶏ひき肉", amount: 100, unit: "g", cat: CAT.MEAT }, { name: "卵", amount: 1, unit: "個", cat: CAT.EGG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "みりん", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }],
      },
      {
        day: "土", dish: "豚と豆腐のすき焼き風",
        steps: ["フライパンに醤油・みりん・砂糖・水50mlを合わせて煮立てる", "豚肉・豆腐・長ねぎを加えて中火で煮る", "火が通ったらご飯と一緒に食べる"],
        ingredients: [{ name: "豚薄切り肉", amount: 100, unit: "g", cat: CAT.MEAT }, { name: "豆腐", amount: 150, unit: "g", cat: CAT.VEG }, { name: "長ねぎ", amount: 0.5, unit: "本", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }, { name: "みりん", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }, { name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }],
      },
      {
        day: "日", dish: "カレーライス",
        steps: ["玉ねぎ・にんじん・じゃがいもを一口大に切る", "鍋に油を熱し豚肉と野菜を炒める", "水300mlを加えて野菜が柔らかくなるまで煮る", "火を止めてカレールーを入れ、再び弱火で5分煮る", "ご飯にかけて完成"],
        ingredients: [{ name: "豚薄切り肉", amount: 100, unit: "g", cat: CAT.MEAT }, { name: "玉ねぎ", amount: 0.5, unit: "個", cat: CAT.VEG }, { name: "じゃがいも", amount: 1, unit: "個", cat: CAT.VEG }, { name: "にんじん", amount: 0.5, unit: "本", cat: CAT.VEG }, { name: "カレールー", amount: 1, unit: "かけ", cat: CAT.OTHER }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }],
      },
    ],
  },
  {
    label: "第2週",
    days: [
      {
        day: "月", dish: "豚の生姜焼き丼",
        steps: ["生姜をすりおろす", "豚肉・醤油・みりん・生姜を混ぜて10分漬ける", "フライパンで豚肉を炒め、タレも加えて絡める", "ご飯に盛り付ける"],
        ingredients: [{ name: "豚薄切り肉", amount: 150, unit: "g", cat: CAT.MEAT }, { name: "生姜", amount: 1, unit: "片", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "みりん", amount: 1, unit: "大さじ", cat: CAT.SEASONING }],
      },
      {
        day: "火", dish: "麻婆豆腐",
        steps: ["豆腐を2cm角に切る", "フライパンにごま油を熱し、ひき肉・にんにくを炒める", "豆板醤を加えてさらに炒め、水100ml・醤油・鶏がらスープの素を加える", "豆腐を加えて3分煮て、水溶き片栗粉でとろみをつける"],
        ingredients: [{ name: "豚ひき肉", amount: 80, unit: "g", cat: CAT.MEAT }, { name: "豆腐", amount: 150, unit: "g", cat: CAT.VEG }, { name: "にんにく", amount: 1, unit: "片", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "豆板醤", amount: 1, unit: "小さじ", cat: CAT.SEASONING }, { name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "鶏がらスープの素", amount: 1, unit: "小さじ", cat: CAT.SEASONING }, { name: "ごま油", amount: 1, unit: "小さじ", cat: CAT.SEASONING }],
      },
      {
        day: "水", dish: "納豆ご飯＋味噌汁",
        steps: ["【味噌汁】鍋に水200mlを沸かし、わかめを入れて火を止め味噌を溶く", "【納豆ご飯】納豆を付属のタレでよく混ぜる", "温かいご飯にのせて完成"],
        ingredients: [{ name: "納豆", amount: 1, unit: "パック", cat: CAT.OTHER }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "わかめ（乾燥）", amount: 1, unit: "小さじ", cat: CAT.CAN }, { name: "味噌", amount: 1, unit: "大さじ", cat: CAT.SEASONING }],
      },
      {
        day: "木", dish: "鮭の塩焼き",
        steps: ["鮭に塩を両面ふって10分おく", "グリルまたはフライパンで中火で焼く（片面4〜5分ずつ）", "ご飯・味噌汁と一緒に食べる"],
        ingredients: [{ name: "鮭", amount: 1, unit: "切れ", cat: CAT.MEAT }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "塩", amount: 1, unit: "小さじ", cat: CAT.SEASONING }, { name: "わかめ（乾燥）", amount: 1, unit: "小さじ", cat: CAT.CAN }, { name: "味噌", amount: 1, unit: "大さじ", cat: CAT.SEASONING }],
      },
      {
        day: "金", dish: "ベーコンエッグ丼",
        steps: ["フライパンでベーコンを炒める", "端に卵を割り入れ、好みの固さになるまで焼く", "ご飯の上にのせ、醤油をかける"],
        ingredients: [{ name: "ベーコン", amount: 50, unit: "g", cat: CAT.MEAT }, { name: "卵", amount: 2, unit: "個", cat: CAT.EGG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "塩・こしょう", amount: 1, unit: "適量", cat: CAT.SEASONING }],
      },
      {
        day: "土", dish: "鶏の唐揚げ",
        steps: ["鶏もも肉を一口大に切り、醤油・酒・にんにく・生姜で15分漬ける", "片栗粉をまぶし、170℃の油で4〜5分揚げる", "ご飯と一緒に盛り付ける"],
        ingredients: [{ name: "鶏もも肉", amount: 200, unit: "g", cat: CAT.MEAT }, { name: "にんにく", amount: 1, unit: "片", cat: CAT.VEG }, { name: "生姜", amount: 1, unit: "片", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }, { name: "酒", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "片栗粉", amount: 3, unit: "大さじ", cat: CAT.SEASONING }],
      },
      {
        day: "日", dish: "鶏鍋",
        steps: ["鍋に水400ml・白だしを合わせて沸かす", "鶏もも肉・白菜・長ねぎを加えて煮る", "豆腐を加えてひと煮立ちしたら完成"],
        ingredients: [{ name: "鶏もも肉", amount: 150, unit: "g", cat: CAT.MEAT }, { name: "白菜", amount: 150, unit: "g", cat: CAT.VEG }, { name: "豆腐", amount: 100, unit: "g", cat: CAT.VEG }, { name: "長ねぎ", amount: 0.5, unit: "本", cat: CAT.VEG }, { name: "白だし", amount: 2, unit: "大さじ", cat: CAT.SEASONING }],
      },
    ],
  },
  {
    label: "第3週",
    days: [
      {
        day: "月", dish: "親子丼",
        steps: ["鶏もも肉を一口大に切り、玉ねぎを薄切りにする", "小鍋に醤油・みりん・水80mlを合わせて沸かし、鶏肉と玉ねぎを入れて煮る", "火が通ったら溶き卵を回し入れ、半熟になったら火を止めてご飯にのせる"],
        ingredients: [{ name: "鶏もも肉", amount: 120, unit: "g", cat: CAT.MEAT }, { name: "卵", amount: 2, unit: "個", cat: CAT.EGG }, { name: "玉ねぎ", amount: 0.25, unit: "個", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }, { name: "みりん", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }],
      },
      {
        day: "火", dish: "豚バラ大根煮",
        steps: ["大根を2cm厚の半月切りにする", "豚バラを食べやすく切る", "鍋に豚肉・大根・醤油・みりん・砂糖・水150mlを入れて中火で煮る", "大根が柔らかくなったら完成"],
        ingredients: [{ name: "豚バラ薄切り", amount: 100, unit: "g", cat: CAT.MEAT }, { name: "大根", amount: 150, unit: "g", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }, { name: "みりん", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }],
      },
      {
        day: "水", dish: "ツナ缶炒飯",
        steps: ["卵を溶いておく", "フライパンにごま油を熱し、卵を入れてざっと混ぜる", "ご飯・水気を切ったツナ缶を加えて炒める", "醤油・塩こしょうで味を整える"],
        ingredients: [{ name: "ツナ缶", amount: 1, unit: "缶", cat: CAT.CAN }, { name: "卵", amount: 1, unit: "個", cat: CAT.EGG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "ごま油", amount: 1, unit: "小さじ", cat: CAT.SEASONING }, { name: "塩・こしょう", amount: 1, unit: "適量", cat: CAT.SEASONING }],
      },
      {
        day: "木", dish: "サバ味噌煮（缶）定食",
        steps: ["サバ味噌煮缶をそのまま器に盛る", "大根をすりおろして添える", "ご飯と一緒に食べる"],
        ingredients: [{ name: "サバ味噌煮缶", amount: 1, unit: "缶", cat: CAT.CAN }, { name: "大根", amount: 100, unit: "g", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }],
      },
      {
        day: "金", dish: "そぼろ丼（合いびき）",
        steps: ["フライパンに合いびき肉・醤油・みりん・砂糖を入れ、菜箸で混ぜながら中火で炒める", "別のフライパンで溶き卵を炒り卵にする", "ご飯に両方を盛り付ける"],
        ingredients: [{ name: "合いびき肉", amount: 100, unit: "g", cat: CAT.MEAT }, { name: "卵", amount: 1, unit: "個", cat: CAT.EGG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "みりん", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }],
      },
      {
        day: "土", dish: "豚しゃぶサラダ",
        steps: ["鍋にお湯を沸かし、豚肉をしゃぶしゃぶして火を通す", "レタスを洗って手でちぎり皿に盛る", "豚肉をのせ、ポン酢とごま油をかける"],
        ingredients: [{ name: "豚薄切り肉", amount: 150, unit: "g", cat: CAT.MEAT }, { name: "レタス", amount: 100, unit: "g", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "ポン酢", amount: 2, unit: "大さじ", cat: CAT.SEASONING }, { name: "ごま油", amount: 1, unit: "小さじ", cat: CAT.SEASONING }],
      },
      {
        day: "日", dish: "豚汁定食",
        steps: ["大根・にんじんを一口大に切る", "鍋に豚肉・野菜・こんにゃくと水400mlを入れて煮る", "野菜が柔らかくなったら火を止め、味噌を溶き入れる", "ご飯と一緒に食べる"],
        ingredients: [{ name: "豚バラ薄切り", amount: 60, unit: "g", cat: CAT.MEAT }, { name: "大根", amount: 80, unit: "g", cat: CAT.VEG }, { name: "にんじん", amount: 0.25, unit: "本", cat: CAT.VEG }, { name: "こんにゃく", amount: 50, unit: "g", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "味噌", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }],
      },
    ],
  },
  {
    label: "第4週",
    days: [
      {
        day: "月", dish: "牛丼",
        steps: ["玉ねぎを薄切りにする", "鍋に醤油・みりん・砂糖・水100mlを合わせて煮立てる", "玉ねぎ・牛肉を加えて中火で煮る", "ご飯の上に盛り付ける"],
        ingredients: [{ name: "牛薄切り肉", amount: 150, unit: "g", cat: CAT.MEAT }, { name: "玉ねぎ", amount: 0.5, unit: "個", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }, { name: "みりん", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }, { name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }],
      },
      {
        day: "火", dish: "肉じゃが",
        steps: ["じゃがいも・にんじん・玉ねぎを一口大に切る", "鍋に油を熱し豚肉を炒め、野菜を加えてさらに炒める", "醤油・みりん・砂糖・水150mlを加えて蓋をして中火で15分煮る"],
        ingredients: [{ name: "豚薄切り肉", amount: 100, unit: "g", cat: CAT.MEAT }, { name: "じゃがいも", amount: 2, unit: "個", cat: CAT.VEG }, { name: "玉ねぎ", amount: 0.5, unit: "個", cat: CAT.VEG }, { name: "にんじん", amount: 0.3, unit: "本", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }, { name: "みりん", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }, { name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }],
      },
      {
        day: "水", dish: "卵チャーハン",
        steps: ["卵を溶いておく。ハムを小さく切る", "フライパンにごま油を熱し、卵を入れてすぐご飯を加えて炒める", "ハムを加え、醤油・塩こしょうで味を整える"],
        ingredients: [{ name: "卵", amount: 2, unit: "個", cat: CAT.EGG }, { name: "ハム", amount: 50, unit: "g", cat: CAT.MEAT }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "ごま油", amount: 1, unit: "小さじ", cat: CAT.SEASONING }, { name: "塩・こしょう", amount: 1, unit: "適量", cat: CAT.SEASONING }],
      },
      {
        day: "木", dish: "鮭のバター醤油焼き",
        steps: ["鮭の両面に塩をふって5分おき、キッチンペーパーで水気を拭く", "フライパンにバターを溶かし、鮭を中火で両面焼く", "仕上げに醤油を回しかけてご飯と一緒に食べる"],
        ingredients: [{ name: "鮭", amount: 1, unit: "切れ", cat: CAT.MEAT }, { name: "バター", amount: 10, unit: "g", cat: CAT.EGG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING }],
      },
      {
        day: "金", dish: "たらこご飯＋味噌汁",
        steps: ["たらこをほぐしてバターと混ぜる", "温かいご飯にのせる", "【味噌汁】鍋に水200mlを沸かし、わかめを入れて火を止め味噌を溶く"],
        ingredients: [{ name: "たらこ", amount: 50, unit: "g", cat: CAT.MEAT }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "バター", amount: 5, unit: "g", cat: CAT.EGG }, { name: "わかめ（乾燥）", amount: 1, unit: "小さじ", cat: CAT.CAN }, { name: "味噌", amount: 1, unit: "大さじ", cat: CAT.SEASONING }],
      },
      {
        day: "土", dish: "餃子（市販）＋キャベツ炒め",
        steps: ["キャベツをざく切りにし、フライパンで炒めてポン酢で味付けする", "フライパンに油を熱し、市販の餃子を並べて焼く", "水50mlを加えて蓋をして蒸し焼きにし、水気が飛んだら完成"],
        ingredients: [{ name: "市販餃子", amount: 10, unit: "個", cat: CAT.OTHER }, { name: "キャベツ", amount: 100, unit: "g", cat: CAT.VEG }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }, { name: "ポン酢", amount: 2, unit: "大さじ", cat: CAT.SEASONING }],
      },
      {
        day: "日", dish: "豚キムチ鍋",
        steps: ["鍋に水300ml・白だしを合わせて沸かす", "豚バラ・キムチ・豆腐・長ねぎを加えて中火で煮る", "具材に火が通ったら完成。ご飯と一緒に食べる"],
        ingredients: [{ name: "豚バラ薄切り", amount: 150, unit: "g", cat: CAT.MEAT }, { name: "キムチ", amount: 100, unit: "g", cat: CAT.OTHER }, { name: "豆腐", amount: 100, unit: "g", cat: CAT.VEG }, { name: "長ねぎ", amount: 0.5, unit: "本", cat: CAT.VEG }, { name: "白だし", amount: 1, unit: "大さじ", cat: CAT.SEASONING }, { name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }],
      },
    ],
  },
];

const jsDay = new Date().getDay();
const todayIndex = jsDay === 0 ? 6 : jsDay - 1;

function getCurrentWeekIndex() {
  return Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % WEEKS.length;
}

function buildShoppingList(week) {
  const map = {};
  for (const day of week.days) {
    for (const ing of day.ingredients) {
      const key = ing.name + '__' + ing.unit + '__' + ing.cat;
      if (map[key]) { if (ing.unit !== '適量') map[key].amount += ing.amount; }
      else map[key] = { name: ing.name, amount: ing.amount, unit: ing.unit, cat: ing.cat };
    }
  }
  const byCategory = {};
  for (const item of Object.values(map)) {
    if (!byCategory[item.cat]) byCategory[item.cat] = [];
    byCategory[item.cat].push(item);
  }
  return byCategory;
}

function formatAmount(item) {
  if (item.unit === '適量') return '適量';
  const amt = Number.isInteger(item.amount) ? item.amount : Math.round(item.amount * 10) / 10;
  return amt + item.unit;
}

// レシピモーダルを表示
function showRecipe(dayData) {
  const modal = document.getElementById('recipe-modal');
  document.getElementById('modal-title').textContent = dayData.dish;

  const stepsList = document.getElementById('modal-steps');
  stepsList.innerHTML = '';
  dayData.steps.forEach((step, i) => {
    const li = document.createElement('li');
    li.innerHTML = '<span class="step-num">' + (i + 1) + '</span><span>' + step + '</span>';
    stepsList.appendChild(li);
  });

  const ingList = document.getElementById('modal-ingredients');
  ingList.innerHTML = '';
  dayData.ingredients.forEach(ing => {
    const li = document.createElement('li');
    li.innerHTML = '<span>' + ing.name + '</span><span class="ing-amount">' + formatAmount(ing) + '</span>';
    ingList.appendChild(li);
  });

  modal.classList.add('active');
}

function renderMenu(week) {
  const list = document.getElementById('menu-list');
  list.innerHTML = '';
  week.days.forEach((d, i) => {
    const li = document.createElement('li');
    const isToday = i === todayIndex;
    li.innerHTML = '<span class="day-label' + (isToday ? ' today' : '') + '">' + d.day + '</span><span class="dish-name">' + d.dish + '</span><span class="recipe-hint">▶</span>' + (isToday ? '<span class="today-badge">今日</span>' : '');
    li.addEventListener('click', () => showRecipe(d));
    list.appendChild(li);
  });
}

function renderShoppingList(week) {
  const container = document.getElementById('shopping-list');
  container.innerHTML = '';
  const byCategory = buildShoppingList(week);
  const orderedCats = [CAT.MEAT, CAT.VEG, CAT.EGG, CAT.CAN, CAT.PASTA, CAT.SEASONING, CAT.OTHER];
  let idCounter = 0;
  for (const cat of orderedCats) {
    const items = byCategory[cat];
    if (!items || items.length === 0) continue;
    const section = document.createElement('div');
    section.className = 'category-section';
    const title = document.createElement('div');
    title.className = 'category-title';
    title.textContent = cat;
    section.appendChild(title);
    for (const item of items) {
      const id = 'item-' + idCounter++;
      const div = document.createElement('div');
      div.className = 'shopping-item';
      div.innerHTML = '<input type="checkbox" id="' + id + '"><label for="' + id + '"><span class="item-name">' + item.name + '</span><span class="item-amount">' + formatAmount(item) + '</span></label>';
      div.querySelector('input').addEventListener('change', function(e) { div.classList.toggle('checked', e.target.checked); });
      section.appendChild(div);
    }
    container.appendChild(section);
  }
}

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
      document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab + '-tab').classList.add('active');
    });
  });
}

function initModal() {
  const modal = document.getElementById('recipe-modal');
  document.getElementById('modal-close').addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
}

function init() {
  const weekIndex = getCurrentWeekIndex();
  const week = WEEKS[weekIndex];
  document.getElementById('week-label').textContent = week.label + 'のメニュー';
  document.title = '夕飯献立 - ' + week.label;
  renderMenu(week);
  renderShoppingList(week);
  initTabs();
  initModal();
}

init();
