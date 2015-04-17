Rails.application.routes.draw do
  # resources :artworks

scope "/admin" do
    resources :artworks do
      collection do
        post :sort
      end
    end
  end

  root 'static#home'

  get 'artworks' => 'static#artwork'
  get 'instagram' => 'static#instagram'
  get 'photos' => 'static#photos'
  get 'abstract' => 'static#abstract'
  get 'contact' => 'static#contact'

end
