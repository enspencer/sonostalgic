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
        artists = new Array(),
        svg1 = d3.select('#life')
          .append('svg')
          .attr('height', h)
          .attr('width', w)
          .attr('id', 'timeline-graph')
          .style('border-top', '2px solid black');

      for (var i = 0; i < events.length; i++){
        var artist ={};
        artist.name = events[i].artist_name,
        artist.genre = events[i].genre,
        artist.description = events[i].description;
      artists.push(artist);
    };

    var line = svg1.append('svg:line')
            .attr('x1', w/2)
            .attr('y1', 0)
            .attr('x2', w/2)
            .attr('y2', h)
            .style('stroke', 'gray');

    line.attr('stroke-dasharray', w + " " + w)
        .attr('stroke-dashoffset', w)
        .transition()
          .duration(2000)
          .ease('linear')
          .attr('stroke-dashoffset', 0);

    for (var i = 0; i < timelineLength; i++){
        var thisHeight = i * yearHeight;
        var thisLine = svg1.append('svg:line')
            .attr('x1', 100)
            .attr('y1', thisHeight)
            .attr('x2', w/2)
            .attr('y2', thisHeight)
            .style('stroke', 'gray')
            .style('stroke-width', 2);

      thisLine.attr('stroke-dasharray', w + " " + w)
        .attr('stroke-dashoffset', w)
        .transition()
          .duration(2000)
          .ease('linear')
          .attr('stroke-dashoffset', 0),

        svg1.append('text')
            .text(function(d){
              return birthyear + i;
            })
            .attr('y', thisHeight - 8)
            .attr('x', 10)
            .attr('class', 'timeline-year')
            .attr('font-size', 20)
            .attr('font-family', 'Raleway')
        //     .on('mouseenter', function(d,i){
        //     d3.select('.rect' + i)
        //     .transition()
        //     .duration(30)
        //     .attr('fill', 'red');
        // });
    };

    for (var i = 0; i < events.length; i++){
      var thisYear = events[i].year;
      svg1.append('svg:rect')
          .attr('x', w/2 - 25)
          .attr('y', function(d){
            return (thisYear - birthyear) * yearHeight + 1;
          })
          .attr('width', 20)
          .attr('class', 'rect' + i)
          .attr('height', 68)
          .attr('rx', 8)
          .attr('ry', 8)
          .on('mouseenter', function(d,i){
            d3.select(this)
            .transition()
            .duration(30)
            .attr('fill', 'red');

            // d3.select('.event-artist' + i)
            // .transition()
            // .duration(30)
            // .attr('fill', 'red');
        })
          .on('mouseleave', function(d,i){
          d3.select(this)
              .transition()
              .duration(800)
              .attr('fill', 'black');

          // d3.select('.event-artist' + i)
          //   .transition()
          //   .duration(800)
          //   .attr('fill', 'black');
        }),

      svg1.append('svg:text')
          .text(function(d){
            return events[i].event_name + ": " + events[i].artist_name;
          })
          .attr('class', 'event-artist' + i)
          .attr('y', (thisYear - birthyear) * yearHeight + 40)
          .attr('x', w/2 + 20)
          .attr('font-size', 20)
          .attr('font-family', 'Raleway'),

      $('.event-artist' + i).tipsy({ 
        gravity: 'w', 
        html: true, 
        fade: true,
        offset: 2,
        title: function() {
          return artist.description; 
        }
      });
    };

    $('.share-button').tipsy({ 
        gravity: 'n', 
        html: true, 
        fade: true,
        offset: 2,
        title: function() {
          return 'copy this link: ' + document.URL; 
        }
});
    
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