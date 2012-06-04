Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '238700296236471', '861b4c380e40f34974678d32ad52e8f4',
           :scope => 'email,user_birthday,read_stream', :display => 'popup'
end