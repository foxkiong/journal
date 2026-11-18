(function () {
  'use strict';

  var STORAGE_KEY = 'journal-font-size';
  var DEFAULT_SIZE = 'standard';

  function applyFontSize(size) {
    if (!size || (size !== 'standard' && size !== 'large' && size !== 'xlarge')) {
      size = DEFAULT_SIZE;
    }
    document.documentElement.setAttribute('data-font-size', size);

    var buttons = document.querySelectorAll('.font-btn');
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      if (btn.getAttribute('data-size') === size) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    }
  }

  // Read saved preference immediately to avoid layout flash
  var savedSize = DEFAULT_SIZE;
  try {
    savedSize = localStorage.getItem(STORAGE_KEY) || DEFAULT_SIZE;
  } catch (e) {
    // localStorage might be unavailable or restricted
  }
  document.documentElement.setAttribute('data-font-size', savedSize);

  document.addEventListener('DOMContentLoaded', function () {
    applyFontSize(savedSize);

    var resizer = document.querySelector('.font-resizer');
    if (!resizer) return;

    resizer.addEventListener('click', function (e) {
      var target = e.target;
      if (!target || !target.classList.contains('font-btn')) return;

      var newSize = target.getAttribute('data-size');
      if (newSize) {
        applyFontSize(newSize);
        try {
          localStorage.setItem(STORAGE_KEY, newSize);
        } catch (err) {}
      }
    });
  });
})();
