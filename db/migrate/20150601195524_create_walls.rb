class CreateWalls < ActiveRecord::Migration
  def change
    create_table :walls do |t|
      t.string :title
      t.integer :year
      t.string :image
      t.integer :position

      t.timestamps null: false
    end
  end
end
