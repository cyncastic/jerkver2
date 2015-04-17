class Artwork < ActiveRecord::Base

  belongs_to :categories

  has_one :category, through: :category_id

  validates :title, :image, :category_id, presence: true

  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h

  after_update :crop_avatar

  mount_uploader :image, JerkfaceUploader

  def crop_avatar
    image.recreate_versions! if crop_x.present?
  end

end
