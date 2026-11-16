'use strict';
const recipes = Array.isArray(window.MOMO_RECIPES) ? window.MOMO_RECIPES : [];
const search = document.querySelector('#search');
const category = document.querySelector('#category');
const difficulty = document.querySelector('#difficulty');
const grid = document.querySelector('#grid');
const count = document.querySelector('#count');
const empty = document.querySelector('#empty');
const dialog = document.querySelector('#detail');
const detailBody = document.querySelector('#detail-body');
const escapeHTML = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function render(){
  const term=search.value.trim().toLocaleLowerCase();
  const filtered=recipes.filter(r=>(!term || [r.name,...r.ingredients].join(' ').toLocaleLowerCase().includes(term)) && (!category.value || r.category===category.value) && (!difficulty.value || r.difficulty===difficulty.value));
  count.textContent=`找到 ${filtered.length} 道魔法食譜`;
  empty.hidden=filtered.length!==0;
  grid.innerHTML=filtered.map(r=>`<article class="recipe-card"><div class="card-art"><span class="category-pill">${escapeHTML(r.category)}</span><span aria-hidden="true">${escapeHTML(r.emoji)}</span></div><div class="card-info"><h3>${escapeHTML(r.name)}</h3><div class="card-meta"><span>⏱ ${r.time} 分鐘</span><span>✦ ${escapeHTML(r.difficulty)}</span></div><p class="ingredients-preview">${escapeHTML(r.ingredients.slice(0,3).join('・'))}</p><button class="card-link" data-id="${escapeHTML(r.id)}" type="button">查看完整食譜 <span aria-hidden="true">↗</span></button></div></article>`).join('');
}
function showRecipe(id){
  const r=recipes.find(x=>x.id===id);if(!r)return;
  detailBody.innerHTML=`<div class="detail-head"><span class="detail-emoji" aria-hidden="true">${escapeHTML(r.emoji)}</span><p class="eyebrow">MOMO'S RECIPE</p><h2 id="detail-title">${escapeHTML(r.name)}</h2><p class="detail-meta">${escapeHTML(r.category)} · ${r.time} 分鐘 · ${escapeHTML(r.difficulty)}</p></div><section class="detail-section"><h3>🥬 準備食材</h3><ul>${r.ingredients.map(i=>`<li>${escapeHTML(i)}</li>`).join('')}</ul></section><section class="detail-section"><h3>👩‍🍳 料理步驟</h3><ol>${r.steps.map(s=>`<li>${escapeHTML(s)}</li>`).join('')}</ol></section>${r.tip?`<div class="detail-tip">✨ Momo 小提醒：${escapeHTML(r.tip)}</div>`:''}`;
  dialog.showModal();
}
[search,category,difficulty].forEach(el=>el.addEventListener(el===search?'input':'change',render));
document.querySelector('#reset').addEventListener('click',()=>{search.value='';category.value='';difficulty.value='';render();search.focus();});
grid.addEventListener('click',e=>{const btn=e.target.closest('button[data-id]');if(btn)showRecipe(btn.dataset.id);});
document.querySelector('#close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
render();
