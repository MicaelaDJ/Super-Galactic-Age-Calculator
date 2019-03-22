/* eslint-disable no-unused-vars */
import Date from "./galacticagecalculator.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';


$(document).ready(function() {
  $("form#planet").submit(function(event) {
    event.preventDefault();
    let countDays=0;
    let year = parseInt($("input#year").val());
    let month = parseInt($("input#month").val());
    let day = parseInt($("input#day").val());
    let date = new Date(year, month, day, countDays);
    countDays+=date.leapYear(year, month, day, countDays);
    date.getDay(countDays);
    let result = date.getDay(countDays);
    $("#result").text(result);
    date.resetDays(year, month, day);

  });
});
/* eslint-disable no-unused-vars */
