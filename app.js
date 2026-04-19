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

const CATEGORY_ORDER = [
  CAT.MEAT,
  CAT.FISH,
  CAT.VEG,
  CAT.EGG,
  CAT.CAN,
  CAT.PASTA,
  CAT.SEASONING,
  CAT.OTHER,
];

// 4週分のメニューデータ
const WEEKS = [
  {
    label: "第1週",
    days: [
      { day: "月", dish: "鶏の照り焼き丼", ingredients: [{ name: "鶏もも肉", amount: 150, unit: "g", cat: CAT.MEAT },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "みりん", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }] },
      { day: "火", dish: "豚キムチ炒め", ingredients: [{ name: "豚バラ薄切り", amount: 100, unit: "g", cat: CAT.MEAT },{ name: "キムチ", amount: 80, unit: "g", cat: CAT.OTHER },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "ごま油", amount: 1, unit: "小さじ", cat: CAT.SEASONING },{ name: "醤油", amount: 0.5, unit: "大さじ", cat: CAT.SEASONING }] },
      { day: "水", dish: "卵かけご飯＋味噌汁", ingredients: [{ name: "卵", amount: 1, unit: "個", cat: CAT.EGG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "豆腐", amount: 50, unit: "g", cat: CAT.VEG },{ name: "わかめ（乾燥）", amount: 1, unit: "小さじ", cat: CAT.CAN },{ name: "味噌", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "醤油", amount: 0.5, unit: "大さじ", cat: CAT.SEASONING }] },
      { day: "木", dish: "サバ缶大根おろし", ingredients: [{ name: "サバ水煮缶", amount: 1, unit: "缶", cat: CAT.CAN },{ name: "大根", amount: 100, unit: "g", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "ポン酢", amount: 1, unit: "大さじ", cat: CAT.SEASONING }] },
      { day: "金", dish: "鶏そぼろ丼", ingredients: [{ name: "鶏ひき肉", amount: 100, unit: "g", cat: CAT.MEAT },{ name: "卵", amount: 1, unit: "個", cat: CAT.EGG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "みりん", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }] },
      { day: "土", dish: "豚と豆腐のすき焼き風", ingredients: [{ name: "豚薄切り肉", amount: 100, unit: "g", cat: CAT.MEAT },{ name: "豆腐", amount: 150, unit: "g", cat: CAT.VEG },{ name: "長ねぎ", amount: 0.5, unit: "本", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING },{ name: "みりん", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING },{ name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }] },
      { day: "日", dish: "カレーライス", ingredients: [{ name: "豚薄切り肉", amount: 100, unit: "g", cat: CAT.MEAT },{ name: "玉ねぎ", amount: 0.5, unit: "個", cat: CAT.VEG },{ name: "じゃがいも", amount: 1, unit: "個", cat: CAT.VEG },{ name: "にんじん", amount: 0.5, unit: "本", cat: CAT.VEG },{ name: "カレールー", amount: 1, unit: "かけ", cat: CAT.OTHER },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }] },
    ],
  },
  {
    label: "第2週",
    days: [
      { day: "月", dish: "豚の生姜焼き丼", ingredients: [{ name: "豚薄切り肉", amount: 150, unit: "g", cat: CAT.MEAT },{ name: "生姜", amount: 1, unit: "片", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "みりん", amount: 1, unit: "大さじ", cat: CAT.SEASONING }] },
      { day: "火", dish: "麻婆豆腐", ingredients: [{ name: "豚ひき肉", amount: 80, unit: "g", cat: CAT.MEAT },{ name: "豆腐", amount: 150, unit: "g", cat: CAT.VEG },{ name: "にんにく", amount: 1, unit: "片", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "豆板醤", amount: 1, unit: "小さじ", cat: CAT.SEASONING },{ name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "鶏がらスープの素", amount: 1, unit: "小さじ", cat: CAT.SEASONING },{ name: "ごま油", amount: 1, unit: "小さじ", cat: CAT.SEASONING }] },
      { day: "水", dish: "納豆ご飯＋味噌汁", ingredients: [{ name: "納豆", amount: 1, unit: "パック", cat: CAT.OTHER },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "わかめ（乾燥）", amount: 1, unit: "小さじ", cat: CAT.CAN },{ name: "味噌", amount: 1, unit: "大さじ", cat: CAT.SEASONING }] },
      { day: "木", dish: "鮭の塩焼き", ingredients: [{ name: "鮭", amount: 1, unit: "切れ", cat: CAT.MEAT },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "塩", amount: 1, unit: "小さじ", cat: CAT.SEASONING },{ name: "わかめ（乾燥）", amount: 1, unit: "小さじ", cat: CAT.CAN },{ name: "味噌", amount: 1, unit: "大さじ", cat: CAT.SEASONING }] },
      { day: "金", dish: "ベーコンエッグ丼", ingredients: [{ name: "ベーコン", amount: 50, unit: "g", cat: CAT.MEAT },{ name: "卵", amount: 2, unit: "個", cat: CAT.EGG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "塩・こしょう", amount: 1, unit: "適量", cat: CAT.SEASONING }] },
      { day: "土", dish: "鶏の唐揚げ", ingredients: [{ name: "鶏もも肉", amount: 200, unit: "g", cat: CAT.MEAT },{ name: "にんにく", amount: 1, unit: "片", cat: CAT.VEG },{ name: "生姜", amount: 1, unit: "片", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING },{ name: "酒", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "片栗粉", amount: 3, unit: "大さじ", cat: CAT.SEASONING }] },
      { day: "日", dish: "鶏鍋", ingredients: [{ name: "鶏もも肉", amount: 150, unit: "g", cat: CAT.MEAT },{ name: "白菜", amount: 150, unit: "g", cat: CAT.VEG },{ name: "豆腐", amount: 100, unit: "g", cat: CAT.VEG },{ name: "長ねぎ", amount: 0.5, unit: "本", cat: CAT.VEG },{ name: "白だし", amount: 2, unit: "大さじ", cat: CAT.SEASONING }] },
    ],
  },
  {
    label: "第3週",
    days: [
      { day: "月", dish: "親子丼", ingredients: [{ name: "鶏もも肉", amount: 120, unit: "g", cat: CAT.MEAT },{ name: "卵", amount: 2, unit: "個", cat: CAT.EGG },{ name: "玉ねぎ", amount: 0.25, unit: "個", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING },{ name: "みりん", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }] },
      { day: "火", dish: "豚バラ大根煮", ingredients: [{ name: "豚バラ薄切り", amount: 100, unit: "g", cat: CAT.MEAT },{ name: "大根", amount: 150, unit: "g", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING },{ name: "みりん", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }] },
      { day: "水", dish: "ツナ缶炒飯", ingredients: [{ name: "ツナ缶", amount: 1, unit: "缶", cat: CAT.CAN },{ name: "卵", amount: 1, unit: "個", cat: CAT.EGG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "ごま油", amount: 1, unit: "小さじ", cat: CAT.SEASONING },{ name: "塩・こしょう", amount: 1, unit: "適量", cat: CAT.SEASONING }] },
      { day: "木", dish: "サバ味噌煮（缶）定食", ingredients: [{ name: "サバ味噌煮缶", amount: 1, unit: "缶", cat: CAT.CAN },{ name: "大根", amount: 100, unit: "g", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }] },
      { day: "金", dish: "そぼろ丼（合いびき）", ingredients: [{ name: "合いびき肉", amount: 100, unit: "g", cat: CAT.MEAT },{ name: "卵", amount: 1, unit: "個", cat: CAT.EGG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "みりん", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }] },
      { day: "土", dish: "豚しゃぶサラダ", ingredients: [{ name: "豚薄切り肉", amount: 150, unit: "g", cat: CAT.MEAT },{ name: "レタス", amount: 100, unit: "g", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "ポン酢", amount: 2, unit: "大さじ", cat: CAT.SEASONING },{ name: "ごま油", amount: 1, unit: "小さじ", cat: CAT.SEASONING }] },
      { day: "日", dish: "豚汁定食", ingredients: [{ name: "豚バラ薄切り", amount: 60, unit: "g", cat: CAT.MEAT },{ name: "大根", amount: 80, unit: "g", cat: CAT.VEG },{ name: "にんじん", amount: 0.25, unit: "本", cat: CAT.VEG },{ name: "こんにゃく", amount: 50, unit: "g", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "味噌", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING }] },
    ],
  },
  {
    label: "第4週",
    days: [
      { day: "月", dish: "牛丼", ingredients: [{ name: "牛薄切り肉", amount: 150, unit: "g", cat: CAT.MEAT },{ name: "玉ねぎ", amount: 0.5, unit: "個", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING },{ name: "みりん", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING },{ name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }] },
      { day: "火", dish: "肉じゃが", ingredients: [{ name: "豚薄切り肉", amount: 100, unit: "g", cat: CAT.MEAT },{ name: "じゃがいも", amount: 2, unit: "個", cat: CAT.VEG },{ name: "玉ねぎ", amount: 0.5, unit: "個", cat: CAT.VEG },{ name: "にんじん", amount: 0.3, unit: "本", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING },{ name: "みりん", amount: 1.5, unit: "大さじ", cat: CAT.SEASONING },{ name: "砂糖", amount: 1, unit: "小さじ", cat: CAT.SEASONING }] },
      { day: "水", dish: "卵チャーハン", ingredients: [{ name: "卵", amount: 2, unit: "個", cat: CAT.EGG },{ name: "ハム", amount: 50, unit: "g", cat: CAT.MEAT },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "ごま油", amount: 1, unit: "小さじ", cat: CAT.SEASONING },{ name: "塩・こしょう", amount: 1, unit: "適量", cat: CAT.SEASONING }] },
      { day: "木", dish: "鮭のバター醤油焼き", ingredients: [{ name: "鮭", amount: 1, unit: "切れ", cat: CAT.MEAT },{ name: "バター", amount: 10, unit: "g", cat: CAT.EGG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "醤油", amount: 1, unit: "大さじ", cat: CAT.SEASONING }] },
      { day: "金", dish: "たらこご飯＋味噌汁", ingredients: [{ name: "たらこ", amount: 50, unit: "g", cat: CAT.MEAT },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "バター", amount: 5, unit: "g", cat: CAT.EGG },{ name: "わかめ（乾燥）", amount: 1, unit: "小さじ", cat: CAT.CAN },{ name: "味噌", amount: 1, unit: "大さじ", cat: CAT.SEASONING }] },
      { day: "土", dish: "餃子（市販）＋キャベツ炒め", ingredients: [{ name: "市販餃子", amount: 10, unit: "個", cat: CAT.OTHER },{ name: "キャベツ", amount: 100, unit: "g", cat: CAT.VEG },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA },{ name: "ポン酢", amount: 2, unit: "大さじ", cat: CAT.SEASONING }] },
      { day: "日", dish: "豚キムチ鍋", ingredients: [{ name: "豚バラ薄切り", amount: 150, unit: "g", cat: CAT.MEAT },{ name: "キムチ", amount: 100, unit: "g", cat: CAT.OTHER },{ name: "豆腐", amount: 100, unit: "g", cat: CAT.VEG },{ name: "長ねぎ", amount: 0.5, unit: "本", cat: CAT.VEG },{ name: "白だし", amount: 1, unit: "大さじ", cat: CAT.SEASONING },{ name: "ご飯", amount: 1, unit: "膳", cat: CAT.PASTA }] },
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

function renderMenu(week) {
  const list = document.getElementById('menu-list');
  list.innerHTML = '';
  week.days.forEach((d, i) => {
    const li = document.createElement('li');
    const isToday = i === todayIndex;
    li.innerHTML = '<span class="day-label' + (isToday ? ' today' : '') + '">' + d.day + '</span><span class="dish-name">' + d.dish + '</span>' + (isToday ? '<span class="today-badge">今日</span>' : '');
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

function init() {
  const weekIndex = getCurrentWeekIndex();
  const week = WEEKS[weekIndex];
  document.getElementById('week-label').textContent = week.label + 'のメニュー';
  document.title = '夕飯献立 - ' + week.label;
  renderMenu(week);
  renderShoppingList(week);
  initTabs();
}

init();
