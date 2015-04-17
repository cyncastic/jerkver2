class ArtworkUpdate < ActiveRecord::Migration
  def change

    remove_column :artworks, :sold
    remove_column :artworks, :price

    rename_column :artworks, :img_url, :image

  end
end
