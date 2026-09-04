(()=>{
  const grid=document.getElementById('tour-grid');
  if(!grid)return;

  let frame=0;
  function visibleCards(){return [...grid.querySelectorAll('.tour-card')].filter(card=>card.offsetParent!==null)}
  function reset(cards){
    cards.forEach(card=>{
      const body=card.querySelector('.tour-body');
      const meta=card.querySelector('.tour-meta');
      const title=card.querySelector('.tour-body h3');
      const desc=card.querySelector('.tour-body>p');
      if(body){body.style.minHeight='';body.style.height=''}
      [meta,title,desc].forEach(el=>{if(el)el.style.minHeight=''})
    })
  }
  function groupRows(cards){
    const rows=[];
    cards.forEach(card=>{
      const top=Math.round(card.getBoundingClientRect().top);
      let row=rows.find(r=>Math.abs(r.top-top)<=3);
      if(!row){row={top,cards:[]};rows.push(row)}
      row.cards.push(card)
    });
    return rows;
  }
  function equalize(items){
    const els=items.filter(Boolean);
    if(els.length<2)return;
    const max=Math.max(...els.map(el=>el.getBoundingClientRect().height));
    els.forEach(el=>el.style.minHeight=`${Math.ceil(max)}px`)
  }
  function align(){
    cancelAnimationFrame(frame);
    frame=requestAnimationFrame(()=>{
      const cards=visibleCards();
      reset(cards);
      if(innerWidth<761)return;
      groupRows(cards).forEach(row=>{
        equalize(row.cards.map(c=>c.querySelector('.tour-meta')));
        equalize(row.cards.map(c=>c.querySelector('.tour-body h3')));
        equalize(row.cards.map(c=>c.querySelector('.tour-body>p')));
      })
    })
  }

  const observer=new MutationObserver(align);
  observer.observe(grid,{childList:true,subtree:true,characterData:true});
  const resize=new ResizeObserver(align);
  resize.observe(grid);
  window.addEventListener('resize',align,{passive:true});
  document.fonts?.ready.then(align).catch(()=>{});
  align();
})();
