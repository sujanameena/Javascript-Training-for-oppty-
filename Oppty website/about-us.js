//  Scrolling js
(function () {
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

// home-page-footer-section

// Set dynamic copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Newsletter form handling
const form = document.getElementById('subscribeForm');
const statusMsg = document.getElementById('statusMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input').value;
    statusMsg.textContent = `Success! ${email} is on the list.`;
    statusMsg.className = 'msg-box msg-success';
    form.querySelector('input').value = '';
    setTimeout(() => { statusMsg.className = 'msg-box'; }, 5000);
});

// home page-arrow up button

        (function () {
            const btn = document.getElementById('backToTop');
            const showAt = 200;
            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            function toggleBtn() {
                if (window.scrollY > showAt) {
                    btn.classList.add('show');
                } else {
                    btn.classList.remove('show');
                }
            }

            window.addEventListener('scroll', toggleBtn, { passive: true });
            window.addEventListener('load', toggleBtn);

            btn.addEventListener('click', function (e) {
                e.preventDefault();
                if (prefersReduced) {
                    window.scrollTo(0, 0);
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        })();