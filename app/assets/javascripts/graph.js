var Nostalgic = {

  getTimeline: function(timeline){
    Nostalgic.plotTimeline(timeline);
  },

  plotTimeline: function(timeline) {
    var yearHeight = 70,
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

    var line = svg1.append('svg:line')
            .attr('x1', w/2)
            .attr('y1', 0)
            .attr('x2', w/2)
            .attr('y2', h)
            .style('stroke', 'gray');

for (var i = 0; i < timelineLength ; i++){
        var thisHeight = i * yearHeight;
        svg1.append('svg:line')
            .attr('x1', 0)
            .attr('y1', thisHeight)
            .attr('x2', w)
            .attr('y2', thisHeight)
            .style('stroke', 'gray')
            .style('stroke-width', 2),

        svg1.append('text')
            .text(function(d){
              return birthyear + i;
            })
            .attr('y', thisHeight - 5)
            .attr('x', 10)
            .attr('class', 'timeline-year')
            .attr('font-size', 20)
            .attr('font-family', 'Raleway');
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