document.getElementById('search-button').addEventListener('click', function() {
    const destination = document.getElementById('destination-input').value;
    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;

    if (destination && checkInDate && checkOutDate) {
        alert(`No results from ${destination} from ${checkInDate} to ${checkOutDate}`);
    } else {
        alert('Please fill in all fields');
    }
});

  
  function changeButtonText(newText) {
    document.querySelector('.dropbtn').innerText = newText;
  }
  
  function changeButtonText2(newText2) {
    document.querySelector('.dropbtn2').innerText = newText2;
  }