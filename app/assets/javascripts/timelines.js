var Nostalgic = {}

Nostalgic.getTimelines = function() {
  $.ajax({
    url: '/timelines.json',
    dataType: 'json',
    success: function(data) {
      Nostalgic.render_timelines(data);
    }
    });
};

Nostalgic.render_timelines = function(data) {
  $(data.each(function(index, timeline){
    $('.timelines').append("<div class='timeline'>" + timeline.title + "</div>")
    }));
};

Nostalgic.newTimeline = function() {
  $.ajax({
    url: '/new',
    dataType: 'json',
    success: function(data) {
      Nostalgic.
    }
    })
}

# $(document).ready(function() {
#   Nostalgic.getTimelines();
#   $('.timeline-create-button').click(function(event){
#     event.preventDefault();
#     Nostalgic.newTimeline();
#   })
#   });