class RemoveAuthorToBlog < ActiveRecord::Migration[7.0]
  def change
    remove_column :blogs, :author
  end
end
