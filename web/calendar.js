(()=>{
  let blocked=new Set();
  let loaded=false;
  const lang=()=>document.documentElement.lang||'en';
  const copy=()=>lang()==='pt'?{select:'Escolher data',unavailable:'Indisponível',available:'Disponível',selected:'Selecionada'}:lang()==='es'?{select:'Elegir fecha',unavailable:'No disponible',available:'Disponible',selected:'Seleccionada'}:{select:'Choose date',unavailable:'Unavailable',available:'Available',selected:'Selected'};
  async function loadBlocked(){
    try{
      const r=await fetch('/api/availability',{cache:'no-store'});
      if(r.ok){const d=await r.json();blocked=new Set(d.blockedDates||[]);loaded=true;}
    }catch{}
  }
  const pad=n=>String(n).padStart(2,'0');
  const iso=(y,m,d)=>`${y}-${pad(m+1)}-${pad(d)}`;
  function firstBookable(){return new Date(Date.now()+86400000).toISOString().slice(0,10)}
  function formatSelected(value){
    if(!value)return copy().select;
    const [y,m,d]=value.split('-').map(Number);
    return new Intl.DateTimeFormat(lang()==='pt'?'pt-PT':lang()==='es'?'es-ES':'en-GB',{day:'numeric',month:'long',year:'numeric'}).format(new Date(y,m-1,d));
  }
  function enhance(input){
    if(!input||input.dataset.calendarEnhanced)return;
    input.dataset.calendarEnhanced='true';
    input.type='hidden';
    input.required=false;
    const wrap=document.createElement('div');wrap.className='date-picker';
    const trigger=document.createElement('button');trigger.type='button';trigger.className='date-picker-trigger';trigger.textContent=formatSelected(input.value);trigger.setAttribute('aria-haspopup','dialog');trigger.setAttribute('aria-expanded','false');
    const panel=document.createElement('div');panel.className='date-picker-panel';panel.hidden=true;
    wrap.append(trigger,panel);input.after(wrap);
    let view=input.value?new Date(`${input.value}T12:00:00`):new Date();
    if(view.toISOString().slice(0,10)<firstBookable())view=new Date(`${firstBookable()}T12:00:00`);
    function render(){
      const y=view.getFullYear(),m=view.getMonth();
      const monthLabel=new Intl.DateTimeFormat(lang()==='pt'?'pt-PT':lang()==='es'?'es-ES':'en-GB',{month:'long',year:'numeric'}).format(new Date(y,m,1));
      const first=(new Date(y,m,1).getDay()+6)%7;
      const days=new Date(y,m+1,0).getDate();
      const weekdays=lang()==='pt'?['S','T','Q','Q','S','S','D']:lang()==='es'?['L','M','X','J','V','S','D']:['M','T','W','T','F','S','S'];
      let cells='';
      for(let i=0;i<first;i++)cells+='<span class="calendar-empty"></span>';
      for(let d=1;d<=days;d++){
        const value=iso(y,m,d),past=value<firstBookable(),isBlocked=blocked.has(value),selected=input.value===value,disabled=past||isBlocked;
        cells+=`<button type="button" class="calendar-day${selected?' is-selected':''}${isBlocked?' is-blocked':''}" data-date="${value}" ${disabled?'disabled':''} aria-label="${value}${isBlocked?' '+copy().unavailable:''}" aria-pressed="${selected}">${d}</button>`;
      }
      panel.innerHTML=`<div class="calendar-head"><button type="button" class="calendar-nav" data-prev aria-label="Previous month">‹</button><strong>${monthLabel}</strong><button type="button" class="calendar-nav" data-next aria-label="Next month">›</button></div><div class="calendar-weekdays">${weekdays.map(w=>`<span>${w}</span>`).join('')}</div><div class="calendar-grid">${cells}</div><div class="calendar-legend"><span><i></i>${copy().available}</span><span class="blocked"><i></i>${copy().unavailable}</span></div>`;
    }
    async function open(){
      trigger.disabled=true;await loadBlocked();trigger.disabled=false;render();panel.hidden=false;trigger.setAttribute('aria-expanded','true');
      panel.scrollIntoView({block:'nearest',behavior:'smooth'});
    }
    function close(){panel.hidden=true;trigger.setAttribute('aria-expanded','false')}
    trigger.addEventListener('click',()=>panel.hidden?open():close());
    panel.addEventListener('click',e=>{
      if(e.target.closest('[data-prev]')){view=new Date(view.getFullYear(),view.getMonth()-1,1);render();return}
      if(e.target.closest('[data-next]')){view=new Date(view.getFullYear(),view.getMonth()+1,1);render();return}
      const day=e.target.closest('[data-date]');if(!day)return;
      input.value=day.dataset.date;input.dispatchEvent(new Event('change',{bubbles:true}));trigger.textContent=formatSelected(input.value);close();
    });
    document.addEventListener('click',e=>{if(!wrap.contains(e.target)&&!panel.hidden)close()});
    const form=input.closest('form');
    form?.addEventListener('submit',e=>{
      if(!input.value){e.preventDefault();e.stopImmediatePropagation();open();trigger.focus();}
    },true);
  }
  const obs=new MutationObserver(()=>document.querySelectorAll('input[name="date"]').forEach(enhance));
  obs.observe(document.getElementById('dialog-content')||document.body,{childList:true,subtree:true});
  document.querySelectorAll('input[name="date"]').forEach(enhance);
  loadBlocked();
})();