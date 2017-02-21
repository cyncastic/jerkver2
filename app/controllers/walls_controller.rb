class WallsController < ApplicationController
  before_action :set_wall, only: [:show, :edit, :update, :destroy]

  # GET /walls
  def index
    @walls = Wall.all
  end


  # GET /walls/new
  def new
    @wall = Wall.new
  end

  # GET /walls/1/edit
  def edit
  end

  # POST /walls
  def create
    @wall = Wall.new(wall_params)
    if @wall.save
      if params[:wall][:image]
        render :crop
      else
        redirect_to walls_url, notice: 'Wall successfully created.'
      end
    else
      render :new
    end
  end

  # PATCH/PUT /walls/1
  def update
    if @wall.update(wall_params)
      redirect_to walls_url, notice: 'Wall was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /walls/1
  def destroy
    @wall.destroy
    redirect_to walls_url, notice: 'Wall was successfully destroyed.'
  end

  def sort
    params[:wall].each_with_index do |id, index|
      Wall.where(id: id).update_all(position: index+1)
    end
    render nothing: true
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wall
      @wall = Wall.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def wall_params
      params.require(:wall).permit(:title, :year, :image, :location, :position, :crop_x, :crop_y, :crop_w, :crop_h)
    end
end
