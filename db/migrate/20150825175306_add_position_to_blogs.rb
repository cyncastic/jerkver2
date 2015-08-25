class AddPositionToBlogs < ActiveRecord::Migration
  def change
    add_column :blogs, :position, :integer, :default => 0
  end
end
