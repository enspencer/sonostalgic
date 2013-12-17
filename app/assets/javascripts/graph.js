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
          .attr('width', w)
          .attr('id', 'timeline-graph')
          .style('border-top', '2px solid black');
        // svg2 = d3.select('#life')
        //   .append('svg')
        //   .attr('height', h)
        //   .attr('width', w/2)
        //   .attr('id', 'timeline-graph')
        //   .style('border-top', '2px solid black'),
for (var i = 1; i < timelineLength ; i++){
        var thisHeight = i * yearHeight;
        svg1.append('svg:line')
            .attr('x1', 0)
            .attr('y1', thisHeight)
            .attr('x2', w)
            .attr('y2', thisHeight)
            .style('stroke', 'black')
            .style('stroke-width', 2);
};

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