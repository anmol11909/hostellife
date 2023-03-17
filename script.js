function showAddressOnHover() {
  var names = document.getElementsByClassName('name');
  for (var i = 0; i < names.length; i++) {
    names[i].addEventListener('mouseover', function() {
      var addressCell = this.parentNode.getElementsByTagName('td')[3];
      var address = addressCell.innerHTML;
      alert(address);
    });
  }
}

showAddressOnHover();
