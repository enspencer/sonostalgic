class Event < ActiveRecord::Base
  belongs_to :timeline
  belongs_to :artist

end