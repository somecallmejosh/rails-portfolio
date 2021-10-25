class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :short_description
      t.text :long_description
      t.string :thumbnail_one
      t.string :thumbnail_two
      t.string :thumbnail_three
      t.string :image
      t.string :project_url
      t.string :role_in_project
      t.string :project_tech_stack

      t.timestamps
    end
  end
end
