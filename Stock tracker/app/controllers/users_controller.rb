class UsersController < ApplicationController
  def my_portfolio
    @tracked_stocks = current_user.stocks
  end
  def my_friends
    @friends = current_user.friends
  end

  def search
    # render json: params[:friend]
    @friends = current_user.friends
    if User.where(email: params[:friend].to_s).present?
      searchingFriend = User.where(email: params[:friend].to_s)
        @friend = ((searchingFriend.first.present?)? (searchingFriend.first) : {})
        render 'users/my_friends'
      # redirect_to 'users/my_friends'
    else
      flash[:alert] = 'Email not found'
      redirect_to my_friends_path
    end
  end

  def destroy_friends
    if params[:friend_id].present?
      destroyUser = User.find_by(id: params[:friend_id])
      current_user.friends.destroy(destroyUser)
      redirect_to my_friends_path
    end
  end
  def add_friends
    if params[:friend_id].present?
      addUser = User.find_by(id: params[:friend_id])
      if current_user != addUser
        current_user.friends << addUser
      else
        flash[:alert] = 'You cannot follow yourself'
      end
      redirect_to my_friends_path
    end
  end
  def view_stocks
    user = User.find_by(id: params[:friend_id])
    @tracked_stocks = user.stocks
  end
end
