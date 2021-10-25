require "application_system_test_case"

class ProjectsTest < ApplicationSystemTestCase
  setup do
    @project = projects(:one)
  end

  test "visiting the index" do
    visit projects_url
    assert_selector "h1", text: "Projects"
  end

  test "creating a Project" do
    visit projects_url
    click_on "New Project"

    fill_in "Image", with: @project.image
    fill_in "Long description", with: @project.long_description
    fill_in "Project tech stack", with: @project.project_tech_stack
    fill_in "Project url", with: @project.project_url
    fill_in "Role in project", with: @project.role_in_project
    fill_in "Short description", with: @project.short_description
    fill_in "Thumbnail one", with: @project.thumbnail_one
    fill_in "Thumbnail three", with: @project.thumbnail_three
    fill_in "Thumbnail two", with: @project.thumbnail_two
    fill_in "Title", with: @project.title
    click_on "Create Project"

    assert_text "Project was successfully created"
    click_on "Back"
  end

  test "updating a Project" do
    visit projects_url
    click_on "Edit", match: :first

    fill_in "Image", with: @project.image
    fill_in "Long description", with: @project.long_description
    fill_in "Project tech stack", with: @project.project_tech_stack
    fill_in "Project url", with: @project.project_url
    fill_in "Role in project", with: @project.role_in_project
    fill_in "Short description", with: @project.short_description
    fill_in "Thumbnail one", with: @project.thumbnail_one
    fill_in "Thumbnail three", with: @project.thumbnail_three
    fill_in "Thumbnail two", with: @project.thumbnail_two
    fill_in "Title", with: @project.title
    click_on "Update Project"

    assert_text "Project was successfully updated"
    click_on "Back"
  end

  test "destroying a Project" do
    visit projects_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Project was successfully destroyed"
  end
end
