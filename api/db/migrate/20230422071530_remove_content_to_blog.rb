class RemoveContentToBlog < ActiveRecord::Migration[7.0]
  def change
    remove_column :blogs, :content
  end
end
