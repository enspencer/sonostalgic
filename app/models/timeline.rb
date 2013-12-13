class Timeline < ActiveRecord::Base
  has_many :events
  has_many :artists, through: :events
  
  # accepts_nested_attributes_for :events

end