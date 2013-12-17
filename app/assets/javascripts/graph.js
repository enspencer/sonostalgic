var Nostalgic = {

  getTimeline: function(events){
    console.log(events);
  }

};

$(function(){
  $.ajax({
      url: '/timelines/' + $('.timeline-id').attr('id'),
      type: 'GET',
      dataType: 'json',
      success: function(events){
        Nostalgic.getTimeline(events);
      }

    });
});

//   plotLife: function(data){
//   title: document.getElementById('title'),
//   el: document.getElementById('life')
// }