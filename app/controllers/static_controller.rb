class StaticController < ApplicationController

  def home
  end

  def artwork
    @categories = Category.all
    @artwork = *Artwork.order("RANDOM()").first
  end

  def instagram
  end

  def abstract
  end

  def contact
  end

  def admin
  end
  
end
