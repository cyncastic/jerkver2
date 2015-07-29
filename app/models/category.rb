class Category < ActiveRecord::Base
  
  has_many :artworks

  def name
    width.to_s + 'x' +height.to_s
  end

  def area
    width * height
  end

  before_destroy :ensure_category_has_no_artwork

  private
  
  def ensure_category_has_no_artwork
    if artworks.empty?
      return true 
    else
      errors.add(:base, 'Line Items present')
      return false
    end
  end

end
