Rails.application.routes.draw do
  resources :user_stocks
  root 'pages#home'
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get 'my_portfolio', to: 'users#my_portfolio'
  get 'search_stock', to: 'stocks#search'
  delete 'user_stocks', to: 'user_stocks#destroy'
  get 'my_friends', to: 'users#my_friends'
  get 'search_friend', to: 'users#search'
  delete 'my_friends', to: 'users#destroy_friends'
  post 'my_friends', to: 'users#add_friends'
  post 'friend_stocks', to: 'users#view_stocks'
end
