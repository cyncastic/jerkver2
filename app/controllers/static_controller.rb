class StaticController < ApplicationController

  skip_before_filter :authorize, except: [:admin]

  def home
    @blogs = Blog.where(visible: true).order("position")
  end

  def artwork
    @categories = Category.where(show: true).sort_by(&:area)
  end

  def walls
    @years = Wall.uniq.pluck(:year).sort_by(&:year).reverse
  end

  def contact
  end

  def admin
  end
  
end
