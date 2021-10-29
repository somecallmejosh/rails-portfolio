class AddImageFieldsToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :thumbnail_one_mobile, :string
    add_column :projects, :thumbnail_one_tablet, :string
    add_column :projects, :thumbnail_two_mobile, :string
    add_column :projects, :thumbnail_two_tablet, :string
    add_column :projects, :thumbnail_three_mobile, :string
    add_column :projects, :thumbnail_three_tablet, :string
    add_column :projects, :image_moble, :string
    add_column :projects, :image_tablet, :string
  end
end
