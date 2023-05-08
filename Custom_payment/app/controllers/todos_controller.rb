class TodosController < ApplicationController
  before_action :set_todo, only: %i[ show edit update destroy ]
  before_action :authenticate_user!

  # GET /todos or /todos.json
  def index
    # @todos = Todo.all
    @todos = Todo.paginate(page: params[:page], per_page: 5)
    if params[:search].present?
      @todos = @todos.where("name LIKE ?", "%#{params[:search]}%")
    end

    if params[:order] == "name_asc"
      @todos = @todos.order(name: :asc)
    elsif params[:order] == "name_desc"
      @todos = @todos.order(name: :desc)
    elsif params[:order] == "id_desc"
      @todos = @todos.order(id: :desc)
    elsif params[:order] == "date_desc"
      @todos = @todos.order(created_at: :desc)
    end
  end

  # GET /todos/1 or /todos/1.json
  def show
    authorize! :read, @todo
  end

  # GET /todos/new
  def new
    @todo = Todo.new
    @todo.user_id = current_user.id
  end

  # GET /todos/1/edit
  def edit
    authorize! :update, @todo
  end

  # POST /todos or /todos.json
  def create
    @todo = Todo.new(todo_params)
    @todo.user_id = current_user.id
    authorize! :create, @todo
    respond_to do |format|
      if @todo.save
        format.html { redirect_to todo_url(@todo), notice: "Todo was successfully created." }
        format.json { render :show, status: :created, location: @todo }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /todos/1 or /todos/1.json
  def update
    @todo.user_id = current_user.id
    authorize! :update,
      respond_to do |format|
        if @todo.update(todo_params)
          format.html { redirect_to todo_url(@todo), notice: "Todo was successfully updated." }
          format.json { render :show, status: :ok, location: @todo }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @todo.errors, status: :unprocessable_entity }
        end
      end
  end

  # DELETE /todos/1 or /todos/1.json
  def destroy

    authorize! :destroy, @todo
    @todo.destroy

    respond_to do |format|
      format.html { redirect_to todos_url, notice: "Todo was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.require(:todo).permit(:name, :completed)
    end
end
