Rails.application.routes.draw do
  # resources :artworks

  resources :artworks do
    collection do
      post :sort
    end
  end

  root 'static#home'

  # get 'artwork' => 'static#artwork'
  get 'instagram' => 'static#instagram'
  get 'photos' => 'static#photos'
  get 'abstract' => 'static#abstract'
  get 'contact' => 'static#contact'

end
