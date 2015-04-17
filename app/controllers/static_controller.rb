class StaticController < ApplicationController
  def home
  end

  def artwork
    @categories = Category.all
  end

  def instagram
  end

  def abstract
  end

  def contact
  end
end
