class StocksController < ApplicationController
  def search
    if params[:stock].present?
      @stock = Stock.new_lookup(params[:stock])
      @tracked_stocks = current_user.stocks
      if @stock
        render 'users/my_portfolio'
      else
        flash[:alert] = 'Please enter a valid sympol to search'
        redirect_to my_portfolio_path
      end
    else
      flash[:alert] = 'Please enter a sympol to search'
      redirect_to my_portfolio_path
    end
  end
end
