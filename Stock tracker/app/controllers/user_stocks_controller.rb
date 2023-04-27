class UserStocksController < ApplicationController
  def index
    if (Stock.find_by(ticker: params[:ticker]).present?)
      stock = Stock.find_by(ticker: params[:ticker])
    else
      stock = Stock.create(ticker: params[:ticker], name: (params[:name].to_s + ' Company'), last_price: params[:last_price])
    end
    if (!current_user.stocks.include?(stock))
      current_user.stocks << stock
    else
      flash[:alert] = 'Stock already tracked'
    end
    redirect_to my_portfolio_path
  end


  def destroy
    stock = Stock.find_by(ticker: params[:ticker])
    if (current_user.stocks.include?(stock))
      current_user.stocks.delete(stock)
      flash[:alert] = 'Stock already deleted'
    end
    redirect_to my_portfolio_path
  end
end
