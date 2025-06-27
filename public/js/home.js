function activateAccordionRetail(element) {
    document.querySelectorAll('.accordion-item.retail').forEach(item => {
      item.classList.remove('active');
    });
    element.classList.add('active');
  }

  function activateAccordionLovers(element) {
    document.querySelectorAll('.accordion-item.lovers').forEach(item => {
      item.classList.remove('active');
    });
    element.classList.add('active');
  }

  function activateAccordionAutoBio(element) {
    document.querySelectorAll('.accordion-item.auto-biomarkt').forEach(item => {
      item.classList.remove('active');
    });
    element.classList.add('active');
  }

$('.accordion-horizontal .accordion-item').click(function () {
    const parent = $(this).parent(); // wrapper
    parent.find('.accordion-item').removeClass('active');
    $(this).addClass('active');
});
