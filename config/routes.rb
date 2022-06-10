Rails.application.routes.draw do
  # get 'posts', to: 'posts#index'
  # get 'posts/new', to: 'posts#new'
  root to: 'posts#index'
  post 'posts', to: 'posts#create'
end
