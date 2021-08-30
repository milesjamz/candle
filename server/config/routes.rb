Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      resources :users
      resources :follows
      post '/users/:id/follow', to: "users#follow"
      post '/users/:id/unfollow', to: "users#unfollow"
    end
  end
end

