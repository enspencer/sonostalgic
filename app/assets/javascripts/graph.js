// var Nostalgic = {

//   getTimeline: function(id){
//     $.ajax({
//       url: '/timelines/' + id,
//       type: 'GET',
//       dataType: 'json',
//       success: function(timeline){
//         console.log(timeline);
//       }

//     });
//   },

// };

$(function(){
  $.ajax({
      url: '/timelines/' + $('.timeline-id').attr('id'),
      type: 'GET',
      dataType: 'json',
      success: function(timeline){
        console.log(timeline);
      }

    });
});

//   plotLife: function(data){
//   title: document.getElementById('title'),
//   el: document.getElementById('life')
// }