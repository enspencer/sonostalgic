class CreateTimelines < ActiveRecord::Migration
  def change
    create_table :timelines do |t|
      t.integer :birthyear
      t.text :title
    end
  end
end
