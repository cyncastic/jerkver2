class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :post
      t.date :posted
      t.string :img

      t.timestamps null: false
    end
  end
end
