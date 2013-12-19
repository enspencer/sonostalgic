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

    for (var i = 0; i < timelineLength; i++){
        var thisHeight = i * yearHeight;
        svg1.append('svg:line')
            .attr('x1', 100)
            .attr('y1', thisHeight)
            .attr('x2', w - 100)
            .attr('y2', thisHeight)
            .style('stroke', 'gray')
            .style('stroke-width', 2),

        svg1.append('text')
            .text(function(d){
              return birthyear + i;
            })
            .attr('y', thisHeight - 8)
            .attr('x', 10)
            .attr('class', 'timeline-year')
            .attr('font-size', 20)
            .attr('font-family', 'Raleway');
    };

    for (var i = 0; i < events.length; i++){
      var thing = events[i].year;
      svg1.append('svg:rect')
          .attr('x', w/2 - 25)
          .attr('y', function(d){
            return (thing - birthyear) * yearHeight + 1;
          })
          .attr('width', 20)
          .attr('height', 68)
          .attr('rx', 8)
          .attr('ry', 8),

      svg1.append('svg:text')
          .text(function(d){
            return events[i].artist_name + events[i].event_name;
          })
          .attr('y', (thing - birthyear) * yearHeight - 8)
          .attr('x', w/2 + 10)
          .attr('class', 'event-artist')
          .attr('font-size', 20)
          .attr('font-family', 'Raleway');
    };
    
  }
  // end plotTimeline function

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