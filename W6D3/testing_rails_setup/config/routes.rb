Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  
  get "silly", to: "silly#working_hard"
  post "silly", to: "silly#compensation"
  post "silly/:id", to: "silly#fired"

  resources :superheroes  do
    resources :abilities, only: [:index]
  end

  resources :abilities, only: [:show, :update, :create, :destroy]
end
