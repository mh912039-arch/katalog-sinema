const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = data.get('name').trim();
  const message = data.get('body').trim();
  if (!name || !message) {
    document.querySelector('#form-status').textContent = 'Nama dan pesan tidak boleh hanya berisi spasi.';
    return;
  }
  const subject = '[Katalog Sinema] ' + data.get('subject');
  const body = 'Halo Maulana Hasan,\n\n' + message + '\n\nSalam,\n' + name + '\nEmail: ' + data.get('email').trim();
  window.location.href = 'mailto:mh912039@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  document.querySelector('#form-status').textContent = 'Permintaan membuka aplikasi email telah dibuat. Pesan belum dikirim. Jika tidak terbuka, gunakan tautan alamat email untuk menulis pesan secara manual.';
});
