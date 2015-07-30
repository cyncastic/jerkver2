class Blog < ActiveRecord::Base

  validates :title, :img, presence: true

  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h
  mount_uploader :img, JerkfaceUploader

end
