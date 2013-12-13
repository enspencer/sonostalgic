class TimelinesController < ApplicationController
  before_action :set_timeline, only: [:show, :update]

  def index
  end

  def show
    @timeline = Timeline.find(params[:id])
    @events = @timeline.events
    @artists = []
    @timeline.events.each do |event|
      @artists << event.artists
    end
    
  end

  def new
    @timeline = Timeline.new
  end

  def create
    @timeline = Timeline.new(timeline_params)
    if(!params.has_key?(:title))
      @timeline.title = @timeline.id
    end
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

  def update
      # @timeline.events << params[:event_name]
      # @timeline.events.artists << params[:artist_name]
  respond_to do |format|
    if @timeline.update(timeline_params)
      format.html { redirect_to @timeline, notice: 'Timeline was successfully updated.' }
      format.json { head :no_content }
    else
      format.html { render action: 'edit' }
      format.json { render json: @timeline.errors, status: :unprocessable_entity }
    end
  end
end

  private

  def set_timeline
    @timeline = Timeline.find(params[:id])
  end

  def timeline_params
    params.require(:timeline).permit(:title, :birthyear, events_attributes: [:id, :event_name, :year], artists_attributes: [:id, :name])
  end
end