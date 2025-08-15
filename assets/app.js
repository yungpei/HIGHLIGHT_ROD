
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
    description: "還記得去年 10 月起光 solo 場結束後，有次邊散步邊開 IG 直播時，突然說好想念台灣的芒果冰，還許願下次來一定要吃到！結果這次演唱會剛好是在炎炎夏日，我們立馬幫社長們準備心心念念的愛文芒果冰沙💚，還有工作人員們最愛的台灣 18 天生啤酒～冰冰涼涼超消暑💚 最幸福的是，成員們還幫我們認證超好喝，東雲更是在兩天的演唱會上都提到他們喝了芒果冰沙💚！光是想像他們邊笑邊喝的樣子，就覺得一切都值得啦～",
    gallery: ["images/mango1.jpg", "images/mango2.png", "images/beer.jpg"],
    notes: ["愛文芒果冰沙", "18天生啤酒"]
  },

    {
      id: "hotel-decor",
      icon: "🛏️",
      title: "成員飯店布置",
      description: "以團體官方色系佈置房間花藝與氣球牆，並準備手寫明信片祝福成員巡演順利。",
      gallery: ["images/hotel_1.svg","images/hotel_2.svg"],
      notes: ["佈置時間 11:00–12:30","與飯店協調免釘免黏替代方案"]
    },
    {
      id: "welcome-gifts",
      icon: "🎁",
      title: "歡迎伴手禮",
      description: "以在地特色小點與品牌聯名周邊組成 Welcome Kit，附上中英韓三語卡片。",
      gallery: ["images/gift_1.svg"]
    },
    {
      id: "backstage-food",
      icon: "🍱",
      title: "後台食物應援",
      description: "為成員與工作人員準備均衡便當、飲品與宵夜，加貼食材與過敏原標示。",
      gallery: ["images/catering_1.svg","images/catering_2.svg"]
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
      description: "整合全球粉絲投稿製作驚喜影片，並於進場發放應援手幅，座位區一起舉起完成應援海。",
      video: { url: "https://www.youtube.com/embed/GzY2N-KKWbM?si=l7WfpKhDr9sk2eoy", caption: "Surprise Project Teaser" },
      gallery: ["images/slogan.jpg"]
    },
    {
      id: "highlight-confetti",
      icon: "✨",
      title: "HIGHLIGHT 彩帶應援",
      description: "高潮曲目時段啟動主題色紙彩帶特效，並同步手機手燈波浪，營造全場沉浸式氛圍。",
      video: { 
      url: "videos/coloer.MP4", 
      caption: "HIGHLIGHT 彩帶應援實況" 
    },
    gallery: ["images/confetti_1.svg","images/confetti_2.svg"]
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

data.sections.forEach((s, idx) => {
  // TOC item
  const li = document.createElement("li");
  li.innerHTML = `<a href="#${s.id}" data-id="${s.id}">${s.icon} ${s.title}</a>`;
  toc.appendChild(li);

  // Section card
  const sec = document.createElement("section");
  sec.className = "section";
  sec.id = s.id;
  const surplusBox = s.id === "finance" ? renderFinanceBox(s.finance) : "";

  const videoBlock = s.video?.url ? `
    <div class="card" style="margin-top:12px">
      <div class="aspect">
        ${
          s.video.url.endsWith(".mp4")
            ? `<video controls style="width:100%; height:100%; border-radius:12px">
                 <source src="${s.video.url}" type="video/mp4">
                 你的瀏覽器不支援影片播放
               </video>`
            : `<iframe src="${s.video.url}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        }
      </div>
      ${s.video.caption ? `<div class="card-pad small">${s.video.caption}</div>` : ""}
    </div>` : "";


  const gallery = (s.gallery && s.gallery.length) ? `
  <div class="gallery">
    ${s.gallery.map((src,i)=>`<img src="${src}" alt="${s.title} ${i+1}">`).join("")}
  </div>` : "";

  const notes = (s.notes && s.notes.length) ? `
  <ul class="notes">
    ${s.notes.map(n=>`<li>${n}</li>`).join("")}
  </ul>` : "";

  const names = (s.names && s.names.length) ? `
  <div class="names">
    ${[...s.names].sort((a,b)=>a.localeCompare(b)).map(n=>`<div class="name">${n}</div>`).join("")}
  </div>` : "";

  sec.innerHTML = `
    <div class="section-card">
      <div class="section-header">
        <div class="section-icon">${s.icon}</div>
        <div style="flex:1">
          <div class="flex">
            <h2 class="section-title">${s.title}</h2>
            <a class="anchor" href="#${s.id}" title="複製錨點" onclick="copyAnchor(event,'${s.id}')">🔗 錨點</a>
          </div>
          ${s.description ? `<p class="desc">${s.description}</p>` : ""}
        </div>
      </div>
      ${videoBlock}
      ${gallery}
      ${notes}
      ${s.id === "finance" ? surplusBox : ""}
      ${names}
    </div>
  `;
  sectionsRoot.appendChild(sec);
});

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

// ---- Anchor copy ----
window.copyAnchor = function(e, id){
  e.preventDefault();
  const url = new URL(window.location.href);
  url.hash = id;
  if(navigator.clipboard){
    navigator.clipboard.writeText(url.toString());
  }
  window.location.hash = id;
}

// ---- Scroll spy ----
const sectionIds = data.sections.map(s=>s.id);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const link = $(`#toc-list a[href="#${id}"]`);
    if(entry.isIntersecting){
      $$("#toc-list a").forEach(a=>a.classList.remove("active"));
      link?.classList.add("active");
    }
  });
}, { rootMargin: "-50% 0px -40% 0px", threshold: 0.01 });

sectionIds.forEach(id => observer.observe(document.getElementById(id)));
