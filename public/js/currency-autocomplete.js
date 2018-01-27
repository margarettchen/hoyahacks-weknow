$(function(){
  var schools = [
    { value: 'University of Virginia'},
    { value: 'Virginia Tech'},
    { value: 'Georgetown University'},
    { value: 'University of Pennsylvania'},
    { value: 'College of William & Mary'},
    { value: 'Duke University'},
    { value: 'Oberlin College'},
    { value: 'Clemson University'},
    { value: 'Catholic University'},
    { value: 'Yale University'},
    { value: 'Brown University'},
    { value: 'Lehigh University'},
    { value: 'James Madison University'},
    { value: 'Radford University'},
  
  ];


  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: schools,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});