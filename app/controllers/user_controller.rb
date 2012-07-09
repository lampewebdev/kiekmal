class UserController < ApplicationController
  def edit
  end

  def destroy
  end

  def index
  	@user = User.order("RANDOM()").limit(5)
  end

  def show
  	@user = User.find(params[:id])
  	@maps = Map.find_all_by_user_id(params[:id])
  end
end
