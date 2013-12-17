class TimelineSerializer < ActiveModel::Serializer
  attributes :id, :title, :birthyear

  has_many :events
end