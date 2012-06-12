class MapController < ApplicationController
  def create
    kat = Kategorie.all
    @kname = Array.new
    kat.each { |e| @kname << e.name }
  end

  def edit
  end

  def destroy
  end

  def index
    tmp = Marker.order("RANDOM()").limit(20)
    @marker = Hash.new;
    tmp.each {|marker|
    @marker[marker.name]=Hash["name",marker.name,
                                    "lat",marker.lat,
                                    "lng",marker.lng,
                                    "beschreibung",marker.beschreibung,
                                    "kategoriebild",marker.kategorie.bild,
                                    "markerbild",marker.kategorie.markerbild,
                                    "kategoriename",marker.kategorie.name]
    }
  end

  def show
    tmp = Map.find(params[:id]).markers
    @marker = Hash.new;
    tmp.each {|marker|
      @marker[marker.name]=Hash["name",marker.name,
                                    "lat",marker.lat,
                                    "lng",marker.lng,
                                    "beschreibung",marker.beschreibung,
                                    "kategoriebild",marker.kategorie.bild,
                                    "markerbild",marker.kategorie.markerbild,
                                    "kategoriename",marker.kategorie.name]
    }
    session[:markers] = nil
  end

  def getmarker
    @map = Map.new
    @map.user = User.find_by_id(session[:user_id])
    @map.kategorie = Kategorie.find_by_id(1)
    @map.name = "test"
    @markers = params[:markers]
    @markers.each do |key,value|     
      m = Marker.new
      m.name = value[:title]
      m.lat = value[:lat]
      m.lng = value[:lng]
      m.kategorie = Kategorie.find_by_name(value[:kategorie])
      m.save
      @map.markers << m
    end
    @map.save
    
    if @map.new_record? 
      @map.destroy 
    end
    mappath =  "map/show/#{Map.find_by_user_id(session[:user_id]).id}"
    render :json => @map
  end
end
