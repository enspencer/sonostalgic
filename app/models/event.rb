class Event < ActiveRecord::Base
  belongs_to :timeline
  belongs_to :artist

  validates :event_name, presence: true
  validates :year, presence: true

  accepts_nested_attributes_for :artist
end