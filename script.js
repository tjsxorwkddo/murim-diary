const STORAGE_KEY = "murim-training-log-v1";
const BODY_PHOTO_DB_NAME = "murim-body-photos";
const BODY_PHOTO_STORE = "photos";

const realms = [
  {
    name: "삼류",
    required: 0,
    feature: "무공 초보 단계. 기본적인 방어 및 공격 기술을 보유.",
    power: "나무 기둥을 부술 정도의 힘",
    weapon: "권총(9mm)",
  },
  {
    name: "이류",
    required: 120,
    feature: "숙련된 병사 수준. 단체 전투에서 뛰어난 전술을 발휘.",
    power: "벽돌 구조를 부분적으로 손상시킬 수 있음",
    weapon: "소총(5.56mm NATO)",
  },
  {
    name: "일류",
    required: 350,
    feature: "내공과 무공의 완성을 이룬 단계. 검기를 사용할 수 있음.",
    power: "중형 방어벽을 파괴 가능",
    weapon: "기관총(7.62mm NATO)",
  },
  {
    name: "절정",
    required: 850,
    feature: "무공의 정점을 달성. 강력한 기운을 활용해 공격력 극대화.",
    power: "방어 시설을 붕괴 가능",
    weapon: "RPG-7",
  },
  {
    name: "초절정",
    required: 1800,
    feature: "검강을 발산하며 원거리 공격 가능. 초인적인 속도와 힘.",
    power: "거대한 바위를 산산조각",
    weapon: "전차포(105mm)",
  },
  {
    name: "화경",
    required: 4000,
    feature: "이기어검 사용 가능. 내공과 무공의 조화를 이룸.",
    power: "대형 건물 일부를 파괴",
    weapon: "대형 폭격기 투하 폭탄",
  },
  {
    name: "현경",
    required: 9000,
    feature: "자연과 일체화된 상태로 등봉조극의 경지에 도달. 지형 변화 가능.",
    power: "산 하나를 완전히 가름",
    weapon: "소형 전술 핵무기",
  },
  {
    name: "생사경",
    required: 20000,
    feature: "내공과 자연의 기를 완전 통제. 무형검 사용 가능.",
    power: "산 세 개를 가로로 절단",
    weapon: "대형 전술 핵무기",
  },
  {
    name: "자연경",
    required: 45000,
    feature: "자연의 기운을 흡수하며 무한 내공 보유. 심검, 심권 등 사용 가능.",
    power: "도시나 산맥을 초토화",
    weapon: "초대형 핵무기",
  },
];

const sects = [
  {
    id: "hwasan",
    name: "화산파",
    summary: "매화처럼 피어나는 빠른 검로. 집중과 루틴을 검끝에 담는 문파.",
    recommend: "공부, 집중, 독서 루틴을 키우고 싶은 수련자",
    traits: ["검법 특화", "치명타", "연속 공격", "민첩"],
    strengths: "빠른 성장감과 화려한 연격",
    weakness: "방어가 약하고 흔들릴 때 무너질 수 있음",
    signature: ["매화검법", "화운심법", "낙매보"],
    questLink: "공부와 독서, 집중 수련이 검법과 심법 숙련으로 이어집니다.",
    image: "assets/sects/hwasan.png",
    fighterImage: "assets/fighters/cutout/hwasan.png",
    playable: true,
  },
  {
    id: "mudang",
    name: "무당파",
    summary: "부드러운 태극의 흐름으로 방어와 반격을 쌓아가는 문파.",
    recommend: "명상, 수면, 감정 조절, 꾸준함을 다지고 싶은 수련자",
    traits: ["심법 특화", "방어", "반격", "내공 운용"],
    strengths: "흔들림이 적고 장기전에 강함",
    weakness: "폭발력은 낮지만 안정적",
    signature: ["태극검법", "현문심법", "운룡보"],
    questLink: "명상, 수면 준비, 절제 루틴이 심법과 반격 계열을 성장시킵니다.",
    image: "assets/sects/mudang.png",
    fighterImage: "assets/fighters/cutout/mudang.png",
    playable: true,
  },
  {
    id: "sorim",
    name: "소림사",
    summary: "단단한 외공과 권법으로 몸의 기초를 벼리는 문파.",
    recommend: "운동, 스트레칭, 식단, 체력 관리를 세우고 싶은 수련자",
    traits: ["체력", "외공", "권법", "방어"],
    strengths: "맷집과 안정적인 피해",
    weakness: "속도가 느리고 섬세한 운용은 부족함",
    signature: ["나한권", "달마심법", "일위도강보"],
    questLink: "운동, 물 마시기, 건강 루틴이 권법과 심법, 보법 수련으로 이어집니다.",
    image: "assets/sects/sorim.png",
    fighterImage: "assets/fighters/cutout/sorim.png",
    playable: true,
  },
  {
    id: "cheonma",
    name: "천마신교",
    summary: "강한 자기통제와 고난도 수련으로 압도적인 힘을 추구하는 문파.",
    recommend: "도전형 퀘스트와 강한 몰입을 원하는 숙련 수련자",
    traits: ["공격력", "폭발력", "리스크", "자기통제"],
    strengths: "높은 공격력과 강렬한 보상감",
    weakness: "실패 리스크가 크고 운용이 거칩니다",
    signature: ["흑천검법", "마령심법", "혈영보"],
    questLink: "어려운 퀘스트, 운동과 공부 병행, 절제 루틴이 공격 계열을 성장시킵니다.",
    image: "assets/sects/cheonma.png",
    fighterImage: "assets/fighters/cutout/cheonma.png",
    playable: true,
  },
  { id: "gaebang", name: "개방계", summary: "자유로운 생존과 변칙 전투의 문파.", playable: false },
  { id: "dangmun", name: "사천당문계", summary: "암기와 독, 전략으로 빈틈을 찌르는 문파.", playable: false },
  { id: "namgung", name: "남궁세가계", summary: "균형 잡힌 정통 검법과 명문가의 수련.", playable: false },
  { id: "cheongseong", name: "청성계", summary: "정갈한 검법과 빠른 초반 성장을 중시하는 문파.", playable: false },
];

const martialArtsData = [
  art("hwasan_plum_sword", "hwasan", "매화검법", "검법", 1, 10, 80, 40, 0, [], ["study", "focus", "reading"], "매화가 피어나듯 가볍고 빠른 검로로 빈틈을 찌릅니다.", "공격 +2, 치명 +1"),
  art("hwasan_flame_mind", "hwasan", "화운심법", "심법", 1, 10, 70, 35, 0, [], ["reading", "meditation", "focus"], "붉은 구름 같은 호흡으로 마음과 내공을 고르게 합니다.", "최대 내공 +2"),
  art("hwasan_falling_step", "hwasan", "낙매보", "경공", 2, 8, 260, 90, 1, [{ skillId: "hwasan_plum_sword", requiredLevel: 2 }], ["exercise", "walking", "focus"], "떨어지는 꽃잎처럼 가볍게 거리를 바꿉니다.", "회피 +2"),
  art("hwasan_purple_cloud", "hwasan", "자하운기", "심법", 3, 7, 650, 160, 2, [{ skillId: "hwasan_flame_mind", requiredLevel: 4 }], ["reading", "focus", "meditation"], "노을빛 내공을 단전에 쌓아 검끝에 힘을 싣습니다.", "치명 피해 +5"),
  art("hwasan_heaven_plum", "hwasan", "천봉매화검진", "궁극기", 5, 3, 5000, 900, 5, [{ skillId: "hwasan_purple_cloud", requiredLevel: 3 }], ["focus", "study", "self_control"], "흩어진 매화 검로를 하나의 진으로 엮는 최종 절기입니다.", "전투당 1회 강한 연격"),
  art("mudang_taeguk_sword", "mudang", "태극검법", "검법", 1, 10, 80, 38, 0, [], ["meditation", "focus", "sleep"], "강함을 부드러움으로 돌려세우는 원형의 검로입니다.", "반격 +2"),
  art("mudang_hyeon_mind", "mudang", "현문심법", "심법", 1, 10, 70, 35, 0, [], ["meditation", "sleep", "self_control"], "고요한 호흡으로 내공의 흐름을 안정시킵니다.", "방어 +2"),
  art("mudang_cloud_step", "mudang", "운룡보", "경공", 2, 8, 240, 85, 1, [{ skillId: "mudang_taeguk_sword", requiredLevel: 2 }], ["walking", "meditation", "exercise"], "구름 속 용처럼 힘을 빼고 거리를 흐릅니다.", "선공 +1, 회피 +1"),
  art("mudang_two_mind", "mudang", "양의심공", "심법", 3, 7, 620, 150, 2, [{ skillId: "mudang_hyeon_mind", requiredLevel: 4 }], ["meditation", "sleep", "diet"], "음양의 균형으로 장기 수련의 바탕을 세웁니다.", "내공 회복 +4"),
  art("mudang_limitless_sword", "mudang", "태극무극검", "궁극기", 5, 3, 5000, 900, 5, [{ skillId: "mudang_two_mind", requiredLevel: 3 }], ["meditation", "self_control", "focus"], "방어와 공격의 경계를 지우는 무당의 최종 검의입니다.", "강한 반격 기술"),
  art("sorim_nahan_fist", "sorim", "나한권", "권법", 1, 10, 75, 38, 0, [], ["exercise", "diet", "water"], "흔들림 없는 자세로 정직한 일격을 쌓습니다.", "체력 +2"),
  art("sorim_diamond_body", "sorim", "일위도강보", "경공", 1, 10, 85, 42, 0, [], ["exercise", "water", "sleep"], "한 줄기 갈대 위를 건너듯 중심을 잃지 않는 소림의 보법입니다.", "회피 +2, 호흡 안정"),
  art("sorim_dharma_mind", "sorim", "달마심법", "심법", 1, 10, 80, 40, 0, [], ["meditation", "sleep", "diet"], "몸과 마음을 함께 가라앉히는 소림의 심법입니다.", "기혈 회복 +2"),
  art("sorim_hangma_palm", "sorim", "항마장", "장법", 3, 7, 700, 165, 2, [{ skillId: "sorim_nahan_fist", requiredLevel: 4 }], ["exercise", "self_control", "diet"], "흔들림 없는 장력으로 정면을 밀어냅니다.", "방어 관통 +3"),
  art("sorim_immovable_body", "sorim", "금강불괴신공", "궁극기", 5, 3, 5200, 920, 5, [{ skillId: "sorim_hangma_palm", requiredLevel: 3 }], ["exercise", "sleep", "self_control"], "몸을 하나의 산처럼 굳히는 소림의 최종 외공입니다.", "큰 피해 감소"),
  art("cheonma_black_sword", "cheonma", "흑천검법", "검법", 1, 10, 90, 45, 0, [], ["study", "exercise", "hard"], "거칠고 강한 검로로 상대를 압박합니다.", "공격 +4"),
  art("cheonma_demon_mind", "cheonma", "마령심법", "심법", 1, 10, 85, 44, 0, [], ["self_control", "fasting", "focus"], "강한 욕망을 한 점의 내공으로 묶어냅니다.", "폭발력 +3"),
  art("cheonma_blood_step", "cheonma", "혈영보", "경공", 2, 8, 300, 100, 1, [{ skillId: "cheonma_black_sword", requiredLevel: 2 }], ["exercise", "focus", "self_control"], "그림자를 찢듯 거리를 좁히는 보법입니다.", "선공 +3"),
  art("cheonma_sky_palm", "cheonma", "파천마장", "장법", 3, 7, 780, 180, 2, [{ skillId: "cheonma_demon_mind", requiredLevel: 4 }], ["hard", "exercise", "study"], "하늘을 깨뜨릴 듯한 장력으로 힘을 폭발시킵니다.", "강한 일격 +5"),
  art("cheonma_reign_sword", "cheonma", "천마군림검", "궁극기", 5, 3, 5600, 1000, 5, [{ skillId: "cheonma_sky_palm", requiredLevel: 3 }], ["hard", "self_control", "focus"], "모든 기세를 검끝에 모아 압도하는 최종 검의입니다.", "전투당 1회 압도 공격"),
];

const coreMartialArtIds = [
  "hwasan_plum_sword",
  "hwasan_flame_mind",
  "hwasan_falling_step",
  "mudang_taeguk_sword",
  "mudang_hyeon_mind",
  "mudang_cloud_step",
  "sorim_nahan_fist",
  "sorim_dharma_mind",
  "sorim_diamond_body",
  "cheonma_black_sword",
  "cheonma_demon_mind",
  "cheonma_blood_step",
];

const sectMotifs = {
  hwasan: {
    short: "매화",
    routine: "작은 기록이 매화 한 송이처럼 쌓입니다.",
    questComplete: "매화 한 잎이 검로 위에 내려앉았습니다.",
    breakthrough: "매화향이 단전을 감돌고, 흐트러진 하루의 가지가 다시 곧게 섭니다.",
    advice: "오늘은 공부, 집중, 식단 중 하나만 더 정돈해도 검끝이 맑아집니다.",
  },
  mudang: {
    short: "태극",
    routine: "흐름을 끊지 않는 것이 오늘의 태극입니다.",
    questComplete: "호흡이 한 바퀴 돌아 몸과 마음이 가라앉았습니다.",
    breakthrough: "태극의 원이 단전 안에서 닫히고, 흔들림이 한 겹 줄었습니다.",
    advice: "오늘은 수면, 물, 감정 조절 중 하나를 지키면 중심이 안정됩니다.",
  },
  sorim: {
    short: "금강",
    routine: "몸을 지키는 루틴이 금강의 바탕입니다.",
    questComplete: "한 번의 정직한 수련이 기혈을 단단히 붙잡았습니다.",
    breakthrough: "금강의 기운이 척추를 타고 올라, 몸의 기준이 다시 섰습니다.",
    advice: "오늘은 식단, 운동, 물 마시기 중 하나를 완성하면 몸이 답합니다.",
  },
  cheonma: {
    short: "천마",
    routine: "자기통제야말로 가장 날카로운 마공입니다.",
    questComplete: "흔들림을 눌러 앉히고, 의지가 한 치 더 날카로워졌습니다.",
    breakthrough: "검은 기세가 단전에서 정리되고, 욕망이 방향을 얻었습니다.",
    advice: "오늘은 어려운 하나를 피하지 않는 것만으로도 기세가 살아납니다.",
  },
};

const defaultQuests = [
  quest("water", "맑은 물로 단전 깨우기", "health", "easy", 8),
  quest("study", "비급 읽듯 공부 30분", "study", "normal", 25),
  quest("move", "기초 체력 수련 20분", "exercise", "normal", 25),
  quest("read", "비급 독서 20분", "reading", "normal", 20),
  quest("fast", "야식 금지 절제 수련", "mind", "hard", 40),
  quest("sleep", "수면 전 운기정리", "health", "easy", 13),
];

defaultQuests.splice(
  0,
  defaultQuests.length,
  quest("checkin", "오늘 접속 확인", "mind", "easy", 5),
  quest("water", "오늘 물 1리터 이상 마시기", "health", "easy", 10),
  quest("breakfast", "아침밥으로 기혈 깨우기", "health", "easy", 12),
  quest("study", "공부한 시간만큼 운기하기", "study", "normal", 25),
  quest("english", "영어단어 외우기", "language", "normal", 20),
  quest("move", "무공수련 20분", "exercise", "normal", 25),
  quest("diet", "건강한 식단으로 몸 다스리기", "diet", "normal", 25),
  quest("fast", "야식 금지 절제 수련", "mind", "hard", 40),
  quest("sleep", "수면 전 단전 정리", "health", "easy", 13),
);

const titles = [
  { id: "first", name: "첫 입문자", condition: "사문 입문 완료" },
  { id: "scale_keeper", name: "체중 기록자", condition: "몸무게 3회 기록" },
  { id: "steady", name: "일일검객", condition: "연속 수련 3일" },
  { id: "seven_blades", name: "칠일검", condition: "연속 수련 7일" },
  { id: "body_witness", name: "변화의 증인", condition: "몸 사진 2장 기록" },
  { id: "inner_flame", name: "단전의 불씨", condition: "누적 내공 500 달성" },
  { id: "realm_breaker", name: "경지 돌파자", condition: "이류 이상 도달" },
];

const app = document.querySelector("#app");
let state = loadState();
let activeTab = "weight";
let selectedPath = "hwasan";
let toastTimer = null;
let lastInnerPowerPulse = null;
let lastCompletedQuestId = null;
let onboardingDraft = { name: "", targetWeight: "" };
let bodyPhotoStoreReady = false;
let installPromptEvent = null;
let lastStorageWarningAt = 0;

setupInstallPromptHandlers();
initializeApp();

function quest(id, title, category, difficulty, innerPowerReward) {
  return {
    id,
    title,
    category,
    difficulty,
    innerPowerReward,
    rewardMode: id === "study" ? "duration" : "fixed",
    enabled: true,
    repeat: "daily",
    completed: false,
  };
}

function questTemplateFromQuest(q) {
  const rewardMode = q.rewardMode === "duration" ? "duration" : q.rewardMode === "fixed" ? "fixed" : q.id === "study" ? "duration" : "fixed";
  return {
    id: typeof q.id === "string" && q.id.trim() ? q.id.trim() : `quest-${Date.now()}`,
    title: typeof q.title === "string" && q.title.trim() ? q.title.trim().slice(0, 40) : "이름 없는 수련",
    category: typeof q.category === "string" && q.category.trim() ? q.category.trim() : "mind",
    difficulty: ["easy", "normal", "hard"].includes(q.difficulty) ? q.difficulty : "normal",
    innerPowerReward: Math.round(toFiniteNumber(q.innerPowerReward, 10, 1, 999)),
    rewardMode,
    enabled: q.enabled !== false,
  };
}

function questFromTemplate(template, previous = {}) {
  const normalizedTemplate = questTemplateFromQuest(template);
  return {
    ...normalizedTemplate,
    repeat: "daily",
    completed: Boolean(previous.completed),
    earnedInnerPower: Math.round(toFiniteNumber(previous.earnedInnerPower, 0, 0, 9999)),
    completedMinutes: Math.round(toFiniteNumber(previous.completedMinutes, 0, 0, 1440)),
    plannedMinutes: Math.round(toFiniteNumber(previous.plannedMinutes, normalizedTemplate.rewardMode === "duration" ? 30 : 0, 0, 1440)),
  };
}

function art(id, sectId, name, type, tier, maxLevel, purchaseCost, upgradeBaseCost, requiredRealm, prerequisites, questGrowthTags, description, combatEffect) {
  return {
    id,
    sectId,
    name,
    type,
    tier,
    level: 0,
    maxLevel,
    purchaseCost,
    upgradeBaseCost,
    requiredRealm,
    prerequisites,
    questGrowthTags,
    description,
    combatEffect,
  };
}

function defaultState() {
  return {
    onboarded: false,
    userName: "",
    currentRealm: 0,
    innerPower: 0,
    silver: 0,
    unifiedInnerPowerMigrated: false,
    questTemplates: defaultQuests.map(questTemplateFromQuest),
    quests: defaultQuests.map((q) => ({ ...q })),
    questDate: formatDateKey(new Date()),
    trainingLogs: {},
    totalInnerPower: 0,
    currentSectId: null,
    pendingSectRespec: false,
    respecCount: 0,
    sectContribution: {},
    ownedMartialArts: {},
    spentSilverOnMartialArts: 0,
    equippedMartialArts: {},
    martialArts: {},
    titles: [],
    equippedTitle: "",
    purchasedItems: [],
    focusSessions: [],
    weightLogs: [],
    bodyPhotos: [],
    weightCalendarMonth: currentMonthKey(),
    targetWeight: null,
    lastBackupAt: "",
    dailyHistory: [],
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return normalizeState({ ...defaultState(), ...parsed });
  } catch {
    return defaultState();
  }
}

async function initializeApp() {
  await hydrateBodyPhotos();
  evaluateTitleUnlocks({ silent: true });
  saveState();
  render();
}

function setupInstallPromptHandlers() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPromptEvent = event;
    if (state?.onboarded && activeTab === "records") render();
  });
  window.addEventListener("appinstalled", () => {
    installPromptEvent = null;
    showToast("앱 설치가 완료되었습니다.");
    if (state?.onboarded && activeTab === "records") render();
  });
}

function isObjectRecord(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function toFiniteNumber(value, fallback = 0, min = -Infinity, max = Infinity) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, number));
}

function normalizeDateKey(value, fallback = formatDateKey(new Date())) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return fallback;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? value : fallback;
}

function normalizeMonthKey(value, fallback = currentMonthKey()) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}$/.test(value)) return fallback;
  const [year, month] = value.split("-").map(Number);
  return year >= 2000 && year <= 2100 && month >= 1 && month <= 12 ? value : fallback;
}

function normalizeOptionalWeight(value) {
  const weight = Number(value);
  return Number.isFinite(weight) && weight >= 20 && weight <= 300 ? Math.round(weight * 10) / 10 : null;
}

function normalizeSectId(value) {
  return getSect(value)?.id || null;
}

function normalizeTrainingLogs(logs) {
  if (!isObjectRecord(logs)) return {};
  return Object.fromEntries(Object.entries(logs).flatMap(([date, log]) => {
    if (!normalizeDateKey(date, "")) return [];
    const entry = isObjectRecord(log) ? log : {};
    const total = Math.round(toFiniteNumber(entry.total, defaultQuests.length, 1));
    const completed = Math.min(total, Math.round(toFiniteNumber(entry.completed, 0, 0)));
    const earned = Math.round(toFiniteNumber(entry.earnedInnerPower, 0, 0));
    return [[date, { completed, total, earnedInnerPower: earned }]];
  }));
}

function normalizeWeightLogs(logs) {
  if (!Array.isArray(logs)) return [];
  const byDate = new Map();
  logs.forEach((entry) => {
    if (!isObjectRecord(entry)) return;
    const date = normalizeDateKey(entry.date, "");
    const weight = normalizeOptionalWeight(entry.weight);
    if (!date || weight === null) return;
    byDate.set(date, {
      id: typeof entry.id === "string" ? entry.id : `weight-${date}`,
      date,
      weight,
      createdAt: typeof entry.createdAt === "string" ? entry.createdAt : new Date(`${date}T00:00:00`).toISOString(),
    });
  });
  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function normalizeBodyPhotos(photos) {
  if (!Array.isArray(photos)) return [];
  const byDate = new Map();
  photos.forEach((entry) => {
    if (!isObjectRecord(entry)) return;
    const date = normalizeDateKey(entry.date, "");
    const image = typeof entry.image === "string" && entry.image.startsWith("data:image/") ? entry.image : "";
    if (!date || !image) return;
    byDate.set(date, {
      id: typeof entry.id === "string" ? entry.id : `body-photo-${date}`,
      date,
      image,
      createdAt: typeof entry.createdAt === "string" ? entry.createdAt : new Date(`${date}T00:00:00`).toISOString(),
      updatedAt: typeof entry.updatedAt === "string" ? entry.updatedAt : "",
    });
  });
  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function normalizeDailyHistory(records) {
  if (!Array.isArray(records)) return [];
  return records.filter(isObjectRecord).slice(-300).map((record) => ({
    type: typeof record.type === "string" ? record.type : "기록",
    message: typeof record.message === "string" ? record.message : "",
    createdAt: typeof record.createdAt === "string" ? record.createdAt : new Date().toISOString(),
  })).filter((record) => record.message);
}

function normalizeTitles(userTitles) {
  if (!Array.isArray(userTitles)) return [];
  const valid = new Set(titles.map((title) => title.id));
  return [...new Set(userTitles.filter((id) => valid.has(id)))];
}

function normalizeSectContribution(contribution) {
  if (!isObjectRecord(contribution)) return {};
  return Object.fromEntries(Object.entries(contribution).flatMap(([sectId, value]) => {
    const normalizedSect = normalizeSectId(sectId);
    if (!normalizedSect) return [];
    return [[normalizedSect, Math.round(toFiniteNumber(value, 0, 0))]];
  }));
}

function normalizeOwnedMartialArts(ownedArts) {
  if (!isObjectRecord(ownedArts)) return {};
  return Object.fromEntries(Object.entries(ownedArts).flatMap(([artId, owned]) => {
    const martialArt = getMartialArt(artId);
    if (!martialArt) return [];
    const entry = isObjectRecord(owned) ? owned : {};
    return [[artId, {
      level: Math.round(toFiniteNumber(entry.level, 1, 1, martialArt.maxLevel)),
      proficiency: Math.round(toFiniteNumber(entry.proficiency, 0, 0, 100)),
      spentSilver: Math.round(toFiniteNumber(entry.spentSilver, 0, 0)),
    }]];
  }));
}

function normalizeEquippedMartialArts(equippedArts, ownedArts = {}) {
  if (!isObjectRecord(equippedArts)) return {};
  return Object.fromEntries(Object.entries(equippedArts).flatMap(([slot, artId]) => {
    if (!ownedArts[artId]) return [];
    return [[slot, artId]];
  }));
}

function normalizeState(next) {
  next = isObjectRecord(next) ? next : {};
  next.questTemplates = normalizeQuestTemplates(next.questTemplates, next.quests);
  next.quests = normalizeQuests(next.quests, next.questTemplates);
  next.questDate = normalizeDateKey(next.questDate, formatDateKey(new Date()));
  next.trainingLogs = normalizeTrainingLogs(next.trainingLogs);
  resetDailyQuestsIfNeeded(next);
  if (!next.unifiedInnerPowerMigrated) {
    const legacySilver = toFiniteNumber(next.silver, 0, 0);
    const legacyInnerPower = toFiniteNumber(next.innerPower, 0, 0);
    const legacyTotalInnerPower = toFiniteNumber(next.totalInnerPower, legacyInnerPower, 0);
    next.innerPower = legacyInnerPower + legacySilver;
    next.totalInnerPower = legacyTotalInnerPower + legacySilver;
    next.silver = 0;
    next.unifiedInnerPowerMigrated = true;
  }
  next.innerPower = toFiniteNumber(next.innerPower, 0, 0);
  next.totalInnerPower = Math.max(toFiniteNumber(next.totalInnerPower, next.innerPower, 0), next.innerPower);
  next.silver = 0;
  next.currentSectId = normalizeSectId(next.currentSectId || inferSectFromLegacyPath(next.primaryArt));
  next.pendingSectRespec = Boolean(next.pendingSectRespec);
  next.respecCount = Math.round(toFiniteNumber(next.respecCount, 0, 0));
  next.sectContribution = normalizeSectContribution(next.sectContribution);
  next.ownedMartialArts = normalizeOwnedMartialArts(next.ownedMartialArts);
  next.spentSilverOnMartialArts = toFiniteNumber(next.spentSilverOnMartialArts, 0, 0);
  next.equippedMartialArts = normalizeEquippedMartialArts(next.equippedMartialArts, next.ownedMartialArts);
  if (next.currentSectId && Object.keys(next.ownedMartialArts).length === 0) {
    grantBasicSectMartialArts(next, next.currentSectId);
  }
  if (next.onboarded && next.currentSectId && !hasAnyCoreSectArt(next, next.currentSectId)) {
    grantBasicSectMartialArts(next, next.currentSectId);
  }
  next.equippedMartialArts = normalizeEquippedMartialArts(next.equippedMartialArts, next.ownedMartialArts);
  next.martialArts = isObjectRecord(next.martialArts) ? next.martialArts : {};
  next.purchasedItems = Array.isArray(next.purchasedItems) ? next.purchasedItems : [];
  next.weightLogs = normalizeWeightLogs(next.weightLogs);
  next.bodyPhotos = normalizeBodyPhotos(next.bodyPhotos);
  next.weightCalendarMonth = normalizeMonthKey(next.weightCalendarMonth, currentMonthKey());
  next.targetWeight = normalizeOptionalWeight(next.targetWeight);
  next.lastBackupAt = typeof next.lastBackupAt === "string" ? next.lastBackupAt : "";
  next.dailyHistory = normalizeDailyHistory(next.dailyHistory);
  next.titles = normalizeTitles(next.titles);
  next.userName = typeof next.userName === "string" ? next.userName.trim().slice(0, 24) : "";
  next.equippedTitle = typeof next.equippedTitle === "string" ? next.equippedTitle : "";
  next.currentRealm = Math.round(toFiniteNumber(next.currentRealm, 0, 0, realms.length - 1));
  return next;
}

function normalizeQuestTemplates(templates, currentQuests = []) {
  const fallbackQuests = Array.isArray(currentQuests) ? currentQuests : [];
  const source = Array.isArray(templates) && templates.length ? templates : fallbackQuests;
  const byId = Object.fromEntries(source.filter(isObjectRecord).map((q) => [q.id, q]));
  const normalized = defaultQuests.map((q) => questTemplateFromQuest({ ...q, ...byId[q.id] }));
  source.forEach((q) => {
    if (!isObjectRecord(q) || typeof q.id !== "string" || !q.id.trim() || normalized.some((entry) => entry.id === q.id)) return;
    normalized.push(questTemplateFromQuest(q));
  });
  if (!normalized.some((q) => q.enabled)) {
    normalized[0] = { ...normalized[0], enabled: true };
  }
  return normalized;
}

function getActiveQuestTemplates(userData = state) {
  const templates = normalizeQuestTemplates(userData.questTemplates, userData.quests);
  const active = templates.filter((q) => q.enabled !== false);
  return active.length ? active : [templates[0]];
}

function normalizeQuests(quests, templates = defaultQuests.map(questTemplateFromQuest)) {
  const questList = Array.isArray(quests) ? quests : [];
  const byId = Object.fromEntries(questList.filter(isObjectRecord).map((q) => [q.id, q]));
  return getActiveQuestTemplates({ questTemplates: templates, quests }).map((q) => questFromTemplate(q, byId[q.id]));
}

function resetDailyQuestsIfNeeded(userData) {
  const today = formatDateKey(new Date());
  if (userData.questDate !== today) {
    persistTrainingLog(userData, userData.questDate);
    userData.questDate = today;
    userData.quests = getActiveQuestTemplates(userData).map((q) => questFromTemplate(q));
  }
  persistTrainingLog(userData, today);
}

function persistTrainingLog(userData, dateKey = formatDateKey(new Date())) {
  if (!dateKey) return;
  const quests = userData.quests || [];
  const completed = quests.filter((q) => q.completed).length;
  const total = quests.length || defaultQuests.length;
  const earnedInnerPower = quests.filter((q) => q.completed).reduce((sum, q) => sum + (q.earnedInnerPower || q.innerPowerReward || 0), 0);
  userData.trainingLogs = userData.trainingLogs || {};
  userData.trainingLogs[dateKey] = {
    date: dateKey,
    visited: true,
    completed,
    total,
    percent: total ? Math.round((completed / total) * 100) : 0,
    earnedInnerPower,
    updatedAt: new Date().toISOString(),
  };
}

function getTrainingSummary(dateKey = formatDateKey(new Date())) {
  const today = formatDateKey(new Date());
  if (dateKey === today) {
    const quests = state.quests || [];
    const completed = quests.filter((q) => q.completed).length;
    const total = quests.length || defaultQuests.length;
    const earnedInnerPower = quests.filter((q) => q.completed).reduce((sum, q) => sum + (q.earnedInnerPower || q.innerPowerReward || 0), 0);
    return {
      date: dateKey,
      visited: true,
      completed,
      total,
      percent: total ? Math.round((completed / total) * 100) : 0,
      earnedInnerPower,
    };
  }
  return state.trainingLogs?.[dateKey] || {
    date: dateKey,
    visited: false,
    completed: 0,
    total: defaultQuests.length,
    percent: 0,
    earnedInnerPower: 0,
  };
}

function getTodayTrainingPercent() {
  return getTrainingSummary().percent;
}

function inferSectFromLegacyPath(primaryArt) {
  if (!primaryArt) return null;
  if (primaryArt.includes("단황")) return "sorim";
  if (primaryArt.includes("현허")) return "mudang";
  return "hwasan";
}

function createPersistedState({ includeBodyPhotoImages = false } = {}) {
  return {
    ...state,
    bodyPhotos: (state.bodyPhotos || []).map((photo) => includeBodyPhotoImages || !bodyPhotoStoreReady
      ? photo
      : {
          id: photo.id,
          date: photo.date,
          createdAt: photo.createdAt,
          updatedAt: photo.updatedAt,
        }),
  };
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(createPersistedState()));
  } catch (error) {
    console.warn("Failed to save app state.", error);
    const now = Date.now();
    if (now - lastStorageWarningAt > 15000) {
      lastStorageWarningAt = now;
      showToast("저장 공간이 부족합니다. 기록 탭에서 백업을 내보내 주세요.");
    }
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  if (state.onboarded) {
    const previousQuestDate = state.questDate;
    resetDailyQuestsIfNeeded(state);
    if (previousQuestDate !== state.questDate) saveState();
  }
  if (!state.onboarded) {
    renderOnboardingV2();
    return;
  }
  renderApp();
}

function renderOnboardingV2() {
  const selectedSect = getSect(selectedPath) || sects.find((sect) => sect.playable) || sects[0];
  const starterQuests = defaultQuests.slice(0, 5);
  app.innerHTML = `
    <main class="splash onboarding-splash">
      <section class="splash-inner onboarding-shell">
        <div class="onboarding-intro">
          <div class="brand-mark">武</div>
          <p class="eyebrow">무협 자기계발 일지</p>
          <h1>무협일지</h1>
          <p class="onboarding-subcopy">몸무게와 오늘의 수련을 남기면 내공이 쌓이고 경지가 오릅니다.</p>
          <div class="onboarding-flow">
            <div>${icon("scale")}<strong>몸무게</strong><span>매일 기준점</span></div>
            <div>${icon("lotus")}<strong>수련</strong><span>루틴을 내공으로</span></div>
            <div>${icon("swords")}<strong>성장</strong><span>경지와 무공</span></div>
          </div>
          <div class="onboarding-quest-preview">
            <span class="section-label">기본 수련</span>
            <div>
              ${starterQuests.map((q) => `<span>${q.title}</span>`).join("")}
            </div>
          </div>
        </div>
        <form class="setup onboarding-form" id="setup-form">
          <div class="onboarding-form-head">
            <p class="eyebrow">입문 설정</p>
            <h2>바로 입문하기</h2>
            <p>목표 몸무게와 사문은 나중에도 수정할 수 있습니다.</p>
          </div>
          <div class="onboarding-field-grid">
            <div class="field">
              <label for="name">이름</label>
              <input id="name" name="name" maxlength="14" value="${escapeHtml(onboardingDraft.name)}" placeholder="예: 현우" required />
              <small class="field-hint">앱 안에서 소협의 이름으로 표시됩니다.</small>
            </div>
            <div class="field">
              <label for="onboarding-target-weight">목표 kg</label>
              <input id="onboarding-target-weight" name="targetWeight" type="number" min="20" max="300" step="0.1" inputmode="decimal" value="${escapeHtml(onboardingDraft.targetWeight)}" placeholder="선택 입력" />
              <small class="field-hint">비워도 시작할 수 있고, 오늘 탭에서 바꿀 수 있습니다.</small>
            </div>
          </div>
          <div class="section-label">입문할 사문 선택</div>
          <div class="path-grid">
            ${sects.filter((sect) => sect.playable).map((sect) => `
              <button type="button" class="path-option ${sect.id === selectedPath ? "active" : ""}" data-path="${sect.id}">
                <strong>${sect.name}</strong>
                <span>${sect.traits.slice(0, 2).join(" · ")}</span>
              </button>
            `).join("")}
          </div>
          <aside class="selected-sect-preview">
            ${selectedSect.image ? `<img src="${selectedSect.image}" alt="${selectedSect.name} 대표 이미지" />` : ""}
            <div>
              <span class="section-label">선택한 사문</span>
              <strong>${selectedSect.name}</strong>
              <p>${selectedSect.signature.join(" · ")}</p>
              <small>${selectedSect.recommend}</small>
              <div class="selected-sect-tags">
                ${selectedSect.traits.slice(0, 3).map((trait) => `<span>${trait}</span>`).join("")}
              </div>
            </div>
          </aside>
          <div class="onboarding-reassure">
            <span>${icon("shield")}</span>
            <p>몸무게, 수련 기록, 내공은 유지됩니다. 사문은 나중에 전향할 수 있습니다.</p>
          </div>
          <button class="primary-btn onboarding-submit" type="submit">입문하기</button>
        </form>
      </section>
    </main>
  `;
  app.querySelectorAll("[data-path]").forEach((button) => {
    button.addEventListener("click", () => {
      const formData = new FormData(app.querySelector("#setup-form"));
      onboardingDraft = {
        name: String(formData.get("name") || ""),
        targetWeight: String(formData.get("targetWeight") || ""),
      };
      selectedPath = button.dataset.path;
      renderOnboardingV2();
    });
  });
  app.querySelector("#setup-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const chosen = getSect(selectedPath) || sects.find((sect) => sect.playable) || sects[0];
    const formData = new FormData(event.currentTarget);
    const formName = formData.get("name");
    const targetWeight = Number(formData.get("targetWeight"));
    state.userName = String(formName || "").trim() || "무명 소협";
    state.equippedTitle = "삼류";
    if (Number.isFinite(targetWeight) && targetWeight >= 20 && targetWeight <= 300) {
      state.targetWeight = Math.round(targetWeight * 10) / 10;
    }
    selectSect(chosen.id);
    state.onboarded = true;
    activeTab = "weight";
    addRecord("입문", `${state.userName} 소협이 ${chosen.name}의 문을 두드렸습니다.`);
    evaluateTitleUnlocks();
    if (state.targetWeight) {
      addRecord("목표 설정", `목표 몸무게를 ${formatWeight(state.targetWeight)}kg으로 정했습니다.`);
    }
    saveState();
    render();
  });
}

function renderApp() {
  const realm = realms[state.currentRealm];
  const nextRealm = realms[state.currentRealm + 1];
  const realmProgress = nextRealm
    ? Math.max(0, Math.min(100, Math.round(((state.totalInnerPower - realm.required) / Math.max(1, nextRealm.required - realm.required)) * 100)))
    : 100;
  app.innerHTML = `
    <main class="app">
      <header class="topbar">
        <div class="title-block">
          <p class="eyebrow">무협일지</p>
          <h1>${tabTitle()}</h1>
        </div>
        <div class="topbar-profile">
          <div class="profile-seal">${escapeHtml((state.userName || "무").slice(0, 1))}</div>
          <div class="profile-copy">
            <strong>${escapeHtml(state.userName || "무명 소협")}</strong>
            <span>${state.equippedTitle || realm.name} · ${realm.name}</span>
          </div>
          <div class="profile-progress" aria-label="다음 경지 진행률 ${realmProgress}%">
            <span style="--value:${realmProgress}%"></span>
          </div>
        </div>
      </header>
      ${renderCurrentTab()}
      <nav class="bottom-nav" aria-label="주요 메뉴">
        ${navButton("weight", "몸무게")}
        ${navButton("training", "수련")}
        ${navButton("realm", "경지")}
        ${navButton("arts", "무공")}
        ${navButton("records", "기록")}
      </nav>
    </main>
  `;
  bindAppEvents();
}

function tabTitle() {
  return {
    weight: "몸무게 기록",
    training: "오늘의 수련",
    arts: "무공 연마",
    realm: "경지 돌파",
    records: "수련 기록",
  }[activeTab];
}

function navButton(tab, label) {
  return `<button class="nav-btn ${activeTab === tab ? "active" : ""}" data-tab="${tab}">
    <span class="nav-image-wrap"><img class="nav-image" src="${navImageSrc(tab)}" alt="" aria-hidden="true" /></span>
    <span>${label}</span>
  </button>`;
}

function navImageSrc(tab) {
  return {
    weight: "assets/ui/nav/weight.png",
    training: "assets/ui/nav/training.png",
    realm: "assets/ui/nav/realm.png",
    arts: "assets/ui/nav/arts.png",
    records: "assets/ui/nav/records.png",
  }[tab] || "assets/ui/nav/records.png";
}

function renderCurrentTab() {
  if (activeTab === "weight") return renderWeight();
  if (activeTab === "training") return renderTraining();
  if (activeTab === "arts") return renderArts();
  if (activeTab === "realm") return renderRealm();
  if (activeTab === "records") return renderRecords();
  return renderWeight();
}

function renderWeightDashboard() {
  const latest = getLatestWeightLog();
  const previous = getPreviousWeightLog(latest);
  const monthLogs = getWeightLogsForMonth(state.weightCalendarMonth);
  const monthlyWeights = monthLogs.map((entry) => entry.weight);
  const average = monthlyWeights.length ? monthlyWeights.reduce((sum, weight) => sum + weight, 0) / monthlyWeights.length : 0;
  const min = monthlyWeights.length ? Math.min(...monthlyWeights) : 0;
  const max = monthlyWeights.length ? Math.max(...monthlyWeights) : 0;
  const delta = latest && previous ? latest.weight - previous.weight : null;
  const goal = getWeightGoalStatus();
  const today = formatDateKey(new Date());
  const todayWeight = state.weightLogs.find((entry) => entry.date === today);
  const weightDeltaText = delta === null ? "첫 기록" : `${delta > 0 ? "+" : ""}${formatWeight(delta)}kg`;
  const weightInsight = getWeightDashboardInsight({ latest, previous, goal });
  const trendPoints = getWeightTrendPoints(14);
  const monthReview = getMonthReviewData(state.weightCalendarMonth);
  return `
    ${!latest ? renderFirstWeightCallout() : ""}
    ${renderTodayReadinessPanel({ today, todayWeight })}
    <section class="panel today-weight-card mobile-primary-action">
      <div class="status-head">
        <div>
          <p class="eyebrow">오늘의 체중</p>
          <h2>${todayWeight ? `${formatWeight(todayWeight.weight)}kg` : latest ? `${formatWeight(latest.weight)}kg` : "기록 대기"}</h2>
          <p class="muted">${todayWeight ? "기록 완료" : latest ? `${formatDisplayDate(latest.date)} · ${weightDeltaText}` : "첫 기록 필요"}</p>
        </div>
        <span class="pill">${goal.badge}</span>
      </div>
      <form class="weight-form today-weight-form" data-weight-form>
        <input name="date" type="hidden" value="${today}" />
        <div class="field">
          <label for="weight-value">몸무게 kg</label>
          <input id="weight-value" name="weight" type="number" min="20" max="300" step="0.1" inputmode="decimal" value="${todayWeight ? formatWeight(todayWeight.weight) : latest ? formatWeight(latest.weight) : ""}" placeholder="예: 72.4" required />
        </div>
        <button class="primary-btn" type="submit">${todayWeight ? "기록 수정" : "기록"}</button>
      </form>
      ${todayWeight ? `<button class="mini-btn danger today-weight-delete" type="button" data-delete-weight="${today}">오늘 기록 삭제</button>` : ""}
      <div class="today-weight-meta">
        <span>${latest && previous ? `직전 대비 ${weightDeltaText}` : goal.badge}</span>
      </div>
    </section>
    <section class="panel weight-goal-panel">
      <div class="status-head">
        <div>
          <p class="eyebrow">목표 체중</p>
          <h2>${state.targetWeight ? `${formatWeight(state.targetWeight)}kg` : "목표 설정"}</h2>
        </div>
        <span class="pill">${goal.badge}</span>
      </div>
      ${state.targetWeight && latest ? `
        <div class="meter-row"><span>${goal.startLabel}</span><span>${goal.progressLabel}</span></div>
        <div class="meter weight-goal-meter"><span style="--value:${goal.progress}%"></span></div>
        ${renderWeightGoalCompass()}
      ` : ""}
      <form class="weight-goal-form" data-weight-goal-form>
        <div class="field">
          <label for="target-weight">목표 kg</label>
          <input id="target-weight" name="targetWeight" type="number" min="20" max="300" step="0.1" inputmode="decimal" value="${state.targetWeight ? formatWeight(state.targetWeight) : ""}" placeholder="예: 68.0" required />
        </div>
        <button class="primary-btn" type="submit">${state.targetWeight ? "목표 수정" : "목표 설정"}</button>
        ${state.targetWeight ? `<button class="ghost-btn" type="button" data-clear-weight-goal>목표 해제</button>` : ""}
      </form>
    </section>
    <section class="mobile-detail-stack">
      <details class="mobile-secondary-detail">
        <summary>
          <strong>변화 요약</strong>
          <span>${latest ? `${formatWeight(latest.weight)}kg · ${trendPoints.length}개 기록` : "기록 대기"}</span>
        </summary>
        <div class="mobile-detail-body">
          ${renderWeightInsightPanel(weightInsight)}
          <section class="panel today-month-panel">
            <p class="eyebrow">이번 달 흐름</p>
            <div class="stats-grid weight-stats">
              ${stat("월 평균", monthlyWeights.length ? `${formatWeight(average)}kg` : "-")}
              ${stat("최저", monthlyWeights.length ? `${formatWeight(min)}kg` : "-")}
              ${stat("최고", monthlyWeights.length ? `${formatWeight(max)}kg` : "-")}
            </div>
          </section>
          <section class="panel weight-trend-panel">
            <div class="section-head">
              <div>
                <p class="eyebrow">최근 추세</p>
                <h2>체중 흐름</h2>
              </div>
              <span class="muted">${trendPoints.length}개 기록</span>
            </div>
            ${renderWeightTrendChart(trendPoints)}
          </section>
        </div>
      </details>
      <details class="mobile-secondary-detail">
        <summary>
          <strong>달력과 회고</strong>
          <span>${formatMonthTitle(state.weightCalendarMonth)}</span>
        </summary>
        <div class="mobile-detail-body">
          <section class="panel weight-calendar-panel">
            <div class="section-head calendar-head">
              <button class="icon-btn" data-weight-month="prev" aria-label="이전 달">${icon("chevronLeft")}</button>
              <h2>${formatMonthTitle(state.weightCalendarMonth)}</h2>
              <button class="icon-btn" data-weight-month="next" aria-label="다음 달">${icon("chevronRight")}</button>
            </div>
            ${renderMonthReviewPanel(monthReview)}
            ${renderWeightCalendar(state.weightCalendarMonth)}
          </section>
        </div>
      </details>
      <details class="mobile-secondary-detail">
        <summary>
          <strong>몸 사진</strong>
          <span>${state.bodyPhotos.length}장</span>
        </summary>
        <div class="mobile-detail-body">
          ${renderBodyPhotoPanel(today)}
        </div>
      </details>
    </section>
  `;
}

function renderTodayReadinessPanel({ today, todayWeight }) {
  const training = getTrainingSummary(today);
  const todayPhoto = getBodyPhotoForDate(today);
  const items = [
    {
      done: Boolean(todayWeight),
      iconName: "scale",
      title: "체중",
      text: todayWeight ? `${formatWeight(todayWeight.weight)}kg 기록` : "오늘 체중 대기",
      action: "data-focus-weight",
      label: todayWeight ? "수정" : "입력",
    },
    {
      done: training.percent >= 100,
      iconName: "lotus",
      title: "수련",
      text: `${training.percent || 0}% 완료`,
      action: "data-tab=\"training\"",
      label: training.percent ? "보기" : "시작",
    },
    {
      done: Boolean(todayPhoto),
      iconName: "camera",
      title: "사진",
      text: todayPhoto ? "오늘 사진 있음" : "선택 기록",
      action: "data-focus-body-photo",
      label: todayPhoto ? "교체" : "남기기",
    },
  ];
  const doneCount = items.filter((item) => item.done).length;
  return `
    <section class="panel today-readiness-panel">
      <div class="status-head">
        <div>
          <p class="eyebrow">오늘 진행판</p>
          <h2>${doneCount}/3 완료</h2>
        </div>
        <span class="pill">${doneCount === 3 ? "완성" : "진행 중"}</span>
      </div>
      <div class="today-readiness-grid">
        ${items.map((item) => `
          <article class="${item.done ? "done" : ""}">
            ${icon(item.iconName)}
            <div>
              <strong>${item.title}</strong>
              <span>${item.text}</span>
            </div>
            <button class="mini-btn" ${item.action}>${item.label}</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderFirstWeightCallout() {
  return `
    <section class="panel first-action-panel visual-action-panel">
      <img class="action-illustration" src="assets/ui/weight-vignette.png" alt="" aria-hidden="true" />
      <div>
        <p class="eyebrow">첫 기록</p>
        <h2>오늘 체중을 기준점으로 남기기</h2>
      </div>
      <button class="primary-btn" data-focus-weight>몸무게 입력</button>
    </section>
  `;
}

function getWeightDashboardInsight({ latest, previous, goal }) {
  const sorted = getSortedWeightLogs();
  const first = sorted[sorted.length - 1] || null;
  const deltaFromStart = latest && first && latest.id !== first.id ? latest.weight - first.weight : null;
  const deltaFromPrevious = latest && previous ? latest.weight - previous.weight : null;
  const recentDays = latest ? daysBetween(latest.date, formatDateKey(new Date())) : null;
  return {
    latest,
    first,
    deltaFromStart,
    deltaFromPrevious,
    recentDays,
    goal,
  };
}

function renderWeightInsightPanel(data) {
  const latestText = data.latest ? `${formatWeight(data.latest.weight)}kg` : "-";
  const startDelta = data.deltaFromStart === null ? "기준 대기" : `${data.deltaFromStart > 0 ? "+" : ""}${formatWeight(data.deltaFromStart)}kg`;
  const previousDelta = data.deltaFromPrevious === null ? "비교 대기" : `${data.deltaFromPrevious > 0 ? "+" : ""}${formatWeight(data.deltaFromPrevious)}kg`;
  const recentText = data.recentDays === null ? "기록 없음" : data.recentDays === 0 ? "오늘" : `${data.recentDays}일 전`;
  return `
    <section class="weight-insight-grid">
      <article class="weight-insight-card primary">
        <span>현재 체중</span>
        <strong>${latestText}</strong>
        <small>${recentText}</small>
      </article>
      <article class="weight-insight-card">
        <span>시작 대비</span>
        <strong>${startDelta}</strong>
        <small>${data.first ? formatDisplayDate(data.first.date) : "첫 기록 필요"}</small>
      </article>
      <article class="weight-insight-card">
        <span>직전 대비</span>
        <strong>${previousDelta}</strong>
        <small>최근 변화</small>
      </article>
      <article class="weight-insight-card">
        <span>목표까지</span>
        <strong>${data.goal.badge}</strong>
        <small>${state.targetWeight ? `${formatWeight(state.targetWeight)}kg 목표` : "설정 가능"}</small>
      </article>
    </section>
  `;
}

function renderWeightGoalCompass() {
  const latest = getLatestWeightLog();
  const start = getOldestWeightLog() || latest;
  if (!state.targetWeight || !latest) return "";
  const direction = state.targetWeight < start.weight ? "감량" : state.targetWeight > start.weight ? "증량" : "유지";
  const isReached = direction === "감량"
    ? latest.weight <= state.targetWeight
    : direction === "증량"
      ? latest.weight >= state.targetWeight
      : Math.abs(latest.weight - state.targetWeight) <= 0.05;
  const remaining = Math.abs(latest.weight - state.targetWeight);
  const recentPoints = getWeightTrendPoints(7);
  const recentStart = recentPoints[0] || latest;
  const recentDelta = latest.weight - recentStart.weight;
  const recentDays = Math.max(1, daysBetween(recentStart.date, latest.date));
  const favorable = direction === "감량"
    ? recentDelta < -0.05
    : direction === "증량"
      ? recentDelta > 0.05
      : Math.abs(recentDelta) <= 0.2;
  const paceText = Math.abs(recentDelta) <= 0.05
    ? "유지 중"
    : favorable
      ? "목표 방향"
      : "반대 방향";
  const dayText = recentDays > 1 ? `${recentDays}일` : "최근";
  return `
    <div class="weight-goal-compass">
      <div>
        <span>시작</span>
        <strong>${formatWeight(start.weight)}kg</strong>
      </div>
      <div class="current">
        <span>현재</span>
        <strong>${formatWeight(latest.weight)}kg</strong>
      </div>
      <div>
        <span>목표</span>
        <strong>${formatWeight(state.targetWeight)}kg</strong>
      </div>
      <div class="wide ${favorable || isReached ? "good" : ""}">
        <span>${dayText} 흐름</span>
        <strong>${recentDelta > 0 ? "+" : ""}${formatWeight(recentDelta)}kg · ${isReached ? "목표 도달" : paceText}</strong>
      </div>
      <div class="wide">
        <span>남은 거리</span>
        <strong>${isReached ? "목표 도달" : `${formatWeight(remaining)}kg`}</strong>
      </div>
    </div>
  `;
}

function renderTrainingDashboard() {
  const completed = state.quests.filter((q) => q.completed).length;
  const trainingPercent = getTodayTrainingPercent();
  const today = formatDateKey(new Date());
  const todayWeight = state.weightLogs.find((entry) => entry.date === today);
  const streak = getTrainingStreak();
  const nextRealm = realms[state.currentRealm + 1];
  const currentRealm = realms[state.currentRealm];
  const realmProgress = nextRealm ? Math.max(0, Math.min(100, Math.round(((state.totalInnerPower - currentRealm.required) / (nextRealm.required - currentRealm.required)) * 100))) : 100;
  const innerPowerToday = getTodayInnerPowerSummary();
  const realmRemaining = nextRealm ? Math.max(0, nextRealm.required - state.totalInnerPower) : 0;
  const sect = getUserSect();
  const motif = getSectMotif();
  const cultivatorImage = sect?.fighterImage || "assets/fighters/cutout/hwasan.png";
  return `
    <section class="today-hero panel">
      <div class="today-hero-copy">
        <p class="eyebrow">오늘의 수련</p>
        <h2>${state.userName || "무명 소협"}의 루틴</h2>
        <div class="hero-chip-row">
          <span>${sect?.name || "사문"}</span>
          <span>${completed}/${state.quests.length} 완료</span>
          <span>+${innerPowerToday.remaining} 가능</span>
        </div>
      </div>
      <div class="today-focus-grid">
        <div class="focus-stat primary">
          <span>수련 완료율</span>
          <strong>${trainingPercent}%</strong>
          <div class="meter"><span style="--value:${trainingPercent}%"></span></div>
        </div>
        <div class="focus-stat">
          <span>현재 경지</span>
          <strong>${currentRealm.name}</strong>
          <small>${nextRealm ? `다음 경지 ${realmProgress}%` : "절정의 끝"}</small>
        </div>
        <div class="focus-stat">
          <span>연속 수련</span>
          <strong>${streak}일</strong>
          <small>${completed}/${state.quests.length} 완료</small>
        </div>
      </div>
    </section>
    ${renderTodayCommandPanel({ todayWeight, completed, trainingPercent, innerPowerToday, nextRealm, realmRemaining, goal: getWeightGoalStatus() })}
    <section class="innerpower-strip panel" data-innerpower-strip>
      <div class="innerpower-cultivator ${lastInnerPowerPulse ? "cultivating" : ""}">
        <span class="qi-ring qi-ring-one"></span>
        <span class="qi-ring qi-ring-two"></span>
        <span class="qi-ring qi-ring-three"></span>
        <img src="${cultivatorImage}" alt="${sect?.name || "수련자"} 수련 자세" />
      </div>
      <div class="innerpower-copy">
        <p class="eyebrow">오늘 쌓은 내공</p>
        <h2><span data-innerpower-earned>${innerPowerToday.earned}</span><small> / <span data-innerpower-total>${innerPowerToday.total}</span></small></h2>
        ${lastInnerPowerPulse ? `<div class="innerpower-gain-pop">내공 +${lastInnerPowerPulse}</div>` : ""}
        <div class="meter innerpower-meter"><span data-innerpower-meter style="--value:${innerPowerToday.percent}%"></span></div>
        <p class="innerpower-realm">${nextRealm ? `다음 경지 ${nextRealm.name}까지 내공 ${realmRemaining} 남음` : "더 오를 경지가 없습니다"}</p>
        <p class="sect-routine-line">${motif.shortAdvice || motif.advice}</p>
      </div>
      <div class="innerpower-side">
        <strong data-innerpower-remaining>+${innerPowerToday.remaining}</strong>
        <span>아직 얻을 수 있음</span>
      </div>
    </section>
    <section class="panel today-quest-panel">
      <div class="status-head">
        <div>
          <p class="eyebrow">오늘의 수련</p>
          <h2>${trainingPercent}% 완료</h2>
        </div>
        <div class="quest-panel-actions">
          <button class="mini-btn lazy-mode-btn" type="button" data-lazy-mode>오늘은 너무 귀찮다</button>
          <span class="pill">${completed}/${state.quests.length}</span>
        </div>
      </div>
      <section class="today-quest-list">
        ${renderTodayQuestList()}
      </section>
    </section>
    ${renderQuestManagePanel()}
  `;
}

function renderTodayCommandPanel({ todayWeight, completed, trainingPercent, innerPowerToday, nextRealm, realmRemaining, goal }) {
  const command = getTodayCommandState({ todayWeight, completed, trainingPercent, innerPowerToday, nextRealm, realmRemaining, goal });
  return `
    <section class="panel today-command-panel ${command.tone}">
      <div class="today-command-main">
        <div class="command-seal">${icon(command.iconName)}</div>
        <div>
          <p class="eyebrow">다음 행동</p>
          <h2>${command.title}</h2>
        </div>
      </div>
      <div class="today-command-stats">
        <div><span>남은 내공</span><strong>+${innerPowerToday.remaining}</strong></div>
        <div><span>경지까지</span><strong>${nextRealm ? realmRemaining : "완성"}</strong></div>
        <div><span>체중 목표</span><strong>${goal.badge}</strong></div>
      </div>
      <div class="today-command-actions">
        ${command.actionType === "weight" ? `<button class="primary-btn" data-focus-weight>${command.actionLabel}</button>` : ""}
        ${command.actionType === "quest" ? `<button class="primary-btn" data-focus-first-quest>${command.actionLabel}</button>` : ""}
        ${command.actionType === "tab" ? `<button class="primary-btn" data-tab="${command.actionTab}">${command.actionLabel}</button>` : ""}
      </div>
    </section>
  `;
}

function getTodayCommandState({ todayWeight, completed, trainingPercent, innerPowerToday, nextRealm, realmRemaining }) {
  const nextQuest = getTodayPriorityQuest();
  if (!todayWeight) {
    return {
      tone: "needs-record",
      iconName: "scale",
      title: "오늘의 몸 상태를 먼저 새기십시오",
      message: "체중 기록은 이 앱의 기준점입니다. 숫자 하나를 남기면 달력, 목표, 수련 기록이 한꺼번에 살아납니다.",
      actionType: "tab",
      actionTab: "weight",
      actionLabel: "몸무게 기록",
    };
  }
  if (completed === 0 && nextQuest) {
    return {
      tone: "needs-training",
      iconName: "lotus",
      title: `${nextQuest.title}부터 시작`,
      message: "완벽한 하루보다 첫 완료가 더 중요합니다. 하나만 끝내도 내공이 오르고 오늘의 흐름이 열립니다.",
      actionType: "quest",
      actionLabel: "첫 수련 완료하기",
    };
  }
  if (innerPowerToday.remaining > 0 && nextQuest) {
    return {
      tone: "continue-training",
      iconName: "flame",
      title: "아직 거둘 내공이 남아 있습니다",
      message: `${nextQuest.title}을 마치면 오늘의 성장감이 더 선명해집니다. 남은 수련은 작게 끊어서 가면 됩니다.`,
      actionType: "quest",
      actionLabel: "남은 수련 보기",
    };
  }
  if (canBreakthrough()) {
    return {
      tone: "breakthrough",
      iconName: "sparkles",
      title: "경지 돌파가 가능합니다",
      message: "오늘의 내공은 충분히 쌓였습니다. 경지 탭에서 다음 단계로 올라가면 성장의 매듭이 지어집니다.",
      actionType: "tab",
      actionTab: "realm",
      actionLabel: "경지 돌파하기",
    };
  }
  if (getAvailableArtUpgrades().length || getAvailableArtPurchases().length) {
    return {
      tone: "martial",
      iconName: "swords",
      title: "쌓인 내공을 무공으로 바꿀 때입니다",
      message: "수련으로 얻은 내공은 무공을 찍을 때 체감이 커집니다. 오늘의 습관을 오래 이어갈 핵심 무공을 정돈하십시오.",
      actionType: "tab",
      actionTab: "arts",
      actionLabel: "무공 확인하기",
    };
  }
  return {
    tone: trainingPercent >= 100 ? "complete" : "steady",
    iconName: trainingPercent >= 100 ? "shield" : "scroll",
    title: trainingPercent >= 100 ? "오늘의 수련은 완성되었습니다" : "오늘의 흐름은 안정적입니다",
    message: nextRealm ? `다음 경지까지 내공 ${realmRemaining}이 남았습니다. 남은 시간에는 기록을 돌아보며 내 몸과 수련의 흐름을 확인해도 좋습니다.` : "현재 경지는 충분히 높습니다. 기록을 돌아보며 다음 현실 목표를 정리해도 좋습니다.",
    actionType: "tab",
    actionTab: "records",
    actionLabel: "기록 보기",
  };
}

function getTodayPriorityQuest() {
  const incomplete = state.quests.filter((q) => !q.completed);
  if (!incomplete.length) return null;
  return incomplete.find((q) => q.id === "checkin")
    || incomplete.find((q) => q.difficulty === "easy")
    || incomplete.find((q) => q.id === "study")
    || incomplete[0];
}

function getLazyModeQuest() {
  const incomplete = state.quests.filter((q) => !q.completed);
  if (!incomplete.length) return null;
  return incomplete.find((q) => q.id === "checkin")
    || incomplete.find((q) => q.id === "water")
    || incomplete.find((q) => q.difficulty === "easy")
    || incomplete[0];
}

function focusQuestCard(target, extraClass = "") {
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  target.classList.add("attention");
  if (extraClass) target.classList.add(extraClass);
  setTimeout(() => target.classList.remove("attention"), 1200);
}

function activateLazyMode() {
  const quest = getLazyModeQuest();
  if (!quest) {
    showToast("오늘의 흐름은 이미 이어졌습니다.");
    return;
  }
  const target = app.querySelector(`[data-quest-id="${quest.id}"]`) || app.querySelector(".today-quest:not(.done)");
  focusQuestCard(target, "lazy-focus");
  showToast(`오늘은 이것만 잡아도 됩니다 · ${quest.title}`);
}

function renderBodyPhotoPanel(dateKey = formatDateKey(new Date())) {
  const todayPhoto = getBodyPhotoForDate(dateKey);
  const latestPhoto = getLatestBodyPhoto();
  const firstPhoto = getFirstBodyPhoto();
  const comparePhoto = latestPhoto && firstPhoto && latestPhoto.id !== firstPhoto.id ? firstPhoto : null;
  return `
    <section class="panel body-photo-panel">
      <div class="status-head">
        <div>
          <p class="eyebrow">몸 변화 사진</p>
          <h2>${todayPhoto ? "오늘 사진 기록 완료" : "오늘의 몸 상태 남기기"}</h2>
          <p class="muted">앱 데이터에만 보관</p>
        </div>
        <span class="pill">${state.bodyPhotos.length}장</span>
      </div>
      <div class="body-photo-grid">
        <article class="body-photo-slot ${todayPhoto ? "has-photo" : ""}">
          ${todayPhoto ? `
            <img src="${todayPhoto.image}" alt="${formatDisplayDate(todayPhoto.date)} 몸 사진" />
            <div class="body-photo-caption">
              <strong>오늘</strong>
              <span>${formatDisplayDate(todayPhoto.date)}</span>
            </div>
          ` : `
            <div class="body-photo-empty">
              <img class="empty-illustration" src="assets/ui/weight-vignette.png" alt="" aria-hidden="true" />
              <strong>오늘 사진 없음</strong>
              <span>같은 자세로 남기면 변화가 더 잘 보입니다.</span>
            </div>
          `}
        </article>
        <article class="body-photo-slot ${comparePhoto ? "has-photo" : ""}">
          ${comparePhoto ? `
            <img src="${comparePhoto.image}" alt="${formatDisplayDate(comparePhoto.date)} 몸 사진" />
            <div class="body-photo-caption">
              <strong>첫 기록</strong>
              <span>${formatDisplayDate(comparePhoto.date)}</span>
            </div>
          ` : `
            <div class="body-photo-empty">
              <img class="empty-illustration" src="assets/ui/records-vignette.png" alt="" aria-hidden="true" />
              <strong>비교 사진 대기</strong>
              <span>사진이 쌓이면 첫 기록과 최근 기록을 나란히 보여줍니다.</span>
            </div>
          `}
        </article>
      </div>
      <div class="body-photo-actions">
        <label class="primary-btn body-photo-pick" for="body-photo-input">
          ${todayPhoto ? "오늘 사진 교체" : "몸 사진 찍기 / 선택"}
          <input id="body-photo-input" class="body-photo-input" type="file" accept="image/*" capture="environment" data-body-photo-input />
        </label>
        ${todayPhoto ? `<button class="ghost-btn danger" type="button" data-delete-body-photo="${dateKey}">오늘 사진 삭제</button>` : ""}
      </div>
    </section>
  `;
}

function getSortedBodyPhotos() {
  return [...(state.bodyPhotos || [])].sort((a, b) => {
    const dateCompare = b.date.localeCompare(a.date);
    if (dateCompare) return dateCompare;
    return (b.updatedAt || b.createdAt || "").localeCompare(a.updatedAt || a.createdAt || "");
  });
}

function getBodyPhotoForDate(dateKey) {
  return getSortedBodyPhotos().find((entry) => entry.date === dateKey) || null;
}

function getLatestBodyPhoto() {
  return getSortedBodyPhotos()[0] || null;
}

function getFirstBodyPhoto() {
  return [...(state.bodyPhotos || [])].sort((a, b) => {
    const dateCompare = a.date.localeCompare(b.date);
    if (dateCompare) return dateCompare;
    return (a.createdAt || a.updatedAt || "").localeCompare(b.createdAt || b.updatedAt || "");
  })[0] || null;
}

async function hydrateBodyPhotos() {
  const localPhotos = Array.isArray(state.bodyPhotos) ? state.bodyPhotos : [];
  try {
    const storedPhotos = await loadBodyPhotosFromStore();
    if (!storedPhotos.length && localPhotos.some((photo) => photo.image)) {
      await replaceBodyPhotosInStore(localPhotos);
      state.bodyPhotos = localPhotos;
    } else if (storedPhotos.length) {
      state.bodyPhotos = storedPhotos;
    } else {
      state.bodyPhotos = localPhotos;
    }
    bodyPhotoStoreReady = true;
  } catch {
    bodyPhotoStoreReady = false;
    state.bodyPhotos = localPhotos;
  }
}

function openBodyPhotoDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB unavailable"));
      return;
    }
    const request = indexedDB.open(BODY_PHOTO_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(BODY_PHOTO_STORE)) {
        db.createObjectStore(BODY_PHOTO_STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function loadBodyPhotosFromStore() {
  const db = await openBodyPhotoDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BODY_PHOTO_STORE, "readonly");
    const store = tx.objectStore(BODY_PHOTO_STORE);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
    tx.oncomplete = () => db.close();
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

async function putBodyPhotoInStore(photo) {
  const db = await openBodyPhotoDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BODY_PHOTO_STORE, "readwrite");
    tx.objectStore(BODY_PHOTO_STORE).put(photo);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

async function deleteBodyPhotoFromStore(id) {
  const db = await openBodyPhotoDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BODY_PHOTO_STORE, "readwrite");
    tx.objectStore(BODY_PHOTO_STORE).delete(id);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

async function replaceBodyPhotosInStore(photos) {
  const db = await openBodyPhotoDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BODY_PHOTO_STORE, "readwrite");
    const store = tx.objectStore(BODY_PHOTO_STORE);
    store.clear();
    photos.forEach((photo) => store.put(photo));
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

async function saveBodyPhoto(file, dateKey = formatDateKey(new Date())) {
  if (!file) return;
  if (!file.type?.startsWith("image/")) {
    showToast("이미지 파일만 기록할 수 있습니다.");
    return;
  }
  const previousPhotos = [...state.bodyPhotos];
  try {
    const image = await compressBodyPhoto(file);
    const existingIndex = state.bodyPhotos.findIndex((entry) => entry.date === dateKey);
    const entry = {
      id: existingIndex >= 0 ? state.bodyPhotos[existingIndex].id : `body-photo-${Date.now()}`,
      date: dateKey,
      image,
      createdAt: existingIndex >= 0 ? state.bodyPhotos[existingIndex].createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    if (bodyPhotoStoreReady) {
      await putBodyPhotoInStore(entry);
    }
    if (existingIndex >= 0) {
      state.bodyPhotos[existingIndex] = entry;
    } else {
      state.bodyPhotos.push(entry);
    }
    addRecord("몸 사진 기록", `${formatDisplayDate(dateKey)} 몸 변화 사진을 남겼습니다.`);
    evaluateTitleUnlocks();
    saveState();
    showToast("몸 사진 기록 완료");
    render();
  } catch {
    state.bodyPhotos = previousPhotos;
    showToast("사진을 저장하지 못했습니다. 사진 용량을 줄이거나 다른 이미지를 선택해보십시오.");
  }
}

function compressBodyPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const maxSide = 960;
        const ratio = Math.min(1, maxSide / Math.max(img.width, img.height));
        const width = Math.max(1, Math.round(img.width * ratio));
        const height = Math.max(1, Math.round(img.height * ratio));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function deleteBodyPhoto(dateKey) {
  const existingIndex = state.bodyPhotos.findIndex((entry) => entry.date === dateKey);
  if (existingIndex < 0) return;
  const photo = state.bodyPhotos[existingIndex];
  const previousPhotos = [...state.bodyPhotos];
  (async () => {
    if (bodyPhotoStoreReady) {
      await deleteBodyPhotoFromStore(photo.id);
    }
    state.bodyPhotos.splice(existingIndex, 1);
    addRecord("몸 사진 삭제", `${formatDisplayDate(dateKey)} 몸 변화 사진을 삭제했습니다.`);
    saveState();
    showToast("몸 사진 삭제 완료");
    render();
  })().catch(() => {
    state.bodyPhotos = previousPhotos;
    showToast("사진 삭제를 저장하지 못했습니다.");
  });
}

function renderStableDailyQuestItem(q) {
  return renderStableDailyQuestItemWithOptions(q);
}

function renderTodayQuestList() {
  const pending = state.quests.filter((q) => !q.completed);
  const firstPendingId = pending[0]?.id;
  return `
    ${state.quests.length ? `
      <div class="quest-section-head">
        <span>오늘의 수련</span>
        <strong>${pending.length}개 남음</strong>
      </div>
      ${state.quests.map((q) => renderStableDailyQuestItemWithOptions(q, { priority: q.id === firstPendingId })).join("")}
      ${pending.length ? "" : `
        <div class="quest-complete-state compact">
          <strong>오늘의 수련을 모두 마쳤습니다.</strong>
          <span>체크된 흔적은 그대로 남겨두었습니다.</span>
        </div>
      `}
    ` : `
      <div class="quest-complete-state">
        <img class="state-illustration" src="assets/ui/training-vignette.png" alt="" aria-hidden="true" />
        <strong>오늘의 수련이 비어 있습니다.</strong>
        <span>수련 편집에서 오늘의 루틴을 정해보세요.</span>
      </div>
    `}
  `;
}

function renderStableDailyQuestItemWithOptions(q, options = {}) {
  const reward = getQuestRewardPreview(q);
  const justCompleted = q.completed && q.id === lastCompletedQuestId;
  const studyInput = isDurationQuest(q) && !q.completed
    ? renderStudyTimeInput(q.id)
    : isDurationQuest(q) && q.completed && q.completedMinutes
      ? `<span class="quest-time-done">${formatStudyDuration(q.completedMinutes)} 수련</span>`
      : "";
  return `
    <article class="today-quest ${q.completed ? "done" : ""} ${options.priority ? "priority" : ""} ${justCompleted ? "just-completed" : ""}" data-quest-id="${q.id}">
      ${justCompleted ? `<span class="quest-complete-burst">내공 +${reward}</span>` : ""}
      <button class="quest-check" ${q.completed ? `data-uncomplete="${q.id}"` : `data-complete="${q.id}"`} aria-label="${q.title} ${q.completed ? "취소" : "완료"}">${q.completed ? "✓" : ""}</button>
      <div class="today-quest-body">
        <strong>${q.title}</strong>
        ${studyInput}
        <span>${questCategoryLabel(q.category)} · ${questDifficultyLabel(q.difficulty)}</span>
      </div>
      <div class="quest-reward-side">
        <b data-quest-reward="${q.id}">+${reward}</b>
        ${q.completed ? `<button class="mini-btn quest-undo" data-uncomplete="${q.id}">취소</button>` : ""}
      </div>
    </article>
  `;
}

function renderQuestManagePanel() {
  const templates = state.questTemplates || defaultQuests.map(questTemplateFromQuest);
  return `
    <section class="panel quest-manage-panel">
      <details>
        <summary>
          <div>
            <p class="eyebrow">수련 편집</p>
            <h2>내 하루에 맞게 수련을 조정</h2>
          </div>
          <span class="pill">${templates.filter((q) => q.enabled !== false).length}개 사용</span>
        </summary>
        <div class="quest-manage-list">
          ${templates.map(renderQuestTemplateEditor).join("")}
        </div>
        <div class="quest-manage-actions">
          <button class="ghost-btn" data-add-quest>수련 추가</button>
          <button class="mini-btn" data-restore-quests>기본 수련 복구</button>
        </div>
      </details>
    </section>
  `;
}

function renderQuestTemplateEditor(q) {
  const safeId = q.id;
  const enabled = q.enabled !== false;
  const rewardModeText = q.rewardMode === "duration" ? "시간형" : "고정";
  const removable = safeId.startsWith("custom_");
  return `
    <article class="quest-editor ${q.enabled === false ? "disabled" : ""}" data-quest-editor="${safeId}">
      <div class="quest-editor-main">
        <label class="quest-toggle">
          <input type="checkbox" data-quest-enabled="${safeId}" ${enabled ? "checked" : ""} />
          <span>${enabled ? "사용" : "쉼"}</span>
        </label>
        <div class="quest-editor-title">
          <strong>${q.title}</strong>
          <span>${questCategoryLabel(q.category)} · ${questDifficultyLabel(q.difficulty)} · ${rewardModeText}</span>
        </div>
        <div class="quest-editor-reward">
          <span>내공</span>
          <strong>+${Number(q.innerPowerReward) || 10}</strong>
        </div>
      </div>
      <details class="quest-editor-details">
        <summary>상세 수정</summary>
        <div class="quest-editor-form">
          <div class="field quest-title-field">
            <label>수련명</label>
            <input type="text" value="${escapeAttr(q.title)}" maxlength="28" data-quest-title="${safeId}" />
          </div>
          <div class="field">
            <label>분류</label>
            <select data-quest-category="${safeId}">
              ${renderSelectOptions(getQuestCategoryOptions(), q.category)}
            </select>
          </div>
          <div class="field">
            <label>난이도</label>
            <select data-quest-difficulty="${safeId}">
              ${renderSelectOptions(getQuestDifficultyOptions(), q.difficulty)}
            </select>
          </div>
          <div class="field">
            <label>기본 내공</label>
            <input type="number" min="1" max="200" step="1" value="${Number(q.innerPowerReward) || 10}" data-quest-reward-base="${safeId}" />
          </div>
          <div class="field">
            <label>보상 방식</label>
            <select data-quest-reward-mode="${safeId}">
              ${renderSelectOptions([
                ["fixed", "고정"],
                ["duration", "시간형"],
              ], q.rewardMode)}
            </select>
          </div>
          ${removable ? `<button class="mini-btn danger" type="button" data-delete-quest-template="${safeId}">삭제</button>` : ""}
        </div>
      </details>
    </article>
  `;
}

function renderSelectOptions(options, selectedValue) {
  return options.map(([value, label]) => `<option value="${value}" ${value === selectedValue ? "selected" : ""}>${label}</option>`).join("");
}

function getQuestCategoryOptions() {
  return [
    ["mind", "절제"],
    ["health", "기혈"],
    ["exercise", "신체"],
    ["study", "공부"],
    ["language", "어학"],
    ["diet", "식단"],
    ["reading", "독서"],
  ];
}

function getQuestDifficultyOptions() {
  return [
    ["easy", "쉬움"],
    ["normal", "보통"],
    ["hard", "어려움"],
    ["extreme", "매우 어려움"],
  ];
}

function escapeAttr(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function renderStudyTimeInput(id) {
  const quest = state.quests.find((q) => q.id === id);
  const planned = Math.max(10, Math.min(240, Number(quest?.plannedMinutes) || 30));
  const hours = Math.floor(planned / 60);
  const minutes = planned % 60;
  return `
    <div class="quest-time-field" data-study-time="${id}">
      <span>공부 시간</span>
      <label><input type="number" min="0" max="4" step="1" value="${hours}" inputmode="numeric" data-quest-hours="${id}" /><em>시간</em></label>
      <label><input type="number" min="0" max="55" step="5" value="${minutes}" inputmode="numeric" data-quest-minutes="${id}" /><em>분</em></label>
    </div>
  `;
}

function getTodayInnerPowerSummary() {
  const earned = state.quests
    .filter((q) => q.completed)
    .reduce((sum, q) => sum + (q.earnedInnerPower || q.innerPowerReward || 0), 0);
  const remaining = state.quests
    .filter((q) => !q.completed)
    .reduce((sum, q) => sum + getQuestRewardPreview(q), 0);
  const total = earned + remaining;
  return {
    earned,
    remaining,
    total,
    percent: total ? Math.round((earned / total) * 100) : 0,
  };
}

function renderTodayQuest(q) {
  const reward = getQuestRewardPreview(q);
  const studyInput = q.id === "study" && !q.completed
    ? `<label class="quest-time-field"><span>공부 시간</span><input type="number" min="10" max="240" step="5" value="30" inputmode="numeric" data-quest-minutes="${q.id}" /><em>분</em></label>`
    : q.id === "study" && q.completed && q.completedMinutes
      ? `<span class="quest-time-done">${q.completedMinutes}분 수련</span>`
      : "";
  return `
    <article class="today-quest ${q.completed ? "done" : ""}">
      <button class="quest-check" data-complete="${q.id}" ${q.completed ? "disabled" : ""} aria-label="${q.title} 완료">${q.completed ? "✓" : ""}</button>
      <div class="today-quest-body">
        <strong>${q.title}</strong>
        ${studyInput}
        <span>${questCategoryLabel(q.category)} · ${questDifficultyLabel(q.difficulty)}</span>
      </div>
      <b data-quest-reward="${q.id}">+${reward}</b>
    </article>
  `;
}

function getQuestRewardPreview(q) {
  if (q.completed && q.earnedInnerPower) return q.earnedInnerPower;
  if (!isDurationQuest(q)) return q.innerPowerReward;
  return calculateStudyReward(getQuestMinutes(q.id), q.innerPowerReward);
}

function calculateQuestCompletionReward(q) {
  if (isDurationQuest(q)) return calculateStudyReward(getQuestMinutes(q.id), q.innerPowerReward);
  return q.innerPowerReward;
}

function isDurationQuest(q) {
  return q?.rewardMode === "duration";
}

function getQuestMinutes(id) {
  const hourInput = app?.querySelector(`[data-quest-hours="${id}"]`);
  const minuteInput = app?.querySelector(`[data-quest-minutes="${id}"]`);
  if (!hourInput && !minuteInput) {
    const quest = state.quests.find((q) => q.id === id);
    return Math.max(10, Math.min(240, Number(quest?.plannedMinutes) || 30));
  }
  const hours = Number(hourInput?.value || 0);
  const minutes = Number(minuteInput?.value || 0);
  const totalMinutes = (Number.isFinite(hours) ? hours * 60 : 0) + (Number.isFinite(minutes) ? minutes : 0);
  return Math.max(10, Math.min(240, Math.round(totalMinutes)));
}

function calculateStudyReward(minutes, baseReward = 25) {
  const base = Math.max(1, Number(baseReward) || 25);
  if (minutes < 30) return Math.max(5, Math.round((minutes / 30) * base));
  return Math.min(base * 4, base + Math.floor((minutes - 30) / 15) * Math.max(3, Math.round(base * 0.4)));
}

function formatStudyDuration(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours && minutes) return `${hours}시간 ${minutes}분`;
  if (hours) return `${hours}시간`;
  return `${minutes}분`;
}

function updateQuestRewardPreview(id) {
  saveQuestStudyPlan(id);
  const quest = state.quests.find((q) => q.id === id);
  const target = app?.querySelector(`[data-quest-reward="${id}"]`);
  if (!quest || !target) return;
  target.textContent = `+${getQuestRewardPreview(quest)}`;
  updateInnerPowerStrip();
}

function saveQuestStudyPlan(id) {
  const quest = state.quests.find((q) => q.id === id);
  if (!quest || quest.completed || !isDurationQuest(quest)) return;
  quest.plannedMinutes = getQuestMinutes(id);
  saveState();
}

function updateInnerPowerStrip() {
  const summary = getTodayInnerPowerSummary();
  const earned = app?.querySelector("[data-innerpower-earned]");
  const total = app?.querySelector("[data-innerpower-total]");
  const remaining = app?.querySelector("[data-innerpower-remaining]");
  const meter = app?.querySelector("[data-innerpower-meter]");
  if (earned) earned.textContent = summary.earned;
  if (total) total.textContent = summary.total;
  if (remaining) remaining.textContent = `+${summary.remaining}`;
  if (meter) meter.style.setProperty("--value", `${summary.percent}%`);
}

function getTrainingStreak() {
  let streak = 0;
  const cursor = new Date();
  for (let i = 0; i < 365; i += 1) {
    const key = formatDateKey(cursor);
    const summary = getTrainingSummary(key);
    if (!summary.visited || summary.percent <= 0) break;
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function renderWeight() {
  return renderWeightDashboard();
}

function renderWeightCalendar(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const startOffset = firstDay.getDay();
  const logsByDate = getLatestWeightByDate(monthKey);
  const todayKey = formatDateKey(new Date());
  const cells = [];
  for (let i = 0; i < startOffset; i += 1) {
    cells.push(`<div class="weight-day muted empty-day" aria-hidden="true"></div>`);
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateKey = `${monthKey}-${String(day).padStart(2, "0")}`;
    const entry = logsByDate[dateKey];
    const training = getTrainingSummary(dateKey);
    const prevEntry = findPreviousWeightBefore(dateKey);
    const delta = entry && prevEntry ? entry.weight - prevEntry.weight : null;
    cells.push(`
      <div class="weight-day ${dateKey === todayKey ? "today" : ""} ${entry ? "has-weight" : ""} ${training.visited ? "has-training" : ""}">
        <span class="day-number">${day}</span>
        <div class="calendar-day-stack">
          ${entry ? `<strong>${formatWeight(entry.weight)}kg</strong><small class="${delta > 0 ? "up" : delta < 0 ? "down" : ""}">${delta === null ? "체중 기록" : `${delta > 0 ? "+" : ""}${formatWeight(delta)}kg`}</small>` : `<strong class="no-weight">-</strong><small>체중 없음</small>`}
          <small class="training-percent ${training.percent === 100 ? "complete" : ""} ${training.visited ? "" : "empty"}">${training.visited ? `수련 ${training.percent}%` : "미접속"}</small>
        </div>
      </div>
    `);
  }
  return `
    <div class="weekday-row">
      ${["일", "월", "화", "수", "목", "금", "토"].map((day) => `<span>${day}</span>`).join("")}
    </div>
    <div class="weight-calendar">${cells.join("")}</div>
  `;
}

function getMonthReviewData(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  const daysInMonth = new Date(year, month, 0).getDate();
  const logsByDate = getLatestWeightByDate(monthKey);
  const weightEntries = Object.values(logsByDate).sort((a, b) => a.date.localeCompare(b.date));
  const firstWeight = weightEntries[0] || null;
  const lastWeight = weightEntries[weightEntries.length - 1] || null;
  const weightDelta = firstWeight && lastWeight && firstWeight.date !== lastWeight.date ? lastWeight.weight - firstWeight.weight : null;
  const trainingLogs = Array.from({ length: daysInMonth }, (_, index) => {
    const dateKey = `${monthKey}-${String(index + 1).padStart(2, "0")}`;
    return getTrainingSummary(dateKey);
  });
  const trainingDays = trainingLogs.filter((log) => log.visited && log.percent > 0).length;
  const completeTrainingDays = trainingLogs.filter((log) => log.percent >= 100).length;
  const averageTraining = Math.round(trainingLogs.reduce((sum, log) => sum + (log.percent || 0), 0) / daysInMonth);
  const innerPower = trainingLogs.reduce((sum, log) => sum + (log.earnedInnerPower || 0), 0);
  const title = getMonthReviewTitle({ weightEntries, weightDelta, trainingDays, averageTraining });
  return {
    monthKey,
    daysInMonth,
    weightEntries,
    weightDays: weightEntries.length,
    firstWeight,
    lastWeight,
    weightDelta,
    trainingDays,
    completeTrainingDays,
    averageTraining,
    innerPower,
    title,
  };
}

function getMonthReviewTitle({ weightEntries, weightDelta, trainingDays, averageTraining }) {
  if (!weightEntries.length && !trainingDays) return "이번 달 기록을 기다리고 있습니다";
  if (weightDelta < -0.1 && averageTraining >= 50) return "체중과 수련 흐름이 함께 움직였습니다";
  if (weightDelta < -0.1) return "체중 변화가 보이기 시작했습니다";
  if (averageTraining >= 70) return "수련 흐름이 단단한 달입니다";
  if (trainingDays >= 8) return "꾸준함의 흔적이 쌓이고 있습니다";
  return "작은 기록을 더 쌓으면 흐름이 선명해집니다";
}

function renderMonthReviewPanel(data) {
  const deltaText = data.weightDelta === null ? "비교 대기" : `${data.weightDelta > 0 ? "+" : ""}${formatWeight(data.weightDelta)}kg`;
  return `
    <section class="month-review-panel">
      <div class="month-review-copy">
        <span class="section-label">월간 회고</span>
        <strong>${data.title}</strong>
      </div>
      <div class="month-review-grid">
        <div><span>체중 기록</span><strong>${data.weightDays}/${data.daysInMonth}</strong></div>
        <div><span>체중 변화</span><strong>${deltaText}</strong></div>
        <div><span>수련일</span><strong>${data.trainingDays}/${data.daysInMonth}</strong></div>
        <div><span>평균 수련</span><strong>${data.averageTraining}%</strong></div>
      </div>
    </section>
  `;
}

function saveWeightLog(form) {
  const formData = new FormData(form);
  const date = formData.get("date");
  const weight = Number(formData.get("weight"));
  if (!date || !Number.isFinite(weight) || weight < 20 || weight > 300) {
    showToast("몸무게를 다시 확인해 주세요.");
    return;
  }
  const existingIndex = state.weightLogs.findIndex((entry) => entry.date === date);
  const entry = {
    id: existingIndex >= 0 ? state.weightLogs[existingIndex].id : `weight-${Date.now()}`,
    date,
    weight: Math.round(weight * 10) / 10,
    memo: "",
    createdAt: existingIndex >= 0 ? state.weightLogs[existingIndex].createdAt : new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  if (existingIndex >= 0) {
    state.weightLogs[existingIndex] = entry;
  } else {
    state.weightLogs.push(entry);
  }
  state.weightCalendarMonth = date.slice(0, 7);
  addRecord("몸무게 기록", `${formatDisplayDate(date)} 몸무게 ${formatWeight(entry.weight)}kg을 기록했습니다.`);
  evaluateTitleUnlocks();
  saveState();
  showToast(`몸무게 기록 · ${formatWeight(entry.weight)}kg`);
  render();
}

function deleteWeightLog(date) {
  const existingIndex = state.weightLogs.findIndex((entry) => entry.date === date);
  if (existingIndex < 0) return;
  if (!confirm("오늘 체중 기록을 삭제할까요?")) return;
  const [removed] = state.weightLogs.splice(existingIndex, 1);
  addRecord("몸무게 삭제", `${formatDisplayDate(date)} 몸무게 ${formatWeight(removed.weight)}kg 기록을 삭제했습니다.`);
  saveState();
  showToast("오늘 체중 기록을 삭제했습니다.");
  render();
}

function changeWeightMonth(direction) {
  const [year, month] = state.weightCalendarMonth.split("-").map(Number);
  const next = new Date(year, month - 1 + direction, 1);
  state.weightCalendarMonth = currentMonthKey(next);
  saveState();
  render();
}

function saveWeightGoal(form) {
  const targetWeight = Number(new FormData(form).get("targetWeight"));
  if (!Number.isFinite(targetWeight) || targetWeight < 20 || targetWeight > 300) {
    showToast("목표 몸무게를 다시 확인해 주세요.");
    return;
  }
  state.targetWeight = Math.round(targetWeight * 10) / 10;
  addRecord("목표 설정", `목표 몸무게를 ${formatWeight(state.targetWeight)}kg으로 정했습니다.`);
  saveState();
  showToast(`목표 설정 · ${formatWeight(state.targetWeight)}kg`);
  render();
}

function clearWeightGoal() {
  state.targetWeight = null;
  addRecord("목표 해제", "목표 몸무게를 해제했습니다.");
  saveState();
  showToast("목표 몸무게를 해제했습니다.");
  render();
}

function getWeightGoalStatus() {
  const latest = getLatestWeightLog();
  if (!state.targetWeight) {
    return {
      badge: "미설정",
      message: "원하는 목표를 정하면 현재 몸무게와의 차이를 바로 보여줍니다.",
      progress: 0,
      progressLabel: "",
      startLabel: "",
    };
  }
  if (!latest) {
    return {
      badge: `${formatWeight(state.targetWeight)}kg`,
      message: "먼저 현재 몸무게를 기록하면 목표까지의 거리가 계산됩니다.",
      progress: 0,
      progressLabel: "",
      startLabel: "",
    };
  }
  const start = getOldestWeightLog() || latest;
  const remaining = latest.weight - state.targetWeight;
  const distance = Math.abs(remaining);
  const total = Math.abs(start.weight - state.targetWeight);
  const rawProgress = total === 0 ? 100 : Math.max(0, Math.min(100, (Math.abs(start.weight - state.targetWeight) - distance) / total * 100));
  const direction = state.targetWeight < start.weight ? "감량" : state.targetWeight > start.weight ? "증량" : "유지";
  const isReached = direction === "감량"
    ? latest.weight <= state.targetWeight
    : direction === "증량"
      ? latest.weight >= state.targetWeight
      : distance <= 0.05;
  const progressed = isReached ? 100 : rawProgress;
  return {
    badge: isReached ? "달성" : `${formatWeight(distance)}kg 남음`,
    message: isReached ? "목표 몸무게에 도달했습니다." : `${direction} 목표까지 ${formatWeight(distance)}kg 남았습니다.`,
    progress: Math.round(progressed),
    progressLabel: `${Math.round(progressed)}%`,
    startLabel: `시작 ${formatWeight(start.weight)}kg · 현재 ${formatWeight(latest.weight)}kg`,
  };
}

function getSortedWeightLogs() {
  return [...state.weightLogs].sort((a, b) => {
    const dateCompare = b.date.localeCompare(a.date);
    if (dateCompare) return dateCompare;
    return (b.updatedAt || b.createdAt || "").localeCompare(a.updatedAt || a.createdAt || "");
  });
}

function getLatestWeightLog() {
  return getSortedWeightLogs()[0] || null;
}

function getOldestWeightLog() {
  return [...state.weightLogs].sort((a, b) => a.date.localeCompare(b.date))[0] || null;
}

function getPreviousWeightLog(latest) {
  if (!latest) return null;
  return getSortedWeightLogs().find((entry) => entry.date < latest.date) || null;
}

function getWeightLogsForMonth(monthKey) {
  return state.weightLogs.filter((entry) => entry.date.startsWith(monthKey));
}

function getLatestWeightByDate(monthKey) {
  return getWeightLogsForMonth(monthKey).reduce((map, entry) => {
    const current = map[entry.date];
    if (!current || (entry.updatedAt || entry.createdAt || "") > (current.updatedAt || current.createdAt || "")) {
      map[entry.date] = entry;
    }
    return map;
  }, {});
}

function findPreviousWeightBefore(dateKey) {
  return getSortedWeightLogs().find((entry) => entry.date < dateKey) || null;
}

function currentMonthKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function formatDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDisplayDate(dateKey) {
  const [year, month, day] = dateKey.split("-");
  return `${year}.${month}.${day}`;
}

function formatMonthTitle(monthKey) {
  const [year, month] = monthKey.split("-");
  return `${year}년 ${Number(month)}월`;
}

function formatWeight(weight) {
  return Number(weight).toFixed(1).replace(/\.0$/, "");
}

function renderTraining() {
  return renderTrainingDashboard();
}

function stat(label, value) {
  return `<div class="stat"><span class="stat-label">${icon(statIconName(label))}${label}</span><b>${value}</b></div>`;
}

function navIconName(tab) {
  return {
    weight: "scale",
    training: "lotus",
    arts: "swords",
    realm: "mountain",
    records: "scroll",
  }[tab] || "circle";
}

function statIconName(label) {
  if (label.includes("평균") || label.includes("최저") || label.includes("최고") || label.includes("체중")) return "scale";
  if (label.includes("경지")) return "mountain";
  if (label.includes("수련") || label.includes("내공")) return "spark";
  if (label.includes("문파")) return "temple";
  if (label.includes("평균") || label.includes("최저") || label.includes("최고")) return "scale";
  if (label.includes("내공")) return "spark";
  if (label.includes("사문")) return "temple";
  if (label.includes("공격")) return "sword";
  if (label.includes("방어")) return "shield";
  if (label.includes("회피")) return "wind";
  if (label.includes("격파")) return "target";
  if (label.includes("엽전") || label.includes("은자")) return "coin";
  if (label.includes("깨달음")) return "spark";
  if (label.includes("비급")) return "scroll";
  return "circle";
}

function icon(name, className = "icon") {
  const paths = {
    scale: `<path d="M12 3v3"/><path d="M5 7h14"/><path d="M6 7l-3 7h6L6 7Z"/><path d="M18 7l-3 7h6l-3-7Z"/><path d="M12 6v13"/><path d="M8 21h8"/>`,
    lotus: `<path d="M12 20c-3.8-1.4-6-3.8-6-7.2 2.4.2 4.4 1.2 6 3 1.6-1.8 3.6-2.8 6-3 0 3.4-2.2 5.8-6 7.2Z"/><path d="M12 15.8C9.6 13.8 9 10.9 12 6c3 4.9 2.4 7.8 0 9.8Z"/><path d="M4 20h16"/>`,
    flame: `<path d="M12 21c3.2-1.4 5-3.8 5-6.7 0-2.2-1-4.3-3-6.3.1 2-1 3.4-2.7 4.2.5-3.2-.7-5.8-3.5-8C8 7.7 5 9.7 5 14.2 5 17.2 7 20 12 21Z"/><path d="M12 21c-1.7-.8-2.6-2.1-2.6-3.8 0-1.5.8-2.8 2.3-3.9-.1 1.3.5 2.2 1.6 2.7.8 1.8.3 3.5-1.3 5Z"/>`,
    sword: `<path d="M14.5 4.5 20 2l-2.5 5.5L8 17l-3 1 1-3 8.5-10.5Z"/><path d="m9 15 2 2"/><path d="m4 20 3-3"/>`,
    swords: `<path d="m14.5 4.5 3-2.5 1.5 1.5-2.5 3L8 15l-3 1 1-3 8.5-8.5Z"/><path d="m9.5 4.5-3-2.5L5 3.5l2.5 3L16 15l3 1-1-3-8.5-8.5Z"/><path d="m8 15 2 2"/><path d="m16 15-2 2"/>`,
    mountain: `<path d="m3 19 7-13 4 7 2-3 5 9H3Z"/><path d="m10 6 1.8 7"/><path d="M14 13h-3"/>`,
    map: `<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 5-4.8 2 2.2-5 4.8-2Z"/><path d="m12 12 .01 0"/>`,
    store: `<path d="M4 10h16l-1.5-5h-13L4 10Z"/><path d="M6 10v9h12v-9"/><path d="M9 19v-5h6v5"/><path d="M4 10c.5 2 3.5 2 4 0 .5 2 3.5 2 4 0 .5 2 3.5 2 4 0 .5 2 3.5 2 4 0"/>`,
    scroll: `<path d="M7 4h10a3 3 0 0 1 0 6H7a3 3 0 0 1 0-6Z"/><path d="M7 10v9h10v-9"/><path d="M9 14h6"/><path d="M9 17h4"/>`,
    spark: `<path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z"/><path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/>`,
    temple: `<path d="M3 9h18L12 3 3 9Z"/><path d="M5 9v10"/><path d="M9 9v10"/><path d="M15 9v10"/><path d="M19 9v10"/><path d="M3 19h18"/>`,
    shield: `<path d="M12 22s7-3.5 7-10V5l-7-3-7 3v7c0 6.5 7 10 7 10Z"/><path d="M9 12l2 2 4-5"/>`,
    wind: `<path d="M3 8h12a3 3 0 1 0-3-3"/><path d="M4 13h15a3 3 0 1 1-3 3"/><path d="M3 18h8"/>`,
    target: `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M22 12h-3"/><path d="M12 22v-3"/><path d="M2 12h3"/>`,
    coin: `<circle cx="12" cy="12" r="8"/><path d="M9 12h6"/><path d="M12 8v8"/>`,
    chevronLeft: `<path d="m15 18-6-6 6-6"/>`,
    chevronRight: `<path d="m9 18 6-6-6-6"/>`,
    skull: `<path d="M8 15h8"/><path d="M9 19v-4"/><path d="M15 19v-4"/><path d="M12 19v-4"/><path d="M5 11a7 7 0 1 1 14 0v4H5v-4Z"/><circle cx="9" cy="11" r="1"/><circle cx="15" cy="11" r="1"/>`,
    cup: `<path d="M6 4h11v6a5.5 5.5 0 0 1-11 0V4Z"/><path d="M17 6h2a2 2 0 0 1 0 4h-2"/><path d="M8 21h8"/><path d="M12 15v6"/>`,
    crown: `<path d="m3 8 4 4 5-7 5 7 4-4-2 11H5L3 8Z"/><path d="M7 19h10"/>`,
    circle: `<circle cx="12" cy="12" r="8"/>`,
    camera: `<path d="M4 8h3l1.6-2h6.8L17 8h3v11H4V8Z"/><circle cx="12" cy="13.5" r="3.2"/><path d="M7 11h.01"/>`,
  };
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.circle}</svg>`;
}

function realmMeter() {
  const current = realms[state.currentRealm];
  const next = realms[state.currentRealm + 1];
  if (!next) return `<div class="meter-row"><span>자연경</span><span>더 오를 곳이 없습니다</span></div><div class="meter"><span style="--value:100%"></span></div>`;
  const prev = current.required;
  const percent = Math.max(0, Math.min(100, ((state.totalInnerPower - prev) / (next.required - prev)) * 100));
  return `
    <div class="meter-row"><span>${current.name}</span><span>${state.totalInnerPower}/${next.required} 누적 내공</span></div>
    <div class="meter"><span style="--value:${percent}%"></span></div>
  `;
}

function renderQuest(q) {
  return `
    <article class="quest-card ${q.completed ? "done" : ""}">
      <div class="quest-top">
        <div>
          <p class="quest-title">${q.title}</p>
          <div class="tags">
            <span class="tag">${questCategoryLabel(q.category)}</span>
            <span class="tag">${questDifficultyLabel(q.difficulty)}</span>
          </div>
        </div>
        <span class="pill">${q.completed ? "수련 완료" : "대기"}</span>
      </div>
      <div class="reward">내공 +${getQuestRewardPreview(q)}</div>
      <div class="quest-actions">
        <button class="primary-btn" data-complete="${q.id}" ${q.completed ? "disabled" : ""}>완료</button>
      </div>
    </article>
  `;
}

function questCategoryLabel(category) {
  if (category === "language") return "어학 수련";
  if (category === "diet") return "식단 수련";
  return {
    study: "깨달음 수련",
    exercise: "신체 수련",
    health: "기혈 관리",
    mind: "절제 수련",
    reading: "비급 해석",
  }[category] || "수련";
}

function questDifficultyLabel(difficulty) {
  return {
    easy: "쉬움",
    normal: "보통",
    hard: "어려움",
    extreme: "매우 어려움",
  }[difficulty] || "보통";
}

function renderArts() {
  if (!state.currentSectId || state.pendingSectRespec) return renderSectSelect();
  const sect = getUserSect();
  const sectArts = getSectMartialArts(sect.id);
  const equipped = getEquippedArts();
  const battleStats = calculateBattleStatsFromMartialArts(state);
  const growthPanel = renderMartialGrowthPanel();
  return `
    ${renderMartialCommandPanel({ sect, sectArts, equipped, battleStats })}
    ${growthPanel}
    <section class="panel martial-loadout-panel">
      <div class="section-head">
        <div>
          <p class="eyebrow">장착 무공</p>
          <h2>지금 쓰는 초식</h2>
        </div>
        <span class="pill">보유 내공 ${state.innerPower}</span>
      </div>
      <div class="equipped-grid">
        ${["attack", "mind", "step"].map((slot) => `
          <div class="equipped-slot">
            <span>${slotLabel(slot)}</span>
            <strong>${equipped[slot]?.name || "비어 있음"}</strong>
          </div>
        `).join("")}
      </div>
      <div class="stats-grid compact">
        ${stat("공격", battleStats.attack)}
        ${stat("방어", battleStats.defense)}
        ${stat("회피", battleStats.evasion)}
      </div>
    </section>
    ${renderSectInfoPanel(sect)}
    <details class="martial-detail-section">
      <summary>
        <strong>핵심 무공</strong>
        <span>${sectArts.length}개 · 강화/습득 상세</span>
      </summary>
      <section class="martial-tree">
        ${sectArts.map(renderMartialArtNode).join("")}
      </section>
    </details>
  `;
}

function renderSectInfoPanel(sect) {
  return `
    <details class="sect-info-detail">
      <summary>
        <strong>${sect.name} 정보</strong>
        <span>사문 전향 가능</span>
      </summary>
      <section class="panel sect-panel">
        ${sect.image ? `<div class="sect-banner"><img src="${sect.image}" alt="${sect.name} 대표 이미지" /></div>` : ""}
        <div class="tags">${sect.traits.map((trait) => `<span class="tag">${trait}</span>`).join("")}</div>
        <div class="sect-meta">
          <div><span class="section-label">대표 무공</span><p>${sect.signature.join(", ")}</p></div>
          <div><span class="section-label">추천</span><p>${sect.recommend}</p></div>
          <div><span class="section-label">현실 연결</span><p>${sect.questLink}</p></div>
        </div>
        <div class="sect-respec-callout">
          <div>
            <span class="section-label">사문 변경</span>
            <p>경지와 내공 유지</p>
          </div>
          <button class="mini-btn sect-respec-btn" data-respec>사문 전향</button>
        </div>
      </section>
    </details>
  `;
}

function renderSectSelect() {
  return `
    <section class="panel">
      <p class="eyebrow">${state.pendingSectRespec ? "문파 재선택" : "사문 선택"}</p>
      <h2>${state.pendingSectRespec ? "새로운 길을 고르십시오" : "어느 문으로 들어서겠습니까?"}</h2>
      <p class="muted">사문은 무공 계보와 성장 방향을 정합니다. 경지와 내공은 당신의 본질적인 성장으로 남습니다.</p>
    </section>
    <section class="sect-select-grid">
      ${sects.map((sect) => `
        <article class="sect-card ${sect.playable ? "" : "locked"}">
          ${sect.image ? `<div class="sect-card-image"><img src="${sect.image}" alt="${sect.name} 대표 이미지" /></div>` : ""}
          <div class="realm-card-head">
            <strong>${sect.name}</strong>
            <span class="pill">${sect.playable ? "선택 가능" : "추후 해금"}</span>
          </div>
          <p>${sect.summary}</p>
          ${sect.playable ? `
            <div class="tags">${sect.traits.map((trait) => `<span class="tag">${trait}</span>`).join("")}</div>
            <dl>
              <div><dt>추천</dt><dd>${sect.recommend}</dd></div>
              <div><dt>장점</dt><dd>${sect.strengths}</dd></div>
              <div><dt>단점</dt><dd>${sect.weakness}</dd></div>
              <div><dt>대표 무공</dt><dd>${sect.signature.join(", ")}</dd></div>
            </dl>
            <button class="primary-btn" data-select-sect="${sect.id}">${sect.name} 입문</button>
          ` : `<div class="empty">강호의 인연이 아직 닿지 않았습니다.</div>`}
        </article>
      `).join("")}
    </section>
  `;
}

function renderMartialCommandPanel({ sect, sectArts, equipped, battleStats }) {
  const ownedArts = sectArts.filter((martialArt) => state.ownedMartialArts[martialArt.id]);
  const totalLevels = ownedArts.reduce((sum, martialArt) => sum + (state.ownedMartialArts[martialArt.id]?.level || 0), 0);
  const maxLevels = sectArts.reduce((sum, martialArt) => sum + martialArt.maxLevel, 0) || 1;
  const progress = Math.round((totalLevels / maxLevels) * 100);
  const upgradeCount = getAvailableArtUpgrades().length;
  const purchaseCount = getAvailableArtPurchases().length;
  const nextGoal = getNextLockedMartialGoal();
  return `
    <section class="panel martial-command-panel">
      <div class="martial-command-head">
        <div class="martial-command-copy">
          <p class="eyebrow">무공 수련</p>
          <h2>${sect.name}의 무공을 익히는 중입니다</h2>
        </div>
        ${sect.image ? `
          <figure class="martial-command-portrait">
            <img src="${sect.image}" alt="${sect.name} 대표 이미지" />
            <figcaption>${sect.name}</figcaption>
          </figure>
        ` : ""}
      </div>
      <div class="martial-command-grid">
        <div>
          <span>보유 내공</span>
          <strong>${state.innerPower}</strong>
        </div>
        <div>
          <span>무공 숙련</span>
          <strong>${progress}%</strong>
        </div>
        <div>
          <span>즉시 성장</span>
          <strong>${upgradeCount + purchaseCount}개</strong>
        </div>
      </div>
      <div class="meter martial-command-meter"><span style="--value:${progress}%"></span></div>
      <div class="martial-command-loadout">
        ${["attack", "mind", "step"].map((slot) => `
          <div>
            <span>${slotLabel(slot)}</span>
            <strong>${equipped[slot]?.name || "미장착"}</strong>
          </div>
        `).join("")}
      </div>
      <div class="martial-command-foot">
        <span>${nextGoal ? `다음 목표: ${nextGoal.name} · ${nextGoal.reason}` : "현재 문파 무공은 충분히 정돈되어 있습니다."}</span>
        <span>공격 ${battleStats.attack} · 방어 ${battleStats.defense} · 회피 ${battleStats.evasion}</span>
      </div>
    </section>
  `;
}

function renderMartialGrowthPanel() {
  const upgrades = getAvailableArtUpgrades();
  const purchases = getAvailableArtPurchases();
  const items = [
    ...upgrades.slice(0, 3).map((entry) => ({
      kind: "upgrade",
      id: entry.martialArt.id,
      name: entry.martialArt.name,
      meta: `Lv.${entry.owned.level} -> Lv.${entry.owned.level + 1}`,
      cost: entry.cost,
      effect: entry.martialArt.combatEffect,
    })),
    ...purchases.slice(0, Math.max(0, 3 - upgrades.length)).map((entry) => ({
      kind: "purchase",
      id: entry.martialArt.id,
      name: entry.martialArt.name,
      meta: "새 비급",
      cost: entry.martialArt.purchaseCost,
      effect: entry.martialArt.combatEffect,
    })),
  ].slice(0, 3);
  if (!items.length) {
    const next = getNextLockedMartialGoal();
    return `
      <section class="growth-panel panel quiet">
        <div>
          <p class="eyebrow">성장 추천</p>
          <h2>지금은 내공을 더 쌓을 때입니다</h2>
          <p class="muted">${next ? `${next.name} · ${next.reason}` : "대기"}</p>
        </div>
      </section>
    `;
  }
  return `
    <section class="growth-panel panel">
      <div class="status-head">
        <div>
          <p class="eyebrow">성장 추천</p>
          <h2>즉시 강화 가능</h2>
        </div>
        <span class="pill">${items.length}개 가능</span>
      </div>
      <div class="growth-list">
        ${items.map((item) => `
          <article class="growth-item">
            ${icon(item.kind === "upgrade" ? "swords" : "scroll", "growth-icon")}
            <div>
              <strong>${item.name}</strong>
              <span>${item.meta} · ${item.effect}</span>
            </div>
            <button class="mini-btn" ${item.kind === "upgrade" ? `data-upgrade-art="${item.id}"` : `data-purchase-art="${item.id}"`}>${item.cost} 내공</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function getNextLockedMartialGoal() {
  if (!state.currentSectId) return null;
  const candidates = getSectMartialArts(state.currentSectId).filter((martialArt) => {
    const owned = state.ownedMartialArts[martialArt.id];
    if (!owned) return true;
    return owned.level < martialArt.maxLevel;
  });
  const next = candidates
    .map((martialArt) => {
      const owned = state.ownedMartialArts[martialArt.id];
      const cost = owned ? getMartialArtUpgradeCost(martialArt, owned.level) : martialArt.purchaseCost;
      const realmOk = state.currentRealm >= martialArt.requiredRealm;
      const prereqMissing = martialArt.prerequisites.find((pre) => (state.ownedMartialArts[pre.skillId]?.level || 0) < pre.requiredLevel);
      const reason = !realmOk
        ? `${realms[martialArt.requiredRealm]?.name || "다음 경지"} 이상 필요`
        : prereqMissing
          ? "선행 무공 수련 필요"
          : `내공 ${Math.max(0, cost - state.innerPower)} 더 필요`;
      return { name: martialArt.name, cost, reason };
    })
    .sort((a, b) => a.cost - b.cost)[0];
  return next || null;
}

function renderMartialArtNode(martialArt) {
  const owned = getOwnedArt(martialArt.id);
  const level = owned?.level || 0;
  const purchase = canPurchaseMartialArt(state, martialArt);
  const upgrade = canUpgradeMartialArt(state, martialArt);
  const status = owned ? "보유" : purchase.ok ? "비급 해금" : "비급 봉인";
  const nextUpgradeCost = owned
    ? level < martialArt.maxLevel
      ? getMartialArtUpgradeCost(martialArt, level)
      : null
    : getMartialArtUpgradeCost(martialArt, 1);
  return `
    <article class="martial-node tier-${martialArt.tier} ${owned ? "owned" : ""} ${purchase.ok && !owned ? "available" : ""} ${upgrade.ok ? "upgrade-ready" : ""}">
      <div class="realm-card-head">
        <strong>${martialArt.name}</strong>
        <span class="pill">${status}</span>
      </div>
      <div class="tags">
        <span class="tag">${martialArt.type}</span>
        <span class="tag">핵심 ${martialArt.type}</span>
        <span class="tag">Lv.${level}/${martialArt.maxLevel}</span>
      </div>
      <div class="art-level-meter"><span style="--value:${martialArt.maxLevel ? Math.round((level / martialArt.maxLevel) * 100) : 0}%"></span></div>
      <div class="cost-grid">
        <div><span>비급 구입</span><strong>${owned ? "보유 중" : `${martialArt.purchaseCost} 내공`}</strong></div>
        <div><span>${owned ? "다음 강화" : "첫 강화"}</span><strong>${nextUpgradeCost ? `${nextUpgradeCost} 내공` : "최대"}</strong></div>
      </div>
      <details class="martial-node-detail">
        <summary>상세</summary>
        <p>${martialArt.description}</p>
        <dl>
          <div><dt>효과</dt><dd>${martialArt.combatEffect}</dd></div>
          <div><dt>조건</dt><dd>${describeArtRequirement(martialArt)}</dd></div>
        </dl>
      </details>
      <div class="quest-actions">
        ${owned ? `
          <button class="mini-btn" data-equip-art="${martialArt.id}">주력 무공 지정</button>
          <button class="primary-btn" data-upgrade-art="${martialArt.id}" ${upgrade.ok ? "" : "disabled"}>${upgrade.ok ? `무공 수련 · ${getMartialArtUpgradeCost(martialArt, level)} 내공` : upgrade.reason}</button>
        ` : `
          <button class="primary-btn" data-purchase-art="${martialArt.id}" ${purchase.ok ? "" : "disabled"}>${purchase.ok ? `비급 구입 · ${martialArt.purchaseCost} 내공` : purchase.reason}</button>
        `}
      </div>
    </article>
  `;
}

function getSect(sectId) {
  return sects.find((sect) => sect.id === sectId);
}

function getUserSect() {
  return getSect(state.currentSectId);
}

function getSectMotif(sectId = state.currentSectId) {
  return sectMotifs[sectId] || sectMotifs.hwasan;
}

function getSectMartialArts(sectId) {
  return martialArtsData.filter((martialArt) => martialArt.sectId === sectId && coreMartialArtIds.includes(martialArt.id));
}

function hasAnyCoreSectArt(userData, sectId) {
  return getSectMartialArts(sectId).some((martialArt) => userData.ownedMartialArts?.[martialArt.id]);
}

function getMartialArt(artId) {
  return martialArtsData.find((martialArt) => martialArt.id === artId);
}

function getOwnedArt(artId) {
  return state.ownedMartialArts[artId];
}

function selectSect(sectId) {
  state.currentSectId = sectId;
  state.primaryArt = getSect(sectId)?.signature?.[0] || "";
  state.sectContribution[sectId] = state.sectContribution[sectId] || 0;
  grantBasicSectMartialArts(state, sectId);
}

function grantBasicSectMartialArts(userData, sectId) {
  const basics = getSectMartialArts(sectId).filter((martialArt) => martialArt.tier === 1).slice(0, 2);
  basics.forEach((martialArt) => {
    if (!userData.ownedMartialArts[martialArt.id]) {
      userData.ownedMartialArts[martialArt.id] = { level: 1, spentSilver: 0 };
    }
  });
  autoEquipSectArts(userData, sectId);
}

function autoEquipSectArts(userData, sectId) {
  const owned = getSectMartialArts(sectId).filter((martialArt) => userData.ownedMartialArts[martialArt.id]);
  userData.equippedMartialArts = {
    attack: owned.find((artItem) => ["검법", "권법", "장법"].includes(artItem.type))?.id || "",
    mind: owned.find((artItem) => artItem.type === "심법")?.id || "",
    step: owned.find((artItem) => artItem.type === "경공")?.id || "",
  };
}

function getEquippedArts() {
  return Object.fromEntries(
    Object.entries(state.equippedMartialArts || {}).map(([slot, artId]) => [slot, getMartialArt(artId)])
  );
}

function getAvailableArtUpgrades() {
  if (!state.currentSectId) return [];
  return getSectMartialArts(state.currentSectId)
    .filter((martialArt) => state.ownedMartialArts[martialArt.id])
    .map((martialArt) => {
      const owned = state.ownedMartialArts[martialArt.id];
      const cost = getMartialArtUpgradeCost(martialArt, owned.level);
      const upgrade = canUpgradeMartialArt(state, martialArt);
      return { martialArt, owned, cost, upgrade };
    })
    .filter((entry) => entry.upgrade.ok)
    .sort((a, b) => a.cost - b.cost);
}

function getAvailableArtPurchases() {
  if (!state.currentSectId) return [];
  return getSectMartialArts(state.currentSectId)
    .filter((martialArt) => !state.ownedMartialArts[martialArt.id])
    .map((martialArt) => ({ martialArt, purchase: canPurchaseMartialArt(state, martialArt) }))
    .filter((entry) => entry.purchase.ok)
    .sort((a, b) => a.martialArt.purchaseCost - b.martialArt.purchaseCost);
}

function slotLabel(slot) {
  return {
    attack: "주 무공",
    mind: "심법",
    step: "보법",
  }[slot];
}

function describeArtRequirement(martialArt) {
  const requirements = [`경지 ${realms[martialArt.requiredRealm]?.name || "삼류"} 이상`];
  martialArt.prerequisites.forEach((pre) => {
    const requiredArt = getMartialArt(pre.skillId);
    requirements.push(`${requiredArt?.name || "선행 무공"} Lv.${pre.requiredLevel}`);
  });
  return requirements.join(" · ");
}

function canPurchaseMartialArt(userData, martialArt) {
  if (userData.currentSectId !== martialArt.sectId) return { ok: false, reason: "타 문파 비급" };
  if (userData.ownedMartialArts[martialArt.id]) return { ok: false, reason: "이미 보유" };
  if (userData.innerPower < martialArt.purchaseCost) return { ok: false, reason: "내공이 부족합니다" };
  if (userData.currentRealm < martialArt.requiredRealm) return { ok: false, reason: "경지가 부족합니다" };
  const missing = martialArt.prerequisites.find((pre) => (userData.ownedMartialArts[pre.skillId]?.level || 0) < pre.requiredLevel);
  if (missing) return { ok: false, reason: "선행 무공이 부족합니다" };
  return { ok: true, reason: "" };
}

function purchaseMartialArt(userData, martialArtId) {
  const martialArt = getMartialArt(martialArtId);
  const check = canPurchaseMartialArt(userData, martialArt);
  if (!check.ok) {
    showToast(check.reason === "내공이 부족합니다" ? "내공이 부족합니다. 더 많은 수련을 통해 내공을 쌓으십시오." : check.reason);
    return;
  }
  userData.innerPower -= martialArt.purchaseCost;
  userData.spentSilverOnMartialArts += martialArt.purchaseCost;
  userData.ownedMartialArts[martialArt.id] = { level: 1, spentSilver: martialArt.purchaseCost };
  autoEquipSectArts(userData, martialArt.sectId);
  addRecord("비급 구입", `${martialArt.name}의 첫 장을 펼쳤습니다. 새로운 무공의 길이 열립니다.`);
  saveState();
  showToast("낡은 비급의 첫 장을 펼쳤습니다.");
  render();
}

function canUpgradeMartialArt(userData, martialArt) {
  const owned = userData.ownedMartialArts[martialArt.id];
  if (!owned) return { ok: false, reason: "비급 미보유" };
  if (owned.level >= martialArt.maxLevel) return { ok: false, reason: "최대 경지" };
  if (userData.currentRealm < martialArt.requiredRealm) return { ok: false, reason: "경지 부족" };
  const cost = getMartialArtUpgradeCost(martialArt, owned.level);
  if (userData.innerPower < cost) return { ok: false, reason: "내공 부족" };
  return { ok: true, reason: "" };
}

function upgradeMartialArt(userData, martialArtId) {
  const martialArt = getMartialArt(martialArtId);
  const check = canUpgradeMartialArt(userData, martialArt);
  if (!check.ok) {
    showToast(check.reason === "내공 부족" ? "내공이 부족합니다. 더 많은 수련을 통해 내공을 쌓으십시오." : check.reason);
    return;
  }
  const owned = userData.ownedMartialArts[martialArtId];
  const cost = getMartialArtUpgradeCost(martialArt, owned.level);
  userData.innerPower -= cost;
  userData.spentSilverOnMartialArts += cost;
  owned.spentSilver += cost;
  owned.level += 1;
  addRecord("무공 수련", `${martialArt.name}이 Lv.${owned.level}에 올랐습니다. 초식의 흐름이 한층 또렷해졌습니다.`);
  saveState();
  showToast("수련 끝에 초식의 흐름이 한층 또렷해졌습니다.");
  render();
}

function getMartialArtUpgradeCost(martialArt, currentLevel = 1) {
  return martialArt.upgradeBaseCost * Math.max(1, currentLevel) * martialArt.tier;
}

function equipMartialArt(martialArtId) {
  const martialArt = getMartialArt(martialArtId);
  if (!martialArt || !state.ownedMartialArts[martialArtId]) return;
  const slot = ["검법", "권법", "장법"].includes(martialArt.type)
    ? "attack"
    : martialArt.type === "심법"
      ? "mind"
      : "step";
  state.equippedMartialArts[slot] = martialArtId;
  saveState();
  showToast(`${martialArt.name}을 주력 무공으로 지정했습니다.`);
  render();
}

function calculateSectBonuses(userData) {
  const sect = getSect(userData.currentSectId);
  const totalLevel = Object.values(userData.ownedMartialArts || {}).reduce((sum, owned) => sum + (owned.level || 0), 0);
  return { sectName: sect?.name || "무소속", totalLevel };
}

function calculateBattleStatsFromMartialArts(userData) {
  const stats = { attack: 0, defense: 0, evasion: 0, inner: 0 };
  Object.entries(userData.ownedMartialArts || {}).forEach(([artId, owned]) => {
    if (!coreMartialArtIds.includes(artId)) return;
    const martialArt = getMartialArt(artId);
    if (!martialArt) return;
    const level = owned.level || 0;
    if (["검법", "도법"].includes(martialArt.type)) stats.attack += level * 2;
    if (["권법", "장법", "외공"].includes(martialArt.type)) stats.defense += level * 2;
    if (martialArt.type === "심법") stats.inner += level * 3;
    if (martialArt.type === "경공") stats.evasion += level * 2;
    if (martialArt.type === "궁극기") stats.attack += level * 5;
  });
  return stats;
}

function calculateRespecCost(userData) {
  return userData.respecCount === 0 ? 0 : 200 * userData.respecCount;
}

function calculateMartialArtsRefund(userData) {
  return Math.floor(calculateCurrentSectMartialArtsSpent(userData) * 0.5);
}

function calculateCurrentSectMartialArtsSpent(userData) {
  const currentSectId = userData.currentSectId;
  return Object.entries(userData.ownedMartialArts || {}).reduce((sum, [artId, owned]) => {
    const martialArt = getMartialArt(artId);
    return martialArt?.sectId === currentSectId ? sum + (owned.spentSilver || 0) : sum;
  }, 0);
}

function canRespecSect(userData) {
  return userData.innerPower >= calculateRespecCost(userData);
}

function resetCurrentSectMartialArts(userData) {
  const currentSectId = userData.currentSectId;
  Object.keys(userData.ownedMartialArts || {}).forEach((artId) => {
    const martialArt = getMartialArt(artId);
    if (martialArt?.sectId === currentSectId) {
      delete userData.ownedMartialArts[artId];
    }
  });
  delete userData.sectContribution[currentSectId];
  userData.equippedMartialArts = {};
}

function refundMartialArtsSilver(userData) {
  const spent = calculateCurrentSectMartialArtsSpent(userData);
  const refund = calculateMartialArtsRefund(userData);
  userData.innerPower += refund;
  userData.spentSilverOnMartialArts = Math.max(0, userData.spentSilverOnMartialArts - spent);
  return refund;
}

function startSectRespec(userData) {
  if (!userData.currentSectId) return;
  showRespecModal(userData);
}

function completeSectRespec(userData, newSectId) {
  const sect = getSect(newSectId);
  if (!sect?.playable) return;
  selectSect(newSectId);
  userData.pendingSectRespec = false;
  addRecord("사문 선택", `오늘부터 당신은 ${sect.name}의 길을 걷습니다.`);
  saveState();
  showToast(state.respecCount > 0 ? "낡은 검로를 내려놓고 새로운 길에 들어섰습니다." : `오늘부터 당신은 ${sect.name}의 문하입니다.`);
  render();
}

function incrementRespecCount(userData) {
  userData.respecCount += 1;
}

function showRespecModal(userData) {
  const sect = getUserSect();
  const cost = calculateRespecCost(userData);
  const refund = calculateMartialArtsRefund(userData);
  const spent = calculateCurrentSectMartialArtsSpent(userData);
  const enough = canRespecSect(userData);
  const wrap = document.createElement("div");
  wrap.className = "modal-backdrop";
  wrap.innerHTML = `
    <section class="modal respec-modal">
      <h2>사문을 떠나시겠습니까?</h2>
      <p>문파의 비급과 익힌 초식은 내려놓게 됩니다. 그러나 당신의 경지와 내공, 수련의 흔적은 사라지지 않습니다.</p>
      <div class="respec-summary">
        <div><span>현재 문파</span><strong>${sect.name}</strong></div>
        <div><span>전향 비용</span><strong>${cost === 0 ? "무료" : `${cost} 내공`}</strong></div>
        <div><span>투자 내공</span><strong>${spent} 내공</strong></div>
        <div><span>환급 내공</span><strong>${refund} 내공</strong></div>
        <div><span>유지 내공</span><strong>${userData.innerPower} 내공</strong></div>
        <div><span>현재 경지</span><strong>${realms[userData.currentRealm]?.name || "미정"}</strong></div>
      </div>
      <div class="respec-lists">
        <div>
          <span class="section-label">초기화</span>
          <p>현재 문파 무공, 무공 레벨, 투자 내공, 문파 공헌도, 장착 무공이 초기화됩니다.</p>
        </div>
        <div>
          <span class="section-label">유지</span>
          <p>사용자 이름, 경지, 현재 내공, 총 누적 내공, 칭호, 퀘스트 기록, 수련 기록은 유지됩니다.</p>
        </div>
      </div>
      <p class="daily-word">${enough ? "경지는 사라지지 않습니다. 다만, 검의 방향이 달라졌을 뿐입니다." : "전향에 필요한 내공이 부족합니다. 더 많은 수련을 통해 내공을 쌓으십시오."}</p>
      <div class="modal-actions">
        <button class="ghost-btn" data-close-modal>아직 때가 아니다</button>
        <button class="primary-btn" data-confirm-respec ${enough ? "" : "disabled"}>사문을 떠난다</button>
      </div>
    </section>
  `;
  document.body.appendChild(wrap);
  wrap.querySelector("[data-close-modal]").addEventListener("click", () => wrap.remove());
  wrap.querySelector("[data-confirm-respec]")?.addEventListener("click", () => {
    if (!canRespecSect(userData)) {
      showToast("전향에 필요한 내공이 부족합니다. 더 많은 수련을 통해 내공을 쌓으십시오.");
      return;
    }
    const paidCost = calculateRespecCost(userData);
    userData.innerPower -= paidCost;
    const paidRefund = refundMartialArtsSilver(userData);
    const oldSect = getUserSect();
    resetCurrentSectMartialArts(userData);
    userData.currentSectId = null;
    userData.primaryArt = "";
    userData.pendingSectRespec = true;
    incrementRespecCount(userData);
    addRecord("사문 전향", `${oldSect.name}을 떠났습니다. 전향 비용 ${paidCost}, 환급 ${paidRefund} 내공.`);
    saveState();
    wrap.remove();
    showToast("경지는 사라지지 않습니다. 다만, 검의 방향이 달라졌을 뿐입니다.");
    render();
  });
}

function getCurrentSect(userData) {
  return getSect(userData.currentSectId);
}

function getOwnedMartialArtsBySect(userData, sectId) {
  return getSectMartialArts(sectId).filter((martialArt) => userData.ownedMartialArts[martialArt.id]);
}

function getMartialArtLevel(userData, martialArtId) {
  return userData.ownedMartialArts[martialArtId]?.level || 0;
}

function getMartialArtProficiency() {
  return 0;
}

function renderRealm() {
  const current = realms[state.currentRealm];
  const next = realms[state.currentRealm + 1];
  const breakthroughReady = canBreakthrough();
  const currentRequired = current.required || 0;
  const nextRequired = next?.required || currentRequired;
  const realmProgress = next ? Math.max(0, Math.min(100, Math.round(((state.totalInnerPower - currentRequired) / Math.max(1, nextRequired - currentRequired)) * 100))) : 100;
  const remaining = next ? Math.max(0, next.required - state.totalInnerPower) : 0;
  return `
    ${renderRealmProgressPanel({ current, next, breakthroughReady, realmProgress, remaining })}
    ${renderRealmPathPanel()}
    <details class="realm-dex-detail realm-current-detail">
      <summary>
        <strong>현재 경지 해석</strong>
        <span>${current.name} · ${breakthroughReady ? "돌파 가능" : `${remaining} 내공 남음`}</span>
      </summary>
      <section class="panel realm-hero ${breakthroughReady ? "breakthrough-ready" : ""}">
        <div class="status-head">
          <div>
            <p class="eyebrow">현재 경지</p>
            <h2>${current.name}</h2>
          </div>
          <span class="pill">누적 내공 ${state.totalInnerPower}</span>
        </div>
        ${realmMeter()}
        <div class="realm-detail-grid">
          <div>
            <span class="section-label">특징</span>
            <p>${current.feature}</p>
          </div>
          <div>
            <span class="section-label">일격 위력</span>
            <p>${current.power}</p>
          </div>
          <div>
            <span class="section-label">현대 무기 비교</span>
            <p>${current.weapon}</p>
          </div>
        </div>
        ${breakthroughReady ? `<div class="breakthrough-callout">단전의 기운이 가득 찼습니다. 지금 경지 돌파가 가능합니다.</div>` : ""}
        <button class="primary-btn breakthrough-btn" data-breakthrough ${!breakthroughReady ? "disabled" : ""}>경지 돌파</button>
      </section>
    </details>
    <details class="realm-dex-detail">
      <summary>
        <strong>경지 도감</strong>
        <span>표 기준 ${realms.length}단계</span>
      </summary>
      <section class="realm-list">
        ${realms.map((realm, index) => `
          <div class="realm-card ${index === state.currentRealm ? "current" : ""} ${index > state.currentRealm ? "locked" : ""}">
            <div class="realm-card-head">
              <strong>${realm.name}</strong>
              <span class="pill">${index <= state.currentRealm ? "개방" : "봉인"} · ${realm.required} 내공</span>
            </div>
            <p>${realm.feature}</p>
            <dl>
              <div>
                <dt>일격 위력</dt>
                <dd>${realm.power}</dd>
              </div>
              <div>
                <dt>현대 무기 비교</dt>
                <dd>${realm.weapon}</dd>
              </div>
            </dl>
          </div>
        `).join("")}
      </section>
    </details>
  `;
}

function renderRealmPathPanel() {
  const startIndex = Math.max(0, state.currentRealm - 1);
  const visibleRealms = realms.slice(startIndex, Math.min(realms.length, state.currentRealm + 4));
  return `
    <section class="panel realm-path-panel">
      <div class="status-head">
        <div>
          <p class="eyebrow">경지 여정</p>
          <h2>다음 산맥</h2>
        </div>
        <span class="pill">${state.currentRealm + 1}/${realms.length}</span>
      </div>
      <div class="realm-path-track">
        ${visibleRealms.map((realm, offset) => {
          const index = startIndex + offset;
          const nextRealm = realms[index + 1];
          const segmentProgress = nextRealm
            ? Math.max(0, Math.min(100, Math.round(((state.totalInnerPower - realm.required) / Math.max(1, nextRealm.required - realm.required)) * 100)))
            : 100;
          const stateClass = index < state.currentRealm ? "passed" : index === state.currentRealm ? "current" : "locked";
          return `
            <article class="realm-path-step ${stateClass}">
              <span>${index + 1}</span>
              <strong>${realm.name}</strong>
              <small>${index <= state.currentRealm ? "개방" : `${Math.max(0, realm.required - state.totalInnerPower)} 내공 필요`}</small>
              ${index === state.currentRealm && nextRealm ? `<div class="meter realm-step-meter"><span style="--value:${segmentProgress}%"></span></div>` : ""}
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderRealmProgressPanel({ current, next, breakthroughReady, realmProgress, remaining }) {
  const todayPower = getTodayInnerPowerSummary();
  const lastRealm = realms[realms.length - 1];
  const totalProgress = Math.max(0, Math.min(100, Math.round((state.totalInnerPower / Math.max(1, lastRealm.required)) * 100)));
  return `
    <section class="panel realm-command-panel ${breakthroughReady ? "ready" : ""}">
      <div class="realm-command-top">
        <div>
          <p class="eyebrow">경지 성장</p>
          <h2>${current.name}</h2>
        </div>
        <div class="realm-ring" style="--value:${realmProgress}%">
          <strong>${realmProgress}%</strong>
          <span>${next ? "다음 경지" : "완성"}</span>
        </div>
      </div>
      <figure class="realm-command-vignette" aria-hidden="true">
        <img src="assets/ui/realm-vignette.jpg" alt="" />
      </figure>
      <div class="realm-command-stats">
        <div><span>총 누적 내공</span><strong>${state.totalInnerPower}</strong></div>
        <div><span>오늘 획득</span><strong>+${todayPower.earned}</strong></div>
        <div><span>보유 내공</span><strong>${state.innerPower}</strong></div>
      </div>
      <div class="meter realm-total-meter"><span style="--value:${totalProgress}%"></span></div>
      <div class="realm-command-foot">
        <span>전체 경지 여정 ${totalProgress}%</span>
        <span>${breakthroughReady ? "지금 돌파할 수 있습니다" : next ? "오늘 수련으로 단전을 더 채우세요" : "더 높은 경지는 아직 없습니다"}</span>
      </div>
      ${breakthroughReady ? `<button class="primary-btn breakthrough-btn realm-command-breakthrough" data-breakthrough>경지 돌파</button>` : ""}
    </section>
  `;
}

function renderRecordsDashboard() {
  const data = getRecordsDashboardData();
  const isEmpty = !data.latestWeight && !state.dailyHistory.length;
  return `
    <section class="records-hero panel">
      <div>
        <p class="eyebrow">변화 기록</p>
        <h2>${data.changeTitle}</h2>
      </div>
    </section>
    ${isEmpty ? renderRecordsEmptyStart() : ""}
    ${renderRecordsFocusPanel(data)}
    ${renderRecordsInsightDetail(data)}
    <details class="mobile-secondary-detail records-chart-detail">
      <summary>
        <strong>차트 보기</strong>
        <span>체중 · 수련 · 내공</span>
      </summary>
      <section class="records-chart-grid mobile-detail-body">
        <article class="panel record-chart-card">
          <div class="section-head">
            <h2>최근 체중 흐름</h2>
            <span class="muted">${data.weightPoints.length}개 기록</span>
          </div>
          ${renderWeightTrendChart(data.weightPoints)}
        </article>
        <article class="panel record-chart-card">
          <div class="section-head">
            <h2>7일 수련 완료율</h2>
            <span class="muted">일별 완료율</span>
          </div>
          ${renderTrainingBars(data.weeklyTraining)}
        </article>
        <article class="panel record-chart-card">
          <div class="section-head">
            <h2>7일 내공 획득</h2>
            <span class="muted">수련 보상 합계</span>
          </div>
          ${renderInnerPowerBars(data.weeklyTraining)}
        </article>
      </section>
    </details>
    <section class="record-detail-stack">
      ${renderRecordDetailSection("기록 건강도", `${data.health.score}점 · ${data.health.grade}`, renderRecordHealthPanel(data))}
      ${renderRecordDetailSection("앱 설치", getInstallStatus().label, renderInstallPanel())}
      ${renderRecordDetailSection("몸 변화 사진", `${state.bodyPhotos.length}장`, renderBodyPhotoRecords())}
      ${renderRecordDetailSection("백업과 초기화", data.health.backupLabel, renderDataSafetyPanel())}
      ${renderRecordDetailSection("최근 행적", `${state.dailyHistory.length}개`, renderRecordLogPanel())}
      ${renderRecordDetailSection("칭호", `${state.titles.length}/${titles.length}`, renderTitlePanel())}
    </section>
  `;
}

function renderRecordsInsightDetail(data) {
  return `
    <details class="record-detail-section records-insight-detail">
      <summary>
        <strong>변화 결산</strong>
        <span>${data.totalWeightDeltaText} · ${data.goal.progressLabel || data.goal.badge}</span>
      </summary>
      <div class="record-detail-body">
        <section class="records-insight-panel">
          <div class="records-insight-main">
            <p class="eyebrow">변화 결산</p>
            <h2>${data.changeTitle}</h2>
            <p>${data.changeMessage}</p>
          </div>
          <div class="records-insight-cards">
            <article>
              <span>시작 대비</span>
              <strong>${data.totalWeightDeltaText}</strong>
              <small>${data.weightRecordCount}회 기록</small>
            </article>
            <article>
              <span>목표 진행</span>
              <strong>${data.goal.progressLabel || data.goal.badge}</strong>
              <small>${data.goal.message}</small>
            </article>
            <article>
              <span>7일 기록력</span>
              <strong>${data.weekWeightRecords}/7</strong>
              <small>체중 ${data.weekWeightRecords}일 · 수련 ${data.completedDays}일</small>
            </article>
          </div>
          <div class="records-insight-meter meter">
            <span style="--value:${data.goal.progress || 0}%"></span>
          </div>
        </section>
      </div>
    </details>
  `;
}

function renderRecordsFocusPanel(data) {
  const nextAction = getRecordsNextAction(data);
  const goalLabel = state.targetWeight
    ? data.goal.badge
    : "목표 없음";
  return `
    <section class="panel records-focus-panel">
      <div class="records-focus-copy">
        <p class="eyebrow">이번 주 흐름</p>
        <h2>${data.changeMessage}</h2>
      </div>
      <div class="records-focus-grid">
        <div>
          <span>현재 체중</span>
          <strong>${data.latestWeight ? `${formatWeight(data.latestWeight.weight)}kg` : "-"}</strong>
        </div>
        <div>
          <span>목표 거리</span>
          <strong>${goalLabel}</strong>
        </div>
        <div>
          <span>7일 수련</span>
          <strong>${data.weekAverage}%</strong>
        </div>
        <div>
          <span>연속 수련</span>
          <strong>${data.streak}일</strong>
        </div>
      </div>
      <div class="records-focus-action">
        <div>
          <span class="section-label">다음 보강</span>
          <p>${nextAction.text}</p>
        </div>
        <button class="mini-btn" data-tab="${nextAction.tab}">${nextAction.label}</button>
      </div>
    </section>
  `;
}

function getRecordsNextAction(data) {
  const todayKey = formatDateKey(new Date());
  const todayTraining = getTrainingSummary(todayKey);
  if (!data.latestWeight || daysBetween(data.latestWeight.date, todayKey) > 0) {
    return { tab: "weight", label: "체중 기록", text: "오늘 체중을 남기면 변화 흐름이 끊기지 않습니다." };
  }
  if (!todayTraining.visited || todayTraining.percent < 100) {
    return { tab: "training", label: "수련 마무리", text: "오늘 수련을 채우면 이번 주 완료율이 올라갑니다." };
  }
  if (!state.bodyPhotos.length) {
    return { tab: "weight", label: "사진 남기기", text: "첫 몸 사진을 남기면 변화가 훨씬 직관적으로 보입니다." };
  }
  if (data.health.backupLabel !== "백업 안정") {
    return { tab: "records", label: "백업 확인", text: "기록이 쌓였으니 백업을 한 번 남겨두는 게 좋습니다." };
  }
  return { tab: "records", label: "칭호 확인", text: "기록 흐름이 안정적입니다. 새로 열린 칭호를 확인해보십시오." };
}

function renderRecordsEmptyStart() {
  return `
    <section class="panel first-action-panel visual-action-panel">
      <img class="action-illustration" src="assets/ui/records-vignette.png" alt="" aria-hidden="true" />
      <div>
        <p class="eyebrow">기록 대기</p>
        <h2>첫 체중과 첫 수련을 남기면 기록이 열립니다</h2>
      </div>
      <div class="first-action-buttons">
        <button class="primary-btn" data-tab="weight">몸무게 기록</button>
        <button class="ghost-btn" data-tab="training">수련하기</button>
      </div>
    </section>
  `;
}

function renderRecordDetailSection(title, meta, content, open = false) {
  return `
    <details class="record-detail-section" ${open ? "open" : ""}>
      <summary>
        <strong>${title}</strong>
        <span>${meta}</span>
      </summary>
      <div class="record-detail-body">
        ${content}
      </div>
    </details>
  `;
}

function getInstallStatus() {
  const standalone = window.matchMedia?.("(display-mode: standalone)")?.matches || window.navigator.standalone;
  if (standalone) return { label: "설치됨", state: "installed" };
  if (installPromptEvent) return { label: "설치 가능", state: "available" };
  if (location.protocol === "file:") return { label: "배포 후 가능", state: "file" };
  return { label: "브라우저 메뉴", state: "manual" };
}

function renderInstallPanel() {
  const status = getInstallStatus();
  const action = status.state === "available"
    ? `<button class="primary-btn" data-install-app>앱으로 설치</button>`
    : status.state === "installed"
      ? `<span class="pill">설치 완료</span>`
      : `<span class="pill">${status.label}</span>`;
  const note = status.state === "file"
    ? "GitHub Pages 같은 배포 주소에서 열면 홈 화면 설치를 사용할 수 있습니다."
    : status.state === "manual"
      ? "브라우저 메뉴의 설치 또는 홈 화면 추가를 사용할 수 있습니다."
      : status.state === "installed"
        ? "이 기기에서 앱처럼 실행 중입니다."
        : "설치하면 주소창 없이 앱처럼 열 수 있습니다.";
  return `
    <section class="panel app-install-panel">
      <div>
        <p class="eyebrow">앱 사용</p>
        <h2>홈 화면에 두고 매일 열기</h2>
        <p class="muted">${note}</p>
      </div>
      ${action}
    </section>
  `;
}

function renderRecordLogPanel() {
  return `
    <section class="panel record-log-panel">
      <section class="records-list compact">
        ${state.dailyHistory.length ? state.dailyHistory.slice().reverse().slice(0, 12).map((record) => `
          <article class="record-item">
            <div class="record-top">
              <strong>${record.type}</strong>
              <span class="muted">${record.date}</span>
            </div>
            <p class="muted">${record.text}</p>
          </article>
        `).join("") : `<div class="empty">아직 기록이 없습니다. 오늘의 수련을 하나 완료하면 첫 행적이 남습니다.</div>`}
      </section>
    </section>
  `;
}

function renderTitlePanel() {
  return `
    <section class="title-list">
      ${titles.map((title) => {
        const unlocked = state.titles.includes(title.id);
        const progress = getTitleProgress(title.id);
        return `
          <article class="title-row ${unlocked ? "unlocked" : "locked"}">
            <div class="record-top">
              <div><strong>${title.name}</strong><span class="muted">${unlocked ? title.condition : progress}</span></div>
              <button class="mini-btn" data-equip="${title.id}" ${!unlocked ? "disabled" : ""}>${state.equippedTitle === title.name ? "장착중" : "장착"}</button>
            </div>
          </article>
        `;
      }).join("")}
    </section>
  `;
}

function renderRecordHealthPanel(data) {
  return `
    <section class="panel record-health-panel">
      <div class="status-head">
        <div>
          <p class="eyebrow">기록 건강도</p>
          <h2>${data.health.score}점 · ${data.health.grade}</h2>
        </div>
        <span class="pill">${data.health.backupLabel}</span>
      </div>
      <div class="record-health-visual">
        <img src="assets/ui/records-vignette.png" alt="" aria-hidden="true" />
        <div>
          <span class="section-label">보관 상태</span>
          <strong>${data.health.grade}</strong>
        </div>
      </div>
      <div class="record-health-meter meter"><span style="--value:${data.health.score}%"></span></div>
      <div class="record-health-grid">
        ${data.health.items.map((item) => `
          <article class="${item.done ? "done" : ""}">
            ${icon(item.iconName)}
            <div>
              <strong>${item.title}</strong>
              <span>${item.text}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderBodyPhotoRecords() {
  const latest = getLatestBodyPhoto();
  const first = getFirstBodyPhoto();
  const recent = getSortedBodyPhotos().slice(0, 6);
  const photoSpanDays = first && latest ? Math.max(0, daysBetween(first.date, latest.date)) : 0;
  const samePhoto = first && latest && first.id === latest.id;
  return `
    <section class="panel body-photo-records">
      <div class="section-head">
        <div>
          <p class="eyebrow">몸 변화 비교</p>
          <h2>${latest ? `${photoSpanDays}일의 변화 기록` : "사진으로 보는 변화"}</h2>
        </div>
        <span class="muted">${state.bodyPhotos.length}장</span>
      </div>
      ${latest ? `
        <div class="body-photo-insight">
          <div>
            <span class="section-label">비교 기준</span>
            <strong>${samePhoto ? "첫 기준 사진이 준비되었습니다" : "첫 기록과 최근 기록을 나란히 비교합니다"}</strong>
            <p>${samePhoto ? "다음 사진을 같은 자세로 남기면 변화가 훨씬 선명해집니다." : `${formatDisplayDate(first.date)}부터 ${formatDisplayDate(latest.date)}까지의 변화입니다.`}</p>
          </div>
          <div class="body-photo-count">
            <strong>${state.bodyPhotos.length}</strong>
            <span>장 보관</span>
          </div>
        </div>
        <div class="body-compare-grid">
          <article class="body-photo-slot has-photo">
            <img src="${first.image}" alt="${formatDisplayDate(first.date)} 첫 몸 사진" />
            <div class="body-photo-caption"><strong>첫 기록</strong><span>${formatDisplayDate(first.date)}</span></div>
          </article>
          <article class="body-photo-slot has-photo">
            <img src="${latest.image}" alt="${formatDisplayDate(latest.date)} 최근 몸 사진" />
            <div class="body-photo-caption"><strong>최근 기록</strong><span>${formatDisplayDate(latest.date)}</span></div>
          </article>
        </div>
        <div class="body-photo-timeline">
          ${recent.map((photo) => `
            <article class="${photo.id === latest.id ? "current" : ""}">
              <img src="${photo.image}" alt="${formatDisplayDate(photo.date)} 몸 사진" />
              <span>${formatDisplayDate(photo.date)}</span>
            </article>
          `).join("")}
        </div>
      ` : `
        <div class="body-photo-empty wide">
          <img class="empty-illustration" src="assets/ui/records-vignette.png" alt="" aria-hidden="true" />
          <strong>아직 몸 사진이 없습니다</strong>
          <span>오늘 탭에서 첫 사진을 남기면 변화 비교가 시작됩니다.</span>
          <button class="primary-btn" data-tab="weight">오늘 사진 남기기</button>
        </div>
      `}
    </section>
  `;
}

function getRecordsDashboardData() {
  const latestWeight = getLatestWeightLog();
  const previousWeight = getPreviousWeightLog(latestWeight);
  const startWeight = getOldestWeightLog();
  const weightDelta = latestWeight && previousWeight ? latestWeight.weight - previousWeight.weight : null;
  const weeklyTraining = getRecentDateKeys(7).map((dateKey) => getTrainingSummary(dateKey));
  const weekAverage = Math.round(weeklyTraining.reduce((sum, log) => sum + (log.percent || 0), 0) / 7);
  const weekInnerPower = weeklyTraining.reduce((sum, log) => sum + (log.earnedInnerPower || 0), 0);
  const completedDays = weeklyTraining.filter((log) => log.visited && log.percent > 0).length;
  const recentDateKeys = getRecentDateKeys(7);
  const weekWeightRecords = new Set(state.weightLogs.filter((entry) => recentDateKeys.includes(entry.date)).map((entry) => entry.date)).size;
  const streak = getTrainingStreak();
  const weightPoints = getWeightTrendPoints(10);
  const headline = latestWeight ? `${formatWeight(latestWeight.weight)}kg의 기록이 쌓이고 있습니다` : "첫 기록을 기다리고 있습니다";
  const health = getRecordHealth({ latestWeight, completedDays, weekAverage });
  const focusTitle = getRecordsFocusTitle({ latestWeight, weekAverage, completedDays, streak });
  const goal = getWeightGoalStatus();
  const totalWeightDelta = latestWeight && startWeight ? latestWeight.weight - startWeight.weight : null;
  const totalWeightDeltaText = totalWeightDelta === null ? "기준 대기" : `${totalWeightDelta > 0 ? "+" : ""}${formatWeight(totalWeightDelta)}kg`;
  const changeTitle = getRecordsChangeTitle({ latestWeight, totalWeightDelta, goal, weekAverage });
  const changeMessage = getRecordsChangeMessage({ latestWeight, totalWeightDelta, goal, weekWeightRecords, completedDays });
  return {
    latestWeight,
    startWeight,
    weightDeltaText: weightDelta === null ? "비교할 이전 기록 없음" : `직전 대비 ${weightDelta > 0 ? "+" : ""}${formatWeight(weightDelta)}kg`,
    totalWeightDelta,
    totalWeightDeltaText,
    weightRecordCount: getWeightTrendPoints(999).length,
    weekWeightRecords,
    weeklyTraining,
    weekAverage,
    weekInnerPower,
    completedDays,
    streak,
    weightPoints,
    goal,
    changeTitle,
    changeMessage,
    headline,
    health,
    focusTitle,
  };
}

function getRecordsChangeTitle({ latestWeight, totalWeightDelta, goal, weekAverage }) {
  if (!latestWeight) return "첫 몸무게를 남기면 변화가 보이기 시작합니다";
  if (goal.progress >= 100) return "목표 체중에 닿았습니다";
  if (totalWeightDelta < -0.1) return `${formatWeight(Math.abs(totalWeightDelta))}kg 감량 흐름이 보입니다`;
  if (totalWeightDelta > 0.1) return "몸의 변화를 다시 조율할 때입니다";
  if (weekAverage >= 70) return "수련 흐름은 단단하게 잡혀 있습니다";
  return "아직 판단보다 기록을 쌓을 구간입니다";
}

function getRecordsChangeMessage({ latestWeight, totalWeightDelta, goal, weekWeightRecords, completedDays }) {
  if (!latestWeight) return "몸무게, 수련, 사진이 쌓이면 이곳에서 변화의 방향을 바로 볼 수 있습니다.";
  if (goal.progress >= 100) return "목표를 달성했습니다. 다음 목표를 다시 잡거나 유지 루틴으로 전환해도 좋습니다.";
  if (weekWeightRecords < 3) return "체중 기록이 주 3회 이상 쌓이면 변화 판단이 훨씬 또렷해집니다.";
  if (completedDays < 3) return "몸무게 기록은 쌓이고 있습니다. 수련을 조금만 더 채우면 흐름이 안정됩니다.";
  if (totalWeightDelta < -0.1) return `${goal.message} 지금처럼 기록과 수련을 같이 이어가면 됩니다.`;
  return `${goal.message} 오늘의 작은 수련부터 다시 흐름을 잡으면 됩니다.`;
}

function getRecordsFocusTitle({ latestWeight, weekAverage, completedDays, streak }) {
  if (!latestWeight && !completedDays) return "첫 기록을 남기면 여정이 시작됩니다";
  if (weekAverage >= 90) return "이번 주 수련 흐름이 매우 단단합니다";
  if (streak >= 7) return "칠일의 검로가 이어지고 있습니다";
  if (completedDays >= 4) return "이번 주는 꾸준함이 보이기 시작했습니다";
  if (latestWeight) return "체중 기준점은 잡혔고, 수련 흐름을 더하면 됩니다";
  return "작은 기록부터 다시 흐름을 잡으면 됩니다";
}

function getRecordHealth({ latestWeight, completedDays, weekAverage }) {
  const hasRecentWeight = latestWeight ? daysBetween(latestWeight.date, formatDateKey(new Date())) <= 3 : false;
  const hasBodyPhoto = state.bodyPhotos.length > 0;
  const hasRecentBackup = state.lastBackupAt ? daysBetween(formatDateKey(new Date(state.lastBackupAt)), formatDateKey(new Date())) <= 7 : false;
  const items = [
    {
      iconName: "scale",
      title: "체중 기준점",
      text: hasRecentWeight ? "최근 3일 안에 기록됨" : "오늘 체중을 남기면 안정",
      done: hasRecentWeight,
      score: 25,
    },
    {
      iconName: "lotus",
      title: "수련 흐름",
      text: completedDays ? `최근 7일 중 ${completedDays}일 기록` : "수련 하나부터 시작",
      done: completedDays >= 3 || weekAverage >= 40,
      score: Math.min(25, Math.round(weekAverage / 4)),
    },
    {
      iconName: "camera",
      title: "몸 변화 사진",
      text: hasBodyPhoto ? `${state.bodyPhotos.length}장 보관 중` : "첫 사진이 필요함",
      done: hasBodyPhoto,
      score: hasBodyPhoto ? 25 : 0,
    },
    {
      iconName: "shield",
      title: "백업",
      text: state.lastBackupAt ? `${formatBackupDate(state.lastBackupAt)} 백업` : "백업 없음",
      done: hasRecentBackup,
      score: hasRecentBackup ? 25 : state.lastBackupAt ? 12 : 0,
    },
  ];
  const score = Math.max(0, Math.min(100, items.reduce((sum, item) => sum + item.score, 0)));
  const grade = score >= 85 ? "안정" : score >= 60 ? "양호" : score >= 35 ? "주의" : "입문";
  const message = score >= 85
    ? "기록, 사진, 백업 흐름이 안정적입니다."
    : score >= 60
      ? "핵심 기록은 쌓이고 있습니다. 사진이나 백업을 보강하면 더 안전합니다."
      : "체중, 수련, 사진, 백업 중 빠진 축을 하나씩 채워가면 됩니다.";
  return {
    score,
    grade,
    message,
    backupLabel: hasRecentBackup ? "백업 안정" : "백업 권장",
    items,
  };
}

function daysBetween(fromDateKey, toDateKey) {
  const from = new Date(`${fromDateKey}T00:00:00`);
  const to = new Date(`${toDateKey}T00:00:00`);
  if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) return 0;
  return Math.round((to - from) / 86400000);
}

function formatBackupDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "날짜 미상";
  return date.toLocaleDateString("ko-KR", { month: "2-digit", day: "2-digit" });
}

function getRecentDateKeys(days) {
  return Array.from({ length: days }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - index));
    return formatDateKey(date);
  });
}

function getWeightTrendPoints(limit = 10) {
  const byDate = state.weightLogs.reduce((map, entry) => {
    const current = map[entry.date];
    if (!current || (entry.updatedAt || entry.createdAt || "") > (current.updatedAt || current.createdAt || "")) map[entry.date] = entry;
    return map;
  }, {});
  return Object.values(byDate).sort((a, b) => a.date.localeCompare(b.date)).slice(-limit);
}

function renderWeightTrendChart(points) {
  if (!points.length) return `
    <div class="empty chart-empty visual-empty">
      <img class="empty-illustration" src="assets/ui/weight-vignette.png" alt="" aria-hidden="true" />
      <strong>체중 흐름 대기</strong>
      <span>첫 기록을 남기면 변화가 선으로 이어집니다.</span>
    </div>
  `;
  const weights = points.map((point) => point.weight);
  const min = Math.min(...weights);
  const max = Math.max(...weights);
  const range = Math.max(0.1, max - min);
  return `
    <div class="weight-trend-chart">
      ${points.map((point) => {
        const height = 24 + ((point.weight - min) / range) * 58;
        return `
          <div class="weight-trend-point">
            <span style="--height:${height}%"></span>
            <strong>${formatWeight(point.weight)}</strong>
            <small>${point.date.slice(5).replace("-", ".")}</small>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderTrainingBars(logs) {
  return `
    <div class="weekly-bars">
      ${logs.map((log) => `
        <div class="weekly-bar">
          <span style="--height:${Math.max(4, log.percent || 0)}%"></span>
          <strong>${log.percent || 0}%</strong>
          <small>${log.date.slice(5).replace("-", ".")}</small>
        </div>
      `).join("")}
    </div>
  `;
}

function renderInnerPowerBars(logs) {
  const max = Math.max(1, ...logs.map((log) => log.earnedInnerPower || 0));
  return `
    <div class="weekly-bars inner-bars">
      ${logs.map((log) => `
        <div class="weekly-bar">
          <span style="--height:${Math.max(4, ((log.earnedInnerPower || 0) / max) * 100)}%"></span>
          <strong>${log.earnedInnerPower || 0}</strong>
          <small>${log.date.slice(5).replace("-", ".")}</small>
        </div>
      `).join("")}
    </div>
  `;
}

function renderDataSafetyPanel() {
  const backupText = state.lastBackupAt ? `마지막 백업 ${formatBackupDate(state.lastBackupAt)}` : "아직 백업 없음";
  const photoText = state.bodyPhotos.length ? `몸 사진 ${state.bodyPhotos.length}장 포함` : "몸 사진 없음";
  return `
    <section class="panel data-safety-panel">
      <div class="status-head">
        <div>
          <p class="eyebrow">데이터 관리</p>
          <h2>백업과 복구</h2>
          <p class="muted">기기 변경 전 백업 권장</p>
        </div>
        <span class="pill">${backupText}</span>
      </div>
      <div class="data-safety-grid">
        <article>
          ${icon("scale")}
          <div><strong>체중 기록</strong><span>${state.weightLogs.length}개 저장</span></div>
        </article>
        <article>
          ${icon("lotus")}
          <div><strong>수련 기록</strong><span>${state.dailyHistory.length}개 행적</span></div>
        </article>
        <article>
          ${icon("camera")}
          <div><strong>몸 사진</strong><span>${photoText}</span></div>
        </article>
      </div>
      <div class="data-safety-actions">
        <button class="primary-btn" data-export-backup>백업 내보내기</button>
        <label class="ghost-btn import-backup-label">
          백업 가져오기
          <input type="file" accept="application/json,.json" data-import-backup hidden>
        </label>
      </div>
      <details class="danger-reset-detail">
        <summary>전체 초기화</summary>
        <div>
          <p>모든 기록을 지우고 처음부터 다시 시작합니다.</p>
          <button class="mini-btn danger" data-reset>전체 초기화 실행</button>
        </div>
      </details>
    </section>
  `;
}

function renderRecords() {
  return renderRecordsDashboard();
}

function bindAppEvents() {
  app.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTab = button.dataset.tab;
      render();
    });
  });
  app.querySelectorAll("[data-complete]").forEach((button) => {
    button.addEventListener("click", () => completeQuest(button.dataset.complete));
  });
  app.querySelectorAll("[data-uncomplete]").forEach((button) => {
    button.addEventListener("click", () => uncompleteQuest(button.dataset.uncomplete));
  });
  app.querySelectorAll("[data-quest-minutes]").forEach((input) => {
    input.addEventListener("input", () => updateQuestRewardPreview(input.dataset.questMinutes));
  });
  app.querySelectorAll("[data-quest-hours]").forEach((input) => {
    input.addEventListener("input", () => updateQuestRewardPreview(input.dataset.questHours));
  });
  app.querySelectorAll("[data-quest-enabled]").forEach((input) => {
    input.addEventListener("change", () => updateQuestTemplate(input.dataset.questEnabled, { enabled: input.checked }, true));
  });
  app.querySelectorAll("[data-quest-title]").forEach((input) => {
    input.addEventListener("change", () => updateQuestTemplate(input.dataset.questTitle, { title: input.value.trim() || "이름 없는 수련" }, true));
  });
  app.querySelectorAll("[data-quest-category]").forEach((select) => {
    select.addEventListener("change", () => updateQuestTemplate(select.dataset.questCategory, { category: select.value }, true));
  });
  app.querySelectorAll("[data-quest-difficulty]").forEach((select) => {
    select.addEventListener("change", () => updateQuestTemplate(select.dataset.questDifficulty, { difficulty: select.value }, true));
  });
  app.querySelectorAll("[data-quest-reward-base]").forEach((input) => {
    input.addEventListener("change", () => updateQuestTemplate(input.dataset.questRewardBase, { innerPowerReward: Number(input.value) || 10 }, true));
  });
  app.querySelectorAll("[data-quest-reward-mode]").forEach((select) => {
    select.addEventListener("change", () => updateQuestTemplate(select.dataset.questRewardMode, { rewardMode: select.value }, true));
  });
  app.querySelectorAll("[data-delete-quest-template]").forEach((button) => {
    button.addEventListener("click", () => deleteQuestTemplate(button.dataset.deleteQuestTemplate));
  });
  app.querySelector("[data-add-quest]")?.addEventListener("click", addCustomQuestTemplate);
  app.querySelector("[data-restore-quests]")?.addEventListener("click", restoreDefaultQuestTemplates);
  app.querySelector("[data-weight-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    saveWeightLog(event.currentTarget);
  });
  app.querySelector("[data-delete-weight]")?.addEventListener("click", (event) => {
    deleteWeightLog(event.currentTarget.dataset.deleteWeight);
  });
  app.querySelectorAll("[data-weight-month]").forEach((button) => {
    button.addEventListener("click", () => changeWeightMonth(button.dataset.weightMonth === "next" ? 1 : -1));
  });
  app.querySelector("[data-weight-goal-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    saveWeightGoal(event.currentTarget);
  });
  app.querySelector("[data-clear-weight-goal]")?.addEventListener("click", clearWeightGoal);
  app.querySelector("[data-body-photo-input]")?.addEventListener("change", (event) => {
    saveBodyPhoto(event.currentTarget.files?.[0]);
  });
  app.querySelector("[data-delete-body-photo]")?.addEventListener("click", (event) => {
    deleteBodyPhoto(event.currentTarget.dataset.deleteBodyPhoto);
  });
  app.querySelector("[data-focus-weight]")?.addEventListener("click", () => {
    const input = app.querySelector("#weight-value");
    input?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => input?.focus(), 240);
  });
  app.querySelector("[data-focus-body-photo]")?.addEventListener("click", () => {
    const target = app.querySelector(".body-photo-panel");
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
    target?.classList.add("attention");
    setTimeout(() => target?.classList.remove("attention"), 1200);
  });
  app.querySelector("[data-focus-first-quest]")?.addEventListener("click", () => {
    const target = app.querySelector(".today-quest:not(.done)");
    focusQuestCard(target);
  });
  app.querySelector("[data-lazy-mode]")?.addEventListener("click", activateLazyMode);
  app.querySelectorAll("[data-breakthrough]").forEach((button) => {
    button.addEventListener("click", breakthrough);
  });
  app.querySelectorAll("[data-equip]").forEach((button) => {
    button.addEventListener("click", () => equipTitle(button.dataset.equip));
  });
  app.querySelectorAll("[data-select-sect]").forEach((button) => {
    button.addEventListener("click", () => completeSectRespec(state, button.dataset.selectSect));
  });
  app.querySelectorAll("[data-purchase-art]").forEach((button) => {
    button.addEventListener("click", () => purchaseMartialArt(state, button.dataset.purchaseArt));
  });
  app.querySelectorAll("[data-upgrade-art]").forEach((button) => {
    button.addEventListener("click", () => upgradeMartialArt(state, button.dataset.upgradeArt));
  });
  app.querySelectorAll("[data-equip-art]").forEach((button) => {
    button.addEventListener("click", () => equipMartialArt(button.dataset.equipArt));
  });
  app.querySelector("[data-respec]")?.addEventListener("click", () => startSectRespec(state));
  app.querySelector("[data-install-app]")?.addEventListener("click", installApp);
  app.querySelector("[data-export-backup]")?.addEventListener("click", exportBackupData);
  app.querySelector("[data-import-backup]")?.addEventListener("change", (event) => importBackupData(event.currentTarget.files?.[0]));
  app.querySelectorAll("[data-reset]").forEach((button) => {
    button.addEventListener("click", resetApp);
  });
}

function syncTodayQuestsFromTemplates() {
  state.questTemplates = normalizeQuestTemplates(state.questTemplates, state.quests);
  state.quests = normalizeQuests(state.quests, state.questTemplates);
  persistTrainingLog(state);
}

function updateQuestTemplate(id, patch, shouldRender = false) {
  const index = state.questTemplates.findIndex((q) => q.id === id);
  if (index < 0) return;
  const nextTemplate = {
    ...state.questTemplates[index],
    ...patch,
  };
  nextTemplate.innerPowerReward = Math.max(1, Math.min(200, Number(nextTemplate.innerPowerReward) || 10));
  nextTemplate.rewardMode = nextTemplate.rewardMode === "duration" ? "duration" : "fixed";
  nextTemplate.title = String(nextTemplate.title || "이름 없는 수련").slice(0, 28);
  if (patch.enabled === false && state.questTemplates.filter((q) => q.enabled !== false).length <= 1) {
    showToast("수련은 최소 1개가 필요합니다.");
    if (shouldRender) render();
    return;
  }
  state.questTemplates[index] = nextTemplate;
  syncTodayQuestsFromTemplates();
  saveState();
  if (shouldRender) render();
}

function addCustomQuestTemplate() {
  const title = prompt("추가할 수련 이름을 입력하세요.", "새 수련");
  if (title === null) return;
  const cleanTitle = title.trim() || "새 수련";
  const id = `custom_${Date.now()}`;
  state.questTemplates.push({
    id,
    title: cleanTitle.slice(0, 28),
    category: "mind",
    difficulty: "normal",
    innerPowerReward: 15,
    rewardMode: "fixed",
    enabled: true,
  });
  syncTodayQuestsFromTemplates();
  saveState();
  showToast("새 수련을 추가했습니다.");
  render();
}

function deleteQuestTemplate(id) {
  if (!id.startsWith("custom_")) return;
  if (!confirm("이 수련을 삭제할까요?")) return;
  state.questTemplates = state.questTemplates.filter((q) => q.id !== id);
  syncTodayQuestsFromTemplates();
  saveState();
  showToast("수련을 삭제했습니다.");
  render();
}

function restoreDefaultQuestTemplates() {
  if (!confirm("기본 수련 목록으로 되돌릴까요? 직접 추가한 수련은 사라집니다.")) return;
  state.questTemplates = defaultQuests.map(questTemplateFromQuest);
  state.quests = state.questTemplates.map((q) => questFromTemplate(q));
  persistTrainingLog(state);
  saveState();
  showToast("기본 수련으로 복구했습니다.");
  render();
}

async function installApp() {
  if (!installPromptEvent) {
    showToast("현재 브라우저에서는 메뉴에서 설치를 진행해 주세요.");
    return;
  }
  installPromptEvent.prompt();
  await installPromptEvent.userChoice.catch(() => null);
  installPromptEvent = null;
  render();
}

function completeQuest(id) {
  resetDailyQuestsIfNeeded(state);
  const questIndex = state.quests.findIndex((q) => q.id === id);
  if (questIndex < 0 || state.quests[questIndex].completed) return;
  const q = state.quests[questIndex];
  const earnedInnerPower = calculateQuestCompletionReward(q);
  const completedMinutes = isDurationQuest(q) ? getQuestMinutes(q.id) : 0;
  state.quests[questIndex] = { ...q, completed: true, earnedInnerPower, completedMinutes, plannedMinutes: completedMinutes || q.plannedMinutes || 0 };
  state.innerPower += earnedInnerPower;
  state.totalInnerPower += earnedInnerPower;
  lastInnerPowerPulse = earnedInnerPower;
  lastCompletedQuestId = id;
  persistTrainingLog(state);
  addRecord("수련 완료", `${q.title}을 마치고 내공 ${earnedInnerPower}을 얻었습니다. ${getSectMotif().questComplete}`);
  evaluateTitleUnlocks();
  saveState();
  showToast(`${q.title} 완료 · 내공 +${earnedInnerPower}`);
  render();
  setTimeout(() => {
    lastInnerPowerPulse = null;
    lastCompletedQuestId = null;
    app?.querySelector(".innerpower-gain-pop")?.remove();
    app?.querySelector(".today-quest.just-completed")?.classList.remove("just-completed");
    app?.querySelector(".quest-complete-burst")?.remove();
  }, 1400);
}

function uncompleteQuest(id) {
  resetDailyQuestsIfNeeded(state);
  const questIndex = state.quests.findIndex((q) => q.id === id);
  if (questIndex < 0 || !state.quests[questIndex].completed) return;
  const q = state.quests[questIndex];
  const earnedInnerPower = q.earnedInnerPower || q.innerPowerReward || 0;
  state.quests[questIndex] = {
    ...q,
    completed: false,
    earnedInnerPower: 0,
    completedMinutes: 0,
    plannedMinutes: q.completedMinutes || q.plannedMinutes || (q.id === "study" ? 30 : 0),
  };
  state.innerPower = Math.max(0, state.innerPower - earnedInnerPower);
  state.totalInnerPower = Math.max(realms[state.currentRealm]?.required || 0, state.totalInnerPower - earnedInnerPower);
  persistTrainingLog(state);
  addRecord("수련 취소", `${q.title} 완료를 취소하고 내공 ${earnedInnerPower}을 회수했습니다.`);
  saveState();
  showToast(`수련 취소 · 내공 -${earnedInnerPower}`);
  render();
}

function evaluateTitleUnlocks({ silent = false } = {}) {
  unlockTitle("first", Boolean(state.onboarded), { silent });
  unlockTitle("scale_keeper", state.weightLogs.length >= 3, { silent });
  unlockTitle("steady", getTrainingStreak() >= 3, { silent });
  unlockTitle("seven_blades", getTrainingStreak() >= 7, { silent });
  unlockTitle("body_witness", state.bodyPhotos.length >= 2, { silent });
  unlockTitle("inner_flame", state.totalInnerPower >= 500, { silent });
  unlockTitle("realm_breaker", state.currentRealm >= 1, { silent });
  if (!state.equippedTitle && state.titles.length) {
    const firstTitle = titles.find((title) => title.id === state.titles[0]);
    state.equippedTitle = firstTitle?.name || state.equippedTitle;
  }
}

function getTitleProgress(id) {
  if (id === "first") return state.onboarded ? "완료" : "사문 입문 필요";
  if (id === "scale_keeper") return `몸무게 ${Math.min(3, state.weightLogs.length)}/3회`;
  if (id === "steady") return `연속 수련 ${Math.min(3, getTrainingStreak())}/3일`;
  if (id === "seven_blades") return `연속 수련 ${Math.min(7, getTrainingStreak())}/7일`;
  if (id === "body_witness") return `몸 사진 ${Math.min(2, state.bodyPhotos.length)}/2장`;
  if (id === "inner_flame") return `누적 내공 ${Math.min(500, state.totalInnerPower)}/500`;
  if (id === "realm_breaker") return state.currentRealm >= 1 ? "완료" : "이류 경지 필요";
  return "조건 확인 중";
}

function unlockTitle(id, condition, { silent = false } = {}) {
  if (condition && !state.titles.includes(id)) {
    state.titles.push(id);
    const title = titles.find((entry) => entry.id === id);
    addRecord("칭호 획득", `${title.name} 칭호를 얻었습니다.`);
    if (!state.equippedTitle) state.equippedTitle = title.name;
    if (!silent) showToast(`칭호 획득 · ${title.name}`);
  }
}

function canBreakthrough() {
  const next = realms[state.currentRealm + 1];
  if (!next) return false;
  return state.totalInnerPower >= next.required;
}

function breakthrough() {
  if (!canBreakthrough()) return;
  const previousRealm = realms[state.currentRealm];
  state.currentRealm += 1;
  const realm = realms[state.currentRealm];
  const motif = getSectMotif();
  addRecord("경지 돌파", `${previousRealm.name}에서 ${realm.name}으로 올랐습니다. ${motif.breakthrough}`);
  evaluateTitleUnlocks();
  saveState();
  render();
  showBreakthroughModal(previousRealm, realm, motif);
}

function showBreakthroughModal(previousRealm, realm, motif) {
  const sect = getUserSect();
  const wrap = document.createElement("div");
  wrap.className = "modal-backdrop";
  wrap.innerHTML = `
    <section class="modal breakthrough-modal">
      <div class="breakthrough-scene">
        ${sect?.image ? `<img src="${sect.image}" alt="" aria-hidden="true" />` : ""}
        <div class="breakthrough-ink"></div>
      </div>
      <p class="eyebrow">${motif.short} 경지 돌파</p>
      <h2>${previousRealm.name} → ${realm.name}</h2>
      <p>${motif.breakthrough}</p>
      <div class="breakthrough-reality">
        <strong>현실 수련은 유지됩니다</strong>
        <span>체중 기록, 식단, 공부, 운동으로 쌓은 내공이 이 경지를 만들었습니다.</span>
      </div>
      <div class="modal-actions"><button class="primary-btn" data-close-modal>다음 수련으로 간다</button></div>
    </section>
  `;
  document.body.appendChild(wrap);
  wrap.querySelector("[data-close-modal]").addEventListener("click", () => wrap.remove());
}

function equipTitle(id) {
  if (!state.titles.includes(id)) return;
  const title = titles.find((entry) => entry.id === id);
  state.equippedTitle = title.name;
  saveState();
  showToast(`${title.name} 칭호 장착`);
  render();
}

function addRecord(type, text) {
  state.dailyHistory.push({
    type,
    text,
    date: new Date().toLocaleString("ko-KR", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }),
  });
}

function showToast(message) {
  clearTimeout(toastTimer);
  document.querySelector(".toast-wrap")?.remove();
  const wrap = document.createElement("div");
  wrap.className = "toast-wrap";
  wrap.innerHTML = `<div class="toast">${message}</div>`;
  document.body.appendChild(wrap);
  toastTimer = setTimeout(() => wrap.remove(), 1800);
}

function showModal(title, message) {
  const wrap = document.createElement("div");
  wrap.className = "modal-backdrop";
  wrap.innerHTML = `
    <section class="modal">
      <h2>${title}</h2>
      <p>${message}</p>
      <div class="modal-actions"><button class="primary-btn" data-close-modal>좋습니다</button></div>
    </section>
  `;
  document.body.appendChild(wrap);
  wrap.querySelector("[data-close-modal]").addEventListener("click", () => wrap.remove());
}

function exportBackupData() {
  state.lastBackupAt = new Date().toISOString();
  saveState();
  const payload = {
    app: "무협일지",
    version: 1,
    exportedAt: new Date().toISOString(),
    storageKey: STORAGE_KEY,
    data: createPersistedState({ includeBodyPhotoImages: true }),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `murim-training-backup-${formatDateKey(new Date())}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("수련 기록 백업을 내보냈습니다.");
}

function importBackupData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    try {
      const parsed = JSON.parse(String(reader.result || "{}"));
      const imported = parsed.data || parsed;
      if (!isValidBackupData(imported)) {
        throw new Error("invalid backup");
      }
      if (!confirm("백업을 가져오면 현재 앱 안의 기록이 백업 파일 내용으로 바뀝니다. 지금 기록을 보존하려면 먼저 백업 내보내기를 해주세요. 계속할까요?")) {
        return;
      }
      state = normalizeState({ ...defaultState(), ...imported });
      if (bodyPhotoStoreReady) {
        await replaceBodyPhotosInStore(state.bodyPhotos || []);
        state.bodyPhotos = await loadBodyPhotosFromStore();
      }
      activeTab = "records";
      addRecord("백업 복구", "백업 파일에서 수련 기록을 복구했습니다.");
      saveState();
      showToast("백업 기록을 불러왔습니다.");
      render();
    } catch (error) {
      showToast("백업 파일을 읽을 수 없습니다.");
    } finally {
      const input = app?.querySelector("[data-import-backup]");
      if (input) input.value = "";
    }
  };
  reader.readAsText(file, "utf-8");
}

function isValidBackupData(data) {
  return Boolean(
    data &&
    typeof data === "object" &&
    Array.isArray(data.quests) &&
    Array.isArray(data.weightLogs) &&
    Array.isArray(data.dailyHistory) &&
    typeof data.innerPower === "number" &&
    typeof data.totalInnerPower === "number"
  );
}

function resetApp() {
  if (!confirm("정말 전체 초기화할까요? 몸무게, 몸 사진, 수련, 내공, 사문 기록이 모두 삭제됩니다. 필요하면 먼저 백업을 내보내세요.")) return;
  (async () => {
    if (bodyPhotoStoreReady) {
      await replaceBodyPhotosInStore([]);
    }
    state = defaultState();
    activeTab = "weight";
    selectedPath = "hwasan";
    saveState();
    render();
  })().catch(() => {
    state = defaultState();
    activeTab = "weight";
    selectedPath = "hwasan";
    saveState();
    render();
  });
}
