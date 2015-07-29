class StaticController < ApplicationController

  skip_before_filter :authorize, except: [:admin]

  def home
  end

  def artwork
    @categories = Category.where(show: true).sort_by(&:area)
  end

  def walls
    @years = Wall.uniq.pluck(:year)
  end

  def contact
  end

  def admin
  end
  
end
