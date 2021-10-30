class Project < ApplicationRecord
  # t.string "title"
  # t.text "short_description"
  # t.text "long_description"
  # t.string "thumbnail_one"
  # t.string "thumbnail_two"
  # t.string "thumbnail_three"
  # t.string "image"
  # t.string "project_url"
  # t.string "role_in_project"
  # t.string "project_tech_stack"
  # t.datetime "created_at", precision: 6, null: false
  # t.datetime "updated_at", precision: 6, null: false
  # t.string "slug"
  # t.index ["slug"], name: "index_projects_on_slug", unique: true
 
  extend FriendlyId
  friendly_id :title, use: :slugged


  validates :title, presence: true
  validates :long_description, presence: true
  validates :short_description, presence: true
  validates :thumbnail_one, presence: true
  validates :image, presence: true
  validates :project_url, presence: true
  validates :role_in_project, presence: true
  validates :project_tech_stack, presence: true
  has_rich_text :short_description
  has_rich_text :long_description


  def self.get_previous_project(current_project)
    Project.where("projects.id < ? ", current_project.id).order('created_at asc').last
  end
  def self.get_next_project(current_project)
    Project.where("projects.id > ? ", current_project.id).order('created_at asc').first
  end
end
