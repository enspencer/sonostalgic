class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_name, :year, :timeline_id, :artist_id

  has_one :timeline
  has_one :artist
end
