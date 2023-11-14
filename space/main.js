const closeBtn = document.getElementById('close-btn');
const openBtn = document.getElementById('open-btn');
const navsBtn = document.querySelector('.navs');
openBtn.addEventListener('click',  () {
	navsBtn.style.display = 'flex';
	closeBtn.style.display = 'block';
	openBtn.style.display = 'none';
});
closeBtn.addEventListener('click', () => {
	openBtn.style.display = 'block';
	closeBtn.style.display = 'none';
	navsBtn.style.display = 'none';
});
