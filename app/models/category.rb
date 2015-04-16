class Category < ActiveRecord::Base


  def name
    width.to_s + 'x' +height.to_s
  end

end
