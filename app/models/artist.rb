class Artist < ActiveRecord::Base
  has_and_belongs_to_many :events
  has_many :timelines, through: :events

end