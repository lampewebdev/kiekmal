class KategorieController < ApplicationController
  def index
  	@kat = Kategorie.find(:all)
    tmp = Marker.find(:all)
     @marker = Hash.new;
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
  end

  def essen
  	@kat = Kategorie.find(:all)

  	tmp = Marker.find_all_by_kategorie_id("1");
    @marker = Hash.new;
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
  end

  def trinken 
  	@kat = Kategorie.find(:all)

  	tmp = Marker.find_all_by_kategorie_id("2");
    @marker = Hash.new;
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
  end
    def kultur 
  	@kat = Kategorie.find(:all)

  	tmp = Marker.find_all_by_kategorie_id("3");
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
  def shoppen 
  	@kat = Kategorie.find(:all)

  	tmp = Marker.find_all_by_kategorie_id("4");
    @marker = Hash.new;
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
  end
  def sport 
  	@kat = Kategorie.find(:all)

  	tmp = Marker.find_all_by_kategorie_id("5");
    @marker = Hash.new;
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
  end
  def sonstiges 
  	@kat = Kategorie.find(:all)

  	tmp = Marker.find_all_by_kategorie_id("6");
    @marker = Hash.new;
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
  end  
end
