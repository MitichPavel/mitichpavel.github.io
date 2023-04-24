window.addEventListener("DOMContentLoaded", (event) => {
  const formBirthday = document.querySelector('#birthday');
  const inputDateBirthday = formBirthday.querySelector('input[type="date"]');
  const date_input_value = document.querySelector('#date_input_value');
  const n1 = formBirthday.querySelector('#n1');
  const n2 = formBirthday.querySelector('#n2');
  const n3 = formBirthday.querySelector('#n3');
  const n4 = formBirthday.querySelector('#n4');
  const n5 = formBirthday.querySelector('#n5');
  const n6 = formBirthday.querySelector('#n6');
  const n7 = formBirthday.querySelector('#n7');
  const n8 = formBirthday.querySelector('#n8');
  const n9 = formBirthday.querySelector('#n9');
  const n10 = formBirthday.querySelector('#n10');
  const n11 = formBirthday.querySelector('#n11');
  const n12 = formBirthday.querySelector('#n12');

  function get_arkan(count) {
    const rounded = +count % 22;
    if (rounded === 0) {
      return 22;
    }

    if (rounded < 0) {
      return rounded + 22;
    }

    return rounded;
  }

  function sum_year(year) {
    return year.split('').reduce((acc, number) => +acc + +number, 0)
  }
  inputDateBirthday.addEventListener('input', (e) => {
    const date = e.target.value;
    let [year, month, day] = date.split('-');

    const pos1 = get_arkan(day);
    const pos2 = get_arkan(month);
    const pos3 = get_arkan(pos1 + pos2);
    const pos4 = get_arkan(sum_year(year));
    const pos5 = get_arkan(pos2 + pos4);
    const pos6 = get_arkan(pos3 + pos5);
    const pos7 = get_arkan(pos3 + pos4);
    const pos8 = get_arkan(pos2 + pos6);
    const pos9 = get_arkan(pos7 + pos8);
    const pos10 = get_arkan(pos1 - pos2);
    const pos11 = get_arkan(pos2 - pos4);
    const pos12 = get_arkan(pos10 - pos11);

    n1.innerText = pos1;
    n2.innerText = pos2;
    n3.innerText = pos3;
    n4.innerText = pos4;
    n5.innerText = pos5;
    n6.innerText = pos6;
    n7.innerText = pos7;
    n8.innerText = pos8;
    n9.innerText = pos9;
    n10.innerText = pos10;
    n11.innerText = pos11;
    n12.innerText = pos12;
    // date_input_value.innerText = year + '_' + month + '_' + day;
  });
  // console.log("DOM fully loaded and parsed");
});