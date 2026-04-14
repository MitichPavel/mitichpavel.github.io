(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`none`,label:`No Fix (reproduce bug)`},{id:`safe-area`,label:`safe-area-inset-bottom padding`},{id:`dvh`,label:`100dvh wrapper`},{id:`sticky`,label:`position: sticky`},{id:`transform`,label:`translateZ(0) hack`},{id:`env-bottom`,label:`bottom: env(safe-area-inset-bottom)`},{id:`vh-wrapper`,label:`min-height: 100vh wrapper`}];function t(){let e=navigator.userAgent,t=/iPad|iPhone|iPod/.test(e)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1,n=/CriOS/.test(e),r=/Safari/.test(e)&&!/CriOS|FxiOS|OPiOS/.test(e),i=e.match(/OS (\d+)[_.](\d+)/);return{ios:t,chrome:n,safari:r,version:i?`${i[1]}.${i[2]}`:`N/A`,raw:e}}function n(e){let t=``;for(let n=1;n<=e;n++)t+=`
      <div class="card">
        <div class="card-number">Item ${n}</div>
        <h3>Scroll content block #${n}</h3>
        <p>This is filler content to make the page scrollable. Scroll down to see the bottom fixed bar behavior near the browser chrome.</p>
      </div>`;return t}function r(){let e=t(),n=window.innerHeight,r=CSS.supports(`height: 100dvh`)?`supported`:`not supported`,i=getComputedStyle(document.documentElement).getPropertyValue(`--safe-bottom`)||`N/A`;return`
    <div class="debug-panel">
      <div><span>iOS:</span> ${e.ios?`Yes (${e.version})`:`No`}</div>
      <div><span>Browser:</span> ${e.chrome?`Chrome (CriOS)`:e.safari?`Safari`:`Other`}</div>
      <div><span>innerHeight:</span> ${n}px</div>
      <div><span>dvh support:</span> ${r}</div>
      <div><span>safe-area-inset-bottom:</span> ${i}</div>
      <div><span>visualViewport height:</span> ${window.visualViewport?.height??`N/A`}px</div>
      <div style="word-break:break-all;margin-top:4px;color:#666;font-size:10px"><span>UA:</span> ${e.raw}</div>
    </div>`}function i(t){let a=t===`none`?``:`strategy-${t}`;document.documentElement.className=``,t===`dvh`&&document.documentElement.classList.add(`strategy-dvh`),t===`vh-wrapper`&&document.documentElement.classList.add(`strategy-vh-wrapper`);let o=document.getElementById(`app`);o.innerHTML=`
    <header class="header">
      <h1>iOS 17 Chrome Bottom Bar Test</h1>
      <span class="active-strategy-label">${t}</span>
    </header>

    <div class="strategy-picker">
      <label>Fix Strategy</label>
      <select id="strategy-select">
        ${e.map(e=>`<option value="${e.id}" ${e.id===t?`selected`:``}>${e.label}</option>`).join(``)}
      </select>
    </div>

    <main class="content">
      <div class="info-box">
        <strong>How to test</strong>
        Open this page in <b>Chrome on iOS 17+</b>. Scroll up and down to trigger
        the browser bottom bar show/hide. With "No Fix" selected you should see a
        gap between the bottom bar and the page edge. Switch strategies to compare fixes.
      </div>

      ${r()}
      ${n(20)}
    </main>

    <nav class="bottom-bar ${a}">
      <div class="tab active">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span>Home</span>
      </div>
      <div class="tab">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>Search</span>
      </div>
      <div class="tab">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        <span>Likes</span>
      </div>
      <div class="tab">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span>Profile</span>
      </div>
    </nav>
  `,document.getElementById(`strategy-select`).addEventListener(`change`,e=>{i(e.target.value)})}i(`none`);var a;window.visualViewport?.addEventListener(`resize`,()=>{clearTimeout(a),a=setTimeout(()=>{let e=document.querySelector(`.debug-panel`);e&&(e.outerHTML=r())},200)});