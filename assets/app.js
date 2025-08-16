
// ---- Data (可直接改這裡) ----
const data = {
  title: "2025 Ride or Die 應援成果報告書",
  subtitle: "HIGHLIGHT • BEAST • 應援總結",
  cover: {
    image: "images/highlight_ban.png",
    date: "2025-08-02",
    venue: "台北流行音樂中心",
  },
  sections: [
    {
      id: "welcome-snacks",
      icon: "🍪",
      title: "迎賓點心",
      // pages 內每個物件就是一頁
      pages: [
        {
          title: "迎賓點心｜芒果冰沙 & 18 天生啤酒",
          description:
            "還記得去年 10 月起光 solo 場結束後，有次邊散步邊開 IG 直播時，社長突然說好想念台灣的芒果冰，還許願下次來一定要吃到！這次剛好是炎炎夏日，我們立刻準備了心心念念的愛文芒果冰沙💚，還有工作人員最愛的台灣 18 天生啤酒～冰冰涼涼超消暑💚。最幸福的是，成員們還幫我們認證超好喝；東雲更是在兩天的演唱會上都提到他們喝了芒果冰沙💚！光是想像他們邊笑邊喝的樣子，就覺得一切都值得啦～",
          gallery: ["images/mango1.jpg", "images/mango2.png", "images/beer.jpg"],
          notes: ["愛文芒果冰沙", "台灣 18 天生啤酒"]
        },
        {
          title: "迎賓點心｜大苑子 爆漿雞蛋糕 & 黑糖三料豆花",
          description:
            "點心部分我們特別排除夏天容易有負擔的雞排、地瓜球，改選冰涼又具台灣特色的黑糖三料豆花，以及輕鬆可口的爆漿雞蛋糕，讓成員與工作人員都能開心享用台式甜點！",
          gallery: ["images/cake1.jpg", "images/egg.png"],
          notes: ["爆漿雞蛋糕", "黑糖三料豆花"]
        }
     ]
    },

    {
      id: "hotel-decor",
      icon: "🛏️",
      title: "成員飯店布置",
      description: "選用了成員們代表色的氣球組以及成員名字的英文縮寫（DJ、YS、GK、DW）進行飯店布置，期待帶給成員們一進房間的驚喜感，也很開心在耀燮和斗俊的 YT 頻道裡都有認證到團隊在飯店準備的氣球歡迎禮。",
      gallery: ["images/hotel.jpg","images/hotel2.jpg"]
    },
    {
      id: "welcome-gifts",
      icon: "🎁",
      title: "歡迎伴手禮",
      description:"我們精心挑選了韓國朋友來台必買的人氣伴手禮：噶瑪蘭威士忌、甜滿牛軋餅、義美小泡芙、奶茶沖泡飲等。成員部分再加碼中秋節月餅禮盒，以及舞台工作最需要的酸痛貼布與潤喉糖，祝亞巡準備順利、身體與喉嚨都顧好，之後也能和我們長長久久見面！",
      gallery: ["images/gift2.png","images/gift1.jpg"],
      notes: [
        "【成員伴手禮】",
        "噶瑪蘭 經典獨奏 Oloroso 雪莉桶",
        "三統漢菓子 芋泥流心酥 中秋禮盒",
        "甜滿牛軋餅",
        "義美小泡芙",
        "普拿疼肌立 酸痛貼布",
        "京都念慈菴 枇杷潤喉糖",
        "【工作人員伴手禮】",
        "甜滿牛軋餅",
        "香濃原味 奶茶沖泡飲"
      ]
    },
    {
      id: "backstage-food",
      icon: "🍱",
      title: "後台食物應援",
      // pages 內每個物件就是一頁
      pages: [
        {
          title: "後台食物應援｜鼎泰豐 小籠包 & 牛肉麵 & 冰美式",
          description:
            "上一次斗俊來台灣微風之夜活動時，有提到如果不用飲控的話會想吃3碗牛肉麵！因此這次團隊準備了鼎泰豐的小籠包及牛肉麵，幫社長達成來台灣吃美食的心願。另外也準備了他們每天不可或缺的冰美式，幫助他們彩排時提振精神。",
          gallery: ["images/back00.jpg", "images/back01.jpg"],
          notes: ["鼎泰豐 小籠包 & 牛肉麵", "冰美式"]
        },
        {
          title: "後台食物應援｜洪瑞珍 三明治 & 50嵐 深焙烏龍拿鐵+波霸",
          description:
            "工作人員的部分準備了韓國人之間很紅的台灣洪瑞珍三明治以及 50 嵐的深焙烏龍拿鐵+波霸，希望他們吃飽喝足後認真地完成各自崗位的工作，使演唱會順利進行。在後台休息室內我們也準備了 FIN 運動飲料、原翠無糖茶和數款冰淇淋及零食組等等，讓成員和全體工作人員在工作空檔時能享用一些茶水點心，打擊工作的疲憊感！",
          gallery: ["images/back1.jpg", "images/back2.jpg", "images/back3.jpg", "images/back4.png", "images/back5.png"],
          notes: ["洪瑞珍 三明治", "50嵐 深焙烏龍拿鐵+波霸" , "水果杯", "FIN 運動飲料", "原翠無糖茶", "數款冰淇淋及零食組"]
        }
     ]
    },
    {
      id: "outdoor-banner",
      icon: "🚩",
      title: "場外旗布留言應援",
      description: "場外大旗布的留言應援，是我們希望能透過各位B2UTY&LIGHT的祝福與鼓勵，將文字匯聚成一股溫暖的力量，讓社長們能感受到台灣粉絲一路以來的支持與陪伴。當天開始整隊進場後，團隊小編也將旗布交給希林主辦負責人，並由他們交給社長的經紀人，順利將大家的心意傳達給社長。",
      gallery: ["images/flag.jpg"]
    },
    {
      id: "surprise-video",
      icon: "🎬",
      title: "驚喜影片暨手幅應援",
      description: "主題選用了BEAST/HIGHLIGHT於我而言是...？ 搭配歷年 MV 回顧以及由團隊事先收集賴特們的投稿影片,將大家心中 BEAST/HIGHLIGHT 是什麼樣的特別存在，和各位想對HIGHLIGHT說的話藉由影片應援傳遞給社長們，期望影片帶給社長們滿滿的溫暖與感動。謝謝喜歡這部影片的大家也很感謝各位的投稿參與，團隊盡最大努力讓投稿的賴特都能出現在影片中，但不免因為影片時長限制的原因而有遺珠之憾，感謝大家的體諒！",
      video: { url: "https://www.youtube.com/embed/GzY2N-KKWbM?si=l7WfpKhDr9sk2eoy", caption: "Surprise Project Teaser" },
      gallery: ["images/slogan.jpg"]
    },
    {
      id: "highlight-confetti",
      icon: "✨",
      title: "HIGHLIGHT 彩帶應援",
      description: "彩帶應援原先在棒球賽中象徵比賽的完美落幕，藉由這個意義非凡的理念，我們團隊發想出運用成員代表色（藍、黃、綠、紫）四種顏色，配合 Follow Me 這首作為演唱會精彩結束並且大家一起快樂大喊應援的歌曲，從觀眾座位席拋灑出成員代表色彩帶，像是將全場的心意化為絢爛的弧線，與舞台上的光影交響，讓每一位觀眾在這一刻跟緊成員們的腳步，一起따랑해！留下共同的美好記憶。彩帶應援是非常需要全體觀眾的默契才有辦法一起完成的項目，本團隊再次感謝全體觀眾的盡力配合，多虧你們才能完成這項不容易的應援項目，另外也謝謝美麗的賴特在耀燮QA中問了他有沒有看到彩帶應援，謝謝耀燮稱讚了彩帶應援很漂亮！",
      video: { 
      url: "videos/coloer.MP4", 
      caption: "HIGHLIGHT 彩帶應援實況" 
    },
    gallery: ["images/confetti_1.svg","images/c2.jpg"]
    },
    {
      id: "finance",
      icon: "💰",
      title: "財務支出暨結餘處理",
      description: "公開透明列示各項支出與收入來源，結餘依約定比例提撥至下一場次與公益捐款。",
      finance: {
        currency: "TWD",
        income: [
          { item: "集資收入", amount: 185000 },
          { item: "周邊義賣", amount: 23000 }
        ],
        expenses: [
          { item: "點心採購", amount: 28000, note: "含飲品與紙餐具" },
          { item: "飯店佈置", amount: 15000 },
          { item: "伴手禮", amount: 22000 },
          { item: "後台餐飲", amount: 36000 },
          { item: "旗布背板", amount: 18000 },
          { item: "驚喜影片製作", amount: 12000 },
          { item: "手幅印刷", amount: 14000 },
          { item: "彩帶特效", amount: 19000 },
          { item: "雜支(物流/交通)", amount: 8000 }
        ],
        surplusPolicy: "結餘 60% 保留為下次應援基金、40% 以應援名義捐贈兒少公益。"
      }
    },
    {
      id: "donor-list",
      icon: "👥",
      title: "集資感謝名單",
      description: "感謝所有支持本次專案的贊助者（以下依首字母排序）。",
      names: ["A‑Chan","Belle","Cindy","Dylan","Echo","Fina","Gio","Hana"]
    },
    {
      id: "helpers",
      icon: "🤝",
      title: "小幫手感謝名單",
      description: "感謝協力夥伴於現場動線、物資、攝影與社群記錄上的大力相助。",
      names: ["Ivy","Jason","Kiko","Leo","Mika","Nina"]
    },
    {
      id: "closing",
      icon: "📝",
      title: "應援心得和結語",
      description: "這次專案讓我們學到跨國協作、即時溝通與現場風險控管的重要；也再次見證粉絲間的相互支持與愛。期待下一次，更成熟、更溫暖。"
    }
  ]
};

// ---- Helpers ----
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
const currency = new Intl.NumberFormat("zh-TW", { style: "currency", currency: "TWD", maximumFractionDigits: 0 });

// ---- Initialize header/cover ----
document.title = `應援成果報告書`;
$("#subtitle").textContent = data.subtitle;
$("#cover-img").src = data.cover.image;
$("#cover-title").textContent = data.subtitle;
$("#cover-meta").textContent = `${data.cover.date} • ${data.cover.venue}`;
$("#year").textContent = new Date().getFullYear();

// ---- Build TOC and Sections ----
const toc = $("#toc-list");
const sectionsRoot = $("#sections");

// ✅ 建議把這三個工具函式放在 forEach 外面
function renderVideoBlock(v){
  if(!v?.url) return "";
  const isMp4 = v.url.endsWith(".mp4");
  return `
    <div class="card" style="margin-top:12px">
      <div class="aspect">
        ${
          isMp4
          ? `<video controls style="width:100%; height:100%; border-radius:12px">
               <source src="${v.url}" type="video/mp4">
               你的瀏覽器不支援影片播放
             </video>`
          : `<iframe src="${v.url}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        }
      </div>
      ${v.caption ? `<div class="card-pad small">${v.caption}</div>` : ""}
    </div>
  `;
}

function renderPageBlock(p, pageNumber){
  const video = renderVideoBlock(p.video);
  const gallery = p.gallery?.length
    ? `<div class="gallery">${p.gallery.map((src,i)=>`<img src="${src}" alt="${p.title||""} ${i+1}">`).join("")}</div>`
    : "";
  const notes = p.notes?.length
    ? `<ul class="notes">${p.notes.map(n=>`<li>${n}</li>`).join("")}</ul>`
    : "";
  return `
    <div class="section-card" style="margin-top:12px">
      ${p.title ? `<h3 class="section-title" style="font-size:18px;margin:0 0 6px 0">${pageNumber}. ${p.title}</h3>` : ""}
      ${p.description ? `<p class="desc">${p.description}</p>` : ""}
      ${video}
      ${gallery}
      ${notes}
    </div>
  `;
}

function renderFinanceBox(fin){
  if(!fin) return "";
  const incomeTotal = fin.income.reduce((a,b)=>a+b.amount,0);
  const expenseTotal = fin.expenses.reduce((a,b)=>a+b.amount,0);
  const surplus = incomeTotal - expenseTotal;
  return `
  <div style="margin-top:16px">
    <h3>收入</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>項目</th><th style="text-align:right">金額</th></tr></thead>
        <tbody>
          ${fin.income.map(r=>`<tr><td>${r.item}</td><td style="text-align:right">${currency.format(r.amount)}</td></tr>`).join("")}
        </tbody>
        <tfoot><tr><td>合計</td><td style="text-align:right">${currency.format(incomeTotal)}</td></tr></tfoot>
      </table>
    </div>
    <h3 style="margin-top:14px">支出</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>項目</th><th style="text-align:right">金額</th><th>備註</th></tr></thead>
        <tbody>
          ${fin.expenses.map(r=>`<tr><td>${r.item}</td><td style="text-align:right">${currency.format(r.amount)}</td><td>${r.note||"—"}</td></tr>`).join("")}
        </tbody>
        <tfoot><tr><td>合計</td><td style="text-align:right">${currency.format(expenseTotal)}</td><td></td></tr></tfoot>
      </table>
    </div>
    <div style="margin-top:12px">
      <span class="badge ${surplus<0?'neg':''}">結餘：${currency.format(surplus)}</span>
      <div class="small" style="margin-top:6px">${fin.surplusPolicy||""}</div>
    </div>
  </div>`;
}

// =========================
// 渲染區塊
// =========================
data.sections.forEach((s, idx) => {
  // TOC item
  const li = document.createElement("li");
  li.innerHTML = `<a href="#${s.id}" data-id="${s.id}">${s.icon} ${s.title}</a>`;
  toc.appendChild(li);

  // Section card
  const sec = document.createElement("section");
  sec.className = "section";
  sec.id = s.id;

  const hasPages = Array.isArray(s.pages) && s.pages.length > 0;

  sec.innerHTML = `
    <div class="section-card">
      <div class="section-header">
        <div class="section-icon">${s.icon}</div>
        <div style="flex:1">
          <div class="flex">
            <h2 class="section-title">${s.title}</h2>
            <a class="anchor" href="#${s.id}" title="複製錨點" onclick="copyAnchor(event,'${s.id}')">🔗 錨點</a>
          </div>
          ${!hasPages && s.description ? `<p class="desc">${s.description}</p>` : ""}
        </div>
      </div>

      ${
        hasPages
          ? s.pages.map((p, i) => renderPageBlock(p, i + 1)).join("")
          : `
            ${renderVideoBlock(s.video)}
            ${s.gallery?.length
                ? `<div class="gallery">${s.gallery.map((src,i)=>`<img src="${src}" alt="${s.title} ${i+1}">`).join("")}</div>`
                : ""}
            ${s.notes?.length
                ? `<ul class="notes">${s.notes.map(n=>`<li>${n}</li>`).join("")}</ul>`
                : ""}
          `
      }

      ${s.id === "finance" && s.finance ? renderFinanceBox(s.finance) : ""}
      ${s.names?.length
          ? `<div class="names">${[...s.names].sort((a,b)=>a.localeCompare(b)).map(n=>`<div class="name">${n}</div>`).join("")}</div>`
          : ""}
    </div>
  `;

  // ✅ 把 section 插入頁面
  sectionsRoot.appendChild(sec);
}); // ✅ 補上 forEach 的結尾

// ---- Anchor copy ----
window.copyAnchor = function(e, id){
  e.preventDefault();
  const url = new URL(window.location.href);
  url.hash = id;
  if(navigator.clipboard){
    navigator.clipboard.writeText(url.toString());
  }
  window.location.hash = id;
};

// ---- Scroll spy ----
const sectionIds = data.sections.map(s=>s.id);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const link = document.querySelector(`#toc-list a[href="#${id}"]`);
    if(entry.isIntersecting){
      document.querySelectorAll("#toc-list a").forEach(a=>a.classList.remove("active"));
      link?.classList.add("active");
    }
  });
}, { rootMargin: "-50% 0px -40% 0px", threshold: 0.01 });

// ✅ 確保節點已插入後再觀察
sectionIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});

