class ArticlesController < ApplicationController

  before_action :require_user, except: [:show, :index]
  before_action :require_same_user, only: [:edit, :update, :destroy]

  def show
    @article = Article.find(params[:id])
  end
  def index
    @articles = Article.paginate(page: params[:page], per_page: 5)
  end
  def new
    @article = Article.new
  end
  def edit
    @article = Article.find(params[:id])
  end
  def create
    @article = Article.new(params.require(:article).permit(:title, :description))
    @article.user_id = current_user.id
    # @article.save
    # redirect_to articles_path(@article)
    if @article.save
      flash[:notice] = "Article was created successfully."
      redirect_to @article
    else
      redirect_to '/articles/new'
    end
  end
  def update
    @article = Article.find(params[:id])
    if @article.update(params.require(:article).permit(:title, :description, :user_id))
      flash[:notice] = "Article was updated successfully."
      redirect_to '/articles'
    else
      redirect_to 'articles/'+ params[:id]  +'/edit'
    end
  end
  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to '/articles'
  end

  def require_same_user
    # if current_user != @article.user || !current_user.admin?
    #   flash[:alert] = "You can only edit or delete your own article"
    #   redirect_to @article
    # end
  end

end
