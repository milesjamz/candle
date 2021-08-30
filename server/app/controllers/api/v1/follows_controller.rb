class Api::V1::FollowsController < ApplicationController

    def create
        @follow = Follow.create(follow_params)
        if @follow.valid?
          render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        else
          render json: { error: 'failed to create follow' }, status: :unprocessable_entity
        end
      end
    
      def index
        @follows = Follow.all
        render json: @follows
      end
    
      private
    
      def follow_params
          params.require(:follow).permit(:follower_id,:followed_user_id)
        end

end
