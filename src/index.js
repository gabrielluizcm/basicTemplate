(function () {
  document.addEventListener('click', function (e) {
    if (e.target.id === 'alertText') {
      const inputVal = document.querySelector('#textInput').value.trim()
      alert(inputVal !== '' ? inputVal : 'Empty input');
    }
  })
})();