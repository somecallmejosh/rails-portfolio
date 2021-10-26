class Project < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged
  def self.get_previous_project(current_project)
    Project.where("projects.id < ? ", current_project.id).order('created_at asc').last
  end
  def self.get_next_project(current_project)
    Project.where("projects.id > ? ", current_project.id).order('created_at asc').first
  end
end
