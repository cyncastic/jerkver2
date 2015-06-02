class AddLocationToWalls < ActiveRecord::Migration
  def change
    add_column :walls, :location, :string
  end
end