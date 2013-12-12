class TimelinesController < ApplicationController
  before_action :set_timeline, only: [:show]

  def index
  end

  def show
    @timeline = Timeline.find(params[:id])
  end

  def new
    @timeline = Timeline.new
  end

  def create
    @timeline = Timeline.new(timeline_params)
    respond_to do |format|
    if @timeline.save
      format.html { redirect_to @timeline, notice: 'timeline was successfully created.' }
      format.json { render action: 'show', status: :created, location: @timeline }
    else
      format.html { render action: 'new' }
      format.json { render json: @timeline.errors, status: :unprocessable_entity }
    end
  end
  end

  private

  def set_timeline
    @timeline = Timeline.find(params[:id])
  end

  def timeline_params
    params.require(:timeline).permit(:title, :birthyear)
  end
end