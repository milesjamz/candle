class Api::V1::FollowsController < ApplicationController

  skip_before_action :authorized

    def create
        @follow = Follow.create(follow_params)
        if @follow.valid?
          render json: @follow, status: :created
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
