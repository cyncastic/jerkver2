class Wall < ActiveRecord::Base

  validates :title, :image, presence: true

  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h

  after_update :crop_avatar

  mount_uploader :image, JerkfaceUploader

  def crop_avatar
    image.recreate_versions! if crop_x.present?
  end
  
end
