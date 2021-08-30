class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :index, :show, :follow, :unfollow]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :unprocessable_entity
    end
  end

  def index
    @users = User.all
    render json: @users
  end

  def follow
    @user = User.find(params[:id])
    # current_user.following << @user
    render json: current_user
    # render json: @user
  end
  
  def unfollow
    @user = User.find(params[:id])
    current_user.followed_users.find_by(followee_id: @user.id).destroy
    render json: @user
  end

  private

  def user_params
      params.require(:user).permit(:username, :password, :birthday, :email, :avatar)
    end
  end
  