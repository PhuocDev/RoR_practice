class BlogsController < ApplicationController
  before_action :set_blog, only: %i[ show update destroy ]

  # GET /blogs/:id/categories
  def categories
    blog = Blog.find(params[:blog_id])
    categories = blog.categories
    render json: categories
  end
  def add_categories
    blog = Blog.find(params[:blog_id])
    category = Category.find(params[:category_id])
    blog.categories << category
    render json: blog.categories
  end
  def get_all_categories
    @blogs = Blog.includes(:categories)
    render json: @blogs.as_json(include: :categories)
  end
  # GET /blogs
  def index
    @blogs = Blog.all

    render json: @blogs
  end

  # GET /blogs/1
  def show
    render json: @blog
  end

  # POST /blogs
  def create
    @blog = Blog.new(blog_params)
    @blog.author_id = Author.find(params[:author_id]).id
    if @blog.save
      render json: @blog, status: :created, location: @blog
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blogs/1
  def update
    @blog.author_id = Author.find(params[:author_id]).id
    if @blog.update(blog_params)
      render json: @blog
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blogs/1
  def destroy
    @blog.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blog_params
      params.require(:blog).permit(:title, :description, :author)
    end
end
