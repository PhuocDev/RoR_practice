class Stock < ApplicationRecord
  # include HTTParty
  has_many :user_stocks
  has_many :users, through: :user_stocks

  validates :name, presence: true


  def self.new_lookup(ticker_symbol)
    # response = get("/stocks/#{stock_name}/price")
    # if response.success?
    #   return response['price']
    # else
    #   return nil
    # end
    if (ticker_symbol == nil || ticker_symbol == '' || has_digits(ticker_symbol) || ticker_symbol.length != 3 || !(ticker_symbol == ticker_symbol.upcase) )
      return nil
    else
      if (Stock.find_by(ticker: ticker_symbol).present?)
        return Stock.find_by(ticker: ticker_symbol)
      else
        stock = Stock.create(ticker: ticker_symbol, name: ticker_symbol + ' Company', last_price: rand(101.2...504.9).round(3) )
        stock.save
        return stock
      end
    end
  end

  def self.has_digits(str)
    str.count("0-9") > 0
  end

  def view
    
  end
end
