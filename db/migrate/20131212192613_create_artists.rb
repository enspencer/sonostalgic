class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.text :artist_name
      t.text :genre
      t.text :description

      t.timestamps
    end
  end
end
