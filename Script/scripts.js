function updateTableNames() {
  // Declare variables 
  // Declare variables 
  var input, filter, table, tr, td, i, k;
  input = document.getElementById("searchNames");
  filter = input.value.toLowerCase();
  table = document.getElementById("blockchain_table");
  tr = table.getElementsByTagName("tr");

  for(i = 0; i < tr[2].getElementsByTagName('td').length; i++){
    if(tr[2].getElementsByTagName("td")[i].innerHTML.toLowerCase().indexOf(filter) > -1){
        tr[0].getElementsByTagName('th')[i+1].style.display = '';
        for(k = 1; k < 7; k++){
            tr[k].getElementsByTagName("td")[i].style.display = '';
        }
    }
    else{
        tr[0].getElementsByTagName('th')[i+1].style.display = 'none';
        for(k = 1; k < 7; k++){
            tr[k].getElementsByTagName("td")[i].style.display = 'none';
        }
    }
  }
}

function updateTableDates() {
  // Declare variables 
  // Declare variables 
  var input, filter, table, tr, td, i, k;
  input = document.getElementById("searchDates");
  filter = input.value.toLowerCase();
  table = document.getElementById("blockchain_table");
  tr = table.getElementsByTagName("tr");

  for(i = 0; i < tr[3].getElementsByTagName('td').length; i++){
    if(tr[3].getElementsByTagName("td")[i].innerHTML.toLowerCase().indexOf(filter) > -1){
        tr[0].getElementsByTagName('th')[i+1].style.display = '';
        for(k = 1; k < 7; k++){
            tr[k].getElementsByTagName("td")[i].style.display = '';
        }
    }
    else{
        tr[0].getElementsByTagName('th')[i+1].style.display = 'none';
        for(k = 1; k < 7; k++){
            tr[k].getElementsByTagName("td")[i].style.display = 'none';
        }
    }
  }
}

function updateTableProducts() {
  // Declare variables 
  // Declare variables 
  var input, filter, table, tr, td, i, k;
  input = document.getElementById("searchProducts");
  filter = input.value.toLowerCase();
  table = document.getElementById("blockchain_table");
  tr = table.getElementsByTagName("tr");

  for(i = 0; i < tr[4].getElementsByTagName('td').length; i++){
    if(tr[4].getElementsByTagName("td")[i].innerHTML.toLowerCase().indexOf(filter) > -1){
        tr[0].getElementsByTagName('th')[i+1].style.display = '';
        for(k = 1; k < 7; k++){
            tr[k].getElementsByTagName("td")[i].style.display = '';
        }
    }
    else{
        tr[0].getElementsByTagName('th')[i+1].style.display = 'none';
        for(k = 1; k < 7; k++){
            tr[k].getElementsByTagName("td")[i].style.display = 'none';
        }
    }
  }
}