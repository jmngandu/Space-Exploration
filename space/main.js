const closeBtn = document.getElementById('close-btn');
const openBtn = document.getElementById('open-btn');
const navsBtn = document.querySelector('.navs');
openBtn.addEventListener('click', function () {
	navsBtn.style.display = 'block';
	closeBtn.style.display = 'block';
});
closeBtn.addEventListener('click', function () {
	alert('Hello');
});
