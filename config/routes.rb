Rails.application.routes.draw do

  root 'static#home'

  get 'work' => 'static#artwork'
  get 'instagram' => 'static#instagram'
  get 'abstract' => 'static#abstract'
  get 'contact' => 'static#contact'

  scope "/admin" do

    get '/' => 'static#admin'

    resources :artworks do
      collection do
        post :sort
      end
    end
    
  end

end
