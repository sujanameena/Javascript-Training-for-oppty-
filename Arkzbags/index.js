//  Scrolling js
 (function(){
      // Ticker: ensure continuous scroll by cloning items to fill 2x viewport
      const tickerViewport = document.querySelector('.promo-ticker .ticker__viewport');
      const tickerTrack = document.querySelector('.promo-ticker .ticker__track');
      let baseCount = 0;
      function fillTicker() {
      if (!tickerViewport || !tickerTrack) return;
      if (baseCount === 0) baseCount = tickerTrack.children.length;
      const targetWidth = tickerViewport.offsetWidth * 2;

      // Append clones of the base items until the track is wide enough
      while (tickerTrack.scrollWidth < targetWidth) {
      for (let i = 0; i < baseCount; i++) {
        tickerTrack.appendChild(tickerTrack.children[i].cloneNode(true));
      }
      }
      }
      window.addEventListener('load', fillTicker);
      window.addEventListener('resize', fillTicker);
      })();

      // slider 
        (function () {
      const root = document.querySelector('[data-slider]');
      if (!root) return;
      const track = root.querySelector('.slider__track');
      const slides = Array.from(track.children);
      const prev = root.querySelector('.slider__control.prev');
      const next = root.querySelector('.slider__control.next');
      const dotsWrap = root.querySelector('.slider__dots');

      // set viewport height to full page minus headers
      function setHeaderOffset() {
        const headers = document.querySelectorAll('.promo-ticker, .site-header, .secondary-header');
        let h = 0; headers.forEach(el => h += el?.offsetHeight || 0);
        root.style.setProperty('--header-h', h + 'px');
      }
      setHeaderOffset();
      window.addEventListener('resize', setHeaderOffset);

      let index = 0;
      let timer;

      // Build dots
      slides.forEach((_, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'slider__dot' + (i === 0 ? ' is-active' : '');
        b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        b.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(b);
      });

      function update() {
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
        slides.forEach((s, i) => s.setAttribute('aria-hidden', i !== index));
        Array.from(dotsWrap.children).forEach((d, i) => d.classList.toggle('is-active', i === index));
      }
      function goTo(i) {
        index = (i + slides.length) % slides.length;
        update();
        restartAutoplay();
      }

      prev.addEventListener('click', () => goTo(index - 1));
      next.addEventListener('click', () => goTo(index + 1));

      // Keyboard
      root.tabIndex = 0;
      root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
      });

      // Swipe (pointer)
      let startX = 0, dx = 0, pointerId = null;
      track.addEventListener('pointerdown', (e) => {
        pointerId = e.pointerId;
        startX = e.clientX;
        dx = 0;
        track.setPointerCapture(pointerId);
        track.style.transition = 'none';
      });
      track.addEventListener('pointermove', (e) => {
        if (pointerId === null) return;
        dx = e.clientX - startX;
        track.style.transform = 'translateX(calc(' + (-index * 100) + '% + ' + dx + 'px))';
      });
      track.addEventListener('pointerup', () => {
        if (pointerId === null) return;
        track.style.transition = '';
        if (Math.abs(dx) > track.clientWidth * 0.2) {
          goTo(index + (dx < 0 ? 1 : -1));
        } else {
          update();
          restartAutoplay();
        }
        pointerId = null;
        dx = 0;
      });
      track.addEventListener('pointercancel', () => { pointerId = null; dx = 0; track.style.transition = ''; update(); });

      // Autoplay
      function restartAutoplay() {
        clearInterval(timer);
        timer = setInterval(() => goTo(index + 1), 5000);
      }

      update();
      restartAutoplay();
    })();