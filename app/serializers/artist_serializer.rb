class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :artist_name, :genre

  has_many :events
end
