Rails.application.routes.draw do
  resources :posts
  namespace :admin do
    get 'users/index'
  end
  resources :todos
  resources :products
  resources :images
  devise_for :users
  root "welcome#index"
  get '/dashboard', to: 'dashboard#index'
  get '/mytodo', to: 'todos#mytodo'
  get '/update_completed', to:  'todos#update_completed'
  post '/posts/upload_image', to: 'posts#upload_image'
  namespace :admin do
    resources :users
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
