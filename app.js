const products=[
 {category:'monthly',tag:'个人方案',name:'ChatGPT Plus',label:'PLUS',description:'适合日常对话、学习、工作与创作。',price:'20$',currentPrice:'135',period:'/月',features:['适合个人使用','ChatGPT Plus 方案']},
 {category:'monthly',tag:'高阶方案',name:'ChatGPT Pro 100',label:'PRO 100',description:'适合更高频率的专业使用场景。',price:'100$',currentPrice:'700',period:'/月',features:['更高阶使用需求','ChatGPT Pro 方案']},
 {category:'long',tag:'专业方案',name:'ChatGPT Pro 200',label:'PRO 200',description:'为重度使用和专业工作流程准备。',price:'200$',currentPrice:'1380',period:'/月',features:['专业使用场景','ChatGPT Pro 方案']},
 {category:'long',tag:'旗舰方案',name:'ChatGPT Pro 500',label:'PRO 500',description:'适合高强度使用与团队级需求。',price:'500$',currentPrice:'3380',period:'/月',features:['高强度使用需求','ChatGPT Pro 方案']}
];
const grid=document.querySelector('#product-grid');
function render(filter='all'){grid.innerHTML=products.filter(p=>filter==='all'||p.category===filter).map((p,i)=>`<article class="product-card" data-product="${p.name}"><div class="product-art"><small>CHATGPT / ${p.label}</small><strong>${p.label}</strong></div><div class="product-meta"><h3>${p.name}</h3><span class="badge">${p.tag}</span><p class="product-description">${p.description}</p><div class="price-row"><span class="price"><span class="price-currency">¥</span><strong class="current-price">${p.currentPrice}</strong><small>/ 月</small></span></div><button class="primary card-action" type="button">咨询此方案 <b>↗</b></button></div></article>`).join('');
 grid.querySelectorAll('.card-action').forEach(btn=>btn.addEventListener('click',()=>{const card=btn.closest('.product-card');document.querySelector('#action-status').textContent=`你已选择「${card.dataset.product}」，添加微信或 QQ 即可咨询。`;document.querySelector('#contact').scrollIntoView({behavior:'smooth'});}));}
render();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter);}));
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#main-nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const contactModal=document.querySelector('#contact-modal');
function closeContactModal(){
  if(!contactModal)return;
  contactModal.classList.remove('open');
  contactModal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
function openContactModal(){
  if(!contactModal)return;
  contactModal.classList.add('open');
  contactModal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  contactModal.querySelector('#close-contact')?.focus();
}
document.addEventListener('click',event=>{
  const target=event.target.closest('#open-contact, #close-contact, [data-close-contact]');
  if(!target)return;
  if(target.id==='open-contact')openContactModal();
  else closeContactModal();
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&contactModal?.classList.contains('open'))closeContactModal();});
const copyQQ=document.querySelector('#copy-qq');
const qqCopyStatus=document.querySelector('#qq-copy-status');
copyQQ?.addEventListener('click',async()=>{
  const qq=copyQQ.dataset.qq;
  try{
    await navigator.clipboard.writeText(qq);
    qqCopyStatus.textContent='已复制';
  }catch{
    const input=document.createElement('input');
    input.value=qq; document.body.appendChild(input); input.select();
    document.execCommand('copy'); input.remove(); qqCopyStatus.textContent='已复制';
  }
  window.setTimeout(()=>{qqCopyStatus.textContent='';},1800);
});
const copyWechat=document.querySelector('#copy-wechat');
const wechatCopyStatus=document.querySelector('#wechat-copy-status');
copyWechat?.addEventListener('click',async()=>{
  const wechat=copyWechat.dataset.wechat;
  try{
    await navigator.clipboard.writeText(wechat);
    wechatCopyStatus.textContent='已复制';
  }catch{
    const input=document.createElement('input');
    input.value=wechat; document.body.appendChild(input); input.select();
    document.execCommand('copy'); input.remove(); wechatCopyStatus.textContent='已复制';
  }
  window.setTimeout(()=>{wechatCopyStatus.textContent='';},1800);
});
