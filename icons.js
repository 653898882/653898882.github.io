/* 自制图标库 — 全部手写 SVG path，24×24 网格，描边风格
   用法： icon('heart') / icon('heart', {size:20, cls:'x', fill:true}) */
(function () {
  const P = {
    logo:      "M5 7h22a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H15l-6 5v-5H5a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3z",
    home:      "M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z",
    bell:      "M12 4a5 5 0 0 0-5 5v3.5L5.5 16h13L17 12.5V9a5 5 0 0 0-5-5z M9.8 19a2.2 2.2 0 0 0 4.4 0",
    heart:     "M12 20.2S4.4 15.3 4.4 10.3A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.6 2.7c0 5-7.6 9.9-7.6 9.9z",
    comment:   "M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z",
    repeat:    "M7 7h9a3 3 0 0 1 3 3v2 M17 17H8a3 3 0 0 1-3-3v-2 M10 4L7 7l3 3 M14 20l3-3-3-3",
    bookmark:  "M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z",
    user:      "M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6",
    users:     "M9.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M3.5 19c0-2.8 2.7-5 6-5s6 2.2 6 5 M16.5 5.6a3 3 0 0 1 0 5.8 M18.5 19c0-2.1-.7-3.6-2-4.5",
    search:    "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M16.5 16.5 21 21",
    plus:      "M12 5v14 M5 12h14",
    image:     "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z M8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M4.2 17.2 9 12.4l4 4 3-3 4 4",
    send:      "M4 12 20 5l-7 15-2.6-6.4z",
    close:     "M6 6l12 12 M18 6 6 18",
    back:      "M14.5 5.5 8 12l6.5 6.5",
    check:     "M5 13l4.2 4.2L19 7",
    logout:    "M14 12H5.5 M9 8.5 5.5 12 9 15.5 M14 4.5h4.5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H14",
    settings:  "M12 15.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8z M12 3.2v2.4 M12 18.4v2.4 M3.2 12h2.4 M18.4 12h2.4 M5.8 5.8l1.7 1.7 M16.5 16.5l1.7 1.7 M18.2 5.8l-1.7 1.7 M7.5 16.5l-1.7 1.7",
    shield:    "M12 3.2 19 6v6.2c0 4.2-3 7.4-7 8.8-4-1.4-7-4.6-7-8.8V6z",
    chat:      "M4 6h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-5 4V7a1 1 0 0 1 1-1z",
    forum:     "M5 7h14 M5 12h14 M5 17h8",
    spark:     "M12 3.5l1.9 5.4 5.4 1.9-5.4 1.9L12 18.1l-1.9-5.4L4.7 10.8l5.4-1.9z",
    eye:       "M2.6 12S6.2 6.6 12 6.6 21.4 12 21.4 12 17.8 17.4 12 17.4 2.6 12 2.6 12z M12 14.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8z",
    trash:     "M4 7h16 M9.5 7V4.8h5V7 M6.5 7l1 13h9l1-13",
    grid:      "M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z",
    code:      "M9 8 5 12l4 4 M15 8l4 4-4 4",
    fire:      "M12 3.5c3.2 3 5.5 5.6 5.5 8.6a5.5 5.5 0 0 1-11 0c0-2 1-3.6 2.4-5 .3 1.6 1.1 2.6 2.2 3 0-2.4.5-4.4.9-6.6z",
    crown:     "M4 17.5h16l-1.5-8.5-3.8 3.2L12 7l-2.7 5.2L5.5 9z",
    gift:      "M4 11h16v8.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z M3 8h18v3H3z M12 8v12.5 M12 8c-1.4 0-4-.4-4-2.4S10.6 3.2 12 8z M12 8c1.4 0 4-.4 4-2.4S13.4 3.2 12 8z",
    rocket:    "M12 3.2c2.9 1.6 4.8 4.6 4.8 8 0 2-1 3.9-1 3.9l-2-1-1.8 2.8-1.8-2.8-2 1s-1-1.9-1-3.9c0-3.4 1.9-6.4 4.8-8z M12 9.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z",
    medal:     "M12 14.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2z M8.6 6.4 6 3.2 M15.4 6.4 18 3.2 M12 11.6l.8 1.7 1.8.2-1.3 1.2.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.2 1.8-.2z",
    dots:      "M6 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z M10.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z M15 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"
  };
  const FILLED = { heart: 1, spark: 1, fire: 1, dots: 1, logo: 1, crown: 1, medal: 1 };

  function icon(name, opt) {
    opt = opt || {};
    const size = opt.size || 20;
    const cls = opt.cls ? ' ' + opt.cls : '';
    const d = P[name] || '';
    const filled = opt.fill === undefined ? !!FILLED[name] : !!opt.fill;
    const common = `viewBox="0 0 24 24" width="${size}" height="${size}" class="ic${cls}" aria-hidden="true"`;
    if (filled) {
      return `<svg ${common} fill="currentColor" stroke="none"><path d="${d}"/></svg>`;
    }
    return `<svg ${common} fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
  }

  window.ICONS = P;
  window.icon = icon;
})();
