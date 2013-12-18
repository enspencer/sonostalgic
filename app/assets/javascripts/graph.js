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

      // var elem = svg1.selectAll('g lineText').data(events),
      //   elemEnter = elem.enter()
      //                   .append('g')
      //                   .attr('transform', function(d){return "translate(0,'+Math.abs(d.year-birthyear)+'')"});

      // var line = elemEnter.append('svg:line')
      //         .attr('x1', 0)
      //         .attr('y1', function(d, i){ i * yearHeight })
      //         .attr('x2', w)
      //         .attr('y2', function(d, i){ i * yearHeight })
      //         .style('stroke', 'gray')
      //         .style('stroke-width', 2);

      //   elemEnter.append('text')
      //             .attr('dx', function(d){return -20})
      //             .text(function(d){return d.year});

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
              return birthyear + d;
            })
            .attr('y', thisHeight - 5)
            .attr('x', 10)
            .attr('font-size', 25);
};

    var line = svg1.append('svg:line')
        .attr('x1', w/2)
        .attr('y1', 0)
        .attr('x2', w/2)
        .attr('y2', h)
        .style('stroke', 'gray');
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