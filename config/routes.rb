Rails.application.routes.draw do

  root 'static#home'

  get 'work' => 'static#artwork'
  get 'contact' => 'static#contact'

  scope "/admin" do

    resources :users
    
    resources :artworks do
      collection do
        post :sort
      end
    end
    
  end

  get '/admin' => 'static#admin'

  controller :sessions do
    get 'login' => :new
    post 'login' => :create
    delete 'logout' => :destroy
  end

end
