class MapController < ApplicationController
  skip_before_filter  :verify_authenticity_token
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
    @map = Map.order("RANDOM()").limit(5)
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
    @mapname = Map.find(params[:id]).name
tmp.each {|marker|
    mapid = Map.find(marker.map_id).id
    userid = User.find(Map.find(marker.map_id).user_id).id
    user = User.find(Map.find(marker.map_id).user_id).name
    kartename = Map.find(marker.map_id).name

    @marker[marker.name]=Hash["name",marker.name,
                                    "lat",marker.lat,
                                    "lng",marker.lng,
                                    "beschreibung",marker.beschreibung,
                                    "kategoriebild",marker.kategorie.bild,
                                    "markerbild",marker.kategorie.markerbild,
                                    "kategoriename",marker.kategorie.name,
                                    "user", user,
                                    "kname", kartename,
                                    "mapid", mapid,
                                    "userid", userid
                                  ]
    }
    session[:markers] = nil
  end

  def getmarker 
    @map = Map.new
    @map.user = User.find_by_id(session[:user_id])
    @map.name = params[:mapname]
    @markers = params[:markers]
    @markers.each do |key,value|     
      m = Marker.new
      m.name = value[0]
      m.kategorie = Kategorie.find_by_name(value[1])
      m.beschreibung = value[2]
      m.lat = value[3]
      m.lng = value[4]
      m.save
      @map.markers << m
    end
    puts @map.user
    @map.save
    if @map.new_record? 
      @map.destroy 
    end
    
    mappath =  "map/show/#{Map.find_by_user_id(session[:user_id]).id}"
    render :json => @map
  end
end
