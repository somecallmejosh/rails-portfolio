json.extract! project, :id, :title, :short_description, :long_description, :thumbnail_one, :thumbnail_two, :thumbnail_three, :image, :project_url, :role_in_project, :project_tech_stack, :created_at, :updated_at
json.url project_url(project, format: :json)
