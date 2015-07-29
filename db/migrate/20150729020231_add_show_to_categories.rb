class AddShowToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :show, :boolean
  end
end
