Rails.application.routes.draw do
  resources :artworks

  root 'static#home'

  # get 'artwork' => 'static#artwork'
  get 'instagram' => 'static#instagram'
  get 'photos' => 'static#photos'
  get 'abstract' => 'static#abstract'
  get 'contact' => 'static#contact'

end
