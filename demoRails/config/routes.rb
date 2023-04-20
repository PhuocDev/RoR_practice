Rails.application.routes.draw do
  get 'joke', to: 'joke#show'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'pages#home'
  get 'contact', to: 'pages#contact'
  get 'about', to: 'pages#about'
end
