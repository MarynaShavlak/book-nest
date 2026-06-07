// BookNest — статуси (єдине джерело правди для пілюль badge).
// Кожен запис: value, label, tone (neutral|primary|success|info|warning|danger), icon (id зі спрайта ui-icons).
// Пілюля: <span class="badge {tone}"><svg><use href="#{icon}"/></svg>{label}</span>

export const readingStatuses = [
  { value:"not_started", label:"Не почато", tone:"neutral", icon:"i-circle-slash", isDefault:true },
  { value:"want_to_read", label:"Хочу прочитати", tone:"accent", icon:"i-bookmark" },
  { value:"reading", label:"Читаю", tone:"info", icon:"i-book" },
  { value:"paused", label:"На паузі", tone:"warning", icon:"i-clock" },
  { value:"finished", label:"Прочитано", tone:"success", icon:"i-check-circle" },
  { value:"dnf", label:"Покинуто", tone:"neutral", icon:"i-x-circle" },
  { value:"rereading", label:"Перечитую", tone:"info", icon:"i-refresh" },
];

export const ownershipStatuses = [
  { value:"none", label:"Немає", tone:"neutral", icon:"i-circle-slash", isDefault:true },
  { value:"want_to_buy", label:"Хочу купити", tone:"accent", icon:"i-cart" },
  { value:"ordered", label:"В дорозі", tone:"info", icon:"i-truck" },
  { value:"owned", label:"Маю", tone:"success", icon:"i-check-circle" },
  { value:"borrowed_from_someone", label:"Позичена у когось", tone:"info", icon:"i-arrow-down-circle" },
  { value:"lent_to_someone", label:"Видана комусь", tone:"neutral", icon:"i-arrow-up-right" },
];

export const bookFormats = [
  { value:"paper", label:"Паперова", tone:"neutral", icon:"i-book" },
  { value:"ebook", label:"Електронна", tone:"neutral", icon:"i-tablet" },
  { value:"audiobook", label:"Аудіокнига", tone:"neutral", icon:"i-headphones" },
];

export const seriesStatuses = [
  { value:"completed", label:"Серія завершена", tone:"success", icon:"i-check-circle" },
  { value:"ongoing", label:"Серія ще виходить", tone:"info", icon:"i-clock" },
  { value:"unknown", label:"Невідомо", tone:"neutral", icon:"i-help-circle", isDefault:true },
];

export const deliveryStatuses = [
  { value:"ordered", label:"Замовлено", tone:"neutral", icon:"i-package", isDefault:true },
  { value:"in_transit", label:"В дорозі", tone:"info", icon:"i-truck" },
  { value:"arriving_soon", label:"Очікується скоро", tone:"accent", icon:"i-clock" },
  { value:"delayed", label:"Затримується", tone:"warning", icon:"i-alert-triangle" },
  { value:"received", label:"Отримано", tone:"success", icon:"i-check-circle" },
];

export const loanDueStatuses = [
  { value:"active", label:"Активна", tone:"neutral", icon:"i-clock", isDefault:true },
  { value:"due_soon", label:"Скоро повернути", tone:"warning", icon:"i-bell", lentLabel:"Скоро мають повернути" },
  { value:"overdue", label:"Прострочено", tone:"danger", icon:"i-alert-triangle" },
  { value:"no_due_date", label:"Без дати повернення", tone:"neutral", icon:"i-circle-slash" },
  { value:"returned", label:"Повернуто", tone:"success", icon:"i-check-circle", lentLabel:"Повернуто мені" },
];

export const queuePriorities = [
  { value:"high", label:"Високий", tone:"danger", icon:"i-arrow-up" },
  { value:"normal", label:"Звичайний", tone:"neutral", icon:"i-minus", isDefault:true },
  { value:"low", label:"Низький", tone:"neutral", icon:"i-arrow-down" },
];

export const contentFlags = [
  { value:"spoiler", label:"Спойлер", tone:"warning", icon:"i-eye-off" },
];

// --- правила/логіка ---
// 1) deliveryStatuses діють лише коли ownership === 'ordered'.
// 2) delivery 'received' — це action: ownership → 'owned', книга зникає з «Книги в дорозі», лишається в бібліотеці.
// 3) loanDueStatuses діють лише для ownership 'borrowed_from_someone' | 'lent_to_someone';
//    для lent_to_someone бери lentLabel (де є): due_soon → 'Скоро мають повернути', returned → 'Повернуто мені'.
// 4) spoiler — це прапорець контенту isSpoiler:boolean (не статус книги): blur + badge + кнопка «Показати спойлер».
// 5) isFavorite:boolean — прапорець (сердечко), НЕ статус: книга може бути Прочитано+Маю+Паперова+Улюблена одночасно.

// приклад рендера пілюлі:
// const map = Object.fromEntries(readingStatuses.map(s => [s.value, s]));
// const s = map[book.readingStatus];
// el.className = 'badge ' + s.tone;
// el.innerHTML = `<svg><use href="#${s.icon}"/></svg>` + s.label;
