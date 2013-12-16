class Timeline < ActiveRecord::Base
  has_many :events
  has_many :artists, through: :events

  accepts_nested_attributes_for :events, :reject_if => lambda { |a| a[:content].blank? }
  accepts_nested_attributes_for :artists

end