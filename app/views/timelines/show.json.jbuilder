json.(@timeline, :id, :title, :birthyear)
json.events @timeline.events do |json, event|
  json.(event, :year, :event_name)
  json.(event.artist, :artist_name, :description, :genre)
end