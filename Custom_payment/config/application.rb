require_relative "boot"

require "rails/all"


require "cloudinary"
require "cloudinary/uploader"
require "cloudinary/utils"
require "cloudinary/api"
# Initialize Cloudinary
Cloudinary.config do |config|
  config.cloud_name = "df9darxqy"
  config.api_key = "551716779532162"
  config.api_secret = "86wkw8W7aRHTS4m840-eB5a7Dmo"
  config.secure = true
  config.cdn_subdomain = true
end


# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module CustomPayment
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    config.action_view.sanitized_allowed_tags = ['strong', 'em', 'a', 'p', 'img', 'ul', 'ol', 'li', 'br']
    config.action_view.sanitized_allowed_attributes = ['href', 'title', 'src', 'alt', 'class']

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
