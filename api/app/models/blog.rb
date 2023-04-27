class Blog < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  belongs_to :author, optional: true
  has_and_belongs_to_many :categories
  scope :with_categories, -> { includes(:categories) }
end
