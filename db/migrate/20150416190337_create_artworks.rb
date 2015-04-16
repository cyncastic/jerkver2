class CreateArtworks < ActiveRecord::Migration
  def change
    create_table :artworks do |t|
      t.integer :category_id, null: false
      t.string :title, null: false
      t.string :medium
      t.integer :year
      t.integer :price
      t.boolean :sold
      t.string :img_url
      t.integer :position,  default: 0

      t.timestamps null: false
    end
  end
end
