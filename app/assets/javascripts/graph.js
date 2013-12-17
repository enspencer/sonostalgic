var Nostalgic = {

  getTimeline: function(timeline){
    Nostalgic.plotTimeline(timeline);
  },

  plotTimeline: function(timeline) {
    var yearHeight = 50,
        birthyear = timeline.birthyear,
        currentDate = new Date(),
        currentYear = currentDate.getFullYear(),
        timelineLength = 2014 - birthyear,
        h = yearHeight * timelineLength,
        w = 1000,
        events = timeline.events,
        svg1 = d3.select('#life')
          .append('svg')
          .attr('height', h)
          .attr('width', w/2)
          .attr('id', 'timeline-graph')
          .style('border-top', '2px solid black')
          .style('border-right', '2px dotted black'),
        svg2 = d3.select('#life')
          .append('svg')
          .attr('height', h)
          .attr('width', w/2)
          .attr('id', 'timeline-graph')
          .style('border-top', '2px solid red'),
          
        height = d3.scale
                  .linear()
                  .domain([0, ])
                  .range([0, timelineLength])


  }

};

$(function(){
  $.ajax({
      url: '/timelines/' + $('.timeline-id').attr('id'),
      type: 'GET',
      dataType: 'json',
      success: function(timeline){
        Nostalgic.getTimeline(timeline);
      }

    });
});

//   plotLife: function(data){
//   title: document.getElementById('title'),
//   el: document.getElementById('life')
// }