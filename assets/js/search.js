// ===== TAB SWITCHING =====
const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('.search-form');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    forms.forEach(form => {
      form.classList.remove('active');
      if (form.id === 'form-' + target) {
        form.classList.add('active');
      }
    });
  });
});

// ===== AFFILIATE LINK =====
// Ganti URL di bawah dengan link affiliate tiket.com milikmu
const AFFILIATE_LINK = 'https://www.tiket.com/?utm_source=auftrip&utm_medium=affiliate';

document.querySelectorAll('.search-form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-search');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Mencari...';
    btn.disabled = true;
    setTimeout(() => {
      window.open(AFFILIATE_LINK, '_blank');
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 800);
  });
});

// ===== MIN DATE =====
document.querySelectorAll('.search-form input[type="date"]').forEach(input => {
  const today = new Date().toISOString().split('T')[0];
  input.setAttribute('min', today);
});

console.log('Search JS Loaded');
