// https://www.omnicalculator.com/health/blood-sugar

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const convertedRadio = document.getElementById('convertedRadio');
const glucoselevelRadio = document.getElementById('glucoselevelRadio');

let converted;
let glucoselevel = v; 

// labels of the inpust
const variable = document.getElementById('variable');

convertedRadio.addEventListener('click', function() {
  variable.textContent = 'Glucose level';
  glucoselevel = v;
  result.textContent = '';
});

glucoselevelRadio.addEventListener('click', function() {
  variable.textContent = 'Blood sugar';
  converted = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(convertedRadio.checked)
    result.textContent = `Blood sugar = ${computeconverted().toFixed(5)}`;

  else if(glucoselevelRadio.checked)
    result.textContent = `Glucose level = ${computeglucoselevel().toFixed(5)}`;
})

// calculation

function computeconverted() {
  return Number(glucoselevel.value) * 18;
}

function computeglucoselevel() {
  return Number(converted.value) / 18;
}