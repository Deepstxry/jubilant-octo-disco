// Таймер
const target = new Date('2025-09-14T14:00:00+03:00').getTime();

const el = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
};

function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
  const now = Date.now();
  let diff = target - now;

  if (diff <= 0) {
    el.days.textContent = el.hours.textContent = el.minutes.textContent = el.seconds.textContent = '00';
    return;
  }

  const days = Math.floor(diff / 86400000);
  diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000);
  diff -= hours * 3600000;
  const minutes = Math.floor(diff / 60000);
  diff -= minutes * 60000;
  const seconds = Math.floor(diff / 1000);

  el.days.textContent = pad(days);
  el.hours.textContent = pad(hours);
  el.minutes.textContent = pad(minutes);
  el.seconds.textContent = pad(seconds);
}

tick();
setInterval(tick, 1000);

// Форма (демо-обработка)
const form = document.getElementById('rsvpForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const attend = form.attend.value;

  if (!name || !attend) {
    alert('Пожалуйста, укажите имя и вариант присутствия.');
    return;
  }

  // Здесь можно отправить данные на сервер / в Google Forms / Telegram-бот
  console.log({
    name,
    attend,
    plus: form.plus.value.trim(),
    drinks: form.drinks.value.trim(),
    allergy: form.allergy.value.trim(),
  });

  form.reset();
  success.hidden = false;
  setTimeout(() => { success.hidden = true; }, 4000);
});