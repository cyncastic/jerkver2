class StaticController < ApplicationController

  skip_before_filter :authorize, except: [:admin]

  def home
  end

  def artwork
    @categories = Category.all
    @artwork = *Artwork.order("RANDOM()").first
  end

  def abstract
  end

  def contact
  end

  def admin
  end
  
end
