// ! Бургер
window.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#burger').addEventListener('click', function () {
		document.querySelector('#menu').classList.toggle('is-active');
	});
	//? Чтобы добавлялся или удалялся класс по тому месту текста, которое мы кликаем
	document.querySelectorAll('.text').forEach(function (el) {
		el.addEventListener('click', function (event) {
			// console.log(event)
			event.target.classList.toggle('alert');
		});
	});
});
// // ! Слайдер
// const swiper = new Swiper('.swiper', {
// 	// Optional parameters
// 	direction: 'vertical',
// 	loop: true,
// 	// If we need pagination
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},
// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	// And if we need scrollbar
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// });
//! Табы
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.tabs_btn').forEach(function(tabsBtn) {
                tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
// console.log(path)
            document.querySelectorAll('.tab-content').forEach(function(tabContent){
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})