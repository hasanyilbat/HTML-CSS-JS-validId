//* Üzerinde basit bir pariteyle hata bulma özelliği bulunmaktadır; ilk 10 rakamın toplamının birler basamağı, 11. rakamı vermektedir. Bu algoritmayı kullanan oluşturucularla yaklaşık 900 milyon kadar geçerli T.C. kimlik numarası üretilebilmektedir.[1]

//* Ayrıca; 1, 3, 5, 7 ve 9. rakamın toplamının 7 katı ile 2, 4, 6 ve 8. rakamın toplamının 9 katının toplamının birler basamağı 10. rakamı; 1, 3, 5, 7 ve 9. rakamın toplamının 8 katının birler basamağı 11. rakamı vermektedir.

const btn = document.querySelector(".checkId");
const num = document.querySelector(".tc-input");
const sonuc = document.querySelector(".sonuc");

btn.addEventListener("click", () => {
  if (validTC(Number(num.value))) {
    sonuc.innerHTML = `<p> This Id is valid</p>`;
    console.log(num.value);
  } else {
    sonuc.innerHTML = `<p> This Id is not valid</p>`;
  }
});

const sumControl = (num) => {
  const arr = String(num).split("");
  let toplam = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    toplam += Number(arr[i]);
  }

  if (String(toplam)[1] == arr[arr.length - 1]) {
    return true;
  }
};

const odd_arr = [];
const even_arr = [];
const multipleControl = (num) => {
  const arr = String(num).split("");
  for (let i = 0; i < arr.length - 2; i++) {
    if (i % 2 == 0) {
      odd_arr.push(Number(arr[i]));
    } else {
      even_arr.push(Number(arr[i]));
    }
  }
  const odd_sum = odd_arr.reduce((x, y) => x + y);

  const even_sum = even_arr.reduce((x, y) => x + y);

  const multipleSum = odd_sum * 7 + even_sum * 9;
  const indexten = odd_sum * 8;
  if (String(multipleSum[1] === arr[9]) && String(indexten[1] === arr[10])) {
    return true;
  }
};

const control = (num) => {
  const arr = String(num).split("");
  if (arr.length === 11 && arr[0] !== 0) {
    return true;
  }
};

const validTC = (num) => {
  if (control(num) && multipleControl(num) && sumControl(num)) {
    return true;
  } else {
    return false;
  }
};

console.log(validTC(11944062108));
