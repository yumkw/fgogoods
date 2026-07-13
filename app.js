const PRODUCTS = [
  {
    "id": 1,
    "name": "B2タペストリー（メインビジュアル）",
    "price": 3000,
    "category": "通常販売"
  },
  {
    "id": 2,
    "name": "A4クリアファイル（メインビジュアル）",
    "price": 500,
    "category": "通常販売"
  },
  {
    "id": 3,
    "name": "Fate/Grand Order展 -星見の回廊- ショッパー",
    "price": 800,
    "category": "通常販売"
  },
  {
    "id": 4,
    "name": "デスクマット",
    "price": 3000,
    "category": "通常販売"
  },
  {
    "id": 5,
    "name": "A3メタリックポスター（メインビジュアル）",
    "price": 900,
    "category": "通常販売"
  },
  {
    "id": 6,
    "name": "アクリルスタンド（全14種）",
    "price": 1900,
    "category": "通常販売"
  },
  {
    "id": 7,
    "name": "ランダム箔押し缶バッジ（全14種）",
    "price": 500,
    "category": "通常販売"
  },
  {
    "id": 8,
    "name": "アクリルスタンド（6種）",
    "price": 1600,
    "category": "通常販売"
  },
  {
    "id": 9,
    "name": "アクリルスタンド（フォウ）",
    "price": 1200,
    "category": "通常販売"
  },
  {
    "id": 10,
    "name": "アクリルチャーム（リヨ描き下ろしイラスト 全3種）",
    "price": 800,
    "category": "通常販売"
  },
  {
    "id": 11,
    "name": "アクリルチャーム（経験値描き下ろしイラスト 全8種）",
    "price": 800,
    "category": "通常販売"
  },
  {
    "id": 12,
    "name": "アクリルチャーム（槌田描き下ろしイラスト 全3種）",
    "price": 800,
    "category": "通常販売"
  },
  {
    "id": 13,
    "name": "缶バッジ3個セット（第1部 カルデア）",
    "price": 1350,
    "category": "通常販売"
  },
  {
    "id": 14,
    "name": "缶バッジ4個セット（第2部 ストーム・ボーダー）",
    "price": 1800,
    "category": "通常販売"
  },
  {
    "id": 15,
    "name": "缶バッジ3個セット（リヨ描き下ろしイラスト）",
    "price": 1350,
    "category": "通常販売"
  },
  {
    "id": 16,
    "name": "缶バッジ4個セット（経験値描き下ろしイラストA）",
    "price": 1800,
    "category": "通常販売"
  },
  {
    "id": 17,
    "name": "缶バッジ4個セット（経験値描き下ろしイラストB）",
    "price": 1800,
    "category": "通常販売"
  },
  {
    "id": 18,
    "name": "缶バッジ3個セット（槌田描き下ろしイラスト）",
    "price": 1350,
    "category": "通常販売"
  },
  {
    "id": 19,
    "name": "A4クリアファイル（第1部 カルデア）",
    "price": 500,
    "category": "通常販売"
  },
  {
    "id": 20,
    "name": "A4クリアファイル（第2部 ストーム・ボーダー）",
    "price": 500,
    "category": "通常販売"
  },
  {
    "id": 21,
    "name": "A4クリアファイル（リヨ描き下ろしイラスト）",
    "price": 500,
    "category": "通常販売"
  },
  {
    "id": 22,
    "name": "A4クリアファイル（経験値描き下ろしイラスト）",
    "price": 500,
    "category": "通常販売"
  },
  {
    "id": 23,
    "name": "A4クリアファイル（槌田描き下ろしイラスト）",
    "price": 500,
    "category": "通常販売"
  },
  {
    "id": 24,
    "name": "ランダムジュエリー缶バッジ（全7種）",
    "price": 700,
    "category": "通常販売"
  },
  {
    "id": 25,
    "name": "ビジュー付きメタルチャーム（全7種）",
    "price": 1800,
    "category": "通常販売"
  },
  {
    "id": 26,
    "name": "Fate/Grand Order展 -星見の回廊- ロゴラバーチャーム",
    "price": 800,
    "category": "通常販売"
  },
  {
    "id": 27,
    "name": "Fate/Grand Order展 -星見の回廊- ロゴマグカップ",
    "price": 1600,
    "category": "通常販売"
  },
  {
    "id": 28,
    "name": "ロングポスター",
    "price": 2000,
    "category": "通常販売"
  },
  {
    "id": 29,
    "name": "B2タペストリー（第2部 終章メインビジュアル）",
    "price": 3000,
    "category": "通常販売"
  },
  {
    "id": 30,
    "name": "A4クリアファイル（第2部 終章メインビジュアル）",
    "price": 500,
    "category": "通常販売"
  },
  {
    "id": 31,
    "name": "A3メタリックポスター（第2部 終章メインビジュアル）",
    "price": 900,
    "category": "通常販売"
  },
  {
    "id": 32,
    "name": "額装レイヤードアクリルアート（第2部 終章メインビジュアル）",
    "price": 10000,
    "category": "通常販売"
  },
  {
    "id": 33,
    "name": "ゲームスチルポストカード（全35種）",
    "price": 300,
    "category": "通常販売"
  },
  {
    "id": 34,
    "name": "終章EDアクリルクロック",
    "price": 6500,
    "category": "通常販売"
  },
  {
    "id": 35,
    "name": "デフォルメぬいぐるみ（全4種）",
    "price": 3300,
    "category": "通常販売"
  },
  {
    "id": 36,
    "name": "輝石プリントクッキー",
    "price": 1500,
    "category": "通常販売"
  },
  {
    "id": 37,
    "name": "聖晶石ルームライト",
    "price": 4000,
    "category": "通常販売"
  },
  {
    "id": 38,
    "name": "グミプリズム",
    "price": 1700,
    "category": "通常販売"
  },
  {
    "id": 39,
    "name": "呼符一筆箋",
    "price": 1500,
    "category": "通常販売"
  },
  {
    "id": 40,
    "name": "素材アイテムマスキングテープ（全5種）",
    "price": 900,
    "category": "通常販売"
  },
  {
    "id": 41,
    "name": "グランドトートバッグ",
    "price": 3500,
    "category": "通常販売"
  },
  {
    "id": 42,
    "name": "グランドクラスアイコンピンバッジ（全15種）",
    "price": 900,
    "category": "通常販売"
  },
  {
    "id": 43,
    "name": "ターミナルボードアクリルバッジ（第1部ランダム9種）",
    "price": 400,
    "category": "通常販売"
  },
  {
    "id": 44,
    "name": "ターミナルボードアクリルバッジ（第2部ランダム9種）",
    "price": 400,
    "category": "通常販売"
  },
  {
    "id": 45,
    "name": "ターミナルボードアクリルバッジ（第1.5部＆奏章ランダム8種）",
    "price": 400,
    "category": "通常販売"
  },
  {
    "id": 46,
    "name": "ポロシャツ（全3サイズ）",
    "price": 4400,
    "category": "通常販売"
  },
  {
    "id": 47,
    "name": "ストーム・ボーダーMA-1（全3サイズ）",
    "price": 18000,
    "category": "通常販売"
  },
  {
    "id": 48,
    "name": "魔神柱ラバーマグネット（ランダム8種）",
    "price": 800,
    "category": "通常販売"
  },
  {
    "id": 49,
    "name": "空想樹ラバーマグネット（ランダム8種）",
    "price": 800,
    "category": "通常販売"
  },
  {
    "id": 50,
    "name": "名言＆迷言ステッカー（5枚入り／ランダム50種）",
    "price": 500,
    "category": "通常販売"
  },
  {
    "id": 51,
    "name": "コマンドカードボールペン3本セット",
    "price": 1500,
    "category": "通常販売"
  },
  {
    "id": 52,
    "name": "カルデアコンテナボックス",
    "price": 3000,
    "category": "通常販売"
  },
  {
    "id": 53,
    "name": "カルデアスタッフ風パスケース＆カードセット",
    "price": 2000,
    "category": "通常販売"
  },
  {
    "id": 54,
    "name": "カルデアワッペン",
    "price": 800,
    "category": "通常販売"
  },
  {
    "id": 55,
    "name": "ぷくぽこシール",
    "price": 800,
    "category": "通常販売"
  },
  {
    "id": 56,
    "name": "カラビナ（全3種）",
    "price": 2000,
    "category": "通常販売"
  },
  {
    "id": 57,
    "name": "コマンドカードTシャツ Arts（全4サイズ）",
    "price": 3000,
    "category": "通常販売"
  },
  {
    "id": 58,
    "name": "コマンドカードTシャツ Quick（全4サイズ）",
    "price": 3000,
    "category": "通常販売"
  },
  {
    "id": 59,
    "name": "コマンドカードTシャツ Buster（全4サイズ）",
    "price": 3000,
    "category": "通常販売"
  },
  {
    "id": 60,
    "name": "コマンドカードTシャツ Extra Attack（全4サイズ）",
    "price": 3000,
    "category": "通常販売"
  },
  {
    "id": 61,
    "name": "Fate/Grand Order Servant Art Works Ⅰ -最終再臨画集-",
    "price": 4950,
    "category": "通常販売"
  },
  {
    "id": 62,
    "name": "Fate/Grand Order Servant Art Works Ⅱ -最終再臨画集-",
    "price": 4950,
    "category": "通常販売"
  },
  {
    "id": 63,
    "name": "ビルディバイド -ブライト- プレミアムブースターパック Fate/Grand Order サマーイベントスペシャル（1パック）",
    "price": 550,
    "category": "通常販売"
  },
  {
    "id": 64,
    "name": "ビルディバイド -ブライト- プレミアムブースターパック Fate/Grand Order サマーイベントスペシャル（1BOX）",
    "price": 5500,
    "category": "通常販売"
  },
  {
    "id": 65,
    "name": "Fate/Grand Order Original Soundtrack Ⅰ",
    "price": 4180,
    "category": "通常販売"
  },
  {
    "id": 66,
    "name": "Fate/Grand Order Original Soundtrack Ⅱ",
    "price": 4180,
    "category": "通常販売"
  },
  {
    "id": 67,
    "name": "Fate/Grand Order Original Soundtrack Ⅲ",
    "price": 4180,
    "category": "通常販売"
  },
  {
    "id": 68,
    "name": "Fate/Grand Order Original Soundtrack Ⅳ",
    "price": 4180,
    "category": "通常販売"
  },
  {
    "id": 69,
    "name": "Fate/Grand Order Original Soundtrack V",
    "price": 4180,
    "category": "通常販売"
  },
  {
    "id": 70,
    "name": "Fate/Grand Order Original Soundtrack VI",
    "price": 4180,
    "category": "通常販売"
  },
  {
    "id": 71,
    "name": "Fate/Grand Order Original Soundtrack Ⅶ",
    "price": 4620,
    "category": "通常販売"
  },
  {
    "id": 72,
    "name": "Fate/Grand Order Original Soundtrack Ⅷ",
    "price": 4180,
    "category": "通常販売"
  },
  {
    "id": 73,
    "name": "オーロラカードコレクション（グランドクラスの間描き下ろし ランダム14種）",
    "price": 300,
    "category": "会場後期発売"
  },
  {
    "id": 74,
    "name": "キャラファインマット（全14種）",
    "price": 5500,
    "category": "会場後期発売"
  },
  {
    "id": 75,
    "name": "アクリルプレート（クリプター描き下ろし）",
    "price": 2500,
    "category": "会場後期発売"
  },
  {
    "id": 76,
    "name": "A4クリアファイル（クリプター描き下ろし）",
    "price": 500,
    "category": "会場後期発売"
  },
  {
    "id": 77,
    "name": "缶入り場面カットブロマイドセット",
    "price": 4400,
    "category": "会場後期発売"
  },
  {
    "id": 78,
    "name": "ストーム・ボーダー模型",
    "price": 9900,
    "category": "会場後期発売"
  }
];
const STORAGE_KEY = "fgo-exhibition-purchase-list-v1";

const state = loadState();
let activeFilter = "all";
let searchWord = "";

const productList = document.getElementById("productList");
const selectedCount = document.getElementById("selectedCount");
const totalPrice = document.getElementById("totalPrice");
const footerTotal = document.getElementById("footerTotal");
const copyButton = document.getElementById("copyButton");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");
const toast = document.getElementById("toast");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getItemState(id) {
  if (!state[id]) {
    state[id] = { selected: false, quantity: 1, note: "" };
  }
  return state[id];
}

function formatPrice(value) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0
  }).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const normalizedSearch = searchWord.trim().toLowerCase();
  const filtered = PRODUCTS.filter((product) => {
    const item = getItemState(product.id);
    const matchesSearch = !normalizedSearch || product.name.toLowerCase().includes(normalizedSearch);
    const matchesFilter =
      activeFilter === "all" ||
      product.category === activeFilter ||
      (activeFilter === "selected" && item.selected);
    return matchesSearch && matchesFilter;
  });

  productList.innerHTML = filtered.map((product) => {
    const item = getItemState(product.id);
    const lineTotal = item.selected ? product.price * item.quantity : 0;
    const lateClass = product.category === "会場後期発売" ? "badge--late" : "";
    return `
      <article class="product-card ${item.selected ? "is-selected" : ""}" data-id="${product.id}">
        <div class="product-card__top">
          <input class="product-check" type="checkbox" aria-label="${escapeHtml(product.name)}を購入"
            ${item.selected ? "checked" : ""}>
          <div>
            <h2 class="product-name">${escapeHtml(product.name)}</h2>
            <div class="product-meta">
              <span class="badge ${lateClass}">${escapeHtml(product.category)}</span>
              <span class="unit-price">単価 ${formatPrice(product.price)}</span>
            </div>
          </div>
          <div class="line-price">${formatPrice(lineTotal)}</div>
        </div>
        <div class="product-card__details">
          <div class="field">
            <label>数量</label>
            <div class="quantity-control">
              <button class="quantity-minus" type="button" aria-label="数量を減らす">−</button>
              <input class="quantity-input" type="number" min="1" max="99" inputmode="numeric"
                value="${item.quantity}" aria-label="${escapeHtml(product.name)}の数量">
              <button class="quantity-plus" type="button" aria-label="数量を増やす">＋</button>
            </div>
          </div>
          <div class="field">
            <label for="note-${product.id}">メモ・種類・サイズなど</label>
            <input id="note-${product.id}" class="note-input" type="text"
              value="${escapeHtml(item.note)}" placeholder="例：アルトリア、Lサイズ">
          </div>
        </div>
      </article>
    `;
  }).join("");

  emptyMessage.hidden = filtered.length > 0;
  updateSummary();
}

function updateSummary() {
  const selected = PRODUCTS.filter((product) => getItemState(product.id).selected);
  const quantityTotal = selected.reduce((sum, product) => sum + getItemState(product.id).quantity, 0);
  const total = selected.reduce(
    (sum, product) => sum + product.price * getItemState(product.id).quantity,
    0
  );

  selectedCount.textContent = `${quantityTotal}点`;
  totalPrice.textContent = formatPrice(total);
  footerTotal.textContent = formatPrice(total);
  copyButton.disabled = selected.length === 0;
}

function normalizeQuantity(value) {
  const quantity = Number.parseInt(value, 10);
  if (Number.isNaN(quantity)) return 1;
  return Math.min(99, Math.max(1, quantity));
}

productList.addEventListener("change", (event) => {
  const card = event.target.closest(".product-card");
  if (!card) return;

  const id = Number(card.dataset.id);
  const item = getItemState(id);

  if (event.target.classList.contains("product-check")) {
    item.selected = event.target.checked;
  }

  if (event.target.classList.contains("quantity-input")) {
    item.quantity = normalizeQuantity(event.target.value);
  }

  if (event.target.classList.contains("note-input")) {
    item.note = event.target.value;
  }

  saveState();
  render();
});

productList.addEventListener("input", (event) => {
  const card = event.target.closest(".product-card");
  if (!card || !event.target.classList.contains("note-input")) return;
  const id = Number(card.dataset.id);
  getItemState(id).note = event.target.value;
  saveState();
});

productList.addEventListener("click", (event) => {
  const card = event.target.closest(".product-card");
  if (!card) return;

  const id = Number(card.dataset.id);
  const item = getItemState(id);

  if (event.target.classList.contains("quantity-minus")) {
    item.quantity = Math.max(1, item.quantity - 1);
    item.selected = true;
  }

  if (event.target.classList.contains("quantity-plus")) {
    item.quantity = Math.min(99, item.quantity + 1);
    item.selected = true;
  }

  if (
    event.target.classList.contains("quantity-minus") ||
    event.target.classList.contains("quantity-plus")
  ) {
    saveState();
    render();
  }
});

searchInput.addEventListener("input", (event) => {
  searchWord = event.target.value;
  render();
});

document.querySelector(".filters").addEventListener("click", (event) => {
  const button = event.target.closest(".filter-button");
  if (!button) return;

  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach((element) => {
    element.classList.toggle("is-active", element === button);
  });
  render();
});

copyButton.addEventListener("click", async () => {
  const selected = PRODUCTS.filter((product) => getItemState(product.id).selected);
  if (!selected.length) return;

  let total = 0;
  const lines = [
    "【Fate/Grand Order展 -星見の回廊- 購入リスト】",
    ""
  ];

  selected.forEach((product, index) => {
    const item = getItemState(product.id);
    const lineTotal = product.price * item.quantity;
    total += lineTotal;

    lines.push(`${index + 1}. ${product.name}`);
    lines.push(`   数量：${item.quantity}点`);
    if (item.note.trim()) {
      lines.push(`   メモ：${item.note.trim()}`);
    }
    lines.push(`   金額：${formatPrice(product.price)} × ${item.quantity} = ${formatPrice(lineTotal)}`);
    lines.push("");
  });

  lines.push(`合計金額：${formatPrice(total)}`);
  lines.push("");
  lines.push("公式グッズページ：https://exhibition.fate-go.jp/goods/");

  try {
    await navigator.clipboard.writeText(lines.join("\n"));
    showToast("購入リストをコピーしました");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = lines.join("\n");
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast("購入リストをコピーしました");
  }
});

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

render();
