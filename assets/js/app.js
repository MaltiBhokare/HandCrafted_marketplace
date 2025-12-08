
AOS.init({ duration: 700, once: true });

if (document.querySelector('#artistSwiper')) {
  new Swiper('#artistSwiper', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: { 576:{slidesPerView:2}, 768:{slidesPerView:3}, 992:{slidesPerView:4} },
    pagination: { el: '.swiper-pagination', clickable: true }
  });
}

const lightbox = GLightbox({ selector: '.glightbox' });

if (document.querySelector('.hero')) {
  gsap.to('.hero-img', {
    scale: 1.08, y: 30, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', scrub: true }
  });
}

['countArtisans','countProducts','countWorkshops'].forEach((id,i)=>{
  const el = document.getElementById(id);
  if(el){ new CountUp(id, [120, 540, 28][i], {duration:1.2}).start(); }
});

document.querySelectorAll('.next')?.forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.preventDefault();
    const step = e.target.closest('.step');
    const nxt = step.nextElementSibling;
    if(nxt){ step.classList.add('d-none'); nxt.classList.remove('d-none'); window.scrollTo({top: step.offsetTop-80, behavior:'smooth'}); }
  });
});
document.querySelectorAll('.prev')?.forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.preventDefault();
    const step = e.target.closest('.step');
    const prev = step.previousElementSibling;
    if(prev){ step.classList.add('d-none'); prev.classList.remove('d-none'); window.scrollTo({top: prev.offsetTop-80, behavior:'smooth'}); }
  });
});

document.addEventListener('click', (e)=>{
  if(e.target.closest('[data-add-cart]')){
    e.preventDefault();
    const btn = e.target.closest('[data-add-cart]');
    btn.innerHTML = '<i class="bi bi-bag-check"></i>';
    btn.classList.add('btn-success');
    setTimeout(()=>{btn.innerHTML = '<i class="bi bi-bag-plus"></i>'; btn.classList.remove('btn-success');}, 1200);
  }
  if(e.target.closest('[data-like]')){
    e.preventDefault();
    const btn = e.target.closest('[data-like]');
    btn.classList.toggle('btn-danger');
    btn.innerHTML = btn.classList.contains('btn-danger') ? '<i class="bi bi-heart-fill"></i>' : '<i class="bi bi-heart"></i>';
  }
});

