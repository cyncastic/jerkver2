class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.integer :width, null: false
      t.integer :height, null: false

      t.timestamps null: false
    end
  end
end
