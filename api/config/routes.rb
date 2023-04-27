Rails.application.routes.draw do
  resources :categories
  resources :authors
  resources :blogs do
    get 'categories', to: 'blogs#categories'
    post 'categories', to: 'blogs#add_categories'
  end
  get 'get_all_categories', to: 'blogs#get_all_categories'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
