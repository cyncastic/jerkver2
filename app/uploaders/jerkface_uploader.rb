# encoding: utf-8

class JerkfaceUploader < CarrierWave::Uploader::Base

  include CarrierWave::RMagick

  # storage :file
  storage :fog

  def store_dir
    Rails.env.production? ? (primary_folder = "production") : (primary_folder = "test")
    "uploads/#{primary_folder}/#{model.class.to_s.underscore}/"
  end

  version :large do
    process :strip
    process :quality => 100
    process :resize_to_limit => [960, 960]
  end

  version :thumb do
    process :crop
    process :resize_to_fill => [336, 336]
  end

  version :icon do
    process :crop
    process :resize_to_fill => [64, 64]
  end

  def crop
    if model.crop_x.present?
      resize_to_limit(950, 950)
      manipulate! do |img|
        x = model.crop_x.to_i
        y = model.crop_y.to_i
        w = model.crop_w.to_i
        h = model.crop_h.to_i
        img.crop!(x, y, w, h)
      end
    end
  end

  # Strips out all embedded information from the image
  def strip
    manipulate! do |img|
      img.strip!
      img = yield(img) if block_given?
      img
    end
  end

  # Reduces the quality of the image to the percentage given
  def quality(percentage)
    manipulate! do |img|
      img.write(current_path){ self.quality = percentage }
      img = yield(img) if block_given?
      img
    end
  end

end
