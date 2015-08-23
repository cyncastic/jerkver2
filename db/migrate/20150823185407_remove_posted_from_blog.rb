class RemovePostedFromBlog < ActiveRecord::Migration
  def change
    remove_column :blogs, :post
    remove_column :blogs, :posted
  end
end
