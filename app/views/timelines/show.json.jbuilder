json.(@timeline, :id, :title)
json.events @timeline.events do |json, event|
  json.(event, :year, :event_name)
  json.(event.artist, :artist_name)
end