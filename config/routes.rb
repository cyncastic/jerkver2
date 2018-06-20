Rails.application.routes.draw do

  resources :categories

  root 'static#newv2_walls'

  get 'work' => 'static#artwork'
  get 'contact' => 'static#contact'
  get 'instagram' => 'static#instagram'

  scope "/admin" do

    resources :users
    
    resources :artworks do
      collection do
        post :sort
      end
    end

    resources :walls do
      collection do
        post :sort
      end
    end

    resources :blogs do
      collection do
        post :sort
      end
    end
    
  end

  get '/walls' => 'static#walls'
  get '/walls2' => 'static#newv2_walls'
  get '/admin' => 'static#admin'

  controller :sessions do
    get 'login' => :new
    post 'login' => :create
    delete 'logout' => :destroy
  end

end
