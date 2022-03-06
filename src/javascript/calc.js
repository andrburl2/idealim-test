import $ from 'jquery';

function calc() {
  // если опция уже выбрана, то ничего не делаем
  if ($(this).hasClass('calc__option_selected')) return;

  // считаем итоговую сумму
  const cost = this.dataset.duration * this.dataset.price + 10;

  // ставим новую длительность и стоимость
  $('.calc__result-duration').text(this.dataset.duration);
  $('.calc__result-cost').text(`$${cost}`);

  // убираем класс selected, затем устанавливаем его у выбранного
  $('.calc__option').removeClass('calc__option_selected');
  $(this).addClass('calc__option_selected');
}

export default calc;