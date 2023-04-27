class CreateJoinTableBlogsCategories < ActiveRecord::Migration[7.0]
  def change
    create_join_table :blogs, :categories do |t|
      # t.index [:blog_id, :category_id]
      # t.index [:category_id, :blog_id]
      # t.belongs_to :actor
      # t.belongs_to :movie
    end

    add_index :blogs_categories, [:blog_id, :category_id], unique: true
  end
end
