Rails.application.routes.draw do
  root 'messages#index'
  resources :messages
  # resources :todo_items
  
  # resources :todos
   # root 'landing#index'
  get 'landing/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
