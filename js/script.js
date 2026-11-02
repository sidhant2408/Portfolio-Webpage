(function(){
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
// theme
var root=document.documentElement;
try{var sv=localStorage.getItem('theme');if(sv)root.setAttribute('data-theme',sv)}catch(e){}
$('#theme').onclick=function(){var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);var n=dark?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}};
// typing
var roles=['AI & Machine Learning Engineer','AI Security Analytics Engineer','Builder of solutions','Detection & Automation Builder','Python Developer','Machine Learning Enthusiast','Security Analytics Engineer'];
var ri=0,ci=0,del=false,tw=$('#tw');
(function tick(){var w=roles[ri];tw.textContent=w.slice(0,ci);
if(!del&&ci<w.length){ci++;setTimeout(tick,70)}else if(!del){del=true;setTimeout(tick,1400)}
else if(ci>0){ci--;setTimeout(tick,35)}else{del=false;ri=(ri+1)%roles.length;setTimeout(tick,300)}})();
// reveal + counters
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');var n=$('.num',e.target);if(n&&!n.d){n.d=1;count(n)}io.unobserve(e.target)}})},{threshold:.15});
$$('.rv').forEach(function(el){io.observe(el)});
function count(n){var t=+n.dataset.n,s=n.dataset.s,st=performance.now();(function f(now){var p=Math.min((now-st)/1400,1),v=Math.round(t*(1-Math.pow(1-p,3)));n.textContent=v.toLocaleString()+(p>=1?s:'');if(p<1)requestAnimationFrame(f)})(st)}
// tabs
$$('.tabs button').forEach(function(b){b.onclick=function(){$$('.tabs button').forEach(function(x){x.classList.remove('on')});$$('.pane').forEach(function(x){x.classList.remove('on')});b.classList.add('on');$('#'+b.dataset.t).classList.add('on')}});
// testimonials
var sl=$$('.slide'),dots=$('.dots'),cur=0,timer;
sl.forEach(function(_,i){var d=document.createElement('button');d.setAttribute('aria-label','Testimonial '+(i+1));d.onclick=function(){go(i);auto()};dots.appendChild(d)});
function go(i){cur=i;sl.forEach(function(s,k){s.classList.toggle('on',k===i)});$$('button',dots).forEach(function(d,k){d.classList.toggle('on',k===i)})}
function auto(){clearInterval(timer);timer=setInterval(function(){go((cur+1)%sl.length)},6500)}
go(0);auto();
// scroll ui
var top=$('#top'),bar=$('#bar');
top.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
var navA=$$('.links a[href^="#"]');
addEventListener('scroll',function(){var y=scrollY,h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(y/h*100)+'%';top.style.display=y>400?'block':'none';
navA.forEach(function(a){var s=$(a.getAttribute('href'));a.classList.toggle('on',!!s&&s.getBoundingClientRect().top<innerHeight*.4&&s.getBoundingClientRect().bottom>innerHeight*.4)})},{passive:true});
// particle network
var c=$('#bg'),x=c.getContext('2d'),P=[],W,H;
function rs(){W=c.width=innerWidth;H=c.height=innerHeight;P=[];for(var i=0;i<Math.min(70,W/18);i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4})}
rs();addEventListener('resize',rs);
var m={x:-999,y:-999};addEventListener('mousemove',function(e){m.x=e.clientX;m.y=e.clientY});
function col(){return getComputedStyle(root).getPropertyValue('--a').trim()||'#6d5efc'}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)(function draw(){x.clearRect(0,0,W,H);var cc=col();x.fillStyle=cc;x.strokeStyle=cc;
P.forEach(function(p,i){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;x.globalAlpha=.7;x.beginPath();x.arc(p.x,p.y,1.8,0,6.3);x.fill();
for(var j=i+1;j<P.length;j++){var q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){x.globalAlpha=(1-d/130)*.35;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}
var dm=Math.hypot(p.x-m.x,p.y-m.y);if(dm<160){x.globalAlpha=(1-dm/160)*.6;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(m.x,m.y);x.stroke()}});
requestAnimationFrame(draw)})();
})();
