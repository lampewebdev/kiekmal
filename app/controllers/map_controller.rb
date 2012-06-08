class MapController < ApplicationController
  def create
  end

  def edit
  end

  def destroy
  end

  def index
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
      puts value.inspect
      puts "123123123123123123123"
            puts "12312312312123"
                  puts "12312312"
                        puts "123"
      m.name = value[:title]
      m.lat = value[:lat]
      m.lng = value[:lng]
      m.kategorie = Kategorie.find_by_id(1)
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
