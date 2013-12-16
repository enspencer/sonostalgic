class Artist < ActiveRecord::Base
  has_many :events
  has_many :timelines, through: :events

  validates :artist_name, presence: true

end