class Author < ApplicationRecord
  validates :name, presence: true
  has_many :blogs, dependent: :destroy
end
