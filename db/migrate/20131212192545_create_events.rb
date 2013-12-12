class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :year
      t.belongs_to :timeline_id, index: true
      t.text :event_name

      t.timestamps
    end
  end
end
