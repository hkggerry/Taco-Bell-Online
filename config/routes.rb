Rails.application.routes.draw do
  
  # resources :carts, only: [:index, :create, :update, :destroy]
  resources :customers, only: [:index, :show, :create]

  delete '/logout', to: "sessions#destroy"
  post "/login", to: "sessions#create"
  post "/signup", to: "customers#create"
  get '/me', to: "customers#show"

  # resources :menu_categories
  # resources :categories

  # resources :menus
  

end
