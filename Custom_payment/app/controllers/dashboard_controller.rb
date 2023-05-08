class DashboardController < ApplicationController
  before_action :require_admin

  def index
    # code
  end
  private

  def require_admin
    unless current_user && current_user.role == 'admin'
      flash[:error] = "You are not authorized to access this page."
      redirect_to root_path
    end
  end
end
