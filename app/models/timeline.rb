class Timeline < ActiveRecord::Base
  has_many :events
  has_many :artists, through: :events

  validates :title, presence: true

  accepts_nested_attributes_for :events, :reject_if => lambda { |a| a[:content].blank? }

end