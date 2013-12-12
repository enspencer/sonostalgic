class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :events, :timeline_id_id, :timeline_id
  end
end
