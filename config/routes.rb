Rails.application.routes.draw do
  
  resources :menu_categories
  resources :categories
  resources :carts
  resources :menus
  resources :customers
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
