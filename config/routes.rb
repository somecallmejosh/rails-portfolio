Rails.application.routes.draw do
  resources :projects
  get '/contact', to: 'static_pages#contact'
  get '/', to: 'static_pages#home'
  root 'static_pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
