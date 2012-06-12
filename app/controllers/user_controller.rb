class UserController < ApplicationController
  def edit
  end

  def destroy
  end

  def index
  	@user = User.order("RANDOM()").limit(3)
  end

  def show
  end
end
