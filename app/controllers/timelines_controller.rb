class TimelinesController < ApplicationController
  respond_to :json, :html
  before_action :set_timeline, only: [:show, :update]

  def index
    @timelines = Timeline.all
  end

  def show
    @timeline = Timeline.find(params[:id])
    @events = @timeline.events

    respond_with @timeline
  end

  def new
    @timeline = Timeline.new
    6.times do
      event = @timeline.events.build
    end
  end

  def create
    @lastfm = Lastfm.new(ENV['API_KEY'], ENV['SECRET_KEY'])
    @timeline = Timeline.new(title: timeline_params[:title], birthyear: timeline_params[:birthyear])
    params[:timeline][:events_attributes].each do |key, value|
      if value[:year].present?
        art = Artist.create(artist_name: value[:artists][:artist_name])
        art.description = @lastfm.artist.get_info(value[:artists][:artist_name])['bio']['content']
        art.save!
        @timeline.events.build(event_name: value[:event_name], year: value[:year], artist_id: art.id)
      end

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

  private

  def set_timeline
    @timeline = Timeline.find(params[:id])
  end

  def timeline_params
    params.require(:timeline).permit(:title, :birthyear, events_attributes: [:id, :event_name, :year, artists_attributes: [:id, :artist_name, :genre]
      ])
  end
end