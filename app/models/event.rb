class Event < ActiveRecord::Base
  belongs_to :timeline
  has_and_belongs_to_many :artists

  accepts_nested_attributes_for :artists
end