class Event < ActiveRecord::Base
  belongs_to :timeline
  has_and_belongs_to_many :artists
end