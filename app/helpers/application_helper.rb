module ApplicationHelper
	include FacebookShare
	def cp(path)
		request.fullpath.include?(path)
	end
end
