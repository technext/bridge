"use strict";

/*-----------------------------------------------
|   Sementic UI Accordion
-----------------------------------------------*/
$(document).ready(function () {
  var uiAccordion = $('.ui.accordion');

  if (uiAccordion.length) {
    uiAccordion.each(function (index, value) {
      var $this = $(value);
      $this.accordion($.extend({
        exclusive: false
      }, $this.data('options') || {}));
    });
  }
});