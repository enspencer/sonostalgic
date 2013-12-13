class TimelinesController < ApplicationController
  before_action :set_timeline, only: [:show, :update]

  def index
    @timelines = Timeline.all
  end

  def show
    @timeline = Timeline.find(params[:id])
    @events = @timeline.events

  end

  def new
    @timeline = Timeline.new
  end

  def create
    binding.pry
    @timeline = Timeline.new(title: timeline_params[:title], birthyear: timeline_params[:birthyear])
    @timeline.events.build(timeline_params[:events])
    @timeline.artists.build(timeline_params[:artists])
    
    # @artists = []
    # @timeline.events.each do |event|
    #   @artists << event.artists
    # end

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
    params.require(:timeline).permit(:title, :birthyear, events: [:event_name, :year], artists: [:artist_name])
  end

  # def event_params
  #   params.require(timeline[:events]).permit(:event_name, :year)
  # end

 # , events_attributes: [:id, :event_name, :year], artists_attributes: [:id, :name]
end