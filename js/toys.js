const rangeInput = document.querySelector('.range-field');

function handleInputChange(event) {
    let target = event.target;
    if (event.target.type !== 'range') {
      target = document.getElementById('range');
    } 
    const minValue = target.min;
    const maxValue = target.max;
    const currentValue = target.value;
    
    target.style.backgroundSize = (currentValue - minValue) * 100 / (maxValue - minValue) + '% 100%';
  }
  
    rangeInput.addEventListener('input', handleInputChange);