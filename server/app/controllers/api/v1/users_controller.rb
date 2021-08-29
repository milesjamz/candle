class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :show, :update]
    # before_action :authorized, only: [:auto_login]

   
    def profile
      render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end
   
    def create
      @user = User.create(user_params)
      if @user.valid?
        @token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
      end
    end
  
    # def login
    #   @user = User.find_by(username: params[:username])
  
    #   if @user && @user.authenticate(params[:password])
    #     token = encode_token({user_id: @user.id})
    #     render json: {user: @user, token: token}
    #   else
    #     render json: {error: "Invalid username or password"}
    #   end
    # end
  
  
    # def auto_login
    #   render json: @user
    # end

    def index
      users = User.all
      render json: users
    end
  
    def show
      user = User.find(params[:id])
      render json: user
    end
  
    def update
      user = User.find(params[:id])
        permitted_columns = params.require(:user).permit()
        user.update_attributes(permitted_columns)
      # user.update(location: params[:location])
      if user.save
        render json: user
      end
    end
  
  
  # end
  
    private
   
    def user_params
      params.require(:user).permit(:username, :password)
    end
  end