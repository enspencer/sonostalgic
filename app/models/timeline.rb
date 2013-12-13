class Timeline < ActiveRecord::Base
  has_many :events
  has_many :artists, through: :events
  # accepts_nested_attributes_for :events, reject_if: :all_blank, allow_destroy: true, :update_only => true

end