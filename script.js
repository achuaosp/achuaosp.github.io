document.addEventListener('DOMContentLoaded',function(){
  var hamburger=document.querySelector('.hamburger');
  var mobileNav=document.querySelector('.mobile-nav');
  var mobileLinks=mobileNav.querySelectorAll('a');

  hamburger.addEventListener('click',function(){
    this.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  mobileLinks.forEach(function(link){
    link.addEventListener('click',function(){
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });

  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  },{threshold:0.15});

  document.querySelectorAll('.reveal').forEach(function(el){
    observer.observe(el);
  });

  var statObserver=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var nums=entry.target.querySelectorAll('.stat-num');
        nums.forEach(function(el){
          var target=parseInt(el.dataset.target);
          var suffix=el.dataset.suffix||'';
          animateCounter(el,target,suffix);
        });
        statObserver.unobserve(entry.target);
      }
    });
  },{threshold:0.3});

  var statsGrid=document.querySelector('.stats-grid');
  if(statsGrid)statObserver.observe(statsGrid);

  function animateCounter(el,target,suffix){
    var duration=1200;
    var startTime=null;

    function step(timestamp){
      if(!startTime)startTime=timestamp;
      var progress=Math.min((timestamp-startTime)/duration,1);
      var eased=1-Math.pow(1-progress,3);
      var current=Math.round(eased*target);
      el.textContent=current+suffix;
      if(progress<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
});
